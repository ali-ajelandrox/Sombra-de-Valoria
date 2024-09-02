// JavaScript para controlar el menú desplegable
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Manejar el clic en el ícono de hamburguesa
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
});



//---------------------play for free----------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace realice su acción por defecto
        alert('Descargando el juego. Gracias por unirte a la aventura!');
    });
});


//botones --------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.pricing-card');

    cards.forEach(card => {
        const button = card.querySelector('.cta-button');
        const originalText = button.textContent;
        const planName = card.getAttribute('data-plan');

        card.addEventListener('mouseenter', function () {
            button.textContent = planName; // Cambia el texto al nombre del plan
        });

        card.addEventListener('mouseleave', function () {
            button.textContent = originalText; // Restaura el texto original
        });
    });
});
//popup ----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los botones "Get Started"
    const buttons = document.querySelectorAll('.pricing-card .cta-button');
    
    // Función para abrir un pop-up
    function openPopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.add('show'); // Agregar la clase 'show' para mostrar el pop-up
        }
    }
    
    // Función para cerrar un pop-up
    function closePopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.remove('show'); // Quitar la clase 'show' para ocultar el pop-up
        }
    }
    
    // Agregar eventos de clic a los botones "Get Started"
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir la acción predeterminada del enlace
            
            // Obtener el ID del pop-up correspondiente
            const popupId = button.parentElement.dataset.popup;
            openPopup(popupId);
        });
    });
    
    // Agregar eventos de clic a los botones de cierre
    const closeButtons = document.querySelectorAll('.popup .close');
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            // Obtener el ID del pop-up correspondiente
            const popupId = closeButton.dataset.popup;
            closePopup(popupId);
        });
    });
    
    // Cerrar el pop-up si se hace clic fuera del contenido del pop-up
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup')) {
            closePopup(event.target.id);
        }
    });
})

//---------------------- comentario poup

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario por su ID
    const form = document.getElementById('contact-form');

    // Agregar un manejador de eventos para el envío del formulario
    form.addEventListener('submit', function(event) {
        // Evitar que el formulario se envíe de manera tradicional
        event.preventDefault();

        // Mostrar un mensaje de agradecimiento
        alert('Gracias por tu mensaje. Nos pondremos en contacto lo más pronto posible.');

        // Opcional: Limpiar el formulario después del envío
        form.reset();
    });
});
//--------------estilos del characters------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const popupModal = document.getElementById('popup-modal');
    const popupImage = document.getElementById('popup-image');
    const popupClose = document.querySelector('.popup-close');
    
    // Agregar event listener a todas las imágenes de personajes
    document.querySelectorAll('.character-image').forEach(image => {
        image.addEventListener('click', function() {
            // Establecer la URL de la imagen grande
            const imageUrl = this.getAttribute('data-popup');
            popupImage.src = imageUrl;
            // Mostrar el popup
            popupModal.style.display = 'flex';
        });
    });
    
    // Cerrar el popup al hacer clic en el botón de cerrar
    popupClose.addEventListener('click', function() {
        popupModal.style.display = 'none';
    });
    
    // Cerrar el popup al hacer clic fuera de la imagen
    popupModal.addEventListener('click', function(event) {
        if (event.target === popupModal) {
            popupModal.style.display = 'none';
        }
    });
});