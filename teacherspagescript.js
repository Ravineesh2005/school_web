const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

function initPage() {
    updateQuote();
    setInterval(updateQuote, 8000);
    setupTouchScrolling();
    loadTeachers();
}

function setupTouchScrolling() {
    const scrollContainers = document.querySelectorAll('.cards-scroll-container');
    
    scrollContainers.forEach(container => {
        const scrollWrapper = container.querySelector('.scroll-wrapper');
        let startX = 0;
        let scrollLeft = 0;
        
        scrollWrapper.addEventListener('touchstart', function(e) {
            startX = e.touches[0].pageX - scrollWrapper.offsetLeft;
            scrollLeft = scrollWrapper.scrollLeft;
            scrollWrapper.classList.add('touch-scroll');
        });
        
        scrollWrapper.addEventListener('touchmove', function(e) {
            const x = e.touches[0].pageX - scrollWrapper.offsetLeft;
            const walk = (x - startX) * 2; 
            scrollWrapper.scrollLeft = scrollLeft - walk;
        });
    });
}

function updateQuote() {
    const quotes = [
        {
            text: "A teacher affects eternity; he can never tell where his influence stops.",
            author: "Henry Adams"
        },
        {
            text: "Education is not the filling of a pail, but the lighting of a fire.",
            author: "William Butler Yeats"
        },
        {
            text: "The art of teaching is the art of assisting discovery.",
            author: "Mark Van Doren"
        },
        {
            text: "Teachers can change lives with just the right mix of chalk and challenges.",
            author: "Joyce Meyer"
        },
        {
            text: "The best teachers are those who show you where to look but don't tell you what to see.",
            author: "Alexandra K. Trenfor"
        }
    ];
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;
    
    setTimeout(() => {
        quoteElement.textContent = `"${quote.text}"`;
        authorElement.textContent = `- ${quote.author}`;
        
        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;
    }, 500);
}

// ---------------------------------------------
// Dynamic JSON Data Fetching Strategy
// ---------------------------------------------
async function loadTeachers() {
    try {
        const response = await fetch('data/teachers.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Map the JSON keys to the HTML container IDs
        const sections = {
            'senior-faculty': 'senior-faculty',
            'math-dept': 'math-dept',
            'science-dept': 'science-dept',
            'hindi-dept': 'hindi-dept',
            'arts-dept': 'arts-dept',
            'english-dept': 'english-dept',
            'others-dept': 'others-dept'
        };
        
        for (const [key, sectionId] of Object.entries(sections)) {
            if (data[key]) {
                renderTeacherCards(data[key], sectionId);
            }
        }
    } catch (error) {
        console.error("Failed to load teachers data:", error);
    }
}

function renderTeacherCards(teachersList, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    teachersList.forEach(teacher => {
        html += `
    <div class="hexagon-card">
      <div class="hexagon-card-inner">
        <div class="hexagon-card-front">
          <img
            src="${teacher.image}"
            alt="${teacher.name}"
            class="teacher-img"
            onerror="this.src='assets/teachers/pic.png'"
          />
          <h3 class="teacher-name">${teacher.name}</h3>
          <p class="teacher-subject">${teacher.subject}</p>
          <p class="teacher-id">ID: ${teacher.id}</p>
        </div>
        <div class="hexagon-card-back">
          <h3 class="teacher-role">${teacher.role}</h3>
          <p class="teacher-email">${teacher.email}</p>
          <p class="teacher-bio">${teacher.bio}</p>
          <div class="social-icons">
            ${teacher.socials.whatsapp ? `<a href="${teacher.socials.whatsapp}" target="_blank" class="social-icon whatsapp"><i class="fab fa-whatsapp"></i></a>` : ''}
            ${teacher.socials.instagram ? `<a href="${teacher.socials.instagram}" target="_blank" class="social-icon instagram"><i class="fab fa-instagram"></i></a>` : ''}
            ${teacher.socials.phone ? `<a href="tel:${teacher.socials.phone}" class="social-icon phone"><i class="fas fa-phone"></i></a>` : ''}
          </div>
        </div>
      </div>
    </div>`;
    });
    container.innerHTML = html;
}

window.onload = initPage;