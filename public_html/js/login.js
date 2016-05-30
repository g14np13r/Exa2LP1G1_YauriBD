$(document).ready(function(){    
    $("#boton").click(function(){       
        if(user!=='' & pass!==''){
            var user = $("#user").val();
            var pass = $("#pass").val();
            var datos= 'user='+user+' pass='+pass;
            $.ajax({
                type: 'POST',
                url: "index.html",
                data: datos,
                cache: false,
                sucess: function(data,textStatus,jqXHR){
                    
                }
            });
            alert(datos);
            window.location("prueba.html");
        }else{
            window.location("index.html");
        }
    });
});

