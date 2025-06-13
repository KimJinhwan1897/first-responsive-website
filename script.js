// 다국어 지원을 위한 번역 데이터
const translations = {
    ko: {
        title: "OTS",
        logo: "로고",
        "nav.home": "홈",
        "nav.about": "소개",
        "nav.services": "서비스",
        "nav.contact": "연락처",
        "hero.title": "환영합니다",
        "hero.subtitle": "이 웹사이트는 반응형 디자인을 적용한 예제입니다.",
        "hero.button": "자세히 보기",
        "about.title": "소개",
        "about.text": "우리는 최고의 서비스를 제공합니다.",
        "services.title": "서비스",
        "services.web.title": "웹 개발",
        "services.web.desc": "최신 기술을 활용한 웹 개발 서비스",
        "services.mobile.title": "모바일 앱",
        "services.mobile.desc": "사용자 친화적인 모바일 앱 개발",
        "services.design.title": "UI/UX 디자인",
        "services.design.desc": "창의적인 디자인 솔루션",
        "contact.title": "연락처",
        "contact.name": "이름",
        "contact.email": "이메일",
        "contact.message": "메시지",
        "contact.submit": "보내기",
        "footer.company.title": "회사 정보",
        "footer.company.address": "주소: 서울시 강남구",
        "footer.company.phone": "전화: 02-123-4567",
        "footer.social.title": "소셜 미디어",
        "footer.copyright": "© 2024 반응형 웹사이트. All rights reserved.",
        "lang.current": "한국어"
    },
    en: {
        title: "OTS",
        logo: "Logo",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.services": "Services",
        "nav.contact": "Contact",
        "hero.title": "Welcome",
        "hero.subtitle": "This is an example of a responsive website design.",
        "hero.button": "Learn More",
        "about.title": "About",
        "about.text": "We provide the best services.",
        "services.title": "Services",
        "services.web.title": "Web Development",
        "services.web.desc": "Web development services using the latest technology",
        "services.mobile.title": "Mobile Apps",
        "services.mobile.desc": "User-friendly mobile app development",
        "services.design.title": "UI/UX Design",
        "services.design.desc": "Creative design solutions",
        "contact.title": "Contact",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.message": "Message",
        "contact.submit": "Send",
        "footer.company.title": "Company Info",
        "footer.company.address": "Address: Gangnam-gu, Seoul",
        "footer.company.phone": "Phone: 02-123-4567",
        "footer.social.title": "Social Media",
        "footer.copyright": "© 2024 Responsive Website. All rights reserved.",
        "lang.current": "English"
    }
};

// 현재 언어 설정
let currentLang = 'ko';

// 언어 변경 함수
function changeLang(lang) {
    currentLang = lang;
    
    // 모든 번역이 필요한 요소 업데이트
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // placeholder 번역
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // 언어 버튼 상태 업데이트
    const langBtn = document.querySelector('.lang-btn');
    langBtn.setAttribute('data-lang', lang);

    // HTML lang 속성 업데이트
    document.documentElement.lang = lang;
}

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
    // 언어 전환 버튼 이벤트 리스너
    const langBtn = document.querySelector('.lang-btn');
    langBtn.addEventListener('click', () => {
        const currentLang = langBtn.getAttribute('data-lang');
        const newLang = currentLang === 'ko' ? 'en' : 'ko';
        changeLang(newLang);
    });

    // 모바일 메뉴 토글
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // 스무스 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // 모바일 메뉴가 열려있으면 닫기
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
                
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 스크롤 시 헤더 스타일 변경
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = '#fff';
            header.style.boxShadow = 'none';
        }
    });

    // 폼 제출 처리
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // 여기에 폼 제출 로직 추가
            alert(currentLang === 'ko' ? '메시지가 전송되었습니다!' : 'Message has been sent!');
            contactForm.reset();
        });
    }
}); 