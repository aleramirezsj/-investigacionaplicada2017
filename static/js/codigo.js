$(document).ready(
	function ()
	{
            $("#txtCadenaBusqueda").bind("keyup",refrescarTabla);
	}
	);

function refrescarTabla()
{
	var textoBusqueda=$("#txtCadenaBusqueda").val();
	$.ajax({ 
		url: "listarclientes.php",
		data: "txtCadenaBusqueda="+textoBusqueda, 
		type: "POST", 
		success:  function(datos){
			$("#listadoclientes").fadeOut(200);
			$("#listadoclientes").empty();
			$("#listadoclientes").append(datos);
			$("#listadoclientes").fadeIn();

		}});
}

