let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function(){
        return `${ this.nombre }`
    }
}

console.log( deadpool.getNombre() )

const { nombre, apellido, poder } = deadpool

console.log(nombre, apellido, poder)