const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
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
        li.innerHTML = nameInput.value + "<br>" + emailInput.value + "<br>" + phoneInput.value;
        let myObj = {
            'name':nameInput.value,
            'email':emailInput.value,
            'phone':phoneInput.value
        }
        let myObj_sreialized = JSON.stringify(myObj);
        localStorage.setItem(nameInput.value,myObj_sreialized)
        console.log(localStorage.getItem(nameInput.value+"rd"))
        userList.appendChild(li);
        nameInput.value='';
        emailInput.value='';
    }
}
