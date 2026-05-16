const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("btn");

button.addEventListener("click", function () {

    const nomValue = nom.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    // Vérifier les champs
    if (nomValue === "" || emailValue === "" || passwordValue === "") {
        alert("Veuillez remplir tous les champs");
        return;
    }

    // Récupérer les utilisateurs existants
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Ajouter le nouvel utilisateur
    users.push({
        nom: nomValue,
        email: emailValue,
        password: passwordValue
    });

    // Sauvegarder dans localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Message succès
    alert("Inscription réussie !");

    // Réinitialiser les champs
    nom.value = "";
    email.value = "";
    password.value = "";
});