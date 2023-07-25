const html = '<a href="https://api.whatsapp.com/send?phone=5493514088801" class="wspBoton" target="_blank"><img src="images/wsp.png" alt="WhatsApp" width="60px" class="rounded-5"></a>'
const mensaje = () => {
    Swal.fire({
        title: 'Puedo solucionarlo! contactame' + html,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        confirmButtonText: html
    })
};
const boton = document.getElementById("boton");
boton.addEventListener("click",mensaje);