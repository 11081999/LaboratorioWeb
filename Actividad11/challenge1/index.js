/*
Challenge 1
Crea un 'custom component' llamado Page
Deberá regresar una lista desordenada (<ul>) con 4 razones por las que 
crees que es importante aprender React.
Añade en algún lugar el logo de React (incluído en la carpeta)

'Renderea' el componente en la página.

*/

function CustomPage() {
    return (
        <div>

            <img src="ReactLogo.png" width="150px" height="150px"></img>

            <h1>Razones por las que es importante aprender React.</h1>

            <ul>
                <li>Dinero</li>
                <li>Desarollo web</li>
                <li>CV</li>
                <li>Diversión</li>
            </ul> 

        </div>
    )
}

ReactDOM.render(
    <div>
        <CustomPage />
    </div>,

    document.getElementById("root")
)