//declarar variables para vincular los objetos del formulario
const usuario = document.getElementById('user');
const password= document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//Leyendo eventos
formulario.addEventListener('submit', login);

//Funciones a ejecutar
function login(e){
    e.preventDefault();
    
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

if(usuarioVal == '' || passwordVal == ''){
    crearMensaje('Verifica tus campos', 'danger');
    return;
}

    if (localStorage.getItem('usuario')){
        let objeto = JSON.parse(localStorage.getItem('usuario'));

        if(usuarioVal == objeto.user && passwordVal == objeto.pass){
            crearMensaje('Login correcto', 'success');
        } else {
            crearMensaje('Usuario incorrecto', 'danger');
        } 
       } else {
            crearMensaje('No hay usuarios registrados', 'danger');
        }

}