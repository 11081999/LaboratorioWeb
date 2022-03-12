let Bicicleta = function(id, color, modelo, ubicacion){
  this.id= id;
  this.color= color;
  this.modelo= modelo;
  this.ubicacion= ubicacion;
}

Bicicleta.prototype.toString = function(){
  return `id: ${this.id} | color: ${this.color}`
}

Bicicleta.allBicis = []

Bicicleta.add = function(aBici){
  Bicicleta.allBicis.push(aBici)
}

let b1 = new Bicicleta(1, "Rojo", "BMX", [19.28, -99.13]);
let b2 = new Bicicleta(2, "Negra", "Ruta", [19.28, -99.13]);

Bicicleta.add(b1)
Bicicleta.add(b2)

Bicicleta.findById = function(abiciId){
  let aBici = Bicicleta.allBicis.find( x => x.id == abiciId)
  if(aBici){
    return aBici
  }else{
    throw new Error(`No exsiste una bicicleta con el id: ${abiciId}`)
  }
}

Bicicleta.removeById = function(abiciId){
  for(let i = 0; i < Bicicleta.allBicis.length; i++){
    if(Bicicleta.allBicis[i].id == abiciId){
      Bicicleta.allBicis.splice(i, 1)
      break
    }
  }

}

module.exports = Bicicleta
