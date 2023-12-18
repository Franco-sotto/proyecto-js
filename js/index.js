// Funciones 

const existeElementoId = (array, idReferencia) => {
    let existe = array.some(elemento => elemento.id === idReferencia);
    return existe;
}

// Usuarios

let userId = 1;
let usuarios = [];

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = userId;
    }
}

const agregarUsuario = (usuario) => {
    usuarios.push(usuario);
    userId++;
};

const mostrarUsuarios = () => {
    let nombresUsuarios = usuarios.map(usuario => `ID: ${usuario.id} - Nombre: ${usuario.nombre}`);
    if (nombresUsuarios.length > 0) {
        alert(nombresUsuarios.join("\n"));
    } else {
        alert("No hay usuarios registrados");
    }
};

const menuUsuarios = () => {
    let estado = true;

    while (estado) {
        let opcion = parseInt(
            prompt(
                `
        Bienvenido al Menú de Usuarios
        1 - Mostrar usuarios
        2 - Agregar un usuario
        3 - Volver
        `
            )
        );

        switch (opcion) {
            case 1:
                mostrarUsuarios();
                break;
            case 2:
                let nombre = prompt("Ingrese el nombre del usuario");
                let apellido = prompt("Ingrese el apellido del usuario");
                let usuario = new Usuario(nombre, apellido);
                agregarUsuario(usuario);
                break;
            case 3:
                estado = false;
                menuPrincipal();
                break;

            default:
                alert("Ingrese una opción válida");
                break;
        }
    }
};

const mostrarJugadores = () => {
    let nombresJugadores = usuarios.map(usuario => `ID: ${usuario.id} - Nombre: ${usuario.nombre}`);
    if (nombresJugadores.length > 0) {
        alert(nombresJugadores.join("\n"));
    } else {
        alert("No hay jugadores registrados");
    }
};

const ficharJugador = () => {
    let nombre = prompt("Ingrese el nombre del jugador");
    let apellido = prompt("Ingrese el apellido del jugador");
    let jugador = new Usuario(nombre, apellido);
    agregarUsuario(jugador);
    alert("Jugador fichado exitosamente");
};

const menuDT = () => {
    let estado = true;

    while (estado) {
        let opcion = parseInt(
            prompt(
                `
        Bienvenido al Menú de DT
        1 - Mostrar Jugadores
        2 - Fichar Jugadores
        3 - Volver
        `
            )
        );

        switch (opcion) {
            case 1:
                mostrarJugadores();
                break;
            case 2:
                ficharJugador();
                break;
            case 3:
                estado = false;
                menuPrincipal();
                break;

            default:
                alert("Ingrese una opción válida");
                break;
        }
    }
};

let estado = true;
const menuPrincipal = () => {
    while (estado) {
        let opcion = parseInt(
            prompt(
                `
        Bienvenido a nuestra APP para ser DT de tu club 
        1 - Opciones de usuarios
        2 - Opciones de DT
        3 - Salir
        `
            )
        );
        switch (opcion) {
            case 1:
                // Menú de usuarios
                menuUsuarios();
                break;
            case 2:
                // Menú de DT
                menuDT();
                break;
            case 3:
                estado = false;
                break;
            default:
                alert("Ingrese una opción válida");
                break;
        }
    }
};

menuPrincipal();