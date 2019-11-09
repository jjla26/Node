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

    let empleadoDB = empleados.find(empleado => empleado.id === id)
    
    if( !empleadoDB ){
        throw new Error(`No existe empleado`)
    }else{
        return empleadoDB
    }
}

let getSalario = empleado => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id )

    if (!salarioDB){
        throw new Error(`No se encontro salario para el empleado ${empleado.nombre}`)
    }else{
        return ({salario: salarioDB.salario, nombre: empleado.nombre})
    }
}

/*getEmpleado(5).then(empleado => {

    return getSalario(empleado)

}).then(salario => {
    console.log(`el salario de ${salario.nombre}  es ${salario.salario}`)
}).catch(err => {
    console.log(err)
})*/


getInformacion = async id => {
    let empleado = await getEmpleado(id)
    let resp = await getSalario(empleado)
    return `${resp.nombre} tiene un salario de ${resp.salario}`
}

/*getInformacion(4)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err))*/

let getInformacionTry = async id => {
    try {
        let empleado = await getEmpleado(id)
        let resp = await getSalario(empleado)
        console.log(`${resp.nombre} tiene un salario de ${resp.salario}`)
    } catch (error) {
        console.log(error)
    }
}

getInformacionTry(4)
    