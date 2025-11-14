// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ====================
    // Funcionalidad "Ver más" en proyectos
    // ====================
    const botonesVerMas = document.querySelectorAll('.ver-mas');
    
    botonesVerMas.forEach(boton => {
        boton.addEventListener('click', function() {
            const proyectoId = this.getAttribute('data-proyecto');
            const detalles = document.getElementById(`detalles-${proyectoId}`);
            
            if (detalles.style.display === 'none' || detalles.style.display === '') {
                detalles.style.display = 'block';
                this.textContent = 'Ver menos';
            } else {
                detalles.style.display = 'none';
                this.textContent = 'Ver más';
            }
        });
    });

    // ====================
    // Animación al hacer scroll
    // ====================
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in');
        sectionObserver.observe(section);
    });

    // ====================
    // Smooth scroll para los enlaces de navegación
    // ====================
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ====================
    // Efecto de scroll en el header
    // ====================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // ====================
    // Animación de las tarjetas de proyecto al pasar el mouse
    // ====================
    const proyectoCards = document.querySelectorAll('.proyecto-card');
    
    proyectoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ====================
    // Manejo del formulario de contacto
    // ====================
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Simulación de envío (en producción conectarías con un backend)
        console.log('Formulario enviado:', { nombre, email, mensaje });
        
        // Mostrar mensaje de éxito
        alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado con éxito. Te contactaré pronto.`);
        
        // Limpiar formulario
        contactForm.reset();
    });

    // ====================
    // Efecto de escritura en el hero (opcional)
    // ====================
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let charIndex = 0;
    function typeWriter() {
        if (charIndex < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 80);
        }
    }
    
    // Iniciar el efecto de escritura después de un pequeño delay
    setTimeout(typeWriter, 500);

    // ====================
    // Animación de los badges de habilidades
    // ====================
    const skillBadges = document.querySelectorAll('.skill-badge');
    
    skillBadges.forEach((badge, index) => {
        setTimeout(() => {
            badge.style.opacity = '0';
            badge.style.transform = 'scale(0)';
            
            // Hacer visible con animación
            setTimeout(() => {
                badge.style.transition = 'all 0.4s ease';
                badge.style.opacity = '1';
                badge.style.transform = 'scale(1)';
            }, 100);
        }, index * 100);
    });

    // ====================
    // Contador de scroll para botón "volver arriba"
    // ====================
    // Crear botón de volver arriba dinámicamente
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary-color, #6366f1);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    document.body.appendChild(backToTop);

    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    // Funcionalidad del botón
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Efecto hover del botón
    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // ====================
    // Mensaje de bienvenida en consola
    // ====================
    console.log('%c¡Hola! 👋', 'color: #6366f1; font-size: 20px; font-weight: bold;');
    console.log('%cGracias por visitar mi portafolio', 'color: #ec4899; font-size: 14px;');
    console.log('%c¿Interesado en colaborar? ¡Contáctame!', 'color: #1f2937; font-size: 12px;');
});
