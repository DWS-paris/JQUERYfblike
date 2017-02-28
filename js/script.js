// Attendre le chargement du DOM
$(document).ready(function(){

    // Fermer les popIns
    $('header aside a').click(function(evt){
        evt.preventDefault();
        $(this).parent().parent().fadeOut(500);
    });


    // Faire une reqête Ajax en POST déclenchée par la soumission d'un formulaire
    $('header form').submit(function(evt){
        evt.preventDefault();

        $.ajax({

            // Header de la requête
            url: 'connexion.php',
            type: 'POST',
            // La méthode POST envoie des données dans le fichier référencé dans l'URL
            data: $('form').serialize(),

            // Corps de la requête
            success: function(data){
                
                // Vérifier le retour du PHP
                if(data == 1){
                    $('header aside p').text('Vous êtes à présent connecté')
                    $('header aside').fadeIn(500);

                } else{
                    $('header aside p').text('Vos identifiants ne sont pas reconnus')
                    $('header aside').fadeIn(500);
                };


            },
            error: function(err){
                // Déclenchée si le header de la requête est erroné
                console.log(err);
            }

        });

    });


})
