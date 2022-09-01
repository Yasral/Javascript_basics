// Suppression du rafraichissement de la page ( comportement par defaut du formulaire)

var form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
})


// Recuperation des differents boutons

var comparaison = document.querySelector('#comparaison');
var somme = document.querySelector('#somme');
var multiplication = document.querySelector('#multiplication');

// Fonction qui affiche le chiffre le plus petit dans la barre de resultat
comparaison.addEventListener('click', (e)=>{

    var nbre1 = document.querySelector('#nombre1').value;
    var nbreConv1 = nbre1 - 0;

    var nbre2 = document.querySelector('#nombre2').value;
    var nbreConv2 = nbre2 - 0;

    var nbre3 = document.querySelector('#nombre3').value;
    var nbreConv3 = nbre3 - 0;

    var resultat = document.querySelector('#resultat');

    if(nbreConv1 < nbreConv2 && nbreConv1 < nbreConv3){
        resultat.innerHTML = "Resultat : " + nbreConv1;
    }
    
    if(nbreConv2 < nbreConv1 && nbreConv2 < nbreConv3){
        resultat.innerHTML = "Resultat : " + nbreConv2;
    }

    if(nbreConv3 < nbreConv1 && nbreConv3 < nbreConv2){
        resultat.innerHTML = "Resultat : " + nbreConv3;    
    }
});


// Fonction qui affiche le chiffre le plus grand dans la barre de resultat
comparaison.addEventListener('dblclick', (e)=>{

    var nbre1 = document.querySelector('#nombre1').value;
    var nbreConv1 = nbre1 - 0;

    var nbre2 = document.querySelector('#nombre2').value;
    var nbreConv2 = nbre2 - 0;

    var nbre3 = document.querySelector('#nombre3').value;
    var nbreConv3 = nbre3 - 0;

    var resultat = document.querySelector('#resultat');

    if(nbreConv1 > nbreConv2 && nbreConv1 > nbreConv3){
        resultat.innerHTML = "Resultat : " + nbreConv1;
    }
    
    if(nbreConv2 > nbreConv1 && nbreConv2 > nbreConv3){
        resultat.innerHTML = "Resultat : " + nbreConv2;
    }

    if(nbre3 > nbreConv1 && nbreConv3 > nbreConv2){
        resultat.innerHTML = "Resultat : " + nbreConv3;    
    }
});

// Fonction qui affiche la somme des 3 chiffres dans la barre de resultat
somme.addEventListener('click', (e)=>{

    var nbre1 = document.querySelector('#nombre1').value;
    var nbreConv1 = nbre1 - 0;

    var nbre2 = document.querySelector('#nombre2').value;
    var nbreConv2 = nbre2 - 0;

    var nbre3 = document.querySelector('#nombre3').value;
    var nbreConv3 = nbre3 - 0;

    var resultat = document.querySelector('#resultat');

    var sum = nbreConv1 + nbreConv2 + nbreConv3;

    resultat.innerHTML = "Resultat : " + sum;
});


// Fonction qui affiche la multiplication des 3 chiffres dans la barre de resultat
multiplication.addEventListener('click', (e)=>{

    var nbre1 = document.querySelector('#nombre1').value;
    var nbreConv1 = nbre1 - 0;

    var nbre2 = document.querySelector('#nombre2').value;
    var nbreConv2 = nbre2 - 0;

    var nbre3 = document.querySelector('#nombre3').value;
    var nbreConv3 = nbre3 - 0;

    var resultat = document.querySelector('#resultat');

    var mult = nbreConv1 * nbreConv2 * nbreConv3;

    resultat.innerHTML = "Resultat : " + mult;
});