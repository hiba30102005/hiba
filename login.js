const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("btn");

button.addEventListener("click", function () {

    const emailValue = email.value;
    const passwordValue = password.value;

    // Vérification
    if (emailValue === "" || passwordValue === "") {
        alert("Veuillez remplir tous les champs");
        return;
    }

    // Récupérer utilisateurs
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Vérifier utilisateur
    const user = users.find(u => 
        u.email === emailValue &&
        u.password === passwordValue
    );

    if (user) {
        alert("Connexion réussie !");
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "home.html";
    } else {
        alert("Email ou mot de passe incorrect !");
    }
});