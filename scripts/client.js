let results = document.querySelector('#results')

function getInfo(link,name){
    results.innerHTML = ' '
    $.ajax({
        url:link,
        type:"GET",
        datatype:"JSON",
        name: name,
        success:function(response){
            console.log(response);
            showInfo(response.items, name)
        }
    });
}

function showInfo(items, name){
    if(name === 'clients'){
        if(items.length <= 0){
            results.innerHTML = '<h2>No hay datos en la tabla</h2>'
        }else{
            items.forEach(client => {
                results.innerHTML += `
                <form action="" class="">
                    <div class="mb-3">
                        <label for="id" class="form-label">ID</label>
                        <input type="number" name="id" id="id" class="form-control" value="${client.id}" disabled>
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" name="name" id="name" class="form-control" value="${client.name}">
                    </div>
                    <div class="mb-3">
                        <label for="mail" class="form-label">Email</label>
                        <input type="email" name="mail" id="mail" class="form-control" value="${client.email}">
                    </div>
                    <div class="mb-3">
                        <label for="age" class="form-label">Edad</label>
                        <input type="text" name="age" id="age" class="form-control" value="${client.age}">
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-outline-danger" onclick="borrar(${client.id})">Borrar</button>
        
                        <button class="btn btn-outline-primary">Actualizar</button>
                    </div>
                </form>
                <hr>   
                `
            });
        }
    }else if(name === 'cloud'){
        if(items.length <= 0){
            results.innerHTML = '<h2>No hay datos en la tabla</h2>'
        }else{
            items.forEach(cloud => {
                results.innerHTML += `
                <form action="" class="">
                    <div class="mb-3">
                        <label for="id" class="form-label">ID</label>
                        <input type="number" name="id" id="id" class="form-control" value="${cloud.id}" disabled>
                    </div>
                    <div class="mb-3">
                        <label for="brand" class="form-label">Brand</label>
                        <input type="text" name="brand" id="brand" class="form-control" value="${cloud.brand}">
                    </div>
                    <div class="mb-3">
                        <label for="category_id" class="form-label">Category_idl</label>
                        <input type="number" name="category_id" id="category_id" class="form-control" value="${cloud.category_id}">
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" name="name" id="name" class="form-control" value="${cloud.name}">
                    </div>
                    <div class="mb-3">
                        <a class="btn btn-outline-danger" onclick="deleteAction('${cloud.id}', 'https://g501f2eee1fb184-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud','cloud')">Borrar</a>
        
                        <button class="btn btn-outline-primary">Actualizar</button>
                    </div>
                </form>
                <hr>   
                `
            });
        }
    }else if(name === 'message'){
        if(items.length <= 0){
            results.innerHTML = '<h2>No hay datos en la tabla</h2>'
        }else{
            items.forEach(message => {
                results.innerHTML += `
                <form action="" class="">
                    <div class="mb-3">
                        <label for="id" class="form-label">ID</label>
                        <input type="number" name="id" id="id" class="form-control" value="${message.id}" disabled>
                    </div>
                    <div class="mb-3">
                        <label for="messagetext" class="form-label">Mensaje</label>
                        <input type="text" name="messagetext" id="messagetext" class="form-control" value="${message.messagetext}">
                    </div>
                    <div class="mb-3">
                        <a class="btn btn-outline-danger" onclick="deleteAction('${message.id}', 'https://g501f2eee1fb184-retos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/:id', 'message')">Borrar</a>
        
                        <button class="btn btn-outline-primary">Actualizar</button>
                    </div>
                </form>
                <hr>   
                `
            });
        }
    }
}


function save(link, name){
    event.preventDefault() 
    let myData;
    if(name === 'client'){
        myData={         
            id: $("#id").val(),        
            name:$("#name").val(),
            email:$("#email").val(),
            age:$("#age").val(),    
        };     
        let dataToSend=JSON.stringify(myData);    
        $.ajax({         
            url:link,
            type:"POST",         
            data:dataToSend,         
            contentType: "application/JSON",
            dataType: "JSON",        
            success:function(){
                alert("Se ha guardado la información")                                         
                getInfo(link,name);                 
            }         
        });
    }else if(name === 'cloud'){
        myData={         
            id: $("#id").val(),        
            brand:$("#brand").val(),
            category_id:$("#category_id").val(),
            name:$("#name").val(),  
        };     
        let dataToSend=JSON.stringify(myData);    
        $.ajax({         
            url:link,
            type:"POST",         
            data:dataToSend,         
            contentType: "application/JSON",
            dataType: "JSON",        
            success:function(){
                alert("Se ha guardado la información")                                         
                getInfo(link,name);                 
            }         
        });
    }else if(name === 'message'){
        myData={         
            id: $("#id").val(),        
            messagetext:$("#messagetext").val()  
        };     
        let dataToSend=JSON.stringify(myData);    
        $.ajax({         
            url:link,
            type:"POST",         
            data:dataToSend,         
            contentType: "application/JSON",
            dataType: "JSON",        
            success:function(){
                alert("Se ha guardado la información")                                         
                getInfo(link,name);                 
            }         
        });
    }
}

function deleteAction(elementId, link, name){
    let id = {id: elementId}
    id = JSON.stringify(id)
    $.ajax({
        url: link,
        type: "DELETE",
        data: id,
        contentType: "application/JSON",
        dataType: "JSON",
        success: function(response){
            getInfo(link,name)
            alert('eliminado')
        }
    })

}