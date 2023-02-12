const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
var lList = document.querySelectorAll("li")
// ADDING DELETE BUTTON TO EACH ITEM
for (var i =0;i<lList.length;i++){
    var editbutton = document.createElement("button");
    editbutton.className="dbtn";
    editbutton.appendChild(document.createTextNode("X"));
    lList[i].appendChild(editbutton)
}

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){

    e.preventDefault();


    if (nameInput.value==="" || emailInput.value===""){
        msg.classList.add("error");
        msg.innerHTML="please Enter All Fields";
        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        const deletebtn = document.createElement("button");
        deletebtn.className="dbtn"
        deletebtn.innerHTML="X";
        li.innerHTML = "      Name of user : "+nameInput.value + "<br>" +"    Email of user : " +emailInput.value + "<br>" + "    Phone of user : " + phoneInput.value;
        li.appendChild(deletebtn)
        let myObj = {
            'name':nameInput.value,
            'email':emailInput.value,
            'phone':phoneInput.value
        }
        let myObj_sreialized = JSON.stringify(myObj);
        localStorage.setItem(emailInput.value,myObj_sreialized)
        // console.log(localStorage.getItem(emailInput.value+"rd"))
        userList.appendChild(li);
        nameInput.value='';
        emailInput.value='';
        phoneInput.value="";
    }
}
