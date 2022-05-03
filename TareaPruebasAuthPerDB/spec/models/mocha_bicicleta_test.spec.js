const mongoose = require('mongoose')
const { isReadStream } = require('request/lib/helpers')
const Bicicleta = require('../../models/bicicleta')
const assert = require('assert');

describe('Testing bicicletas', function(){
    beforeEach(function(done){
        var mongoDB = 'mongodb://localhost:27017/red_bicicletas'
        mongoose.connect(mongoDB, {useNewUrlParser: true})

        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'connection error'))
        db.once('open', function(){
            //console.log('Connected to the test database')
            done()
        })
    })

    afterEach(function(done){
        Bicicleta.deleteMany({}, function(err, success){
            if(err) console.log(err)
            const db = mongoose.connection
            db.close()
            done()
        })
    })


    //tests

    //Crear una bicicleta
    describe('Bicicleta.createInstance', ()=>{
        it('crea una instancia de la bicicleta', (done)=>{
            let bici = Bicicleta.createInstance(1, 'Rosa', 'urbana', [19.28, -99.13])

            assert.equal(bici.code,1)
            assert.equal(bici.color,'Rosa')
            assert.equal(bici.modelo,'urbana')
            assert.equal(bici.ubicacion[0],19.28)
            assert.equal(bici.ubicacion[1],-99.13)

            done()
            
        })
    });

    //Añadir una bicicleta
    describe('Bicicletas.add', ()=>{
        it('Agregar una bicicleta', (done)=>{
            let bici = new Bicicleta({code: 1, color: 'Rosa', modelo: 'urbana'})
            Bicicleta.add(bici, function(err, newBici){

                if(err) console.log(err)

                Bicicleta.allBicis(function(err, bicis){

                    assert.equal(bicis.length, 1)
                    assert.equal(bicis[0].code, bici.code)

                    done()

                })

            })
        })
    })

    //Listar todas las bicicletas
    describe('Bicicleta.allBicis', ()=>{
        it('Comienza vacía', (done)=>{
            Bicicleta.allBicis(function(err, bicis){

                assert.equal(bicis.length, 0)

                done()
            })
        })
    })

    //Eliminar una bicicleta
    describe('Remove a bike by its code', ()=>{
        it('Eliminar bicicleta con cel codigo 1', (done)=>{

            //Lista debe de estar vacía
            Bicicleta.allBicis(function(err, bicis){
                assert.equal(bicis.length, 0)

                //Añadir Bicicleta
                let bici = new Bicicleta({code: 1, color: 'Rosa', modelo: 'urbana'})
                Bicicleta.add(bici, function(err, newBike){


                    if(err) console.log(err)

                    //Añadir la Bicicleta
                    Bicicleta.allBicis(function(err, bicis){
                        assert.equal(bicis.length, 1)

                        //Eliminar Bicicleta
                        Bicicleta.removeByCode(1, function(err, cb){

                            //Checar que la lista de bicis este vacía
                            Bicicleta.allBicis(function(err, bicis){
                                assert.equal(bicis.length, 0)
                            
                                done()
                            })
                        })
                    })
                })
            })
        })
    })

    //Find by code
    describe('Find a bike by its code', ()=>{
        it('regresar la bici con el codigo 1', (done)=>{

            //La lista tiene que estar vacía
            Bicicleta.allBicis(function(err, bicis){
                assert.equal(bicis.length, 0)

                //Crear y añadir bici a la Lista
                let bici = new Bicicleta({code: 1, color: 'verde', modelo: 'urbana'})
                Bicicleta.add(bici, function(err, newBike){
                    if(err) console.log(err)

                    //Crear y añadir una segunda bici a la Lista
                    let bici2 = new Bicicleta({code: 2, color: 'blanca', modelo: 'montaña'})
                    Bicicleta.add(bici2, function(err, newBike){                        
                        if(err) console.log(err)

                        //Encontrar la bici con el codigo 1 en la Lista
                        Bicicleta.findByCode(1, function(err, targetBici){

                            assert.equal(targetBici.code,   bici.code)
                            assert.equal(targetBici.color,  bici.color)
                            assert.equal(targetBici.modelo, bici.modelo)

                            done()
                        })
                    })
                })
            })
        })
    })



})