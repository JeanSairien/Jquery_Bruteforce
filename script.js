var dico = [];
var result = {};



            
    
    $.ajax({
       url:'http://docusland.fr/code-academie/js_bruteforce/data/dico.txt' ,// La ressource ciblée
            complete: function(result){ 
                dico = result.responseText.split("\n");
					}
                
   							
   							 
                

                console.log(dico.txt)


              
	var result = [$("#resultat").load("dico.txt");];  




	
function TraitPass(){

	var i = 0;
	do while (result =="Erroneous password");
		url: 'http://docusland.fr/code-academie/js_bruteforce' ,//en envoie le resultat
		type: "POST",
		password: dico,
		var i =dico[i];
		i++;





}





function PassTest(password){
        url : "http://docusland.fr/code-academie/js_bruteforce/index.php",
        type: "POST",
        password: password,
        traitement: function(result){
            
        }

}
   


//il semblerais qu'il faille incrementé le contenue du dico apres une methode http get 
//dont je ne connait pas la syntax exact ... 
//puis renvoyer le resultat apres incrementation au serveur avec methode post !!! 





//http://chez-syl.fr/2012/01/envoyer-un-formulaire-en-ajax-avec-jquery-et-json/
