	function pesquisar(){
		var telefone = $('#telefone').val();
		var request = "http://192.168.0.239/operadora.php?tel1="+telefone;
		$.post(request, function(retorno){
			objretorno = json.decode(retorno);
			$('#resposta').val() = objretorno;
		});
	}