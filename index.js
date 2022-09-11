let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let workingStatusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let myFormEl = document.getElementById("myForm");

let formData = {
  name: "",
  email: "",
  status: "Active",
  gender: "Male"
};
nameEl.addEventListener("change",function(event){
    formData.name=event.target.value;
})
emailEl.addEventListener("change",function(event){
    formData.email=event.target.value;
})
workingStatusEl.addEventListener("change",function(event){
    formData.status=event.target.value;
})

genderFemaleEl.addEventListener("change",function(event){
    formData.gender=event.target.value;
})

genderMaleEl.addEventListener("change",function(event){
    formData.gender=event.target.value;
})

myFormEl.addEventListener("submit",function(event){
    event.preventDefault();
    if(formData.name===""){
        nameErrMsgEl.textContent="Required *";
    }
    if(formData.email===""){
        emailErrMsgEl.textContent="Required *";
    }
    let url="https://gorest.co.in/public-api/users";
let options={
    method:"POST",
    headers:{
    "Content-Type":"application/json",
    Accept:"application/json",
    Authorization:"Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f"
    
},
body:JSON.stringify(formData)
}
fetch(url,options)
.then(function(response){
        return response.json();
})
.then(function(data){
       console.log(data);
       if(data.code===422){
           if(data.data[0].message==="has already been taken"){
               emailErrMsgEl.textContent="Email Already Exists";
               
           }
       }
       if(data.code===201){
           nameEl.value="";
           emailEl.value="";
           emailErrMsgEl.textContent="";
       }
});
});




