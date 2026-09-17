const FINISHES = {
    silver: {
        id: 'silver',
        name: 'Silver Mist',
        image: 'assets/aura-headphones-cutout.png',
        filter: 'contrast(1.03) saturate(.62)',
        alt: 'Auriculares AURA One en acabado Silver Mist, vista de tres cuartos'
    },
    graphite: {
        id: 'graphite',
        name: 'Graphite',
        image: 'assets/aura-headphones-cutout.png',
        filter: 'grayscale(1) brightness(.46) contrast(1.28)',
        alt: 'Auriculares AURA One en acabado Graphite, vista de tres cuartos'
    },
    white: {
        id: 'white',
        name: 'Polar White',
        image: 'assets/aura-headphones-cutout.png',
        filter: 'grayscale(1) brightness(1.12) contrast(.9)',
        alt: 'Auriculares AURA One en acabado Polar White, vista de tres cuartos'
    }
};

const SPECS = {
    frequency: {
        id: 'frequency',
        label: 'Frecuencia',
        value: '5 Hz - 40 kHz',
        title: 'Respuesta extendida',
        description: 'Graves controlados, medios naturales y aire suficiente para escuchar cada textura de la mezcla.',
        image: 'assets/frecuencia.png',
        alt: 'Visualización de la respuesta de frecuencia de AURA One'
    },
    bluetooth: {
        id: 'bluetooth',
        label: 'Bluetooth',
        value: '5.4',
        title: 'Conexión de baja latencia',
        description: 'Una señal estable y eficiente para trabajar, viajar o escuchar sin interrupciones.',
        image: 'assets/aura-travel.jpg',
        alt: 'AURA One en uso durante un viaje en tren'
    },
    weight: {
        id: 'weight',
        label: 'Peso',
        value: '286 g',
        title: 'Equilibrio preciso',
        description: 'La presión se distribuye entre la diadema y las almohadillas para reducir la fatiga.',
        image: 'assets/peso.png',
        alt: 'Detalle visual del peso equilibrado de AURA One'
    },
    drivers: {
        id: 'drivers',
        label: 'Drivers',
        value: '40 mm',
        title: 'Titanio de baja distorsión',
        description: 'Diafragmas rígidos y ligeros responden con velocidad sin endurecer las frecuencias altas.',
        image: 'assets/drivers.png',
        alt: 'Visualización de los drivers de titanio de 40 milímetros'
    }
};

function isValidEmail(value) {
    if (typeof value !== 'string') return false;
    const email = value.trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getFinishById(id) {
    return FINISHES[id] || null;
}

function getSpecById(id) {
    return SPECS[id] || null;
}

function initAura(doc) {
    const header = doc.querySelector('[data-header]');
    const navToggle = doc.querySelector('.nav-toggle');
    const nav = doc.querySelector('#primary-nav');
    const hero = doc.querySelector('#inicio');
    const heroProduct = doc.querySelector('#hero-product');
    const finishName = doc.querySelector('#finish-name');
    const finishButtons = [...doc.querySelectorAll('[data-finish]')];
    const specButtons = [...doc.querySelectorAll('[data-spec]')];
    const specValue = doc.querySelector('#spec-value');
    const specTitle = doc.querySelector('#spec-title');
    const specDescription = doc.querySelector('#spec-description');
    const specImage = doc.querySelector('#spec-image');
    const dialog = doc.querySelector('#film-dialog');
    const openFilm = doc.querySelector('[data-open-film]');
    const closeFilm = doc.querySelector('[data-close-film]');
    const form = doc.querySelector('#waitlist-form');
    const email = doc.querySelector('#email');
    const emailError = doc.querySelector('#email-error');
    const formStatus = doc.querySelector('#form-status');

    if (navToggle && header) {
        navToggle.addEventListener('click', () => {
            const isOpen = header.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    if (nav && header && navToggle) {
        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                header.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    finishButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const finish = getFinishById(button.dataset.finish);
            if (!finish || !heroProduct || !finishName) return;

            finishButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
            heroProduct.classList.add('is-switching');
            window.setTimeout(() => {
                heroProduct.src = finish.image;
                heroProduct.alt = finish.alt;
                heroProduct.style.filter = finish.filter;
                finishName.textContent = finish.name;
                heroProduct.classList.remove('is-switching');
            }, 140);
        });
    });

    specButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const spec = getSpecById(button.dataset.spec);
            if (!spec || !specValue || !specTitle || !specDescription || !specImage) return;

            specButtons.forEach((item) => item.setAttribute('aria-selected', String(item === button)));
            specValue.textContent = spec.value;
            specTitle.textContent = spec.title;
            specDescription.textContent = spec.description;
            specImage.classList.add('is-switching');
            window.setTimeout(() => {
                specImage.src = spec.image;
                specImage.alt = spec.alt;
                specImage.classList.remove('is-switching');
            }, 120);
        });

        button.addEventListener('keydown', (event) => {
            if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
            event.preventDefault();
            const currentIndex = specButtons.indexOf(button);
            const direction = event.key === 'ArrowRight' ? 1 : -1;
            const nextIndex = (currentIndex + direction + specButtons.length) % specButtons.length;
            specButtons[nextIndex].focus();
            specButtons[nextIndex].click();
        });
    });

    if (dialog && openFilm && closeFilm) {
        openFilm.addEventListener('click', () => dialog.showModal());
        closeFilm.addEventListener('click', () => dialog.close());
        dialog.addEventListener('click', (event) => {
            if (event.target === dialog) dialog.close();
        });
    }

    if (form && email && emailError && formStatus) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const value = email.value.trim();

            if (!value) {
                email.setAttribute('aria-invalid', 'true');
                emailError.textContent = 'Escribe tu correo electrónico.';
                email.focus();
                return;
            }

            if (!isValidEmail(value)) {
                email.setAttribute('aria-invalid', 'true');
                emailError.textContent = 'Revisa el formato del correo.';
                email.focus();
                return;
            }

            email.removeAttribute('aria-invalid');
            emailError.textContent = '';
            form.hidden = true;
            formStatus.hidden = false;
            formStatus.classList.add('is-success');
            formStatus.focus();
        });

        email.addEventListener('input', () => {
            if (email.hasAttribute('aria-invalid')) {
                email.removeAttribute('aria-invalid');
                emailError.textContent = '';
            }
        });
    }

    const reveals = [...doc.querySelectorAll('.reveal')];
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.14 });
        reveals.forEach((element) => revealObserver.observe(element));

        if (hero && header) {
            const headerObserver = new IntersectionObserver(([entry]) => {
                header.classList.toggle('is-scrolled', !entry.isIntersecting);
            }, { rootMargin: '-72px 0px 0px', threshold: 0 });
            headerObserver.observe(hero);
        }
    } else {
        reveals.forEach((element) => element.classList.add('is-visible'));
    }
}

if (typeof document !== 'undefined') {
    document.documentElement.classList.add('js');
    document.addEventListener('DOMContentLoaded', () => initAura(document));
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { isValidEmail, getFinishById, getSpecById, initAura };
}
