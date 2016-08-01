$("button").click(function(){
   $.ajax({url: "http://docusland.fr/code-academie/js_bruteforce/dico.txt", success: function(result){
       $("#resultat").html(result);
   }});
});

var result = [$("#resultat").load("dico.txt");];

//il semblerais qu'il faille incrementé le contenue du dico apres une methode http get ou post
//dont je ne connait pas la syntax exact ... 


$(document).ready(function() {
    // Lorsque je soumets le formulaire
    $('#resultat').on('submit', function(e) {
        e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire
 
        var $this = $(this); // L'objet jQuery du formulaire
 
        // Je récupère les valeurs

        var result = $('#resultat').val();
        	for(i=0,i<6;i++);
 
        // Je vérifie une première fois pour ne pas lancer la requête HTTP
        // si je sais que mon PHP renverra une erreur
        if(pseudo === '' || mail === '') {
            alert('Les champs doivent êtres remplis');
        } else {
            // Envoi de la requête HTTP en mode asynchrone
            $.ajax({
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                type: $this.attr('method'), // La méthode indiquée dans le formulaire (get ou post)
                data: $this.serialize(), // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
                success: function(html) { // Je récupère la réponse du fichier PHP
                    alert(html); // J'affiche cette réponse
                }
            });
        }
    });
});


//http://chez-syl.fr/2012/01/envoyer-un-formulaire-en-ajax-avec-jquery-et-json/
