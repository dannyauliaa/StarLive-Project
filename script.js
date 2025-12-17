// ===================================
// JAPANESE NATURE WEBSITE - JAVASCRIPT
// ===================================

// ===================================
// TRANSLATIONS
// ===================================
const translations = {
    id: {
        siteTitle: 'Japanese Nature',
        settingsTitle: 'Pengaturan',
        seasonSelection: 'Pilih Musim',
        spring: 'Spring',
        summer: 'Summer',
        autumn: 'Autumn',
        winter: 'Winter',
        animationToggle: 'Animasi Partikel',
        animationStatus: 'Aktif',
        languageSelection: 'Pilih Bahasa',
        welcomeTitle: 'Selamat Datang di Japanese Nature',
        welcomeSubtitle: '四季の美しさ - Keindahan Empat Musim',
        welcomePara1: 'Jepang dikenal dengan keindahan alamnya yang berganti mengikuti empat musim. Setiap musim membawa keunikan dan pesona tersendiri, dari sakura yang mekar di musim semi hingga salju yang turun lembut di musim dingin.',
        welcomePara2: 'Website ini menghadirkan pengalaman visual yang memukau, dimana Anda dapat merasakan atmosfer setiap musim di Jepang. Nikmati ketenangan dan keharmonisan alam Jepang yang legendaris melalui tampilan interaktif kami.',
        welcomePara3: 'Pilih musim favorit Anda di bagian atas dan rasakan bagaimana alam berubah dengan indahnya. Setiap musim memiliki karakteristik unik yang mencerminkan filosofi Jepang tentang keseimbangan dan keindahan alami.',
        periodLabel: '🗓️ Periode',
        characteristicsLabel: '🌡️ Karakteristik',
        traditionsLabel: '🎎 Tradisi',
        feature1Title: 'Pengalaman Visual',
        feature1Desc: 'Nikmati efek visual yang memukau dengan partikel-partikel yang jatuh sesuai musim yang dipilih, menciptakan suasana autentik Jepang.',
        feature2Title: 'Desain Minimalis',
        feature2Desc: 'Terinspirasi dari filosofi wabi-sabi Jepang, desain kami mengedepankan kesederhanaan dan keindahan alami.',
        feature3Title: 'Real-time Update',
        feature3Desc: 'Waktu dan tanggal ditampilkan secara real-time, mengingatkan kita akan perjalanan waktu dan perubahan musim.',
        footerAboutTitle: 'Tentang Kami',
        footerAboutText: 'Japanese Nature adalah platform yang didedikasikan untuk membawa keindahan empat musim Jepang ke dalam pengalaman digital yang immersive.',
        footerNavTitle: 'Navigasi',
        footerContactTitle: 'Kontak',
        navHome: 'Home',
        navAbout: 'About',
        navGallery: 'Gallery',
        navContact: 'Contact',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        menuTitle: 'Menu Navigasi',
        menuSeasons: 'Seasons'
    },
    en: {
        siteTitle: 'Japanese Nature',
        settingsTitle: 'Settings',
        seasonSelection: 'Select Season',
        spring: 'Spring',
        summer: 'Summer',
        autumn: 'Autumn',
        winter: 'Winter',
        animationToggle: 'Particle Animation',
        animationStatus: 'Active',
        languageSelection: 'Select Language',
        welcomeTitle: 'Welcome to Japanese Nature',
        welcomeSubtitle: '四季の美しさ - The Beauty of Four Seasons',
        welcomePara1: 'Japan is known for its natural beauty that changes with the four seasons. Each season brings unique charm, from blooming cherry blossoms in spring to gently falling snow in winter.',
        welcomePara2: 'This website presents a stunning visual experience where you can feel the atmosphere of each season in Japan. Enjoy the legendary tranquility and harmony of Japanese nature through our interactive display.',
        welcomePara3: 'Choose your favorite season at the top and feel how nature changes beautifully. Each season has unique characteristics that reflect Japanese philosophy of balance and natural beauty.',
        periodLabel: '🗓️ Period',
        characteristicsLabel: '🌡️ Characteristics',
        traditionsLabel: '🎎 Traditions',
        feature1Title: 'Visual Experience',
        feature1Desc: 'Enjoy stunning visual effects with falling particles according to the selected season, creating an authentic Japanese atmosphere.',
        feature2Title: 'Minimalist Design',
        feature2Desc: 'Inspired by Japanese wabi-sabi philosophy, our design emphasizes simplicity and natural beauty.',
        feature3Title: 'Real-time Update',
        feature3Desc: 'Time and date are displayed in real-time, reminding us of the journey of time and changing seasons.',
        footerAboutTitle: 'About Us',
        footerAboutText: 'Japanese Nature is a platform dedicated to bringing the beauty of four Japanese seasons into an immersive digital experience.',
        footerNavTitle: 'Navigation',
        footerContactTitle: 'Contact',
        navHome: 'Home',
        navAbout: 'About',
        navGallery: 'Gallery',
        navContact: 'Contact',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        menuTitle: 'Navigation Menu',
        menuSeasons: 'Seasons'
    },
    jp: {
        siteTitle: '日本の自然',
        settingsTitle: '設定',
        seasonSelection: '季節を選択',
        spring: '春',
        summer: '夏',
        autumn: '秋',
        winter: '冬',
        animationToggle: 'パーティクルアニメーション',
        animationStatus: 'アクティブ',
        languageSelection: '言語を選択',
        welcomeTitle: '日本の自然へようこそ',
        welcomeSubtitle: '四季の美しさ',
        welcomePara1: '日本は四季折々の自然の美しさで知られています。春の桜の開花から冬の優しく降る雪まで、各季節は独特の魅力をもたらします。',
        welcomePara2: 'このウェブサイトは、日本の各季節の雰囲気を感じることができる素晴らしいビジュアル体験を提供します。私たちのインタラクティブなディスプレイを通して、日本の自然の伝説的な静けさと調和をお楽しみください。',
        welcomePara3: '上部でお気に入りの季節を選択して、自然がどのように美しく変化するかを感じてください。各季節には、バランスと自然の美しさという日本の哲学を反映するユニークな特徴があります。',
        periodLabel: '🗓️ 期間',
        characteristicsLabel: '🌡️ 特徴',
        traditionsLabel: '🎎 伝統',
        feature1Title: 'ビジュアル体験',
        feature1Desc: '選択した季節に応じて落下するパーティクルで素晴らしいビジュアル効果をお楽しみください。本格的な日本の雰囲気を作り出します。',
        feature2Title: 'ミニマリストデザイン',
        feature2Desc: '日本の侘び寂びの哲学に触発され、私たちのデザインはシンプルさと自然の美しさを重視しています。',
        feature3Title: 'リアルタイム更新',
        feature3Desc: '時間と日付がリアルタイムで表示され、時間の経過と季節の変化を思い出させます。',
        footerAboutTitle: '私たちについて',
        footerAboutText: 'Japanese Natureは、日本の四季の美しさを没入型のデジタル体験にもたらすことに専念するプラットフォームです。',
        footerNavTitle: 'ナビゲーション',
        footerContactTitle: '連絡先',
        navHome: 'ホーム',
        navAbout: '概要',
        navGallery: 'ギャラリー',
        navContact: '連絡先',
        privacyPolicy: 'プライバシーポリシー',
        termsOfService: '利用規約',
        menuTitle: 'ナビゲーションメニュー',
        menuSeasons: '季節'
    }
};

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
        traditions: 'Hanami (melihat bunga sakura), festival musim semi',
        translations: {
            id: {
                title: 'Spring Season',
                titleJp: '春 (Haru)',
                description: 'Musim semi membawa kehidupan baru dengan mekarnya bunga sakura yang memukau',
                period: 'Maret - Mei',
                characteristics: 'Udara hangat, bunga bermekaran, langit cerah',
                traditions: 'Hanami (melihat bunga sakura), festival musim semi'
            },
            en: {
                title: 'Spring Season',
                titleJp: '春 (Haru)',
                description: 'Spring brings new life with the blooming of stunning cherry blossoms',
                period: 'March - May',
                characteristics: 'Warm air, blooming flowers, clear skies',
                traditions: 'Hanami (cherry blossom viewing), spring festivals'
            },
            jp: {
                title: '春の季節',
                titleJp: '春 (ハル)',
                description: '春は見事な桜の開花で新しい生命をもたらします',
                period: '3月 - 5月',
                characteristics: '暖かい空気、咲く花、晴れた空',
                traditions: '花見、春祭り'
            }
        }
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
        traditions: 'Matsuri (festival musim panas), kembang api',
        translations: {
            id: {
                title: 'Summer Season',
                titleJp: '夏 (Natsu)',
                description: 'Musim panas penuh dengan kehijauan segar dan semangat festival matsuri',
                period: 'Juni - Agustus',
                characteristics: 'Panas, lembab, hijau subur, langit biru',
                traditions: 'Matsuri (festival musim panas), kembang api'
            },
            en: {
                title: 'Summer Season',
                titleJp: '夏 (Natsu)',
                description: 'Summer is full of fresh greenery and the spirit of matsuri festivals',
                period: 'June - August',
                characteristics: 'Hot, humid, lush green, blue skies',
                traditions: 'Matsuri (summer festivals), fireworks'
            },
            jp: {
                title: '夏の季節',
                titleJp: '夏 (ナツ)',
                description: '夏は新鮮な緑と祭りの精神に満ちています',
                period: '6月 - 8月',
                characteristics: '暑い、湿気、豊かな緑、青い空',
                traditions: '祭り、花火'
            }
        }
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
        traditions: 'Momijigari (melihat daun maple), panen',
        translations: {
            id: {
                title: 'Autumn Season',
                titleJp: '秋 (Aki)',
                description: 'Musim gugur mempesona dengan dedaunan maple yang berubah menjadi emas',
                period: 'September - November',
                characteristics: 'Sejuk, dedaunan berubah warna, udara segar',
                traditions: 'Momijigari (melihat daun maple), panen'
            },
            en: {
                title: 'Autumn Season',
                titleJp: '秋 (Aki)',
                description: 'Autumn is enchanting with maple leaves turning golden',
                period: 'September - November',
                characteristics: 'Cool, changing leaves, fresh air',
                traditions: 'Momijigari (maple viewing), harvest'
            },
            jp: {
                title: '秋の季節',
                titleJp: '秋 (アキ)',
                description: '秋は黄金色に変わる紅葉で魅惑的です',
                period: '9月 - 11月',
                characteristics: '涼しい、紅葉、新鮮な空気',
                traditions: '紅葉狩り、収穫'
            }
        }
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
        traditions: 'Onsen (pemandian air panas), perayaan tahun baru',
        translations: {
            id: {
                title: 'Winter Season',
                titleJp: '冬 (Fuyu)',
                description: 'Musim dingin membawa ketenangan dengan salju yang turun lembut',
                period: 'Desember - Februari',
                characteristics: 'Dingin, bersalju, pemandangan putih bersih',
                traditions: 'Onsen (pemandian air panas), perayaan tahun baru'
            },
            en: {
                title: 'Winter Season',
                titleJp: '冬 (Fuyu)',
                description: 'Winter brings tranquility with gently falling snow',
                period: 'December - February',
                characteristics: 'Cold, snowy, pristine white scenery',
                traditions: 'Onsen (hot springs), New Year celebrations'
            },
            jp: {
                title: '冬の季節',
                titleJp: '冬 (フユ)',
                description: '冬は優しく降る雪で静けさをもたらします',
                period: '12月 - 2月',
                characteristics: '寒い、雪、きれいな白い景色',
                traditions: '温泉、新年のお祝い'
            }
        }
    }
};

// Global Variables
let currentSeason = 'spring';
let currentLanguage = 'id';
let particleInterval;
let animationEnabled = true;

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    initializeClock();
    changeSeason('spring');
    initializeFAB();
    initializeSettings();
});

// ===================================
// REAL-TIME CLOCK FUNCTIONS
// ===================================

function initializeClock() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
}

function updateDateTime() {
    const now = new Date();
    
    let days, months;
    
    if (currentLanguage === 'id') {
        days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    } else if (currentLanguage === 'en') {
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    } else {
        days = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
        months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    }
    
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    if (currentLanguage === 'jp') {
        document.getElementById('header-date').textContent = `${year}年${month}${date}日 ${day}`;
    } else {
        document.getElementById('header-date').textContent = `${day}, ${date} ${month} ${year}`;
    }
    document.getElementById('header-time').textContent = `${hours}:${minutes}`;
}

// ===================================
// SEASON CHANGE FUNCTIONS
// ===================================

function changeSeason(season) {
    if (!seasons[season]) return;
    
    currentSeason = season;
    const config = seasons[season];
    const trans = config.translations[currentLanguage];
    
    document.body.className = season;
    
    document.querySelectorAll('.season-icon-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.season === season) {
            btn.classList.add('active');
        }
    });
    
    document.getElementById('season-icon').textContent = config.icon;
    document.getElementById('season-title').textContent = `${trans.title} - ${trans.titleJp}`;
    document.getElementById('season-description').textContent = trans.description;
    document.getElementById('season-period-text').textContent = trans.period;
    document.getElementById('season-characteristics').textContent = trans.characteristics;
    document.getElementById('season-traditions').textContent = trans.traditions;
    
    const seasonRadio = document.querySelector(`input[name="season"][value="${season}"]`);
    if (seasonRadio) seasonRadio.checked = true;
    
    if (animationEnabled) {
        createParticles(season);
    }
}

// ===================================
// PARTICLE SYSTEM FUNCTIONS
// ===================================

function createParticles(season) {
    const container = document.getElementById('particles');
    container.innerHTML = '';
    
    if (particleInterval) {
        clearInterval(particleInterval);
    }
    
    if (!animationEnabled) return;
    
    const config = seasons[season];
    
    for (let i = 0; i < config.particleCount; i++) {
        addParticle(container, config.particle);
    }
    
    particleInterval = setInterval(() => {
        if (container.children.length < config.particleCount * 2) {
            addParticle(container, config.particle);
        }
    }, 800);
}

function addParticle(container, particle) {
    const el = document.createElement('div');
    el.className = 'particle';
    el.textContent = particle;
    el.style.left = Math.random() * 100 + '%';
    el.style.fontSize = (Math.random() * 15 + 15) + 'px';
    
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = delay + 's';
    
    container.appendChild(el);
    
    setTimeout(() => {
        if (el.parentNode) el.remove();
    }, (duration + delay) * 1000);
}

function stopParticles() {
    const container = document.getElementById('particles');
    container.innerHTML = '';
    if (particleInterval) {
        clearInterval(particleInterval);
    }
}

// ===================================
// SETTINGS FUNCTIONS
// ===================================

function initializeSettings() {
    const settingsBtn = document.getElementById('settings-btn');
    const settingsPopup = document.getElementById('settings-popup');
    const closeSettings = document.getElementById('close-settings');
    const animationToggle = document.getElementById('animation-toggle');
    
    settingsBtn.addEventListener('click', () => {
        settingsPopup.classList.add('active');
    });
    
    closeSettings.addEventListener('click', () => {
        settingsPopup.classList.remove('active');
    });
    
    settingsPopup.addEventListener('click', (e) => {
        if (e.target === settingsPopup) {
            settingsPopup.classList.remove('active');
        }
    });
    
    document.querySelectorAll('input[name="season"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            changeSeason(e.target.value);
        });
    });
    
    animationToggle.addEventListener('change', (e) => {
        animationEnabled = e.target.checked;
        if (animationEnabled) {
            createParticles(currentSeason);
        } else {
            stopParticles();
        }
        updateToggleLabel();
    });
    
    document.querySelectorAll('input[name="language"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    });
}

function updateToggleLabel() {
    const label = document.querySelector('.toggle-label');
    if (animationEnabled) {
        label.textContent = translations[currentLanguage].animationStatus;
    } else {
        label.textContent = currentLanguage === 'id' ? 'Nonaktif' : 
                           currentLanguage === 'en' ? 'Inactive' : '非アクティブ';
    }
}

// ===================================
// LANGUAGE FUNCTIONS
// ===================================

function changeLanguage(lang) {
    currentLanguage = lang;
    
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    changeSeason(currentSeason);
    updateDateTime();
    updateToggleLabel();
    
    const langRadio = document.querySelector(`input[name="language"][value="${lang}"]`);
    if (langRadio) langRadio.checked = true;
}

// ===================================
// FLOATING ACTION BUTTON (FAB) FUNCTIONS
// ===================================

function initializeFAB() {
    const fab = document.getElementById('fab');
    const miniPage = document.getElementById('mini-page');
    const closeBtn = document.getElementById('close-menu');
    
    fab.addEventListener('click', () => {
        miniPage.classList.toggle('active');
        fab.style.transform = miniPage.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0deg)';
    });
    
    closeBtn.addEventListener('click', () => {
        miniPage.classList.remove('active');
        fab.style.transform = 'rotate(0deg)';
    });
    
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            miniPage.classList.remove('active');
            fab.style.transform = 'rotate(0deg)';
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!miniPage.contains(e.target) && !fab.contains(e.target)) {
            miniPage.classList.remove('active');
            fab.style.transform = 'rotate(0deg)';
        }
    });
}
