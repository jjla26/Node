setTimeout( () => { console.log("hola mundo")}, 3000  )

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: "Julio",
        id,
    }

    if(id === 20){
        callback(`el usuario con id ${id}, no existe en la BBDD`)
    }else{
        callback(null,usuario);

    }


}

getUsuarioById(1, (err, usuario) => {

    if(err){
        return console.log(err)
    }

    console.log("usuario en BBDD", usuario)
})