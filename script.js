    (function() {
      'use strict';

      /* ========================================
         Tema (manual + auto según hora)
         ======================================== */
      var themeBtns = document.querySelectorAll('.theme-btn');

      function getAutoTheme() {
        var h = new Date().getHours();
        return (h >= 7 && h < 19) ? 'light' : 'dark';
      }

      function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('tech-theme', theme); } catch (e) { /* no hacer nada */ }
        themeBtns.forEach(function(b) {
          b.classList.toggle('active', b.getAttribute('data-theme') === theme);
        });
      }

      /* Si no hay tema guardado, usar auto */
      try {
        var saved = localStorage.getItem('tech-theme');
        setTheme(saved || getAutoTheme());
      } catch (e) {
        setTheme(getAutoTheme());
      }

      themeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          setTheme(this.getAttribute('data-theme'));
        });
      });

      /* ========================================
         Barra de progreso de lectura
         ======================================== */
      var progressBar = document.getElementById('progressBar');
      window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = pct + '%';
        progressBar.setAttribute('aria-valuenow', Math.round(pct));
      }, { passive: true });

      /* ========================================
         Partículas (canvas)
         ======================================== */
      (function initParticles() {
        var canvas = document.getElementById('particles-canvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var w, h, particles = [];
        var COUNT = 80;

        function resize() {
          var hero = document.querySelector('.hero');
          if (!hero) return;
          w = canvas.width = hero.offsetWidth;
          h = canvas.height = hero.offsetHeight;
        }

        function createParticles() {
          particles = [];
          for (var i = 0; i < COUNT; i++) {
            particles.push({
              x: Math.random() * w,
              y: Math.random() * h,
              r: Math.random() * 2 + 0.5,
              dx: (Math.random() - 0.5) * 0.4,
              dy: (Math.random() - 0.5) * 0.4,
              alpha: Math.random() * 0.6 + 0.2
            });
          }
        }

        function draw() {
          ctx.clearRect(0, 0, w, h);
          particles.forEach(function(p) {
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,' + p.alpha + ')';
            ctx.fill();
          });
          requestAnimationFrame(draw);
        }

        resize();
        createParticles();
        draw();
        window.addEventListener('resize', function() {
          resize();
          createParticles();
        });
      })();

      /* ========================================
         Rotación dinámica de palabra (título hero)
         ======================================== */
      (function dynamicWord() {
        var el = document.querySelector('.dynamic-word');
        if (!el) return;
        var words = [
          'de la Tecnolog\u00eda',
          'de la Innovaci\u00f3n',
          'del Conocimiento',
          'de la Ciencia',
          'digital'
        ];
        var idx = 0;
        function typeWord(word, cb) {
          el.textContent = '';
          var i = 0;
          function addChar() {
            if (i < word.length) {
              el.textContent += word.charAt(i);
              i++;
              setTimeout(addChar, 45 + Math.random() * 30);
            } else {
              if (cb) cb();
            }
          }
          addChar();
        }
        function eraseWord(cb) {
          var current = el.textContent;
          var i = current.length;
          function removeChar() {
            if (i > 0) {
              el.textContent = current.substring(0, i - 1);
              i--;
              setTimeout(removeChar, 20);
            } else {
              if (cb) cb();
            }
          }
          removeChar();
        }
        function rotate() {
          idx = (idx + 1) % words.length;
          eraseWord(function() {
            typeWord(words[idx], function() {
              setTimeout(rotate, 3000);
            });
          });
        }
        typeWord(words[0], function() {
          setTimeout(rotate, 3500);
        });
      })();

      /* ========================================
         Filtros (categorías)
         ======================================== */
      var filterBtns = document.querySelectorAll('.filter-btn');
      var cards = document.querySelectorAll('#cardGrid .card-image');

      filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          filterBtns.forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          var filter = btn.getAttribute('data-filter');
          cards.forEach(function(card) {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
              card.classList.remove('is-hidden');
            } else {
              card.classList.add('is-hidden');
            }
          });
        });
      });

      /* ========================================
         Visor de imágenes (Lightbox)
         ======================================== */
      var lightbox = document.getElementById('lightbox');
      var lightboxImg = document.getElementById('lightboxImg');
      var lightboxClose = document.getElementById('lightboxClose');

      document.querySelectorAll('#cardGrid .card-img-top').forEach(function(img) {
        img.addEventListener('click', function() {
          lightboxImg.src = this.src;
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        });
        img.style.cursor = 'pointer';
      });

      function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
      }

      lightboxClose.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
      });
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeLightbox();
      });

      /* ========================================
         Contador animado (estadísticas)
         ======================================== */
      (function initCounters() {
        var counters = document.querySelectorAll('.stat h3');
        if (!counters.length) return;

        var counterObserver = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var el = entry.target;
              var text = el.textContent.trim();
              var num = parseFloat(text.replace(/[^0-9.]/g, ''));
              var suffix = text.replace(/[0-9.]/g, '');
              if (isNaN(num)) return;

              var duration = 1500;
              var start = performance.now();

              function update(now) {
                var elapsed = now - start;
                var progress = Math.min(elapsed / duration, 1);
                var eased = 1 - Math.pow(1 - progress, 3);
                var current = eased * num;
                el.textContent = formatNum(current) + suffix;
                if (progress < 1) requestAnimationFrame(update);
              }

              function formatNum(n) {
                if (n >= 1000000000) return (n / 1000000000).toFixed(1).replace('.0', '') + 'B';
                if (n >= 1000000) return (n / 1000000).toFixed(1).replace('.0', '') + 'M';
                if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'K';
                if (Number.isInteger(n)) return n.toString();
                return n.toFixed(1);
              }

              requestAnimationFrame(update);
              counterObserver.unobserve(el);
            }
          });
        }, { threshold: 0.5 });

        counters.forEach(function(c) { counterObserver.observe(c); });
      })();

      /* ========================================
         Menú hamburguesa
         ======================================== */
      var hamburger = document.getElementById('hamburger');
      var navLinks = document.getElementById('navLinks');
      hamburger.addEventListener('click', function() {
        var open = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', open);
      });

      navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          navLinks.classList.remove('open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });

      /* ========================================
         Volver arriba
         ======================================== */
      var backToTop = document.getElementById('backToTop');
      window.addEventListener('scroll', function() {
        backToTop.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });
      backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      /* ========================================
         Revelación al hacer scroll
         ======================================== */
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal').forEach(function(el) {
        observer.observe(el);
      });

      /* ========================================
         Efecto 3D Tilt en cards
         ======================================== */
      var tiltCards = document.querySelectorAll('#cardGrid .card-image, #cardGridMini .card');
      tiltCards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
          var rect = card.getBoundingClientRect();
          var x = e.clientX - rect.left;
          var y = e.clientY - rect.top;
          var centerX = rect.width / 2;
          var centerY = rect.height / 2;
          var rotateX = ((y - centerY) / centerY) * -8;
          var rotateY = ((x - centerX) / centerX) * 8;
          card.style.transform =
            'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02,1.02,1.02)';
        });
        card.addEventListener('mouseleave', function() {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
        });
      });

      /* ========================================
         Efecto 3D Parallax en Hero
         ======================================== */
      var hero = document.querySelector('.hero');
      var heroContent = document.querySelector('.hero-content');
      var orbs = document.querySelectorAll('.orb');

      hero.addEventListener('mousemove', function(e) {
        var rect = hero.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        if (heroContent) {
          heroContent.style.transform =
            'translateZ(0) rotateX(' + (y * -4) + 'deg) rotateY(' + (x * 4) + 'deg)';
        }
        orbs.forEach(function(orb, i) {
          var factor = (i + 1) * 10;
          orb.style.transform =
            'translateX(' + (x * factor) + 'px) translateY(' + (y * factor) + 'px)';
        });
      });

      hero.addEventListener('mouseleave', function() {
        if (heroContent) heroContent.style.transform = '';
        orbs.forEach(function(orb) { orb.style.transform = ''; });
      });

      /* ========================================
         Boletín (Newsletter)
         ======================================== */
      var newsletterForm = document.querySelector('.newsletter-form');
      if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Gracias por suscribirte!');
        });
      }

    })();
