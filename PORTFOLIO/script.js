/**
 * PORTFOLIO INTERACTIONS SCRIPT
 * Dangeti Lalith Venkat Pavan — Java Full Stack Developer
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. Dark / Light Theme Toggle with LocalStorage
       -------------------------------------------------------------------------- */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;

    // Load saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        rootElement.setAttribute('data-theme', savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        rootElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = rootElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            rootElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            showToast(`Switched to ${targetTheme} mode`);
        });
    }

    /* --------------------------------------------------------------------------
       2. Mobile Navigation Toggle
       -------------------------------------------------------------------------- */
    const mobileToggleBtn = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileToggleBtn && mobileMenu) {
        mobileToggleBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            mobileToggleBtn.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                mobileToggleBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* --------------------------------------------------------------------------
       3. Active Navigation Link on Scroll (ScrollSpy)
       -------------------------------------------------------------------------- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });

    /* --------------------------------------------------------------------------
       4. Interactive Project Filtering
       -------------------------------------------------------------------------- */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category') || '';

                if (filterValue === 'all') {
                    card.classList.remove('hide');
                } else if (cardCategories.includes(filterValue)) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    /* --------------------------------------------------------------------------
       5. Copy to Clipboard Functionality & Toast Notification
       -------------------------------------------------------------------------- */
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    let toastTimeout = null;

    function showToast(message) {
        if (!toast || !toastMessage) return;

        toastMessage.textContent = message;
        toast.classList.add('show');

        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2800);
    }

    // Attach to copyable buttons
    const copyButtons = document.querySelectorAll('.copyable-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const textToCopy = button.getAttribute('data-copy');
            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showToast(`Copied to clipboard: ${textToCopy}`);
                }).catch(() => {
                    showToast(`Copied: ${textToCopy}`);
                });
            }
        });
    });

    // Copy Java Terminal Code
    const terminalCopyBtn = document.getElementById('terminal-copy-btn');
    if (terminalCopyBtn) {
        terminalCopyBtn.addEventListener('click', () => {
            const codeContent = document.querySelector('.terminal-body code')?.innerText;
            if (codeContent) {
                navigator.clipboard.writeText(codeContent).then(() => {
                    showToast('Copied PavanProfile.java code snippet!');
                });
            }
        });
    }

    /* --------------------------------------------------------------------------
       6. Interactive Contact Form (Prefills User's Mail Client)
       -------------------------------------------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('contact-name')?.value.trim();
            const email = document.getElementById('contact-email')?.value.trim();
            const subject = document.getElementById('contact-subject')?.value.trim() || 'Job Opportunity / Collaboration';
            const message = document.getElementById('contact-message')?.value.trim();

            if (!name || !email || !message) {
                showToast('Please fill out all required fields.');
                return;
            }

            const mailtoUrl = `mailto:dlvpavan11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Hello Dangeti Lalith Venkat Pavan,\n\nMy name is ${name} (${email}).\n\nMessage:\n${message}\n\nLooking forward to speaking with you!`
            )}`;

            showToast('Opening your email client...');
            window.location.href = mailtoUrl;
        });
    }

    /* --------------------------------------------------------------------------
       7. Interactive Blue Background & Blinking Cursor Effect
       -------------------------------------------------------------------------- */
    const cursorGlow = document.getElementById('cursor-glow');
    const canvas = document.getElementById('bg-canvas');

    if (cursorGlow || canvas) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let currentX = mouseX;
        let currentY = mouseY;
        let isMoving = false;
        let moveTimeout = null;

        // Particle array for the twinkling/blinking blue trail
        const particles = [];
        const ripples = [];
        let ctx = null;

        if (canvas) {
            ctx = canvas.getContext('2d');
            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
        }

        // Mouse Move Event Listener
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (cursorGlow) {
                cursorGlow.classList.add('moving');
            }

            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => {
                if (cursorGlow) {
                    cursorGlow.classList.remove('moving');
                }
            }, 180);

            // Spawn twinkling/blinking blue particles on mouse movement
            if (canvas && ctx) {
                const particleCount = Math.random() > 0.4 ? 2 : 1;
                for (let i = 0; i < particleCount; i++) {
                    particles.push({
                        x: mouseX + (Math.random() - 0.5) * 14,
                        y: mouseY + (Math.random() - 0.5) * 14,
                        vx: (Math.random() - 0.5) * 1.6,
                        vy: (Math.random() - 0.5) * 1.6 - 0.3,
                        radius: Math.random() * 2.8 + 1.2,
                        alpha: 1,
                        decay: Math.random() * 0.025 + 0.015,
                        blinkSpeed: Math.random() * 0.3 + 0.15,
                        blinkPhase: Math.random() * Math.PI * 2,
                        isCyan: Math.random() > 0.35
                    });
                }
            }
        });

        // Click Event: Electric blue expanding pulse ripple
        window.addEventListener('click', (e) => {
            ripples.push({
                x: e.clientX,
                y: e.clientY,
                radius: 4,
                maxRadius: 85,
                alpha: 0.95
            });
        });

        // Smooth Animation Loop
        function renderLoop() {
            // Smooth cursor glow interpolation
            currentX += (mouseX - currentX) * 0.22;
            currentY += (mouseY - currentY) * 0.22;

            if (cursorGlow) {
                cursorGlow.style.left = `${currentX}px`;
                cursorGlow.style.top = `${currentY}px`;
            }

            // Draw canvas effects
            if (canvas && ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // 1. Draw click ripples
                for (let i = ripples.length - 1; i >= 0; i--) {
                    const r = ripples[i];
                    r.radius += (r.maxRadius - r.radius) * 0.14 + 1.2;
                    r.alpha -= 0.038;

                    if (r.alpha <= 0) {
                        ripples.splice(i, 1);
                        continue;
                    }

                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(56, 189, 248, ${r.alpha})`;
                    ctx.lineWidth = 2;
                    ctx.shadowColor = 'rgba(56, 189, 248, 0.9)';
                    ctx.shadowBlur = 12;
                    ctx.stroke();
                    ctx.restore();
                }

                // 2. Draw blinking particles
                for (let i = particles.length - 1; i >= 0; i--) {
                    const p = particles[i];
                    p.x += p.vx;
                    p.y += p.vy;
                    p.alpha -= p.decay;
                    p.blinkPhase += p.blinkSpeed;

                    if (p.alpha <= 0) {
                        particles.splice(i, 1);
                        continue;
                    }

                    // Calculate blinking intensity (sine wave oscillation)
                    const blinkFactor = (Math.sin(p.blinkPhase) + 1) / 2; // oscillates between 0 and 1
                    const renderAlpha = Math.max(0, p.alpha * (0.25 + blinkFactor * 0.75));
                    const currentRadius = p.radius * (0.75 + blinkFactor * 0.5);

                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);

                    const colorBase = p.isCyan ? '56, 189, 248' : '99, 102, 241';
                    ctx.fillStyle = `rgba(${colorBase}, ${renderAlpha})`;
                    ctx.shadowColor = `rgba(${colorBase}, 0.85)`;
                    ctx.shadowBlur = 8;
                    ctx.fill();
                    ctx.restore();
                }
            }

            requestAnimationFrame(renderLoop);
        }

        renderLoop();
    }

});
