# Actividad Individual
 
## Getting Started
 
Para correr el siguiente proyecto se deben ejecutar los siguientes comandos dentro de la carpeta del proyecto:
 
Primer comando:
 
    npm i
 
Segundo comando:
 
    npm run devstart
 
NOTA: Es importante tener el servicio de MongoDB corriendo con un esquema llamado "red_bicicletas".
 
## 1. Test unitarios.
 
Se crearon 8 test unitarios con mocha ubicados en la carpeta de spec:
 
 - Archivo de pruebas: mocha_bicicleta_api.spec.js\
    Pruebas: Obtener el listado de bicicletas, agregar una bicicleta.
 
 -  Archivo de pruebas: mocha_bicicleta_test.spec.js\
    Pruebas: Crear una bicicleta, listar todas las bicicletas, añadir bicicleta, encontrar bici por código, eliminar bicicleta.
 
 - Archivo de pruebas: mocha_usuario_test.spec.js\
    Pruebas: Que un usuario reserve una bicicleta.
 
    Las pruebas se pueden realizar y verificar con el siguiente comando:
 
        npm mochatest ""
 
 
## 2. Autenticación con verificación.
 
1. Se debe de crear un usuario en la [Página de Registro](http://localhost:3000/usuarios/create) o bien accediendo desde index > usuarios > create.
 
2. La verificación se realiza activando un link que se envía por correo a una cuenta de  Ethereal Email.
 
3. Ir a la [Página de Login](https://www.example.com) o bien accediendo desde index > usuarios > Login.
 
NOTA: Solo los usuarios verificados pueden hacer login, en el caso exitoso el sistema redireccionará a la página de usuarios. De lo contrario el sistema arroja un mensaje de error.
 
## 3. Persistencia en MongoDB.
 
- Los usuarios, las bicicletas y las reservaciones persisten en una instancia de MongoDB.
 
- Se pueden ver las reservaciones en la [Página de Reservas](http://localhost:3000/reservas/) o bien accediendo desde index > reservas.
