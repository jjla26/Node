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

let getEmpleado = id => {

    return new Promise((resolve, reject ) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        
        if( !empleadoDB ){
            reject(`No existe empleado`)
        }else{
            resolve(empleadoDB)
        }
    })
}

let getSalario = empleado => {

    return new Promise( (resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id )
    
        if (!salarioDB){
            reject(`No se encontro salario para el empleado ${empleado.nombre}`)
        }else{
            resolve({salario: salarioDB.salario, nombre: empleado.nombre})
        }
    })
}

/*getEmpleado(2).then(empleado => {
    console.log("Empleado de BBDD", empleado)
    getSalario(empleado).then( salario => {
        console.log(`el salario de ${salario.nombre}  es ${salario.salario}`)
    }, err => console.log(err))
}, err => console.log(err))*/

getEmpleado(5).then(empleado => {

    return getSalario(empleado)

}).then(salario => {
    console.log(`el salario de ${salario.nombre}  es ${salario.salario}`)
}).catch(err => {
    console.log(err)
})