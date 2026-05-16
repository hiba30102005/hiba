const nom=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const button=document.getElementById("btn");
button.addEventListener("click",function(){
    if(nom.value=="" || email.value=="" || password.value==""){
        alert("veuillez remplir tous les champs");
    }else{
        alert("inscription réussie!"+ " nom: "+nom.value + "email: "+email.value + " password: "+password.value );
    }
});