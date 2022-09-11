#  Web Technologies Bootcamp

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/web

=====================================================

Softwares Required:
1) Chrome Web browser with following extensions
	1.1) add React Developer tools [ https://chrome.google.com/webstore/search/react Search : react]
	1.2) add Redux DevTools [ https://chrome.google.com/webstore/search/redux Search : redux]
2) Visual Studio Code [ https://code.visualstudio.com/ ]
3) NodeJS Latest LTS [ https://nodejs.org/en/download/ ] 16.x.x

=========================================

Web Technologies

HTML + CSS + JS
Presentation + styling + dynamic

JavaScript
-> Scripting language, loosely typed and dynamically typed language

keyword "var" to declare a variable

var name = "Smith"; // string

var data = 10; // number

data++;

data = "test"; // string
data.toUpperCase();

data = true;

if(data) {}


JS ==> JS engine
Engines:
V8 => Google => Chrome / NodeJS
SpiderMonkey ==> Firefox
Rhino ==> Mozilla
Chakra, Continumm => IE and Edge
Nashorn ==> Oracle
JavaScriptVM ==> Opera

function add(x, y) {
	console.log(x + y);
}

-----------------------

Execution Context:

var g = 100; // global variable

function doTask() {
	var a = 10;
	if(g > a) {
		var b = 20;
		c= 30;
		console.log(g, a, b, c);
	}
		console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c);

----------------------------------------

function add(x, y) {
	return 
		x + y;

}

var result = add(4,5)

console.log(result); // undefined

---

 semi-colon insertion


function add(x, y) {
	return; 
		x + y; //unreachable code
}

-----------------------------------------

JS is event-driven

myfile.js

console.log("Hello!!!");

setInterval(function timed() {
	console.log("timed!!!");
}, 100);

console.log("Timer set!!!");

$("#btn").click(function clicked() {
 console.log("clicked!!!");
});

console.log("End!!!");


=========================


OOP in JS
Object can have state and behaviour

1) var obj = new Object();

obj.x = 10; // state ==> instance variable
obj.y = 25; //  state ==> instance variable
obj.print = function() {
	console.log(this.x, this.y);
}

2) Functional constructor

function Person(name, age) {
	this.name = name;
	this.age = age;
}


var p1 = new Person("Tim", 22); // p1.name is set to "Tim" and p1.age is set to 22
// within Person() "this" refers to "p1" ==> Context

var p2 = new Person("Harry", 34); // within Person() "this" refers to "p2"

Person("Anna", 31); // "this" in Person refers to window/ global context

Adding behaviour:

function Person(name, age) {
	this.name = name; // state
	this.age = age; // state
}

// instance methods
Person.prototype.getName = function() {
	return this.name;
}

Person.prototype.setName = function(n) {
	this.name = n;
}

// static methods
// class member ==> here "this" refers to by default "window"
Person.equals = function(p1, p2) {
	if(p1.name === p2.name && p1.age === p2.age) {
		return true;
	}
	return false;
}

var p1 = new Person("Tim", 22);
var p2 = new Person("Tim", 22);

console.log(p1.getName());

if(Person.equals(p1, p2)) {
	console.log("same")
}

==================

3) JSON ==> JavaScript Object Notation {}
Key is string type; value can be undefined, number, string , boolean, array, object, null, function

var obj = {};

Server sends objects to client in JSON notation

{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
}

============

var person = {
	"id": 1,
	"name": "George",
	"getName": function() {
		return this.name;
	}
}

person.id;
person.name;
person.getName();

============

JS bind(), apply() and call() functions inherited from Object

All JS functions are inherited from Object

function add(x,y) {
	console.log(this);
	return x + y;
}

above code is an instance of Function

var add = new Function("x" , "y", "return x + y");

Function extends Object

====================

call() ==> simlarly apply()

function update(name) {
	this.name = name;
}

var product = {
	name: "iPhone 13"
}

function Person(name, age) {
	this.name = name; // state
	this.age = age; // state
}

var p1 = new Person("Tim", 22);

update.call(product, "Galaxy"); // product.name ----> "Galaxy"

update.call(p1, "Jimmy"); // p1.name --> "Jimmy"

----------------

var product = {
	name: "iPhone 13",
	getName: function() {
		console.log(this.name);
	}
}

product.getName();

var ref = product.getName; // get function definition; context is lost 

var ref = product.getName.bind(product); // copy product context; inside getName() this should refer to "product"

ref();

--------------------------------------------

High Order Functions ==> HOF
* Functions which accept function as argument
* Function which return a function

var data = [6,2,11,5,9,22];

for(i = 0; i < data.length; i++) {
	console.log(data[i]);
}

for(i = 0; i < data.length; i++) {
	alert(data[i]);
}

-------------
Task 1:

map HOF

input:
var data = [6,2,11,5,9,22];

output:
[12, 4, 22, 10, 18, 44]; < == doubled

--

input:
    var products = [
            { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
            { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
            { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
            { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
            { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }];


output:
 ["iPhone", "Onida", "One Pluse 6", "HDMI Conenctor", "Samsung"]


===
Closure:

HOF ==> Function which return a function 

function adder(base) {
	return function(value) {
		return base + value;
	}
}

var fiveAdder = adder(5);
var tenAdder = adder(10);

console.log(fiveAdder(2));
console.log(tenAdder(2));

fiveAdder.prototype
>constructors
>>scope

========================

Memoization. 
The main idea behind it is to execute function only once. Follow up calls should not run the logic but return the cached result.

getProduct(3); ==> API call to Spring Boot ==> DB ==> results ==> JSON ==> send JSON to client

getProduct(5); ==> API call to Spring Boot ==> DB ==> results ==> JSON ==> send JSON to client

getProduct(3); ==> get from cache

fibanocci(34) ==> compute heavy CPU intense operation

fibanocci(34) ==> from cache

fibanocci(89) ==> compute heavy CPU intense operation


========================================

ECMAScript 5 / JS 5 version

------------

ES 6 / ES2015 / ECMAScript 6

Most of JS engines are still compatable with ES 5 and not ES 6 

https://caniuse.com/

ES 6 ==> Transcompile ==> ES 5 for production code

Babel and Tracuer are 2 most popular Transpiler / Pre-Processor

Features:

1) Block level scope [ let ]

var g = 100;

function doTask() {
	var a = 10;
	if(g > a) {
		let b = 20; // not hoisted
		var c = 30; // hoisted to function scope
		//

	}
	console.log(c); // c is visible
	console.log(b); // not visible
}

---
if(g > a) {
		({
			let b = 20;
		})();
		var c = 30;
		//

	}

2) Constants [ const]

const PI = 3.14159;

constants can also have block level scope

3) Clone

3.1) 
var p = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"};

var ref = p; // pointer

ref.name = "Samsung";

console.log(p.name); // Samsung

var cpy = {...p}; // clone

cpy.name = "MotoG";

console.log(p.name); // Samsung

3.2) 

var data = [5,2,12];

var cpy = [...data];

cpy[0] = 99;

console.log(data[0]) ; // 5

---

4) Destructuring assignment

4.1) 
var data = [5, 2, 12, 44, 11, 67];

old Way:

var a = data[0];
var b = data[1];

with Destructuring:

var [a, b, ...others] = data;

console.log(a); // 5
console.log(b); // 2
console.log(others); // [12, 44, 11, 67]


var elems = ["red", "green", "blue", "pink"];

var [r, g, ...others]= elems;

console.log(r); // red


4.2)
var p = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"};

old way:
console.log( p.name, p.price);

var {name, price} = p;

console.log(name) ; // iPhone


-----------------

5) Arrow functions:

function add(x,y) {
	return x + y;
}

var add = (x, y) => x + y;

or

var add = (x,y) => {
	return x + y;
}

6) Promise API
	for asynchronous functions

Sync functions:

function doTask() {

}

var result = doTask(); 
console.log("complete"); // blocked

---

Async functions


function doTask() {
	// async
}


doTask().then(function(data) {

},
function(err) {

})


console.log("complete"); // not blocked


===

Promise API callback hell

getConnection()
.then(con => getProject(con))
.then(prj => getEmployee(prj))
.then(emp => getPhone(emp))
.then(data => console.log(data));


7) Async and Await functions for Promise API to prevent callback issues / hell
Promise code:
  
  fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => console.log(data));

convert to async and await:
async function getData() {
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/users"); // blocked
		let data = await response.json();
		console.log(data);
   } catch(ex) {
   	console.log(ex);
   }
}

getData();

8) Generators
	are functions with multiple return values over a period of time

	function* saga() {
		console.log("task1");
		console.log("task2");
		
		yield "first output";
		console.log("task3");
		
		yield 100;
		console.log("task4");
		console.log("task5");
		
		yield {"name": "anitha", age: 21};
	}

	var iter = saga();
	iter.next(); // check the return value and decide to proceed or not
	iter.next();  
	iter.next();
	iter.next();

9) class 
10) ES 6 modules
11) Self Learn ==> Proxy  and Reflect

===============================================================

DOM ==> Document Object Model

XML or HTML in the form of Object using Scripting language [ JavaScript / VBScript / JScript/ ...]

* document

Using DOM
* create dynamic elements
* access elements
* traverse thro elements
* add event handlers

 access elements:

 <html>
 	<p> para 1</p>
 	<div id="one">Some Content</div>
 	<p>para 2</p>

 	<div class="card">
 	</div>
 </html>

 1) getElementById()
 document.getElementById("one");

 2) getElementsbyTagName() always returns an array

 document.getElementByTagName("p");

3) 
querySelector(".card") ==> get by class name
querySelectorAll("p") ==> get by tag name
querySelector("#one") ==> get by id


document.querySelector(".tmpl-headerNavItem_home").innerHTML
document.querySelector(".tmpl-headerNavItem_home").innerText
'Home'
document.querySelector(".tmpl-headerNavItem_home").innerText = "Banu"

===================


events ==> click, mousemove, mouseenter, mouseexit, keypress, keydown, keyup, focus, blur, load, unload,..

Button clicked!!!
div clicked!!!
document clicked!!!


document clicked!!!
div clicked!!!
Button clicked!!!


==================

Day 1  Recap: JS, HOF, Closure, ES 6 features, OOP, bind(), call() and apply(); DOM & event handling

Day 2

NodeJS

https://github.com/nodejs/node

* Platform built on V8 javascript engine and Libuv C / C++ cross-platform libraries [ instead of Web Api]


 * libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops

* event-driven, non-blocking I/O model provided by Libuv


Why NodeJS?
1) to build APIs [ RESTful web services / GraphQL web services]
2) build traditional web applications [ server sends rendered HTML pages to client]
3) Real-time applications ==> ChatBot
4) Streaming Platform [ Netflix / HotStar / Amazon Prime...]
5) building web applications for client side
	
Challanges will building web applications:
1) we start writing code in ES6 / TypeScript / DART / CoffeeScript / LiveScript
	use Babel for ES6 -> ES5
	use tsc for TypeScript -> ES%

	we need to transpile to ES5

	product.ts

	tsc product.ts --> product.js

2) we need to do testing [ unit testing / e2e testing]
3) we need to minify , uglify and bundle our code
	
	50+ js files

	<script src="a.js"></script>		
	<script src="b.js"></script>
	<script src="c.js"></script>
	<script src="d.js"></script>

	* each <script> tag makes a network call
	* ordering of inclusion of <script> tag is important ==> based on dependency
	* each character is a byte ==> payload increases
	==> remove all whitespaces ==> minify
	==> covert big function/variable names to shorter names ==> uglify




index.<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>meta</title>
</head>
<body>
		<script src="a.js"></script>		
		<script src="b.js"></script>
		<script src="c.js"></script>
		<script src="d.js"></script>
		<link rel="stylesheet" href="styles.css" >
</body>
</html>


client
http://server.com
--> downloads index.html --> one network call
--> DOM parser will evaluate HTML
<script src="a.js"></script> --> network call to download a.js from server will be triggerd by the browser
<script src="b.js"></script> --> network call to download b.js from server will be triggerd by the browser

--

Solution is :

bundle.js ==> includes a.js + b.js + c.js + d.js

<script src="bundle.js"></script>

---------------------------

JS Module System: ==> control visiblity like "private" and "public"
Different Module System
1) Plain Vanilla JS module system using IIFE ==> Immediate Invoke Function expression ()();

```
var ShopModule = (function(){
	var data = 10; // private
	function doTask() {

	}

	function anotherTask() { // private

	}

	return {
		doTask
	}
})();

ShopModule.doTask(); // valid

ShopModule.data; // not visible ==> error

var CustomerModule = (function() {
	var data = 45;
	var name = "Smith";
	function doTask() {

	}
	function getName(){}
	return {
		data,
		doTask,
		getName
	}
})();

CustomerModule.data; // 45
CustomerModule.getName(); // valid
CustomerModule.doTask();

```

2) CommonJS module system ==> default supported by NodeJS
```
lib.js
module.exports.add = (x,y) => x + y;
module.exports.subtract = (x,y) => x - y;
const multiply = (x,y) => x * y; //private to lib.js

other.js
const {add, subtract} = require('./lib');
```

3) ES 6 module system
```
lib.js

export const add = (x,y) => x + y;
export const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y; //private to lib.js

other.js
import {add, subtract} from './lib';
```

4) AMD ==> Asynchronous Module Definition
5) System
6) UMD


$ node fs1.js
--> loads all pre-defined modules like "fs", "http", "url", "crypto", "cluster" ,.. into memory
we can import them in our application.

====================================================

NodeJS project

Package Managers:
1) NPM ==> comes by deault with NodeJS
2) YARN
3) PNPM

Node Package Manager ==> Similar to Maven  for java developers / similar to PIP for Python developers
npm --version

Why?
* manage 3rd party dependencies into the project
	npm install react
	npm i lodash

	or

	yarn add react

	or

	PNPM install react


	this also manages transitive dependencies

	npm i a
		a depends on b
			b depends on c

https://www.npmjs.com/

* Publish modules
	npm login
	npm publish

* Run scripts for "build", "deploy", "test", "start" , ...


==================

each nodejs project has "package.json"
* scripts are configured
* dependencies ==> modules which are required in production also
* devDependencies ==> modules which are required in development mode only
* peerDependecies ==> reusable modules

nodeprj> npm i -D mocha chai request

nodeprj> npm i lodash

package.json
 "devDependencies": {
    "chai": "^4.3.6",
    "mocha": "^10.0.0",
    "request": "^2.88.2"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }


Project when pushed onto github will be minus "node_modules" folder

other team members:

nodeprj> npm install

"chai": "4.3.6", ==> look for exact version for repo

"chai": "^4.3.6" ==> download any latest version greater than or eqaul to 4.3.6 

"chai": "~4.3.6" => Major version has to be "4"; minor and patch can be greater than or equal to ".3.6"



=====================

JS Unit testing:
unit testing frameworks:

* Jasmine
* JEST
* Mocha

---

https://www.chaijs.com/

Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.


AAA ==> Assemble Action Assert

 "scripts": {
    "start": "node app/server.js",
    "test": "mocha --reporter spec"
  }

  npm start

  npm test

  https://jestjs.io/docs/asynchronous

============================================

JavaScript Build tools

* Grunt
* Gulp
* Webpack

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. 

 
Webpack
webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling,...

-------------------

webpackexample> npm init --y

webpackexample> npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin



 "scripts": {
    "dev": "webpack --mode development",
    "prod" : "webpack --mode production"
  }

 npm run prod
 
 src/index.js ==> creates dist/main.js

 npm run dev

===============

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

instead of one bundle if many bundles are created ==> code splitting then also HtmlWebpackPlugin will be useful



index.html
<script src="main.Fs2452@5w.js"></script> <!-- cache -->
<script src="main.gse232422#.js"></script>
<script src="vendor.js"></script>
<script src="product.chunk.dfdfg#@!.js"></script>


webpack-dev-server 
https://webpack.js.org/configuration/dev-server/

===========================================

webpack ==> transpiler

ES 6 ==> ES 5 => Babel

npm i @babel/core babel-loader @babel/preset-env -D


babel-loader loads files with "js" extension
@babel/core has babel compiler to convert higher version of JS to lower version
@babel/preset-env has pollyfills


npm i lodash

=======================================

css-loader and style-loader

npm i css-loader style-loader -D

css-loader loads "css" files which are imported like js file
import "./styles.css"; 


style-loader will include loaded "css" into index.html

```
<style>
	body {
    background-color: antiquewhite;
}

h1 {
    border: 1 solid lightblue;
}
</style>
```

======================================================

ReactJS

Rendering ==> process of data => presentation [HTML / PDF / Image]

* Server Side Rendering [ SSR ]
* Client Side Rendering [ CSR ]
* Static Site Generation [ SSG ]


Client Side Rendering
* we need to create DOM dynamically
-> document.createElement("table") using plain DOM apis
-> jQuery library simplified DOM creation / traversing / event handling
	$(<table/>) same as document.createElement("table") 

	$(table) same as document.getElementsByTagName("table")

	$("#first") same as docuemnt.getElementById("first");

-> Templates
* Underscore
* jQueryTemplate
* Handlebars #
* Mustache {{
* Knockout

Handlebar example:
template ==> html files

<ul class="people_list">
  {{#each people}}
    <li>{{this}}</li>
  {{/each}}
</ul>


JSON data from server:
{
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley",
  ],
}


output:
<ul class="people_list">
    <li>Yehuda Katz</li>
    <li>Alan Johnson</li>
    <li>Charles Jolley</li>
</ul>

---------------------------------

SPA ==> single page application ==> index.html but many views

* Application has many modules [ customer / product / cart ] and they have dependencies
* different URLs should show different views

http://adobe.com/products
has to show products in index.html

http://adobe.com/
has to show landing page

http://adobe.com/offices
has to show offices

http://adobe.com/products/acrobat
has to show only acrobat products

* Protect URLs

http://amazon.com/cart

this URL is accesable only if you have logged in

* Navigation between views instead of pages

* Data binding
	-> single way binding [ data from server place into placeholders {{name}}]
	-> two way binding [ data from server to placeholders in html ; changes done in view --> server]

MVC --> Model View Controller

Model -> presents the data
View -> Presentation
Controller -> to control application logic ==> event handling

Libraries and Frameworks:
1) Backbone library ==> model and Controller support; view support was not provided -> pick from handlebars/mustache

2) CanJS / StealJS

3) AngularJS --> Framework [MVC] --> Google
	digest() cycle

4) ReactJS --> View Library --> Performs of view rendering
	--> 3rd party libraries for Model
	walmart/ twitter / linked

5) Angular --> Framework --> Total solution
	Gmail 

6) Vue 


ReactJS by Facebook

https://codepen.io/

---------------------------
Settings:
Behaviour:
save --> off
Preview --> off

JS:
PreProcessor: Babel

Extenal librarires
1) react
https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js

2) react-dom
https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js



html
<div id="root"></div>


JS:

let Welcome = React.createElement("h1", {style:{'color': 'red'}}, 'Welcome to React!!!');

// console.log(Welcome);

ReactDOM.render(Welcome, document.getElementById("root"))

==================

Day 3

Day 1 & 2: JS , ES 6 , Event Handling and NodeJS {npm, package.json, mocha, chai}

ReactJS --> View library by Facebook --> CSR

ReactElement

1) let Elem = React.createElement("div",{style:{"color":"red"},"Welcome to React!!!");

tagName = "div"
props = style...
props.children = "Welcome to React"

VDOM ==> in memory object [ json] but not visual component ]

VDOM ==> Visual Representation ==> Renderers
* react-dom ==> VDOM to DOM elements for web 
* react-native ==> VDOM to mobile elements
* react-tv ==> VDOM to tv elements

<div id="app"></div>

ReactDOM.render(Elem, document.getElementById("app"));

2) Reconcillation

Using React if changes are made ==> will be on VDOM; not directly DOM
computes differences between VDOM and VDOM copy==> for every diff DOM is updated

============================

<div style={color:red>
		<p>
				Hello!!!
		</p>
</div>

React.createElement("div",{style:{"color":"red"}, React.createElement("p", null, "Hello!!!"));

===========================================

* Functional components
* class components

props 1:
```
function Welcome(props) {
  return <div>
          <h1>
              {props.title}
          </h1>
          <h3>
              {props.location}  
          </h3>
    </div>  
}

ReactDOM.render(<Welcome title="Welcome to React!!!" location="Adobe Virtual"/>, document.getElementById("root"));
```
props 2:
```
function Welcome({title, location}) {
  return <div>
          <h1>
              {title}
          </h1>
          <h3>
              {location}  
          </h3>
    </div>  
}
```
===================

```
var data = [
{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

function ProductList({title, products}) {
  return <div>
    <h1>{title}</h1>
    {
      products.map(p => <ProductRow product={p}/>)
    }
  </div>
}

function ProductRow({product}) {
  return <div>{product.name}, {product.price}</div>
}

ReactDOM.render(<ProductList title="Product List" products={data}/>, document.getElementById("root"));
```

Class Component: can have state and behaviour

Button ==> color, caption, width , height, enabled ===> state
Button ==> click(), hover(), keyPress(), ===> Behaviour


```
class ProductList extends React.Component {
  state =  {
    "products":[
      {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
      {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
      {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
      {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
      {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}]
  }
  
  render() {
     return <div>
       <h1>{this.props.title}</h1>
        {
            this.state.products.map(p => <ProductRow product={p}/>)
        }
    </div>
  }
}

```

* npx create-react-app customerapp

npm ==> node package manager
npx ==> execute node package manager
	npx create-react-app customerapp

	loads create-react-app module into memory and execute

	create-react-app ==> to create scaffolding code for react applications.

---

If not for create-react-app

* npm init --y
* npm i webpack webpack-cli html-webpack-pluging webpack-dev-server
* npm i react react-dom
* i need to configure webpack.config.json
* i need to configure babel.config.json
* i need to create landing page

all other components




"react-scripts" ==> to exceute webpack commands

Each child in a list should have a unique "key" prop.


```
class Example extends React.Component {
  state = {
    count : 10
  }
  render() {
    return <div>
      {this.state.count} <br />
      <button type="button" onClick={this.increment.bind(this)}>Change</button>
    </div>
  }
  
  increment() {
   // this.state.count = this.state.count + 1
     // reconcilation ==> triggers render() call
     this.setState({
       count: this.state.count + 1
     })
    console.log(this.state.count)
  }
  
}

ReactDOM.render(<Example />, document.getElementById("root"));
```

Retain enclosing Context using Arrow function:
https://www.section.io/engineering-education/how-to-use-javascript-arrow-functions-and-this-keyword/#:~:text=Arrow%20function%20and%20this%20context,to%20a%20global%20object%20window.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

```
render() {
    return <div>
      {this.state.count} <br />
      <button type="button" onClick={this.increment}>Change</button>
    </div>
  }
  
  increment = () => {
    //this.state.count = this.state.count + 1
     this.setState({
       count: this.state.count + 1
     })
    console.log(this.state.count)
  }
  
 ```

Using Arrow to bind event handler:

```
  <button type="button" onClick={() => this.increment()}>Change</button>
    </div>
  }
  
  increment(){
     this.state.count = this.state.count + 1
     this.setState({
       count: this.state.count + 1
     }, () =>   console.log(this.state.count))
  
  }

 ```

React JSX needs one root element; can't return multiple elements

ERROR:

return (
	<h1>df</h1>
	<h2>dfg</h2>
)

Correction:

return (
	<div>
		<h1>df</h1>
		<h2>dfg</h2>
</div>
);
---

JSX has to have a root element:
```
function Welcome() {
	return <div>
					<h1>Hello</h1>
					<h1>World!!!</h1>
		</div>
}

Solution:

function Welcome() {
	return <React.Fragment>
					<h1>Hello</h1>
					<h1>World!!!</h1>
		</React.Fragment>
}

OR
function Welcome() {
	return <>
					<h1>Hello</h1>
					<h1>World!!!</h1>
		</>
}

```

let p = {
	"name": "Test",
	"getData": function() {
		return this.name;
	}
}

p.getData(); // "Test"

let ref = p.getData; // when function refernces is taken; it loses the context; only function definition is taken

ref(); // "name" is not from "context" p 



===========

whenever props or state change [ setState] ==> re-render happens

Testing React
* Unit Testing
React Testing Library
React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

Built on top of JEST testing framework [ mocha, jasmine are other testing frameworks]

Instead of RTL we can use Enzyme

npm test

CodeCoverage:
npm test -- --coverage --watchAll 



integration testing
render(<App/>)

Unit Testing components in isolation:
render( <CustomerRow 
                delEvent = {(id) => this.deleteCustomer(id)}
                key={c.id} 
                customer={c} />);

npm test -- --coverage --watchAll --collectCoverageFrom="**/components/*.js"



* E2E Testing

customerapp>npm i -D cypress

https://www.cypress.io/

for E2E applicaiton should be running:

npm start

package.json
scripts: {
 "e2e": "cypress open"
}


npm run e2e

cy.get(selector)

cy.get('button') ==> document.querySelector('button')

cy.get('.row') ==> document.querySelector('.row') ==> by class name

 <div className='row'>
 	instead of
 <div class='row'>

===================================================

create-react-app
state and behaviour
event handling ==> click and change

unit testing with RTL
E2E with cypress / puppetter / selenium / protractor

====================================================

 
    <link href="https://fonts.googleapis.com/css?family=Oswald|Permanent+Marker&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
  



Day 3 Recap:
Functional components ==> first choice as view component
class components ==> extends Component ==> state and behaviour

whenever state or props changes ==> Reconcillation happens

changing the state should be done using

Asynchronous function to mutate the state
this.setState({
	variable: data
});

state = {
	x : 25,
	y : 40
}


this.setState({
	x: 30
});

above code updates "x", y will still be 40

----

class MyComp extends Component {
	constructor(props) {
		super(props);
		// any other init
	}
}

----------

1. Binding event handlers:

class MyComp extends Component {
	
	doTask() {

	}

	render() {
		<div>
				<button type="button" onClick={this.doTask.bind(this)}> Click </button>
		</div>
	}
}

---


2. Binding event handlers:

class MyComp extends Component {
	constructor(props) {
		super(props);
		 this.doTask = this.doTask.bind(this);
	}
	doTask() {

	}

	render() {
		<div>
				<button type="button" onClick={this.doTask}> Click </button>
		</div>
	}
}


---

3. Binding event handlers:


class MyComp extends Component {
 
	doTask = () => {
		// "this" will enclosing context
	}

	render() {
		<div>
				<button type="button" onClick={this.doTask}> Click </button>
		</div>
	}
}

---
4. Binding event handlers:

class MyComp extends Component {
	 
	doTask() {

	}

	render() {
		<div>
				<button type="button" onClick={() => this.doTask()}> Click </button>
		</div>
	}
}

-------------------------------------

Unit Testing RTL
render() ==> doesn;t create actual DOM rather in-memory DOM , good enough for testing
getBy, findBy, queryBy

jest.fn(); ==> to create a mock function 

Cypress ==> E2E testing framework

Browser -> react --> API call to Spring Boot / server --> Database

-----------------------------------------------------------

functional component returns JSX
render() method of class component returns JSX


Day 4

npx create-react-app phoneapp

styles.css

.card {
	border: 1px solid red;
	background-color: lime;
	color: white
}

import "styles.css"; // css-loader and style-loader

class CardComponent extends Component {
	render() {
		return <div className="card">
					...
			</div>
	}
}

* CSS Framework
1) Bootstrap ==> Twitter
2) TailWind
3) foundation / Zurb
4) Bulma

Bootstrap CSS Framework
1) uses Grid System for RWD ==> Responsive Web Design
https://getbootstrap.com/docs/4.0/layout/grid/
https://getbootstrap.com/docs/4.0/components/navbar/
https://getbootstrap.com/docs/4.0/components/card/

----------
google fonts
fontawesome for icons

----

* styled-components ==> https://styled-components.com/docs/basics
* react-router-dom
* react context
* axios ==> for API calls


ES 6 String literal

var name = "Peter";

var msg = `
Welcome to Adobe,
Name : ${name}
`;

https://www.primefaces.org/primereact/datatable/

=====================

React Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level

Example:
```
let PersonContext = React.createContext();

class PersonProvider extends React.Component {
    state = {
      "name": "Smith",
      "email" : ""
    }
    constructor(props) {
      super(props);
      this.state.updateEmail = this.updateEmail
    }
    updateEmail = (email) => {
      console.log(email)
      this.setState({
        email: email
      })
    }
    render() {
      return <PersonContext.Provider value={{...this.state}}>
            {this.props.children}
        </PersonContext.Provider>
    } 
}
        
function App() {
    return <PersonProvider>
          <First />
      </PersonProvider>
}

function First() {
  return <>
    <h1> I am First </h1>
    <Second />
    </>
}
      
class Second extends React.Component {
  render() {
    return <PersonContext.Consumer>
      {
        value => {
          return <>
          Name : {value.name} <br />
          Email : {value.email} <br />
          <button onClick={() => value.updateEmail("me@gmail.com")}>Click</button>
          </>
        }
      }
      </PersonContext.Consumer>
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))
```

download share.zip ==> extract it

* React Router DOM

* Different URLs has to show different views in SPA
index.html

http://amazon.com/mobiles
has to show/render mobiles in index.html

http://amazon.com/mobiles/iPhone13
has to show/render iPhone13 in index.html

http://amazon.com/mobiles/Pixel3
has to show/render Pixel3 in index.html

http://amazon.com/tvs
has to show/render tvs in index.html

http://amazon.com/cart
has to show/render cart in index.html

* Bookmark
* Navigate between views
* easy to secure a URL
* Lazy Loading of components
	http://amazon.com/cart ==> only on using this URL ==> cart component has to be downloaded

  main.bundle.js ==> should have minimum components to display [ size is small ]
  other components should be lazily downloaded

  this solves FCP ==> First Contentful Paint

==============

Component Lifecycle methods

=========

https://reactrouter.com/en/v6.3.0/getting-started/overview


phoneapp> npm i bootstrap styled-components react-router-dom

index.html

   <link href="https://fonts.googleapis.com/css?family=Oswald|Permanent+Marker&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">


 index.js
 import 'bootstrap/dist/css/bootstrap.min.css';

 ====
Suspense waits for  1500ms for Component to be loaded; else fallback

<a href="/cart">Cart</a> ==> this makes a Server side request ==> full page is sent from server [SSR]

<Link to="/cart">Cart</Link> ==> react-router-dom ==> to invoke <Route > ==> CSR

===================
FCP:

constructor() mock init => render() => componentDidMount() ==> API calls ==> state ==> render()

share.zip
Extract
1) data.js and Button.js into "components" folder
2) "img" folder into "public" folder
3) "App.css" => overwrite existing one

index.js, Context.js, ProductList.js, Product.js


Context.js, Product.js

================================

React ==> API call ==> RESTful Web services [ Spring Boot ]

phoneapp> npm i axios

JSON Server  
Get a full fake REST API with zero coding in less than 30 seconds

uses "json" file as persistent store ==> CRUD operations on JSON file

data.json

{
	"movies": [{}, {}],
	"actors": [{}, {}, {}]
}

"movies" and "actors" are Endpoints

npx json-server --watch data.json --port 1234

http://localhost:1234/movies
http://localhost:1234/actors

Get by id
http://localhost:1234/movies/2

GET by query parameter
http://localhost:1234/movies?year=2022

POST, PUT, DELETE operations are also supported


===


window SessionStorage

on login success:
window.sessionStorage.setItem("user", "banu@gmail.com");

on checkout:
let user = window.sessionStorage.getItem("user");

===================

Day 5

React
* Functional Components ==> First Choice ==> pure view component ==> return JSX ==> React.ELEMENT
* Class Components ==> state and behaviour, lifecycle methods ==> render() returns JSX ==. React.ELEMENT

React.createElement()

* state & props
* setState({}); ==> Async in nature ==> Reconcillation ==> trigger re-rendering
* Avoid props-drill ==> Context ==> Provider; Consumer [ useContext() in functional component]
* Component LifeCycle methods ==> componentDidMount() and componentDidUpdate() ==> API call
* Core Web Vitals ==> FCP
constructor() do some mock init ==> render() ==> componentDidMount() ==> API call and set state
componentDidUpdate() ==> any dependent API calls ==> set State ==> render()

* axios HTTP client

React ==> make api calls 
1) fetch()
	let response = await fetch("http://localhost:8080/api/products");
	let data = response.json();

2) axios
2.1)		
	let response = await axios.get("http://localhost:8080/api/products");
		let data = response.data;
2.2) 
let order = {
	..
}
let response = await axios.post("http://localhost:8080/api/orders", order);

=============

Compoenent Lifecycle method:
componentDidMount()
componentDidUpdate()
componentWillUnmount()

shouldComponentUpdate()
shouldComponentUpdate() method is invoked before rendering when new props or state are recieved. 
This method is not called on initial render and also when forceUpdate() method is called.
 
Syntax - shouldComponentUpdate(nextProps,nextState)

```
class Child extends React.Component {
	shouldComponentUpdate(nextProps,nextState) {
		if(this.props.name === nextProps.name) {
			return false;
		}
		return true;
	}
	render() {
			console.log("Child renders!!!");
			return <div>
						Name in Child : {this.props.name}
				</div>
	}
}


class Parent extends React.Component {
	state = {
		count : 0,
		name: "Banu"
	}

	increment() {
		this.setState( {
			count : this.state.count + 1
		});
	}

	render() {
		console.log("Parent renders!!!")
		return <div>
				Name : {this.state.name} <br />
				Count: {this.state.count} <br />
				<Child name={this.state.name}/>
				<button onClick={() => this.increment()}>Click </button>
		</div>

	}
}
```
==========

Option 2:
```
class Child extends React.PureComponent {
	render() {
			console.log("Child renders!!!");
			return <div>
						Name in Child : {this.props.name}
				</div>
	}
}
```

PureComponent ==> has default implementation of shouldComponentUpdate()
use PureComponent if props is primitive type [ string, number, boolean]

if props is complex ==> object, array, write custom shouldComponentUpdate

Parent:
state = {
	products = [{}, {}, {}]
}

<Child data={products} />

shouldComponentUpdate uses shallow comparision

============

What if Child Component is Functional Component instead of class Component?
```
function Child(props) {
  	console.log("Child renders!!!");
		return <div>
					Name in Child : {props.name}
			</div> 
}
```
Solution: use Memoize pattern
```
function Child(props) {
  	console.log("Child renders!!!");
		return <div>
					Name in Child : {props.name}
			</div> 
}

let MemoChild = React.memo(Child); // HOC; cache of props; new props comming will be compared to prop-cache
// then return Child(props) or return;

class Parent extends React.Component {
	state = {
		count : 0,
		name: "Banu"
	}

	increment() {
		this.setState( {
			count : this.state.count + 1
		});
	}

	render() {
		console.log("Parent renders!!!")
		return <div>
				Name : {this.state.name} <br />
				Count: {this.state.count} <br />
				<MemoChild name={this.state.name}/>
				<button onClick={() => this.increment()}>Click </button>
		</div>

	}
}

ReactDOM.render(<Parent />, document.getElementById("root"));
```
================
React.memo(Movie); // good for primitive props; ==> Like PureComponent

Custom Logic for memoize:

function moviePropsAreEqual(prevMovie, nextMovie) {
  return prevMovie.title === nextMovie.title
    && prevMovie.releaseDate === nextMovie.releaseDate;
}
const MemoizedMovie2 = React.memo(Movie, moviePropsAreEqual); ==> like override shouldComponentUpdate()

==================================

Error Boundaries

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}


==========================================================

React Hooks

Hooks are a new addition in React 16.8. 
They let you use state and other React features without writing a class.

99% ==> functional components


1) useState()
2) useReducer()
3) useEffect()
4) useMemo()
5) useCallback()
6) useParams()
7) useContext()

---
1) useState() ==> allows to declare "state" in functional components

```
class Parent extends React.Component {
	state = {
		count : 0,
		name: "Banu"
	}

	//
	 this.setState({
	 		count: this.state.count + 1
	})
}
```

using Functional component:

function Parent() {
	let [count, setCount] = React.useState(0);
	let [name, setName] = React.useState("Banu");

	return <div>
				Name : {name} <br />
				Count: {count} <br />
				<button onClick={() => setCount(count + 1)}>Click </button>
	</div>
}

ReactDOM.render(<Parent />, document.getElementById("root"));

----------

2) useReducer()

useState() can be used if state variable is primitive and not conditionally update

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
	
	2.1) Action Object
		{
			type: type_of_action,
			payload
		}

	2.2) Reducer function takes (state, action) => newState
		  invoke reducer function using dispatch(action)

		  Action object examples:
1)
		  {
		  	type: "ADD_TO_CART",
		  	product : {...}
		  }

2)  {
	 type: "REMOVE_FROM_CART",
	 id: 3
}

3) {
	type: "CLEAR"
}

Example:
```
let initState = {count: 0, name: "", "age": 32};

let countReducer = (state, action) => {
	switch(action.type) {
		case "INCREMENT": return {
			count : state.count + action.payload
		}
		case "DECREMENT": return {
				count: state.count - 1
		}
		default : return state;
	}
}


function App() {
	let [state, dispatch] = React.useReducer(countReducer, initState);

	return <div>

				Count: {state.count} <br />
				<button onClick={() => dispatch({"type": "INCREMENT", payload: 10})}>
					Increment
				</button>
				<button onClick={() => dispatch({"type": "DECREMENT" })}>
					Decrement
				</button>
	</div>
}


ReactDOM.render(<App />, document.getElementById("root"))

```

3) useContext()
	hook for  Context Consumer

	function MyData() {
		let {cart} = React.useContext(CartContext);
		let {customer} = React.useContext(CustomerContext);
		return <div>
				<h1>Welcome {customer.email} </h1>
				{
					cart.map(p => <CartList product={p} />)
				}
		</div>
	}

	else in class component

	class MyData extends React.Component {
		render() {
			<CustomerConsumer>
					{
						value => {
							<h1>{value.email}</h1>
							<CartConsumer>
       					{
       						value => {
       								value.cart.map(...)
       						}
       					}

							</CartConsumer>
						}
					}
			</CustomerConsumer>
			
		}
	}

---

4) useEffect() is a hook to simulate component life cycle methods of class component



```
function App() {
	let [count, setCount] = React.useState(0);
	let [name, setName] = React.useState("Banu");

	// componentDidUpdate ==> gets called whenever count or name or props changes
	React.useEffect(() => {
		console.log("called effect 1 ==> similar to componentDidUpdate ", count, name)
	});


  // componentDidMount ==> gets called for first render only
	React.useEffect(() => {
		console.log("called effect 2 ==> similar to componentDidMount ", count, name);
		return () => console.log("called when unmount"); // simialr to componentWillUnMount()
	}, []); // [] dependecy list ==> execute if any of these dependecny changes

	 //  gets called whenever count changes
	React.useEffect(() => {
		console.log("called effect 3 ", count, name)
	}, [count]);


	return <div>
				Name : {name} <br />
				Count: {count} <br />
				<button onClick={() => setCount(count + 1)}>Click </button>
	</div>
}

ReactDOM.render(<App />, document.getElementById("root"));
```

5) useCallback()

useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.

```

function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};

const MemoTitle = React.memo(Title);

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

const MemoButton = React.memo(Button);

function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

const MemoCount = React.memo(Count);

function ParentComponent() {
	const [age, setAge] = React.useState(25)
	const [salary, setSalary] = React.useState(50000)

	 const incrementAge = React.useCallback(() => {
		setAge(age + 1);
	}, [age]);

	const incrementSalary = React.useCallback(() => {
   		setSalary(salary + 1000)
	}, [salary]);
  
	return (
		<div>
			<MemoTitle />
			<MemoCount text="Age" count={age} />
			<MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
			<MemoCount text="Salary" count={salary} />
			<MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
		</div>
	)
}

ReactDOM.render(<ParentComponent/>, document.getElementById("root"));

```


6) useParam()
In Product.js

 <Link to={`/details/${id}`}>
                      <img src={img} className='card-img-top' />
                    </Link>

 ```
 import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function Details() {
    let [product, setProduct] = useState(null);
    let {id} = useParams();
  
    useEffect( () => {
      console.log(id);
      axios.get(`http://localhost:1234/products/${id}`).then(response => {
        setProduct(response.data);
      })
     }, [id]);
  
     return (
      <div>
        <h1>
            Product Details
        </h1>
        {
          product? <div>
                Title : {product.title} <br />
                Info : {product.info}
            </div> : <p> No Product!!! </p> 
        }
        </div>
    )
  
}

```

7) useMemo()

useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

const memoizedValue = useMemo(() => fibanocci(no), [no]);

Refer day 1: memoization

===========================================

Custom Hooks:

hooks built using pre-defined hooks 

should start with 

fuction useXXXXX() {

}

https://react-spectrum.adobe.com/react-aria/
https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/interactions/src/useHover.ts

========================

```

// custom hook

import { useState, useEffect } from "react";

export default function useLocalState(key, defValue) {
    const [count, setCount] = useState(() => {
        let value = parseInt(window.localStorage.getItem(key)) || defValue;
        return value;
    });

    useEffect(() => {
        window.localStorage.setItem(key, count);
    }, [count]);

    return [count, setCount];
}


---

import React from 'react'
import useLocalState from '../hooks/LocalState'

export default function HookComponent() {
const [count,  setCount] = useLocalState("my-app-state", 0);
  return (
    <div>
        Count {count} <br />
        <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}


```

React Reference
Refs and the DOM: Refs provide a way to access DOM nodes or React elements created in the render method.

React.createRef()

```
class App extends React.Component {
  state = {
    name : "",
    email : ""
  }
  nameRef = React.createRef();
  emailRef = React.createRef();
  updateState() {
    this.setState({
      name: this.nameRef.current.value,
      email : this.emailRef.current.value
    });
    this.nameRef.current.focus();
  }
  render() {
    return <>
     Name: {this.state.name} , Email {this.state.email} <br />
     <form>
      Enter Name : <input type="text" ref={this.nameRef} /> <br />
      Enter Email : <input type="text" ref= {this.emailRef} /> <br />
    <button type="button" onClick={this.updateState.bind(this)}>Change </button>
    </form>
   </>
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));
```

Alternate way:

class App extends React.Component {
  state = {
    name : "",
    email : ""
  }
  
  update(evt) {
   let name =  evt.target.name;
   this.setState({
     [name]:evt.target.value
   });
  }
 
  render() {
    return <>
     Name: {this.state.name} , Email {this.state.email} <br />
     <form>
      Enter Name : <input type="text"  name="name" onChange={(evt) => this.update(evt)}/> <br />
      Enter Email : <input type="text"  name="email" onChange={(evt) => this.update(evt)}/> <br />
     </form>
   </>
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));

================

7) useRef()

```
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    console.log(inputEl.current.value);
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

Day 6

React recap:
1) React.createElement() ==> VDOM
2) ReactDOM.render() ==> VDOM to DOM
3) Functional Components ==> JSX; props
4) Class components ==> [render() returns JSX, can have state, lifecycle methods and behaviour]
5) change state using this.setState({}) ==> Async trigers reconcillation
6) componentDidMount() and componentDidUpdate() is place where API calls are done ==> to speed up FCP
7) shouldComponentUpdate() can be used to avoid re-rendering of a component / PureComponent / React.memo()
8) whehever state or props change component re-renders
9) Context: React.createContext() ==> prevents props drill [ Provider places data into Context; Consumer gets data from context directly]
10) Event handling onEvent; Arrow, bind, ...
11) RTL for unit testing and Cypress for E2E
12) React Hooks:
a) useState()
b) useEffect()
c) useContext()
d) useCallback() ==> memoize callback functions
e) useReducer() ==> conditionally mutate the state based on action type

<Route path="/products/:pid" element={<Product />} />
<Route path="/products" element={<ProductList />} />

f) react-router-dom useParams() to read pathparam [http://localhost:3000/products/3] and queryparam [http://localhost:3000/products?category=mobile
http://localhost:3000/products?page=1&size=10]
let {category} = useParams();
let {page, size} = useParams()
Refs and DOM: React.createRef()
g) useRef()

---------------------------------------

Redux: Predictable State Management

A Predictable State Container for JS Apps, Redux helps you write applications that behave consistently.
Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more. 
Redux's architecture lets you log changes, use "time-travel debugging"

Context ==> use to to avoid props-drill; avoid mutation with context

ProductContext ==> Make API call get products from RESTful aPI and place it into ProductContext; consumer can get products

Cart ==> Prefer Redux==> ADD_TO_CART, REMOVE_TO_CART, INCREMENT, DECREMENT
Checkout ==> Redux ==> to Server

Multi-stage Form submit ==> Registration pages / Survey pages / feedback
every page update state in Redux; Submit ==> Redux state => send to Server

---------------------------------------------------------------------------

MVC --> Model View Controller --> Architectural pattern

Flux pattern:
The Flux pattern solves the scalability issue by using unidirectional data flow to pass data among the different component views in the app.

React-Redux:
1) Store: one store per application/ place where data recides
2) Reducer: functions which take (state, action) => return new state based on action type
3) Action Object and Action Creator
4) React: View component

add contacts, remove contacts
$ npx create-react-app reduxexample
reduxexample> npm i redux react-redux

===============

Redux Middleware for async actions
* Thunk
* Saga
* Redux Observable
* Redux Promise
...

Redux is Sync in nature:
dispatch(action); ==> store ==> reducer ==> updates the state

Async Logic and Data Fetching
https://redux.js.org/tutorials/fundamentals/part-6-async-logic

UI:fetchProducts()
	1) dispatch({type:FETCH_PRODUCTS}) ==> state is updated to 
		{
		loading:true,
		products:[]
	 }
	 I can start displaying HourGlass, Loading...

	2) Middlewre: Make RESTful or GraphQL API call.
	based on STATUS code
	2.1) SC 200
		{
			loading:false,
			products:[{....}]
		}
  2.2) SC 404 or 500
   {
   	loading: false,
   	products:[],
   	error: {...}
   }


 $ npx create-react-app thunkexample

 thunkexample> npm i redux react-redux axios redux-thunk

https://jsonplaceholder.typicode.com/users

Redux Hooks:

connect(mapStateToProps, mapDispatchToProps)(App);

function mapStateToProps(state) {
	users: state.users
}

function mapDispatchToProps(dispatch) {
	fetchUsers: () => dispatch({type:...})
}



useSelector()
The selector is approximately equivalent to the mapStateToProps argument to connect conceptually.

useDispatch()
is approximately equivalent to the mapDispatchToProps argument to connect conceptually.


Mini Project:

1) Fetching JSON from Server
   componentDidMount() or useEffect(()=>{}, [])
   update state in ReactContext ==> useContext() to consume in functional component

2) whenever state is managed by application [survey pages/ feedback pages / multipage registration/ cart]
	use Redux
	final step from Redux ==> event handling ==> Send to Server

====

useParams hook
The useParams hook is used to read the dynamic params from the current URL that were matched by <Route path>

useSearchParams hook
The useSearchParams hook is used to Read and Modify the query string in the URL for the current location

===============================





