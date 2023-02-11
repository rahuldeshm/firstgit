// console.log(document.getElementById("my-form"))//single
// console.log(document.querySelector("h1"))//single
// console.log(document.querySelectorAll("li"))//multiple

//selecting***********^^^

// const items=document.querySelectorAll("li");
// items.forEach((item) => console.log(item));

//performing loop on selected list from Nodelist*************^^

// const ul = document.querySelector(`.items`);
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.firstElementChild.style.color = "green";
// ul.children[1].style.color = "yellow";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML="<h1>Hello</h1>";

//removing items of dom**************^^^
const btn = document.querySelector(`.btn`);
// btn.style.background = 'red';

// btn.addEventListener("click",(e) => {
//     e.preventDefault();
//     // console.log("click");
//     document.querySelector("#my-form").style.background="red";
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML="<h1>Hello world</h1>";
// });

// btn.addEventListener("mouseout",(e) => {
//     e.preventDefault();
//     // console.log("click");
//     document.querySelector("#my-form").style.background="red";
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML="<h1>Hello world</h1>";
// });
//

// btn.addEventListener("mouseover",(e) => {
//     e.preventDefault();
//     // console.log("click");
//     document.querySelector("#my-form").style.background="red";
//     document.querySelector('body').classList.add('bg-dark')
//     // document.querySelector('.items').lastElementChild.innerHTML="<h1>Hello world</h1>";
// });
// //
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){

    e.preventDefault();


    if (nameInput.value==="" || emailInput.value===""){
        msg.classList.add("error");
        msg.innerHTML="please Enter All Fields";
        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        localStorage.setItem(nameInput.value,emailInput.value)
        userList.appendChild(li);
        nameInput.value='';
        emailInput.value='';
    }
}
