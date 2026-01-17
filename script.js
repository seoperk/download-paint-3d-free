// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const toc = document.getElementById('toc');
    const sidebar = document.querySelector('.sidebar');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            const expanded = sidebar.classList.contains('active');
            toggleBtn.setAttribute('aria-expanded', expanded);
            toggleBtn.textContent = expanded ? '✕ Close' : '☰ Table of Contents';
        });
    }

    // Smooth scroll for TOC links
    document.querySelectorAll('.toc-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            // Close sidebar on mobile after click
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('active');
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.textContent = '☰ Table of Contents';
            }
        });
    });
});
