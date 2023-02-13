const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const msg = document.querySelector(".msg");
var userList = document.querySelector("#users");

//EVENT LISTENER FOR SUBMIT BUTTON 
myForm.addEventListener('submit',onSubmit);

//FUNCTION FOR SUBMIT BUTTON

function onSubmit(e){

    e.preventDefault();


    if (nameInput.value==="" || emailInput.value===""){
        msg.classList.add("error");
        msg.innerHTML="please Enter All Fields";
        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        const deletebtn = document.createElement("button");
        const editbtn = document.createElement("button");
        deletebtn.className="dbtn"
        // deletebtn.value="delete"
        deletebtn.innerHTML="X";
        
        editbtn.className="ebtn"
        editbtn.innerHTML="Edit";
        li.innerHTML = "      Name of user : "+nameInput.value + "<br>" +"    Email of user : " +emailInput.value + "<br>" + "    Phone of user : " + phoneInput.value;
        li.appendChild(deletebtn)
        li.appendChild(editbtn)
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
        deletebtn.onclick=() =>{
        localStorage.removeItem(myObj.email)
        userList.removeChild(li)
        }
        editbtn.onclick=() =>{
        localStorage.removeItem(myObj.email)
        nameInput.value=myObj.name;
        emailInput.value=myObj.email;
        phoneInput.value=myObj.phone;
        userList.removeChild(li)

        }
    }
}
