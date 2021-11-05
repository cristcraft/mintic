function getInfo(){
    $.ajax({
        url:"https://gb90df9e48e3fb8-db202109250852.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/room/room",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaRoom(respuesta.items)
        }

    });
}
