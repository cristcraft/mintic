let results = document.querySelector('#results')

function getInfo(link,name){
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
    }else if(name === 'cloud'){
        items.forEach(cloud => {
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
    }else if(name === 'message'){
        items.forEach(message => {
            results.innerHTML += `
            <form action="" class="">
                <div class="mb-3">
                    <label for="id" class="form-label">ID</label>
                    <input type="number" name="id" id="id" class="form-control" value="${message.id}" disabled>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Mensaje</label>
                    <input type="text" name="name" id="name" class="form-control" value="${message.messagetext}">
                </div>
                <div class="mb-3">
                    <button class="btn btn-outline-danger" onclick="borrar(${message.id})">Borrar</button>
    
                    <button class="btn btn-outline-primary">Actualizar</button>
                </div>
            </form>
            <hr>   
            `
        });
    }
}

function save(link,name){
    event.preventDefault()  
    let data;
    if(name === 'client'){
        data = {
            id: $('#id').val(),
            name: $('#name').val(),
            email: $('#email').val(),
            age: $("#age").val()
        }
    }else if(name === 'cloud'){
        data = {
            id: $('#id').val(),
            name: $('#name').val(),
            email: $('#email').val(),
            age: $("#age").val()
        }
    }else if(name === 'message'){
        data = {
            id: $('#id').val(),
            messagetext: $('#messagetext').val()
        }
    }

    let dataToSend = JSON.stringify(data);
    console.log(dataToSend, link)

    $.ajax({
        url:link,
        type: "POST",
        data: dataToSend,
        datatype: "JSON",
        success: function(response){
            $('#id').val(""),
            $('#messagetext').val("")
            getInfo(link,name);
            alert('Se ha guardado')
        }
        }
    )
}