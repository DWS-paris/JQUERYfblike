// Attendre le chargement du DOM
$(document).ready(function(){

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
                    console.log('Utilisateur connecté');
                    $('main').html('<section><p>Utilisateur connecté<p></section>')

                } else{
                    console.log('Utilisateur inconnu');
                    $('main').html('<section><p>Utilisateur inconnu<p></section>')
                };


            },
            error: function(err){
                // Déclenchée si le header de la requête est erroné
                console.log(err);
            }

        });

    });


})
