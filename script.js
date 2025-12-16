// ===================================
// JAPANESE NATURE WEBSITE - JAVASCRIPT
// ===================================

// ===================================
// SEASON CONFIGURATION
// ===================================
const seasons = {
    spring: {
        title: 'Spring Season',
        titleJp: '春 (Haru)',
        description: 'Musim semi membawa kehidupan baru dengan mekarnya bunga sakura yang memukau',
        particle: '🌸',
        particleCount: 30,
        icon: '🌸',
        period: 'Maret - Mei',
        characteristics: 'Udara hangat, bunga bermekaran, langit cerah',
        traditions: 'Hanami (melihat bunga sakura), festival musim semi'
    },
    summer: {
        title: 'Summer Season',
        titleJp: '夏 (Natsu)',
        description: 'Musim panas penuh dengan kehijauan segar dan semangat festival matsuri',
        particle: '☘️',
        particleCount: 25,
        icon: '☘️',
        period: 'Juni - Agustus',
        characteristics: 'Panas, lembab, hijau subur, langit biru',
        traditions: 'Matsuri (festival musim panas), kembang api'
    },
    autumn: {
        title: 'Autumn Season',
        titleJp: '秋 (Aki)',
        description: 'Musim gugur mempesona dengan dedaunan maple yang berubah menjadi emas',
        particle: '🍁',
        particleCount: 35,
        icon: '🍁',
        period: 'September - November',
        characteristics: 'Sejuk, dedaunan berubah warna, udara segar',
        traditions: 'Momijigari (melihat daun maple), panen'
    },
    winter: {
        title: 'Winter Season',
        titleJp: '冬 (Fuyu)',
        description: 'Musim dingin membawa ketenangan dengan salju yang turun lembut',
        particle: '❄️',
        particleCount: 40,
        icon: '❄️',
        period: 'Desember - Februari',
        characteristics: 'Dingin, bersalju, pemandangan putih bersih',
        traditions: 'Onsen (pemandian air panas), perayaan tahun baru'
    }
};

// Global Variables
let currentSeason = 'spring';
let particleInterval;

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    initializeClock();
    changeSeason('spring');
    initializeFAB();
});

// ===================================
// REAL-TIME CLOCK FUNCTIONS
// ===================================

/**
 * Initialize the clock and start updating
 */
function initializeClock() {
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
}

/**
 * Update date and time display
 */
function updateDateTime() {
    const now = new Date();
    
    // Indonesian day and month names
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    
    // Get date components
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    // Get time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    // Update DOM elements
    document.getElementById('header-date').textContent = `${day}, ${date} ${month} ${year}`;
    document.getElementById('header-time').textContent = `${hours}:${minutes}`;
}

// ===================================
// SEASON CHANGE FUNCTIONS
// ===================================

/**
 * Change the current season theme
 * @param {string} season - The season to change to (spring, summer, autumn, winter)
 */
function changeSeason(season) {
    // Validate season
    if (!seasons[season]) {
        console.error(`Invalid season: ${season}`);
        return;
    }
    
    currentSeason = season;
    const config = seasons[season];
    
    // Update body background class
    document.body.className = season;
    
    // Update active button state
    document.querySelectorAll('.season-icon-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.season === season) {
            btn.classList.add('active');
        }
    });
    
    // Update season information display
    document.getElementById('season-icon').textContent = config.icon;
    document.getElementById('season-title').textContent = `${config.title} - ${config.titleJp}`;
    document.getElementById('season-description').textContent = config.description;
    document.getElementById('season-period-text').textContent = config.period;
    document.getElementById('season-characteristics').textContent = config.characteristics;
    document.getElementById('season-traditions').textContent = config.traditions;
    
    // Restart particle effects
    createParticles(season);
}

// ===================================
// PARTICLE SYSTEM FUNCTIONS
// ===================================

/**
 * Create and manage falling particles for the current season
 * @param {string} season - The season to create particles for
 */
function createParticles(season) {
    const container = document.getElementById('particles');
    container.innerHTML = ''; // Clear existing particles
    
    // Clear existing interval if any
    if (particleInterval) {
        clearInterval(particleInterval);
    }
    
    const config = seasons[season];
    
    // Create initial batch of particles
    for (let i = 0; i < config.particleCount; i++) {
        addParticle(container, config.particle);
    }
    
    // Continuously add new particles
    particleInterval = setInterval(() => {
        // Limit total particles to avoid performance issues
        if (container.children.length < config.particleCount * 2) {
            addParticle(container, config.particle);
        }
    }, 800);
}

/**
 * Add a single particle to the container
 * @param {HTMLElement} container - The particle container element
 * @param {string} particle - The emoji/character to use for the particle
 */
function addParticle(container, particle) {
    const el = document.createElement('div');
    el.className = 'particle';
    el.textContent = particle;
    
    // Random horizontal position
    el.style.left = Math.random() * 100 + '%';
    
    // Random size
    const size = Math.random() * 15 + 15; // 15-30px
    el.style.fontSize = size + 'px';
    
    // Random animation duration
    const duration = Math.random() * 10 + 10; // 10-20 seconds
    el.style.animationDuration = duration + 's';
    
    // Random delay
    const delay = Math.random() * 5; // 0-5 seconds
    el.style.animationDelay = delay + 's';
    
    container.appendChild(el);
    
    // Remove particle after animation completes
    setTimeout(() => {
        if (el.parentNode) {
            el.remove();
        }
    }, (duration + delay) * 1000);
}

// ===================================
// FLOATING ACTION BUTTON (FAB) FUNCTIONS
// ===================================

/**
 * Initialize the Floating Action Button and Mini Page menu
 */
function initializeFAB() {
    const fab = document.getElementById('fab');
    const miniPage = document.getElementById('mini-page');
    const closeBtn = document.getElementById('close-menu');
    
    // Toggle mini page on FAB click
    fab.addEventListener('click', () => {
        miniPage.classList.toggle('active');
        fab.style.transform = miniPage.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0deg)';
    });
    
    // Close mini page on close button click
    closeBtn.addEventListener('click', () => {
        miniPage.classList.remove('active');
        fab.style.transform = 'rotate(0deg)';
    });
    
    // Close mini page when clicking menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            miniPage.classList.remove('active');
            fab.style.transform = 'rotate(0deg)';
        });
    });
    
    // Close mini page when clicking outside
    document.addEventListener('click', (e) => {
        if (!miniPage.contains(e.target) && !fab.contains(e.target)) {
            miniPage.classList.remove('active');
            fab.style.transform = 'rotate(0deg)';
        }
    });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

/**
 * Smooth scroll to anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
