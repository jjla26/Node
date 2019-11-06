let empleados = [
    {
        id:1,
        nombre: "Julio"
    },
    {
        id:2,
        nombre:"Kristina"
    },
    {
        id:3,
        nombre:"jose"
    }
]

let salarios = [
    {
        id: 1,
        salario: 2000
    },
    {
        id: 2,
        salario: 3000
    }
]

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    
    if( !empleadoDB ){
        callback(`No existe empleado`)
    }else{
        callback(null, empleadoDB)
    }
}

let getSalario = (empleado, callback ) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id )

        if (!salarioDB){
            callback(`No se encontro salario para el empleado ${empleado.nombre}`)
        }else{
            callback(null, {salario: salarioDB.salario, nombre: empleado.nombre})
        }

    }

getEmpleado(1, (err, empleado) => {
    if (err){
        return console.log(err)
    }
    
    getSalario( empleado, (err, resp) => {
        if(err){
            return console.log(err)
        }

        console.log(`el salario de ${resp.nombre} es ${resp.salario}`)
    })

})
