// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

knex('bicicletas').select('*').then(function(projectNames){
    //do something here

    /*
    console.log(projectNames);
    console.log("------------------------------");
    console.log(projectNames[0]);
    console.log("------------------------------");
    console.log(projectNames[0].id);
    console.log(projectNames[0].color);
    console.log(projectNames[0].modelo);
    console.log(projectNames[0].lon);
    console.log(projectNames[0].lat);*/

    //Añadir un par de bicis:
    let b1 = new Bicicleta(projectNames[0].id, projectNames[0].color, projectNames[0].modelo, [projectNames[0].lat, projectNames[0].lon])
    let b2 = new Bicicleta(projectNames[1].id, projectNames[1].color, projectNames[1].modelo, [projectNames[1].lat, projectNames[1].lon])

    Bicicleta.add(b1)
    Bicicleta.add(b2)

});




let Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id
    this.color = color
    this.modelo = modelo
    this.ubicacion = ubicacion
}

Bicicleta.create = function(bici){

    console.log("CREATE_id:"+bici.id+"------------------------------");

    return knex('bicicletas')
      .insert({
        id: bici.id,
        modelo: bici.modelo,
        color: bici.color,
        lat: bici.lat,
        lon: bici.lon
      });
  }

Bicicleta.delete = function(id){

console.log("Delete_id:"+id+"------------------------------");

return knex('bicicletas')
    .delete()
    .where('id', id);

}

Bicicleta.update = function(bici){

    console.log("Update_id:"+bici.id+"------------------------------");
    
    knex('bicicletas')
    .where({ id: bici.id })
    .update({color: bici.color, modelo: bici.modelo, lon: bici.lon, lat: bici.lat})
}

Bicicleta.prototype.toString = function(){
    return `Id: ${this.id}, color: ${this.color}`
}

Bicicleta.allBicis = []

Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici)
}

//Añadir un par de bicis:
//let b1 = new Bicicleta(1, 'rojo', 'bmx', [19.284770943610578, -99.13729060406136])
//let b2 = new Bicicleta(2, 'blanca', 'Benotto', [19.286055116801744, -99.1369912899661])

//Bicicleta.add(b1)
//Bicicleta.add(b2)

//Eliminar
Bicicleta.findById = function(aBiciId){
    let aBici = Bicicleta.allBicis.find(x => x.id == aBiciId)
    if(aBici){
        return aBici
    }
    else{
        throw new Error(`No existe una bici con el id: ${aBiciId}`)
    }
}

Bicicleta.removeById = function(aBiciId){
    for(let i = 0; i < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBiciId){
            //Borrar
            Bicicleta.allBicis.splice(i, 1)
            break
        }
    }
}

module.exports = Bicicleta