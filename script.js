$("button").click(function(){
   $.ajax({url: "http://docusland.fr/code-academie/js_bruteforce/dico.txt", success: function(result){
       $("#resultat").html(result);
   }});
});


/*$("#resultat").load("dico.txt");*/



