// // script para que los comentarios que el usuario escribe aparezcan
// window.onload = function () {
//     cargarComentarios();
// };

// export function cargarComentarios() {
//     var comentariosContainer = document.getElementById("comentariosContainer");
//     var comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];

//     comentariosGuardados.forEach(function (comentarioHTML) {
//         var nuevoComentario = document.createElement("div");
//         nuevoComentario.classList.add("comentario");
//         nuevoComentario.innerHTML = comentarioHTML;
//         comentariosContainer.appendChild(nuevoComentario);
//     });
// }

// export function agregarComentario() {
//     var nombre = document.getElementById("name").value;
//     var comentarioTexto = document.getElementById("comment").value;
//     var nuevoComentario = document.createElement("div");
//     nuevoComentario.classList.add("comentario");
//     var comentario ={

//         <div class="row">
//         <div class="col-md-1">
//         <img class="icon" src="https://i.pinimg.com/736x/c5/60/62/c56062ce3d120bb50721216064f812cc.jpg">
//         </div>
//             <div class="col-md-11">
//                 <div class="NombreUsuario">
//                 <h5>${nombre}</h5>
//                 </div>
//                 <p>${comentarioTexto}</p>
//                 </div>
//                 </div>
//             }
                

//     nuevoComentario.innerHTML = comentario;
//     var comentariosContainer = document.getElementById("comentariosContainer");
//     comentariosContainer.appendChild(nuevoComentario);


//     document.getElementById("comentarioForm").reset();


//     var comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
//     comentariosGuardados.push(comentario);
//     localStorage.setItem('comentarios', JSON.stringify(comentariosGuardados));
// }