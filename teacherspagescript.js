   
        const quoteElement = document.getElementById('quote');
        const authorElement = document.getElementById('author');
        
        function initPage() {
        
            updateQuote();
            
            setInterval(updateQuote, 8000);
            
            setupTouchScrolling();
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

        window.onload = initPage;