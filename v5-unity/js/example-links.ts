export var exampleHeaderHtml = `<p style="margin-top: 25px; font-weight: bold; font-size: 13pt;">Referência rápida de TuPy:</p>

<p>Utilize os links a seguir para se familiarizar com a sintaxe de TuPy:</b>

<ul class="tupyLinkList">
<li><a class="tupyReference" id="tupyIntroduction" href="#">introdução</a></li>
<li><a class="tupyReference" id="tupyDatatypes" href="#">tipos&nbsp;de&nbsp;dados</a></li>
<li><a class="tupyReference" id="tupyIO" href="#">entrada/saída</a></li>
<li><a class="tupyReference" id="tupyOperators" href="#">operadores</a></li>
<li><a class="tupyReference" id="tupyArrays" href="#">vetores&nbsp;e&nbsp;matrizes</a></li>
<li><a class="tupyReference" id="tupyControlFlow" href="#">estruturas&nbsp;de&nbsp;controle</a></li>
<li><a class="tupyReference" id="tupyFunctions" href="#">funções</a></li>
<li><a class="tupyReference" id="tupyClasses" href="#">classes</a></li>
<li><a class="tupyReference" id="tupyExecutionTrace" href="#">manipulação&nbsp;da&nbsp;visualização</a></li>
<li><a class="tupyReference" id="tupyStdlib" href="#">funções&nbsp;internas</a></li>
<li><a class="tupyReference" id="tupyMaths" href="#">funções&nbsp;matemáticas</a></li>
<li><a class="tupyReference" id="tupyGraphviz" href="#">abstrações&nbsp;personalizadas</a></li>
<li><a class="tupyReference" id="tupyInterface" href="#">interface&nbsp;do&nbsp;usuário</a></li>
<li><a class="tupyReference" id="tupyGlossary" href="#">glossário</a></li>
</ul>

<div id="cheatSheet"></div>`

export var TUPY_CHEATSHEET = {
  tupyIntroduction: "introduction.tupy",
  tupyDatatypes: "datatypes.tupy",
  tupyIO: "io.tupy",
  tupyOperators: "operators.tupy",
  tupyArrays: "arrays.tupy",
  tupyControlFlow: "controlflow.tupy",
  tupyFunctions: "functions.tupy",
  tupyClasses: "classes.tupy",
  tupyExecutionTrace: "executiontrace.tupy",
  tupyStdlib: "stdlib.tupy",
  tupyMaths: "maths.tupy",
  tupyGraphviz: "graphviz.tupy",
  tupyInterface: "interface.tupy",
  tupyGlossary: "glossary.tupy"
}

// extraneous:
// <a href="https://www.edx.org/course/nature-code-biology-javascript-epflx-nic1-0x">Comp. Bio w/ JavaScript</a> | <br/>
// <a href="https://www.edx.org/course/intermediate-c-microsoft-dev210-2x">Intermediate C++</a> |
//<a href="https://www.coursera.org/specializations/data-science-python">Data Science w/ Python series</a>

export var pythonExamplesHtml = `<p style="margin-top: 25px; font-weight: bold;">Python Examples</p>

<p style="margin-top: 10px;">Basic:

<a class="exampleLink" id="aliasExampleLink" href="#">hello</a> |
<a class="exampleLink" id="happyExampleLink" href="#">happy</a> |
<a class="exampleLink" id="tutorialExampleLink" href="#">intro</a> |
<a class="exampleLink" id="filterExampleLink" href="#">filter</a> |
<a class="exampleLink" id="strtokExampleLink" href="#">tokenize</a> |
<a class="exampleLink" id="insSortExampleLink" href="#">insertion sort</a> |
<a class="exampleLink" id="forElseLink" href="#">for-else</a> |
<a class="exampleLink" id="rawInputExampleLink" href="#">user input</a>
</p>

<p style="margin-top: 15px;">Math:
<a class="exampleLink" id="factExampleLink" href="#">factorial</a> |
<a class="exampleLink" id="fibonacciExampleLink" href="#">fibonacci</a> |
<a class="exampleLink" id="memoFibExampleLink" href="#">memoized fibonacci</a> |
<a class="exampleLink" id="newtonExampleLink" href="#">square root</a> |
<a class="exampleLink" id="pwGcdLink" href="#">gcd</a> |
<a class="exampleLink" id="towersOfHanoiLink" href="#">towers of hanoi</a>
</p>


<p style="margin-top: 15px;">Objects:

<a class="exampleLink" id="oop1ExampleLink" href="#">OOP 1</a> |
<a class="exampleLink" id="oop2ExampleLink" href="#">OOP 2</a> |
<a class="exampleLink" id="oopSmallExampleLink" href="#">OOP 3</a> |
<a class="exampleLink" id="inheritanceExampleLink" href="#">inheritance</a>

</p>

<p style="margin-top: 15px;">Linked Lists:
<a class="exampleLink" id="ll1Link" href="#">LL 1</a> |
<a class="exampleLink" id="ll2Link" href="#">LL 2</a> |
<a class="exampleLink" id="sumListLink" href="#">LL sum</a>
</p>

<p style="margin-top: 15px;">Pointer Aliasing:<br/>
<a class="exampleLink" id="aliasing1Link" href="#">aliasing1</a> |
<a class="exampleLink" id="aliasing2Link" href="#">aliasing2</a> |
<a class="exampleLink" id="aliasing3Link" href="#">aliasing3</a> |
<a class="exampleLink" id="aliasing4Link" href="#">aliasing4</a> |
<a class="exampleLink" id="aliasing5Link" href="#">aliasing5</a> |
<a class="exampleLink" id="aliasing6Link" href="#">aliasing6</a> |
<a class="exampleLink" id="aliasing7Link" href="#">aliasing7</a> |
<a class="exampleLink" id="aliasing8Link" href="#">aliasing8</a> |
<a class="exampleLink" id="pwSumListLink" href="#">sumList</a>
</p>

<p style="margin-top: 15px;">Higher-Order Functions:<br/>

<a class="exampleLink" id="closure1Link" href="#">closure1</a> |
<a class="exampleLink" id="closure2Link" href="#">closure2</a> |
<a class="exampleLink" id="closure3Link" href="#">closure3</a> |
<a class="exampleLink" id="closure4Link" href="#">closure4</a> |
<a class="exampleLink" id="closure5Link" href="#">closure5</a> |
<a class="exampleLink" id="mapExampleLink" href="#">list map</a> |
<a class="exampleLink" id="sumExampleLink" href="#">summation</a> |
<a class="exampleLink" id="lambdaParamLink" href="#">lambda param</a>

</p>

<p style="margin-top: 15px;">Advanced:<br/>
<a class="exampleLink" id="listCompLink" href="#">list comp</a> |
<a class="exampleLink" id="compsLink" href="#">list/set/dict comp</a> |
<a class="exampleLink" id="decoratorsLink" href="#">decorator</a> |
<a class="exampleLink" id="genPrimesLink" href="#">generator</a> |
<a class="exampleLink" id="genExprLink" href="#">genexpr</a> |
<a class="exampleLink" id="varargsLink" href="#">varargs</a> |
<a class="exampleLink" id="pwTryFinallyLink" href="#">exception</a> |
<a class="exampleLink" id="metaclassLink" href="#">metaclass</a>
</p>

<p style="margin-top: 15px;">Python 3 only: <a class="exampleLink" id="tortureLink" href="#">student torture</a> |
<a class="exampleLink" id="nonlocalLink" href="#">nonlocal</a>
</p>`;

export var PY2_EXAMPLES = {
  tutorialExampleLink: "py_tutorial.txt",
  strtokExampleLink: "strtok.txt",
  listCompLink: "list-comp.txt",
  compsLink: "comprehensions.txt",
  fibonacciExampleLink: "fib.txt",
  memoFibExampleLink: "memo_fib.txt",
  factExampleLink: "fact.txt",
  filterExampleLink: "filter.txt",
  insSortExampleLink: "ins_sort.txt",
  aliasExampleLink: "aliasing.txt",
  happyExampleLink: "happy.txt",
  newtonExampleLink: "sqrt.txt",
  oopSmallExampleLink: "oop_small.txt",
  mapExampleLink: "map.txt",
  rawInputExampleLink: "raw_input.txt",
  oop1ExampleLink: "oop_1.txt",
  oop2ExampleLink: "oop_2.txt",
  inheritanceExampleLink: "oop_inherit.txt",
  sumExampleLink: "sum.txt",
  pwGcdLink: "wentworth_gcd.txt",
  pwSumListLink: "wentworth_sumList.txt",
  towersOfHanoiLink: "towers_of_hanoi.txt",
  pwTryFinallyLink: "wentworth_try_finally.txt",
  sumCubesLink: "sum-cubes.txt",
  decoratorsLink: "decorators.txt",
  genPrimesLink: "gen_primes.txt",
  genExprLink: "genexpr.txt",
  closure1Link: "closures/closure1.txt",
  closure2Link: "closures/closure2.txt",
  closure3Link: "closures/closure3.txt",
  closure4Link: "closures/closure4.txt",
  closure5Link: "closures/closure5.txt",
  lambdaParamLink: "closures/lambda-param.txt",
  aliasing1Link: "aliasing/aliasing1.txt",
  aliasing2Link: "aliasing/aliasing2.txt",
  aliasing3Link: "aliasing/aliasing3.txt",
  aliasing4Link: "aliasing/aliasing4.txt",
  aliasing5Link: "aliasing/aliasing5.txt",
  aliasing6Link: "aliasing/aliasing6.txt",
  aliasing7Link: "aliasing/aliasing7.txt",
  aliasing8Link: "aliasing/aliasing8.txt",
  ll1Link: "linked-lists/ll1.txt",
  ll2Link: "linked-lists/ll2.txt",
  sumListLink: "sum-list.txt",
  varargsLink: "varargs.txt",
  forElseLink: "for-else.txt",
  metaclassLink: "metaclass.txt",
};

export var PY3_EXAMPLES = {
  tortureLink: "closures/student-torture.txt",
  nonlocalLink: "nonlocal.txt",
};


export var javaExamplesHtml = `<p style="margin-top: 25px; font-weight: bold;">Java Examples</p>

<p>
Basic:
<a class="exampleLink" id="javaVarLink" href="#">Variables</a> |
<a class="exampleLink" id="javaCFLink" href="#">ControlFlow</a> |
<a class="exampleLink" id="javaSqrtLink" href="#">Sqrt</a> |
<a class="exampleLink" id="javaExecLimitLink" href="#">ExecLimit</a> |
<a class="exampleLink" id="javaStringsLink" href="#">Strings</a>
</p>

<p>
Methods:
<a class="exampleLink" id="javaPassByValLink" href="#">PassByValue</a> |
<a class="exampleLink" id="javaRecurLink" href="#">Recursion</a> |
<a class="exampleLink" id="javaSOLink" href="#">StackOverflow</a>
</p>

<p>
OOP:
<a class="exampleLink" id="javaRolexLink" href="#">Rolex</a> |
<a class="exampleLink" id="javaPersonLink" href="#">Person</a> |
<a class="exampleLink" id="javaComplexLink" href="#">Complex</a> |
<a class="exampleLink" id="javaCastingLink" href="#">Casting</a>
</p>

<p>
Data structures:
<a class="exampleLink" id="javaLLLink" href="#">LinkedList</a> |
<a class="exampleLink" id="javaStackQueueLink" href="#">StackQueue</a> |
<a class="exampleLink" id="javaPostfixLink" href="#">Postfix</a> |
<a class="exampleLink" id="javaSTLink" href="#">SymbolTable</a>
</p>

<p>
Java features:
<a class="exampleLink" id="javaToStringLink" href="#">ToString</a> |
<a class="exampleLink" id="javaReflectLink" href="#">Reflect</a> |
<a class="exampleLink" id="javaExceptionLink" href="#">Exception</a> |
<a class="exampleLink" id="javaExceptionFlowLink" href="#">ExceptionFlow</a> |
<a class="exampleLink" id="javaTwoClassesLink" href="#">TwoClasses</a>
</p>

<p>
Misc:
<a class="exampleLink" id="javaForestLink" href="#">Forest</a> |
<a class="exampleLink" id="javaKnapsackLink" href="#">Knapsack</a> |
<a class="exampleLink" id="javaStaticInitLink" href="#">StaticInitializer</a> |
<a class="exampleLink" id="javaSyntheticLink" href="#">Synthetic</a>
</p>

<p style="margin-top: 5px;">(All Java examples created by <a href="https://github.com/daveagp">David Pritchard</a>)</p>`;

export var JAVA_EXAMPLES = {
  javaVarLink: 'Variables.java',
  javaCFLink: 'ControlFlow.java',
  javaSqrtLink: 'Sqrt.java',
  javaExecLimitLink: 'ExecLimit.java',
  javaStringsLink: 'Strings.java',

  javaPassByValLink: 'PassByValue.java',
  javaRecurLink: 'Recursion.java',
  javaSOLink: 'StackOverflow.java',

  javaRolexLink: 'Rolex.java',
  javaPersonLink: 'Person.java',
  javaComplexLink: 'Complex.java',
  javaCastingLink: 'Casting.java',

  javaLLLink: 'LinkedList.java',
  javaStackQueueLink: 'StackQueue.java',
  javaPostfixLink: 'Postfix.java',
  javaSTLink: 'SymbolTable.java',

  javaToStringLink: 'ToString.java',
  javaReflectLink: 'Reflect.java',
  javaExceptionLink: 'Exception.java',
  javaExceptionFlowLink: 'ExceptionFlow.java',
  javaTwoClassesLink: 'TwoClasses.java',

  javaForestLink: 'Forest.java',
  javaKnapsackLink: 'Knapsack.java',
  javaStaticInitLink: 'StaticInitializer.java',
  javaSyntheticLink: 'Synthetic.java',
};


export var jsExamplesHtml = `<p style="margin-top: 25px; font-weight: bold;">JavaScript Examples</p>

<p style="margin-top: 5px;">
  <a class="exampleLink" id="jsFactExLink" href="#">factorial</a> |
  <a class="exampleLink" id="jsDatatypesExLink" href="#">data types</a> |
  <a class="exampleLink" id="jsExceptionExLink" href="#">exception</a> |
  <a class="exampleLink" id="jsClosureExLink" href="#">closure</a> |
  <a class="exampleLink" id="jsShadowingExLink" href="#">shadowing</a> |
  <a class="exampleLink" id="jsConstructorExLink" href="#">constructor</a> |
  <a class="exampleLink" id="jsInhExLink" href="#">inheritance</a>
</p>`;

export var JS_EXAMPLES = {
  jsFactExLink: 'fact.js',
  jsDatatypesExLink: 'data-types.js',
  jsExceptionExLink: 'caught-exception.js',
  jsClosureExLink: 'closure1.js',
  jsShadowingExLink: 'var-shadowing2.js',
  jsConstructorExLink: 'constructor.js',
  jsInhExLink: 'inheritance.js',
};


export var tsExamplesHtml = `<p style="margin-top: 25px; font-weight: bold;">TypeScript Examples</p>

<p style="margin-top: 5px;">
  <a class="exampleLink" id="tsHelloExLink" href="#">hello</a> |
  <a class="exampleLink" id="tsGreeterExLink" href="#">classes</a> |
  <a class="exampleLink" id="tsInheritanceExLink" href="#">inheritance</a> |
  <a class="exampleLink" id="tsGreeterGenericsExLink" href="#">generics</a>
</p>`;

export var TS_EXAMPLES = {
  tsHelloExLink: 'hello.ts',
  tsGreeterExLink: 'greeter.ts',
  tsGreeterGenericsExLink: 'greeter-generics.ts',
  tsInheritanceExLink: 'inheritance.ts',
};


export var rubyExamplesHtml = `<p style="margin-top: 25px; font-weight: bold;">Ruby Examples</p>

<p style="margin-top: 5px;">
  <a class="exampleLink" id="rubyContainersLink" href="#">Containers</a> |
  <a class="exampleLink" id="rubyGlobalsLink" href="#">Globals</a> |
  <a class="exampleLink" id="rubyConstantsLink" href="#">Constants</a> |
  <a class="exampleLink" id="rubyBlocksLink" href="#">Blocks</a> |
  <a class="exampleLink" id="rubyBlocksScopingLink" href="#">Block scoping</a> |
  <a class="exampleLink" id="rubyBlocksScoping3Link" href="#">More block scoping</a>
  <p/>
  <a class="exampleLink" id="rubyProcLink" href="#">Proc & Lambda</a> |
  <a class="exampleLink" id="rubyProcScopingLink" href="#">Proc scoping</a> |
  <a class="exampleLink" id="rubyProcReturnLink" href="#">Proc return</a> |
  <a class="exampleLink" id="rubyLambdaScopingLink" href="#">Lambda scoping</a> |
  <a class="exampleLink" id="rubyInheritanceLink" href="#">Inheritance</a> |
  <a class="exampleLink" id="rubySymbolsLink" href="#">Symbols</a>
  <p/>
  <a class="exampleLink" id="rubyPrivateProtectedLink" href="#">Protected & private</a> |
  <a class="exampleLink" id="rubyInstClassVarsComplexLink" href="#">Class & instance vars</a> |
  <a class="exampleLink" id="rubyToplevelLink" href="#">Toplevel defs</a> |
  <a class="exampleLink" id="rubyMegagreeterLink" href="#">Megagreeter</a>
</p>`;

export var RUBY_EXAMPLES = {
  rubyBlocksLink: 'blocks-basic.rb',
  rubyBlocksScopingLink: 'blocks-scoping-2.rb',
  rubyInheritanceLink: 'class-inheritance.rb',
  rubyConstantsLink: 'constants-4.rb',
  rubyContainersLink: 'container-data-types.rb',
  rubyGlobalsLink: 'globals.rb',
  rubyLambdaScopingLink: 'lambda-scoping-2.rb',
  rubyMegagreeterLink: 'megagreeter.rb',
  rubyProcLink: 'proc-basic.rb',
  rubyProcScopingLink: 'proc-scoping.rb',
  rubySymbolsLink: 'symbols.rb',
  rubyPrivateProtectedLink: 'class-private-protected.rb',
  rubyInstClassVarsComplexLink: 'inst-class-vars-complex.rb',
  rubyToplevelLink: 'toplevel-inst-class-vars.rb',
  rubyBlocksScoping3Link: 'blocks-scoping-3.rb',
  rubyProcReturnLink: 'proc-return.rb',
};

export var tupyExamplesHtml = `<p style="padding-top: 25px; font-weight: bold; font-size: 13pt; border-top: 1px solid #bbbbbb">Exemplos de TuPy</p>

<p style="margin-top: 10px;">Abaixo se encontram implementações em TuPy de alguns algoritmos e operações com estruturas de dados. Clique para abrir o código no editor. <b>Atenção:</b> Certifique-se de ter salvo seu programa antes de clicar nos exemplos abaixo!</p>

<ul class="tupyLinkList">
<li><a class="exampleLink loadsInput" id="tupyInsertionSort" href="#">insertionSort</a></li>
<li><a class="exampleLink loadsInput" id="tupyShellSort" href="#">shellSort</a></li>
<li><a class="exampleLink loadsInput" id="tupyMergeSort" href="#">mergeSort</a></li>
<li><a class="exampleLink" id="tupyHeapSort" href="#">heapSort</a></li>
<li><a class="exampleLink" id="tupyLinkedList1" href="#">inserção&nbsp;em&nbsp;lista&nbsp;encadeada</a></li>
<li><a class="exampleLink" id="tupyLinkedList2" href="#">merge&nbsp;em&nbsp;lista&nbsp;encadeada</a></li>
<li><a class="exampleLink" id="tupyMatrixTranspose" href="#">transposição&nbsp;de&nbsp;matriz</a></li>
<li><a class="exampleLink" id="tupyMatrixMultiply" href="#">multiplicação&nbsp;de&nbsp;matrizes</a></li>
<li><a class="exampleLink" id="tupyHashing" href="#">hashing&nbsp;(encadeamento&nbsp;exterior)</a></li>
<li><a class="exampleLink" id="tupyBST" href="#">árvore&nbsp;binária&nbsp;de&nbsp;busca</a></li>
<li><a class="exampleLink" id="tupyBTree" href="#">inserção&nbsp;em&nbsp;árvore&nbsp;B</a></li>
<li><a class="exampleLink" id="tupyTreeCenter" href="#">centro&nbsp;de&nbsp;árvore&nbsp;(desfolhamento)</a></li>
<li><a class="exampleLink" id="tupyDFS" href="#">busca&nbsp;em&nbsp;profundidade</a></li>
<li><a class="exampleLink" id="tupyBFS" href="#">busca&nbsp;em&nbsp;largura</a></li>
<li><a class="exampleLink" id="tupyCoinChange" href="#">moedas&nbsp;sem&nbsp;memorização</a></li>
<li><a class="exampleLink" id="tupyCoinChange2" href="#">moedas&nbsp;com&nbsp;memorização</a></li>
<li><a class="exampleLink" id="tupyChessQueens" href="#">damas&nbsp;pacíficas&nbsp;(N&nbsp;rainhas)</a></li>
<li><a class="exampleLink loadsInput" id="tupySCC" href="#"><span class="newExample">NOVO</span>&nbsp;componentes&nbsp;fortemente&nbsp;conexos&nbsp;(Tarjan)</a></li>
<li><a class="exampleLink loadsInput" id="tupyHanoi" href="#"><span class="newExample">NOVO</span>&nbsp;torres&nbsp;de&nbsp;Hanoi</a></li>
</ul>
`
/*<p style="margin-top: 5px;">
  <a class="exampleLink" id="tupyHelloWorldLink" href="#">Olá Mundo</a> |
  <a class="exampleLink" id="tupyMathsLink" href="#">Funções Matemáticas</a> |
  <a class="exampleLink" id="tupyLoopsLink" href="#">Laços</a> |
  <a class="exampleLink" id="tupyVectorsLink" href="#">Vetores</a> |
  <a class="exampleLink" id="tupyMatricesLink" href="#">Matrizes</a> |
  <a class="exampleLink" id="tupyLinkedListsLink" href="#">Listas Encadeadas</a>
  <p/>
  <a class="exampleLink" id="tupyFunctionsLink" href="#">Funções</a> |
  <a class="exampleLink" id="tupyClassesLink" href="#">Classes</a> |
  <a class="exampleLink" id="tupyAdvClassesLink" href="#">Herança e Polimorfismo</a>
</p>`*/;

export var TUPY_EXAMPLES = {
  tupyInsertionSort: 'insertionsort.tupy',
  tupyShellSort: 'shellsort.tupy',
  tupyMergeSort: 'mergesort.tupy',
  tupyHeapSort: 'heapsort.tupy',
  tupyLinkedList1: 'linkedlists.tupy',
  tupyLinkedList2: 'linkedlistmerge.tupy',
  tupyMatrixTranspose: 'matrixtransposition.tupy',
  tupyMatrixMultiply: 'matrixmultiplication.tupy',
  tupyHashing: 'hashing.tupy',
  tupyBST: 'bst.tupy',
  tupyBTree: 'btree.tupy',
  tupyTreeCenter: 'treecenter.tupy',
  tupyDFS: 'dfs.tupy',
  tupyBFS: 'bfs.tupy',
  tupyCoinChange: 'coinchange.tupy',
  tupyCoinChange2: 'coinchangememo.tupy',
  tupyChessQueens: 'chessqueens.tupy',
  tupySCC: 'tarjan.tupy',
  tupyHanoi: 'hanoi.tupy'
};

export var cExamplesHtml = `<p style="margin-top: 25px; font-weight: bold;">C Examples</p>

<p style="margin-top: 5px;">
  <a class="exampleLink" id="cMengThesisLink" href="#">Thesis</a> |
  <a class="exampleLink" id="cGlobalsLink" href="#">Globals</a> |
  <a class="exampleLink" id="cStructLink" href="#">Structs</a> |
  <a class="exampleLink" id="cNestedStructLink" href="#">Nested structs</a> |
  <a class="exampleLink" id="cArrOverflowLink" href="#">Array overflow</a> |
  <a class="exampleLink" id="cArrParamLink" href="#">Array param</a>
  <p/>
  <a class="exampleLink" id="cStringRevLink" href="#">String reverse</a> |
  <a class="exampleLink" id="cPtrLevelsLink" href="#">Pointer levels</a> |
  <a class="exampleLink" id="cPtrChainLink" href="#">Pointer chain</a> |
  <a class="exampleLink" id="cPtrWildLink" href="#">Pointers wild</a> |
  <a class="exampleLink" id="cTypedefLink" href="#">Typedef</a>
</p>`;

export var C_EXAMPLES = {
  cArrOverflowLink: 'array-overflow.c',
  cArrParamLink: 'array-param.c',
  cNestedStructLink: 'fjalar-NestedStructTest.c',
  cPtrLevelsLink: 'fjalar-pointer-levels.c',
  //cStringArraysLink: 'fjalar-string-arrays.c',
  cGlobalsLink: 'globals.c',
  cMengThesisLink: 'meng-thesis-example.c',
  cPtrChainLink: 'pointer-chain.c',
  cPtrWildLink: 'pointers-gone-wild.c',
  cStringRevLink: 'string-reverse-inplace.c',
  cStructLink: 'struct-basic.c',
  cTypedefLink: 'typedef-test.c',
};


export var cppExamplesHtml = `<p style="margin-top: 25px; font-weight: bold;">C++ Examples</p>

<p style="margin-top: 5px;">
  <a class="exampleLink" id="cppFirstLink" href="#">Basic</a> |
  <a class="exampleLink" id="cppPassRefLink" href="#">Pass by ref</a> |
  <a class="exampleLink" id="cppClassLink" href="#">Class</a> |
  <a class="exampleLink" id="cppClassPtrLink" href="#">Class pointer</a> |
  <a class="exampleLink" id="cppDateLink" href="#">Date class</a> |
  <a class="exampleLink" id="cppInheritLink" href="#">Inheritance</a> |
  <a class="exampleLink" id="cppVirtualLink" href="#">Virtual method</a>
</p>`;

export var CPP_EXAMPLES = {
  cppClassLink: 'cpp-class-basic.cpp',
  cppDateLink: 'cpp-class-date.cpp',
  cppClassPtrLink: 'cpp-class-pointers.cpp',
  cppFirstLink: 'cpp-first.cpp',
  cppInheritLink: 'cpp-inheritance.cpp',
  cppPassRefLink: 'cpp-pass-by-ref.cpp',
  cppVirtualLink: 'cpp-virtual-method.cpp',
};
