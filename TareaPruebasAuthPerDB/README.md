# Actividad Individual

## Getting Started

Para correr el siguiente proyecto se deben ejecutar los siguientes comandos dentro de la carpeta del proyecto:

Primer comando:

    npm i

Segundo comando:

    npm run devstart

NOTA: Es importante tener el servicio de MongoDB corriendo con un esquema llamado "red_bicicletas".

## 1. Test unitarios.

Se crearon 8 test unitarios con mocha ubcados en la capeta de spec:

 - Archivo de pruebas: mocha_bicicleta_api.spec.js\
    Pruebas: Obtener el listado de bicicletas, agregar una bicicleta.

 -  Archivo de pruebas: mocha_bicicleta_test.spec.js\
    Pruebas: Crear una bicicleta, listar todas las bicicletas, añadir bicicleta, encontrar bici por código, eliminar bicicleta.
 
 - Archivo de pruebas: mocha_usuario_test.spec.js\
    Pruebas: Que un usuario reserve una bicicleta.

    Las pruebas se pueden realizar y verificar con el siguiente comando:

        npm mochatest ""


## 2. Autenticación con verificación.

1. Se debe de crear un usuario en la [Pagina de Registro](http://localhost:3000/usuarios/create) o bien accediendo desde index > usuarios > create.

2. La verificación se reliza activando un link que se envia por correo a una cuenta de  Ethereal Email. 

3. Ir a la [Pagina de Login](https://www.example.com) o bien accediendo desde index > usuarios > Login.

NOTA: Solo los usuarios verificados pueden hacer login, en el caso exitoso el sistema rediccionará a la pagina de usuarios. De lo contrario el sistema arroja un mensaje de error.

## 3. Persistencia en MongoDB.

- Los usuarios, las bicicletas y las reservaciones persisten en una instancia de MongoDB.

- Se pueden ver las reservaciones en la [Pagina de Reservas](http://localhost:3000/reservas/) o bien accediendo desde index > reservas. 





































# Project Title

One Paragraph of the project description

Initially appeared on
[gist](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2). But the page cannot open anymore so that is why I have moved it here.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push 
- [Example 1](https://www.example.com)
- [Example 2](https://www.example.com)

### Installing

A step by step series of examples that tell you how to get a development
environment running

Say what the step will be

    Give the example

And repeat

    until finished

End with an example of getting some data out of the system or using it
for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Sample Tests

Explain what these tests test and why

    Give an example

### Style test

Checks if the best practices and the right coding style has been used.

    Give an example

## Deployment

Add additional notes to deploy this on a live system

## Built With

  - [Contributor Covenant](https://www.contributor-covenant.org/) - Used
    for the Code of Conduct
  - [Creative Commons](https://creativecommons.org/) - Used to choose
    the license

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code
of conduct, and the process for submitting pull requests to us.

## Versioning

We use [Semantic Versioning](http://semver.org/) for versioning. For the versions
available, see the [tags on this
repository](https://github.com/PurpleBooth/a-good-readme-template/tags).

## Authors

  - **Billie Thompson** - *Provided README Template* -
    [PurpleBooth](https://github.com/PurpleBooth)

See also the list of
[contributors](https://github.com/PurpleBooth/a-good-readme-template/contributors)
who participated in this project.

## License

This project is licensed under the [CC0 1.0 Universal](LICENSE.md)
Creative Commons License - see the [LICENSE.md](LICENSE.md) file for
details

## Acknowledgments

  - Hat tip to anyone whose code is used
  - Inspiration
  - etc

