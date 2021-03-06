# Lightweight OPT server that works on both Python 2 and 3

# NOTE that this is meant only for testing and not deployment, since
# there is no sandboxing

# to invoke, run 'python bottle_server.py'
# and visit http://localhost:8080/index.html
#
# external dependencies: bottle
#
# easy_install pip
# pip install bottle

from bottle import route, get, error, request, run, redirect, template, static_file, BaseRequest
try:
    import StringIO # NB: don't use cStringIO since it doesn't support unicode!!!
except:
    import io as StringIO # py3
import json
import pg_logger
import tupy.Interpreter
import os
import sys

BaseRequest.MEMFILE_MAX = 1024 * 1024
sys.setrecursionlimit(2000) # !!

@route('/')
def home():
    response = static_file("index.html", root='.')
    response.set_header("Cache-Control", "public, max-age=1")
    return response

@route('/web_exec_<name:re:.+>.py')
@route('/LIVE_exec_<name:re:.+>.py')
@route('/viz_interaction.py')
@route('/syntax_err_survey.py')
@route('/runtime_err_survey.py')
@route('/eureka_survey.py')
def dummy_ok(name=None):
    return 'OK'

@route('/<filepath:path>')
def index(filepath):
    response = static_file(filepath, root='.')
    response.set_header("Cache-Control", "public, max-age=1")
    return response

@route('/web_exec_tupy.py', method='POST')
def get_tupy_exec():
    return tupy.Interpreter.Interpreter.interpret(request.json["user_script"], trace=True, quiet=True, stdin=request.json["user_input"])

# Note that this will run either Python 2 or 3, depending on which
# version of Python you used to start the server, REGARDLESS of which
# route was taken:
# @route('/web_exec_py2.py')
# @route('/web_exec_py3.py')
# @route('/LIVE_exec_py2.py')
# @route('/LIVE_exec_py3.py')
# def get_py_exec():
#   out_s = StringIO.StringIO()

#   def json_finalizer(input_code, output_trace):
#     ret = dict(code=input_code, trace=output_trace)
#     json_output = json.dumps(ret, indent=None)
#     out_s.write(json_output)

#   options = json.loads(request.query.options_json)

#   pg_logger.exec_script_str_local(request.query.user_script,
#                                   request.query.raw_input_json,
#                                   options['cumulative_mode'],
#                                   options['heap_primitives'],
#                                   json_finalizer)

#   return out_s.getvalue()

@error(404)
def error_route(code):
    redirect('/index.html', 303)

if __name__ == "__main__":
    run(host='0.0.0.0', port=os.getenv('PORT', 8003), reloader=True)
