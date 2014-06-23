/*

Online Python Tutor
https://github.com/pgbovine/OnlinePythonTutor/

Copyright (C) 2010-2014 Philip J. Guo (philip@pgbovine.net)

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/


// Pre-reqs:
// - pytutor.js
// - jquery.ba-bbq.min.js
// - jquery.ba-dotimeout.min.js // for event debouncing: http://benalman.com/code/projects/jquery-dotimeout/examples/debouncing/
// - opt-frontend-common.js
// - js/togetherjs/togetherjs-min.js
// should all be imported BEFORE this file


function executeCode(forceStartingInstr, forceRawInputLst) {
  if (forceRawInputLst !== undefined) {
    rawInputLst = forceRawInputLst; // UGLY global across modules, FIXME
  }

  var backend_script = null;
  if ($('#pythonVersionSelector').val() == '2') {
      backend_script = python2_backend_script;
  }
  else if ($('#pythonVersionSelector').val() == '3') {
      backend_script = python3_backend_script;
  }

  var backendOptionsObj = {cumulative_mode: ($('#cumulativeModeSelector').val() == 'true'),
                           heap_primitives: ($('#heapPrimitivesSelector').val() == 'true'),
                           origin: 'opt-office-mix.js'};

  var startingInstruction = forceStartingInstr ? forceStartingInstr : 0;

  var frontendOptionsObj = {startingInstruction: startingInstruction,
                            embeddedMode: true,

                            // tricky: selector 'true' and 'false' values are strings!
                            disableHeapNesting: ($('#heapPrimitivesSelector').val() == 'true'),
                            textualMemoryLabels: ($('#textualMemoryLabelsSelector').val() == 'true'),
                            executeCodeWithRawInputFunc: executeCodeWithRawInput,

                            // undocumented experimental modes:
                            pyCrazyMode: false, holisticMode: false
                           }

  executePythonCode(pyInputCodeMirror.getValue(),
                    backend_script, backendOptionsObj,
                    frontendOptionsObj,
                    'pyOutputPane',
                    optFinishSuccessfulExecution, handleUncaughtExceptionFunc);
}


function optFinishSuccessfulExecution() {
  enterDisplayMode(); // do this first!
}


$(document).ready(function() {
  // To run in https://labsjs.blob.core.windows.net/sdk/LabsJS-1.0.4/labshost.html
  // append "?PostMessageLabHost" to the query string.
  Labs.DefaultHostBuilder = function() {
    if (window.location.href.indexOf("PostMessageLabHost") !== -1) {
      return new Labs.PostMessageLabHost("test", parent, "*");
    } else {
      return new Labs.OfficeJSLabHost();
    }
  };


  // be friendly to the browser's forward and back buttons
  // thanks to http://benalman.com/projects/jquery-bbq-plugin/
  $(window).bind("hashchange", function(e) {
    // if you've got some preseeded code, then parse the entire query
    // string from scratch just like a page reload
    if ($.bbq.getState('code')) {
      parseQueryString();
    }
    // otherwise just do an incremental update
    else {
      var newMode = $.bbq.getState('mode');
      console.log('hashchange:', newMode, window.location.hash);
      updateAppDisplay(newMode);
    }
  });


  pyInputCodeMirror = CodeMirror(document.getElementById('codeInputPane'), {
    mode: 'python',
    lineNumbers: true,
    tabSize: 4,
    indentUnit: 4,
    // convert tab into four spaces:
    extraKeys: {Tab: function(cm) {cm.replaceSelection("    ", "end");}}
  });

  pyInputCodeMirror.setSize(null, '420px');

  $(window).resize(redrawConnectors);

  // register a generic AJAX error handler
  $(document).ajaxError(function(evt, jqxhr, settings, exception) {
    setFronendError(["Server error! Your code might be too long to properly visualize (e.g., over 100 lines),",
                     "so try again with a smaller piece of code.",
                     "Or report a bug to philip@pgbovine.net by clicking on the 'Generate URL'",
                     "button at the bottom and including a URL in your email."]);

    doneExecutingCode();
  });

  clearFrontendError();


  Labs.connect(function (err, connectionResponse) {
    var initialMode = Labs.Core.LabMode[connectionResponse.mode];
    $("#testDiv").append('<p>' + initialMode + '</p>');

    // initialize these callbacks only after Labs.connect is successful
    Labs.on(Labs.Core.EventTypes.ModeChanged, function(data) {
      $("#testDiv").append('<p>' + data.mode + '</p>');
    });

    Labs.on(Labs.Core.EventTypes.Activate, function() {
      $("#testDiv").append('<p>Activate</p>');
    });

    Labs.on(Labs.Core.EventTypes.Deactivate, function() {
      $("#testDiv").append('<p>Deactivate</p>');
    });
  });

  //$("#executeBtn").click(executeCodeFromScratch);
});