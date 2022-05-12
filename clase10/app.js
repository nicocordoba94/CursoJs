let usuario;
let usuarioStorage = localStorage.getItem("usuario");

if(usuarioStorage){
    console.log("Entramos cuando hay usuario");
}else{
    usuario = prompt("Ingrese su nombre:");
    localStorage.setItem("usuario", usuario);
}

setTimeout(()=>{
    sessionStorage.clear()
    window.location.reload()
},100000)