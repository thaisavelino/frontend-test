
/* máscaras */
var formatController = (function() {
	
	
})();

/*Interface*/
var UIController = (function() {
	
	return {
        /*metodo para retornar objeto*/
		getInput: function() {
            return {
                name: document.querySelector('.add_name').value,
                tel: document.querySelector('.add_tel').value,
                email: document.querySelector('.add_email').value
            };
			
		}
	};

})();

/* Geral */
var controller = (function(formatCtrl, UICtrl) {
    var ctrlAddItem = function () {
    	//código ação do click no botão ou tecla ENTER
        var input = UICtrl.getInput();
        console.log(input);

    }
    // coloca o evento para o botão
    document.querySelector('.add_btn').addEventListener('click', ctrlAddItem); // coloca a função add aqui
    // coloca o evento para a tecla ENTER também:
    document.addEventListener('keypress', function(evento) {
    	if (evento.keyCode === 13 || evento.wich === 13){	//wich browser antigo.
    		ctrlAddItem(); // coloca a função add aqui tambem
    	}
    });
        
})(formatController, UIController);

