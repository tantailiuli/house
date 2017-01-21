//import "babel-polyfill";/*用import导入文件，相当于reqiure()，async await es2015*/
import express from "express";/*引入express框架*/
import router from "./controller";
import session from "express-session";
import {SERVER_CONFIG} from "./config";
import {l,createHTML} from "./utils";/*模块导入"./utils.js"*/

express()
	.use(express.static("./static"))/*.use中间件引入静态资源"./static"文件夹*/
	.use(session({
		secret: "house",
		resave: 1,
		saveUninitialized: 0,
		cookie: {
			maxAge: 3600000
		}
	}))
	.use(router)
	.listen(SERVER_CONFIG.port, () =>{
		console.log("support and ok")
	})
	// .get("/active", async (req,res) => {/*async关键字需与await关键字同时出现*/
	// 	res.send(await createHTML({
	// 		title:"活动",
	// 		styles:[
	// 			"/1.css",
	// 			"/2.css"
	// 		],
	// 		script:[
	// 			"/as.js"
	// 		],
	// 		path: "./pages/activity.html"
	// 	}));
	// })
	// .get("/", async (req,res) => {
	// 	res.send(await createHTML({
	// 		title:"首页",
	// 		styles:[
	// 			"/a.css",
	// 			"/b.css"
	// 		],
	// 		script:[
	// 			"/a.js"
	// 		],
	// 		path: "./pages/index.html"
	// 	}))


		/*用Promise.all 方法读取文件是同时一起读所有的文件，速度快*/
		// res.send((await Promise.all([
		// 	readFileAsync("./app.js"),
		// 	readFileAsync("./package.json"),
		// 	readFileAsync("./server.js")
		// 	])).join(""));
		/*直接是按顺序一个一个读取文件的，稍微缓慢些*/
		// res.json(await readFileAsync("./app.js"));
		// res.json(await readFileAsync("./package.json"));
		// res.json(await readFileAsync("./server.js"));
	// })
	// .listen(23333, () => {
	// 	l("support and ok");
	// })


// (async () => {
// 	try{
// 		l(await readFileAsync("./package.json"));
// 		l(await readFileAsync("./package.json"));
// 		/* ... */
// 	}catch(e){
// 		l(e);
// 	}
// })();


// readFileAsync("./package.json")
// 	.then(file =>{
// 		l(file);
// 	})
// 	.catch(err => {
// 		l(err);
// 	});


// import func,{A,B,C,D} from "./controller";/*用import 导入文件,使用 xx... form 可以使我们可以使用导入的内容*/
// function l(){
// 	return console.log.apply(console,arguments);
// }
// function log(){
// 	return console.log(...arguments);
// }
// l(A);
// l(B(2333));
// l(C.b());
// func();
// l(D());

// console.log(1,2,3,4);
// l(1,2,3,4);
// log(1,2,3,4);

// // Array
// Array.prototype.s = function(){
// 	return this.splice(...arguments);
// };
// l([1,3,4].splice(1,2,"a","b"));
// l([1,3,4].s(1,2,"a","b"));
// // Object
// Object.k = function(){
// 	return this.keys(...arguments);
// };
// l(Object.keys({a:1,b:2}));
// l(Object.k({a:1,b:2}));


// // let a = 1;/*let相当于var 但是同一变量不能重复声明*/
// // a= 2;

// for(let a = 0; a < 10; a++){}
// console.log(a);/*a is not defind*/

// if(0){
// 	let a = 2;
// 	console.log(a);
// }else{
// 	let a = 3;/*一个大括号是一个作用域，所以并不是重复声明*/
// 	console.log(a);
// }
// //console.log(a);
// const A = 1;//常量只读，不可重复赋值和声明
// //A = 2;
// //console.log(A);
// for(const A = 1; A<10 ;A++){
// 	//console.log(A);
// }//直接报错
// let obj = {
// 	a:1,
// 	b:2
// }
// let{a,b} = obj;
// console.log(a,b);

// let{a,b} = {
// 	a:1,
// 	b:2
// };
// a = 3;/*这里重新赋值*/
// console.log(a,b);

// let obj = {
// 	a:1,
// 	b:2,
// 	c:3
// }
// let{a,b} = obj;
// console.log(a,b);

// let arr = [1,3,5,7];
// let [aa,b,bb,bbb] = arr;
// console.log(aa,b,bb,bbb);

// var arr1 = [{},function(){}];
// var i = arr1.length;
// var arr2 = [];
// while(i-->0){
//     arr2.push(arr1[i])
// }
// arr1 = arr2;
// console.log(arr1);

// let arr = [{},function(){}];
// let [a,b] = arr;
// arr = (b,a);
// console.log(arr);

// let {c,d}={
// 	a:1,
// 	b:2,
// 	c:3,
// 	d:4
// };
// console.log(c,d);


// let [a,b,...rest]=[1,2,3,4,5,10];
// console.log(b,rest);

// let {a,...rest} = {
// 	a:1,
// 	b:2,
// 	c:"asdf",
// 	d:3
// }
// console.log(a,rest);

// function a(obj){
// 	console.log(obj)
// }


//方法不希望改变名字，一般不用let
// const b = function(){
// 	l(arguments);
// };
// const a = () => {
// 	l(arguments);/*arguments拿不到当前方法所传入的参数*/
// };
// a();
// b();

// let a = 1;
// l(global.a)

// const b = function(){
// 	l(this);
// };
// const a = () => {
// 	l(this);
// };
// a();
// b();

// function AA(){
// 	this.a = 233;
// 	let obj = {
// 		a:1,
// 		b:() => {
// 			console.log(this.a);
// 		}
// 	};
// 	obj.b();
// }
// new AA();

// var page = {
// 	click(){
// 		let div = document.createElement("div");
// 		div.onclick = (e) => {
// 			l(e);
// 			this.show();
// 		}
// 	}
// 	show(){
// 		l("i can show");
// 	}
// }

// const showAllArguments = ([a,...rest1],{b,...rest2},c = 0,...rest3) => {
// 	l(a,rest1,b,rest2,c,rest3);
// };
// showAllArguments([2,3,3],{
// 	b:1,
// 	c:2,
// 	d:function(){}
// });

//只有在只传一个变量时才可以省略括号
// const showAllArguments = ([a,...rest1]) => {
// 	l(a,rest1);
// };
// showAllArguments([2,3,3]);








// let x = do {
// 	let t = 2;
// 	t * t + 1;
// };
// l(x);

// let [foo] = [];
// l(foo);

// let [a,{b},d] = [1,{a:1,b:2},4];
// l(a,b,d);

// function* fibs() {
//   var a = 0;
//   var b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// var [first, second, third, fourth, fifth, sixth] = fibs();
// l(sixth);

// var arr = [1,2,3];
// var {0:first,[arr.length-1]:last} = arr;
// l(first,last);

// const [a,b,c,d,e] = 'hello';
// l(a,b,c,d,e);

// let {toString : s} = 123;
// l(s === Number.prototype.toString)

// let {toString : s} = true;
// l(s === Boolean.prototype.toString)





// var getJSON = function(url) {
//   var promise = new Promise(function(resolve, reject){
//     var client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//     function handler() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//   });

//   return promise;
// };

// getJSON("/posts.json").then(function(json) {
//   console.log('Contents: ' + json);
// }, function(error) {
//   console.error('出错了', error);
// });

// var promises = [2, 3, 5, 7, 11, 13].map(function (id) {
//   return getJSON("/post/" + id + ".json");
// });

// Promise.all(promises).then(function (posts) {
//   // ...
// }).catch(function(reason){
//   // ...
// });
// process.on('unhandledRejection', function (err, p) {
//   console.error(err.stack)
// });


// function l(){
// 	return console.log(...arguments);
// }
// const ajax = ({url,success}) => {
// 	const xhr = new XMLHttpRequest;
// 	xhr.onreadystatechange = () => {
// 		if (xhr.readyState ===4 ) {
// 			if(xhr.status === 200){
// 				success(JSON.parse(xhr.responseText));
// 			}else{
// 				error(xhr.responseTxet);
// 			}
// 		}
// 	};
// 	xhr.open("get",url,true);
// 	xhr.send(null);
// };
// ajax({
// 	url:"/api/test/get",
// 	success:function(data){
// 		l(data);
// 	}
// });


// function l(){
// 	return console.log(...arguments);
// }
// const ajax = (url,json) => {
// 	var promise = new Promise((resolve,reject) =>{
// 		const xhr = new XMLHttpRequest;
// 		xhr.onreadystatechange = () =>{
// 			if(xhr.readyState ===4){
// 				if(xhr.status === 200){
// 					resolve(JSON.parse(xhr.responseText));
// 				}else{
// 					reject(new Error(xhr.responseText))
// 				}
// 			}
// 		};
// 		xhr.open(json.method,url,true);
// 		for(let i in json.headers){
// 			xhr.setRequestHeader(i,json.headers[i]);
// 		}
// 		xhr.send(json.method === "get" ? null : json.body)
// 	});
// 	return promise;
// }
// ajax("/api/test/get",{
// 	method : "get",
// 	headers : {
// 		"Content-Type" : "text/plain"
// 	},
// 	body:"len=2"
// }).then(data =>{
// 	l(data);
// }).catch(err =>{
// 	l(err);
// });
// ajax("/api/test/post",{
// 	method : "post",
// 	headers : {
// 		"Content-Type" : "application/x-www-form-urlencoded"
// 	},
// 	body:"len=2"
// }).then(data =>{
// 	l(data);
// }).catch(err =>{
// 	l(err);
// });

// function l(){
// 	return console.log(...arguments);
// }
// const ajax = (url,{method,headers,body}/*解构传入ajax的参数内容*/) => /*ajax方法返回Promise实例对象*/
// 	new Promise((resolve,reject) =>{
// 		const xhr = new XMLHttpRequest;/*最先拿到XHR对象，可以写在Promise里面*/
// 		xhr.onreadystatechange = () =>{
// 			if(xhr.readyState ===4){
// 				if(xhr.status === 200){
// 					resolve({
// 						text :() => new Promise(resolve =>{
// 							resolve(xhr.responseText);
// 						}),
// 						json :() => new Promise((resolve,reject) => {
// 							try{
// 								resolve(JSON.parse(xhr.responseText));
// 							}catch(e){
// 								reject(e);
// 							}
// 						})
// 					});/*resolve成功,这里把JSON.parse拿出来*/
// 				}else{
// 					reject(new Error(xhr.responseText))/*reject抛出错误*/
// 				}
// 			}
// 		};
// 		xhr.open(method || "get",url,true);/*请求方式及地址*/
// 		for(let i in headers){
// 			xhr.setRequestHeader(i,headers[i]);
// 		}/*请求头是对象集合，用for in 循环遍历请求头*/
// 		xhr.send(method === "get" ? null : body)/*判断请求类型发送对应的内容*/
// 	});
	
// ajax("/",{})
// 	.then(({text}) => text())/*上个then后返回是Promise才可以一直接下一个then*/
// 	.then(data =>{
// 		l(data);
// 	})
// 	.catch(err =>{
// 		l(err);
// 	});


