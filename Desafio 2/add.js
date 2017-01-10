
// cria objeto com aray de contatos
var list = [
	/* *** Teste de Exibição *** */
	/*{"nome":"Thais", "telefone":"(11)99999-9999", "email":"thais@gmail.com"},
	{"nome":"Tamires", "telefone":"(11)99999-9999", "email":"tamires@gmail.com"},
	{"nome":"Teste", "telefone":"(11)99999-9999", "email":"teste@gmail.com"}*/
];

// soma total de contatos
function getTotal(list){
	var total = 0;
	for(var key in list){
		total += 1;
	}
	return total;
}

//adiciona dados do contato no HTML
function setList(list){
	var table = '';
    for(var key in list) {
    	table += '<div class="item clearfix" id="item-0"><div class="item_name">'+formatName(list[key].nome)+'</div><div class=""><div class="item_tel">'+ list[key].telefone+'</div><div class="item_email">'+ list[key].email+'</div></div></div>';
    }
    document.getElementById("list").innerHTML = table;
}
//deixa primeira letra maiuscula
function formatName(nome){
	var str = nome.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}
// retorna inteiro telefone
/*function formatTel(telefone){
	return parseInt(telefone);
}*/

function validation() {
	var name = document.getElementById("nome").value;
	var telefone = document.getElementById("telefone").value;
	var email = document.getElementById("email").value;
	var error = "";
	
	document.getElementById("error_container").style.display = "none";

	if(name === "") {
		error += '<p>- Digite o Nome. </p>';
	}
	if(telefone === "") {
		error += '<p>- Digite o Telefone. </p>';
	}/*else	if (telefone.value.length < 15) {
		error += '<p>Adicione o Telefone completo.</p>';
	}*/
	if(email === "") {
		error += '<p>- Digite o E-mail. </p>';
	}

	if(error != "") {
		document.getElementById("error_container").style.display = "block";
		document.getElementById("error").innerHTML = "<h3>Ops! </h3>" + error;
		return 0;
	}else {
		return 1;
	}
}

 	
         
/* mascara telefone*/
/* Máscaras ER */
	function mascara(o,f){
	    v_obj=o
	    v_fun=f
	    setTimeout("execmascara()",1)
	}
	function execmascara(){
	    v_obj.value=v_fun(v_obj.value)
	}
	function mtel(v){
	    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
	    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
	    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
	    return v;
	}
	function id( el ){
		return document.getElementById( el );
	}
	window.onload = function(){
		id('telefone').onkeyup = function(){
			mascara( this, mtel );
		}
	}
/* fim - mascara telefone*/

/* função botão pega dados e adiciona no array do objeto */
function addData(){
	if(!validation()){
		return;
	}
	var name = document.getElementById("nome").value;
	var telefone = document.getElementById("telefone").value;
	var email = document.getElementById("email").value;
	/* pega os dados */
	list.unshift({"nome":name , "telefone":telefone , "email":email});
	/*adiciona no html*/
	setList(list);
}

function resetData(){
	document.getElementById("nome").value = "";
	document.getElementById("telefone").value = "";
	document.getElementById("email").value = "";

	document.getElementById("error_container").style.display = "none";

}

setList(list);
console.log(getTotal(list));
