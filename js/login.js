//Armazenamento de dados no localstorage
function validateForm(){

    let data=localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : [];;
    let formData ={
            "name":document.getElementById("uName").value,
            "email":document.getElementById("uEmail").value,
            "contactno":document.getElementById("uContactno").value,
            "password":document.getElementById("uPassword").value,
            "confirmpassword":document.getElementById("confirmPassword").value
        }
        data.push(formData);
        if(localStorage){
            localStorage.setItem("details", JSON.stringify(data));
        } 
}