
/**
*Obtener los valores del formulario e registro
 */
function obtenerValoresFormulario() {
    let correo = document.getElementById("txtCorreo").value
    let nombre = document.getElementById("txtNombre").value
    let celular = document.getElementById("txtCelular").value
    let clave = document.getElementById("txtClave").value
    let direccion = document.getElementById("txtDireccion").value

    //Formas de crearun objeto
    //Inicializar un objeto con propiedades
    let usuario = {celular , "clave":clave}

    //Agregar propiedades a un JSON
    usuario.correo = correo
    usuario.direccion = direccion

    //Agregar propiedades con Bracket notation ["Key"]
    usuario["nombre"] = nombre //Bracket notation
    
    //Forma resumida de crear el objeto
    //let usuario = {correo, nombre, celular, clave, direccion}

    console.log(usuario);


}
