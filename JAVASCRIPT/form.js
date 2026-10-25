let nameTextBox=document.getElementById("name");
let numberTextBox=document.getElementById("number");
let emailTextBox=document.getElementById("email");
let passwordTextBox=document.getElementById("password");
let cpasswordTextBox=document.getElementById("cpassword");

function reg(e){
    e.preventDefault();
    let name=nameTextBox.value 
    let number=numberTextBox.value 
    let email=emailTextBox.value 
    let password=passwordTextBox.value 
    let cpassword=cpasswordTextBox.value 

    //validation

    if(name=="" || email=="" || number=="" || password=="" || cpassword==""){
        alert("please fill all the details")
        return;
    }

    //regex

    let numberRegex=/^[6-9][0-9]{9}$/;
    let numberResult=numberRegex.test(number)
    if(numberResult == false){
        alert("check your number")
        return;
    }

    if(password!=cpassword){
        alert("password is not matching");
        return;
    }

    let obj={name,number,email,password}
    console.log(obj);
    alert("reg success");

}

