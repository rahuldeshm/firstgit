//EXAMINE THE DOCUMENTS

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title="rahul deshmukh"
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.links);
// document.all[10].textContent ="Hello"

//GET ELEMENT BY ID
// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// // console.log(headerTitle)
// // // headerTitle.textContent="Hello"
// // // headerTitle.innerText="Hello rahul"

// // console.log(headerTitle.innerText)//on the site
// // console.log(headerTitle.textContent)//all text content in html file
// // headerTitle.innerHTML='<h3> Hello HTML</h3>';
// // headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 3px #000';

//GET ELEMENTS BY CLASS NAME
// var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // items[1].textContent = 'Hello two';
// // items[1].style.fontWeight = "bold" ;
// // items[1].style.backgroundColor = "yellow" ;

// // items.style.backgroundColor = "yellow" ;


// for (var i =0;i<items.length;i++){
//     items[i].style.backgroundColor='yellow';
// }
// var tit =document.getElementsByClassName('title');
// console.log(tit)
// tit[0].style.fontWeight='bold';
// tit[0].style.color='green';

//GET ELEMENT BY TAG NAME
// var li = document.getElementsByTagName("li");
// // // console.log(li);
// // // console.log(li[1]);
// // li[1].textContent = "";
// // li[1].style.fontWeight = 'bold';
// // li[1].style.backgroundColor ='yellow';

// for (var i=0;i<li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//QUERY SELECTOR
// var header = document.querySelector("#main-header");
// header.style.borderBottom = 'solid 5px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "addto";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor = "green";
// var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.textContent = "";

// //QUERYSELECTORALL
// var items = document.querySelectorAll('.list-group-item');
// // console.log(titles);
// items[1].style.color = 'green';

// var odd =document.querySelectorAll('li:nth-child(odd)');


// for (var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
// }
//QUERYSELECTORALL
// var even =document.querySelectorAll('li:nth-child(even)');


// for (var i=0;i<even.length;i++){
//     even[i].style.backgroundColor = '#ccc';
// }
// // TRANVERSING THE DOM//
var itemlist = document.querySelector('#items');
// // console.log(itemlist.parentNode);
// // itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemlist.parentNode.parentNode)
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentElement.parentNode)

//CHILDNODE//
// console.log(itemlist.childNodes) //USE CHLIDREN
//CHILDREN//
// console.log(itemlist.children)
// console.log(itemlist.children[1])
// itemlist.children[2].style.backgroundColor = 'yellow';

// //firstchild
// console.log(itemlist.firstChild);
// //firstelement child
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello 1';

//lastChild
// console.log(itemlist.lastChild);
// //lastelement child
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Hello 1';

// //NEXT SIBILING//
// console.log(itemlist.nextSibling);
// //NEXTELEMENTSINLING
// console.log(itemlist.nextElementSibling);
// //PREVIOUS SIBILING//
// console.log(itemlist.previousSibling);
// //PREVIOUSELEMENTSINLING
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = 'green';

// CREATE ELEMENT//
var newDiv = document.createElement('div');

// ADD CLASS//
newDiv.className = 'hello';

//ADD ID//
newDiv.id = 'hello1';

// ADD ATTRIBUTES//
newDiv.setAttribute('title','Hello world');

// ADD TEXT TO DIV //
// CREATE TEXTNODE//

var newDivText = document.createTextNode("Hello World");

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
var contain = document.querySelector('header container');
var h = document.querySelector('header ul');
contain.insertBefore(newDiv, h);


console.log(newDiv);