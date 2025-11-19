/**
 * ML CONECTA+ - JAVASCRIPT
 */

// ============================================
// FADE IN ON SCROLL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observar todos los elementos con clase fade-in
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});

// ============================================
// CONTADOR DE ESTADÍSTICAS ANIMADO
// ============================================

function animateCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target + suffix;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current) + suffix;
      }
    }, 16);
  });
}

// Activar contadores cuando sean visibles
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      animateCounters();
    }
  });
}, { threshold: 0.5 });

// Observar la sección de estadísticas
document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
});

// ============================================
// FAQ - ACORDEÓN
// ============================================

function toggleFAQ(button) {
  const faqItem = button.parentElement;
  const isActive = faqItem.classList.contains('active');
  
  // Cerrar todos los FAQs
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Abrir el clickeado si no estaba activo
  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// Hacer la función global
window.toggleFAQ = toggleFAQ;

// ============================
// MODAL
// ============================
const businessDetails = {
  tec: {
    title: '🎮 TEC Game Center',
    description: 'Tu tienda de tecnología y videojuegos en Chincha',
    details: `
      <p><strong>Especialidades:</strong></p>
      <ul style="margin: 12px 0; padding-left: 20px; color: var(--muted);">
        <li>Consolas PlayStation, Xbox, Nintendo Switch</li>
        <li>Diversas consolas de videojuegos portátiles y para TV</li>
        <li>Accesorios gaming (controles, headsets, teclados)</li>
        <li>Parlantes, audífonos, proyectores, cámaras, etc.</li>
        <li>Accesorios par laptops y computadoras</li>
        <li>Smartphones y tablets</li>
      </ul>
      <p><strong>📍 Ubicación:</strong> Av Benavides 995 - Pueblo Nuevo - Chincha</p>
      <p><strong>⏰ Horario:</strong> Lun - Dom: 8:00 AM - 10:00 PM</p>
      <p><strong>💳 Métodos de pago:</strong> Efectivo, Yape, Plin, Transferencias, Tarjetas</p>
      <p><strong>🚚 Delivery:</strong> Entrega a domicilio disponible</p>
    `,
    whatsapp: 'tec',
    page: 'negocios/tecgamecenter.html'
  },
  dkarmen: {
    title: '📚 Librería DKarmen',
    description: 'Todo en útiles escolares y papelería',
    details: `
      <p><strong>Especialidades:</strong></p>
      <ul style="margin: 12px 0; padding-left: 20px; color: var(--muted);">
        <li>Útiles escolares completos</li>
        <li>Libros de texto y cuentos</li>
        <li>Papelería corporativa</li>
        <li>Material didáctico</li>
        <li>Artículos de oficina</li>
        <li>Sets escolares personalizados</li>
      </ul>
      <p><strong>📍 Ubicación:</strong> Av. Benavides 991 - Pueblo Nuevo - Chincha</p>
      <p><strong>⏰ Horario:</strong> Lun - Dom: 7:00 AM - 10:00 PM</p>
      <p><strong>💳 Métodos de pago:</strong> Efectivo, Yape, Transferencias</p>
      <p><strong>🎒 Promoción:</strong> Descuentos en compras escolares al por mayor</p>
    `,
    whatsapp: 'dkarmen',
    page: 'negocios/dkarmen.html'
  },
  dlucho: {
    title: '🍽️ Descartables DLucho',
    description: 'Soluciones descartables para tus eventos y negocios',
    details: `
      <p><strong>Especialidades:</strong></p>
      <ul style="margin: 12px 0; padding-left: 20px; color: var(--muted);">
        <li>Vasos, platos y cubiertos descartables</li>
        <li>Envases para delivery</li>
        <li>Bolsas biodegradables</li>
        <li>Productos de limpieza</li>
        <li>Bolsas troqueladas</li>
      </ul>
      <p><strong>📍 Ubicación:</strong> Av. Benavides 991 - Pueblo Nuevo - Chincha</p>
      <p><strong>⏰ Horario:</strong> Lun - Dom: 9:00 AM - 10:00 PM</p>
      <p><strong>💳 Métodos de pago:</strong> Efectivo, Yape, Plin, Transferencias, Tarjetas</p>
      <p><strong>📦 Venta al por mayor:</strong> Precios especiales para negocios</p>
      <p><strong>🚚 Delivery:</strong> Entrega a domicilio disponible</p>
    `,
    whatsapp: 'dlucho',
    page: 'negocios/dlucho.html'
  },
  jugueteria: {
    title: '🧸 Juguetería DKarmen',
    description: 'Juguetes y diversión para todas las edades',
    details: `
      <p><strong>Especialidades:</strong></p>
      <ul style="margin: 12px 0; padding-left: 20px; color: var(--muted);">
        <li>Juguetes educativos y didácticos para niño y niña</li>
        <li>Muñecas y figuras de acción</li>
        <li>Juegos de mesa familiares</li>
        <li>Peluches y juguetes de bebé</li>
        <li>Bicicletas y scooters</li>
        <li>Regalos para fiestas infantiles</li>
      </ul>
      <p><strong>📍 Ubicación:</strong> Av Benavides 995 - Pueblo Nuevo - Chincha</p>
      <p><strong>⏰ Horario:</strong> Lun - Dom: 8:00 AM - 10:00 PM</p>
      <p><strong>💳 Métodos de pago:</strong> Efectivo, Yape, Plin, Transferencias, Tarjetas</p>
      <p><strong>🎁 Servicio especial:</strong> Envolturas para regalo sin costo adicional</p>
    `,
    whatsapp: 'jugueteria',
    page: 'negocios/jugueteriadkarmen.html'
  },
  jm: {
    title: '👕 J & M Moda Kids',
    description: 'Moda infantil con estilo y comodidad',
    details: `
      <p><strong>Especialidades:</strong></p>
      <ul style="margin: 12px 0; padding-left: 20px; color: var(--muted);">
        <li>Ropa para bebés (0-2 años)</li>
        <li>Ropa para niños y niñas (3-12 años)</li>
        <li>Conjuntos y outfits completos</li>
        <li>Accesorios (gorros, mochilas, medias)</li>
        <li>Ropa para ocasiones especiales</li>
      </ul>
      <p><strong>📍 Ubicación:</strong> Av Benavides 995 - Pueblo Nuevo - Chincha</p>
      <p><strong>⏰ Horario:</strong> Lun - Dom: 8:00 AM - 10:00 PM</p>
      <p><strong>💳 Métodos de pago:</strong> Efectivo, Yape, Plin, Transferencias</p>
      <p><strong>✨ Calidad:</strong> Prendas de excelente calidad y materiales seguros</p>
      <p><strong>🎨 Variedad:</strong> Diseños modernos y coloridos</p>
    `,
    whatsapp: 'jm',
    page: 'negocios/jm.html'
  }
};

function openModal(businessId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const business = businessDetails[businessId];

  if (business) {
    modalBody.innerHTML = `
      <h2 style="color: var(--blue); margin-bottom: 8px;">${business.title}</h2>
      <p style="color: var(--muted); margin-bottom: 20px; font-style: italic;">${business.description}</p>
      <div style="line-height: 1.8;">
        ${business.details}
      </div>
      <div style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="window.location.href='${business.page}'" style="flex: 1; min-width: 200px;">
          📄 Ver Página Completa
        </button>
        <button class="btn btn-success" onclick="contactWhats('${business.whatsapp}')" style="flex: 1; min-width: 200px;">
          💬 Consultar por WhatsApp
        </button>
      </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(event) {
  if (!event || event.target.id === 'modal' || event.target.classList.contains('modal-close')) {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

function sendForm() {
  const name = document.getElementById('name')?.value.trim();
  const contact = document.getElementById('contact')?.value.trim();
  const biz = document.getElementById('biz')?.value;
  const msg = document.getElementById('message')?.value.trim();

  if (!name || !contact || !msg) {
    alert('⚠️ Por favor completa nombre, contacto y mensaje.');
    return;
  }

  alert(`✅ Gracias, ${name}. Tu mensaje para ${biz} ha sido recibido. Responderemos pronto.`);
  
  // Limpiar formulario
  document.getElementById('name').value = '';
  document.getElementById('contact').value = '';
  document.getElementById('message').value = '';
}

// Hacer función global
window.sendForm = sendForm;

// ============================================
// WHATSAPP
// ============================================

function contactWhats(target) {
  // Números de WhatsApp por negocio
  const numbers = {
    tec: '+51900281884',
    dkarmen: '+51900281884',
    dlucho: '+51900281884',
    jugueteria: '+51900281884',
    jm: '+51946096400',
    general: '+51900281884'
  };

  // Mensajes personalizados
  const messages = {
    tec: 'Hola, quiero información sobre TEC Game Center 🎮',
    dkarmen: 'Hola, quiero información sobre Librería DKarmen 📚',
    dlucho: 'Hola, quiero información sobre Descartables DLucho 🍽️',
    jugueteria: 'Hola, quiero información sobre Juguetería DKarmen 🧸',
    jm: 'Hola, quiero información sobre J & M Moda Kids 👕',
    general: 'Hola, quiero información sobre ML Conecta+ 👋'
  };

  const num = numbers[target] || numbers['general'];
  const msg = messages[target] || messages['general'];
  const text = encodeURIComponent(msg);
  
  window.open(`https://wa.me/${num.replace(/[+\s]/g, '')}?text=${text}`, '_blank');
}

// Hacer función global
window.contactWhats = contactWhats;

// ============================================
// SMOOTH SCROLL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// ============================================
// CARGAR IMÁGENES LAZY
// ============================================

if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// UTILIDADES
// ============================================

// Debounce para prevenir múltiples clics
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Validar email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Validar teléfono peruano
function isValidPhone(phone) {
  const re = /^(\+51)?9\d{8}$/;
  return re.test(phone.replace(/\s/g, ''));
}

// ============================================
// EXPORTAR FUNCIONES GLOBALES
// ============================================

window.MLConecta = {
  openModal,
  closeModal,
  sendForm,
  contactWhats,
  toggleFAQ,
  animateCounters,
  debounce,
  isValidEmail,
  isValidPhone
};

function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgSrc;
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Evita scroll del fondo
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restaura scroll
}

// Cerrar con tecla ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
