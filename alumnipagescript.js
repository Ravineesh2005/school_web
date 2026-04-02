   
        const quoteElement = document.getElementById('quote');
        const authorElement = document.getElementById('author');
        

        function updateQuote() {
            const quotes = [
                {
                    text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
                    author: "Malcolm X"
                },
                {
                    text: "The roots of education are bitter, but the fruit is sweet.",
                    author: "Aristotle"
                },
                {
                    text: "Education is not preparation for life; education is life itself.",
                    author: "John Dewey"
                },
                {
                    text: "The function of education is to teach one to think intensively and to think critically.",
                    author: "Martin Luther King Jr."
                },
                {
                    text: "Education is the key to unlock the golden door of freedom.",
                    author: "George Washington Carver"
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
        
        window.onload = function() {
            updateQuote();
            setInterval(updateQuote, 8000);
        };