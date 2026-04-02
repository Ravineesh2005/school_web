        // Create additional floating formulas
        const formulas = [
            "∫f(x)dx", "F = G(m₁m₂)/r²", "c = λf", "PV = nRT", "v = λf", 
            "S = k ln Ω", "K.E. = ½mv²", "λ = h/p", "V = IR", "d = vt"
        ];
        
        const formulaContainer = document.querySelector('.formulas');
        
        // Create 20 floating formulas
        for (let i = 0; i < 20; i++) {
            const formula = document.createElement('div');
            formula.className = 'formula';
            formula.textContent = formulas[Math.floor(Math.random() * formulas.length)];
            
            // Random position
            formula.style.left = `${Math.random() * 100}%`;
            
            // Random animation delay and duration
            const delay = Math.random() * 20;
            const duration = 20 + Math.random() * 30;
            
            formula.style.animation = `floatFormula ${duration}s infinite linear ${delay}s`;
            
            formulaContainer.appendChild(formula);
        }
        
        // Add hover effects to buttons
        document.querySelectorAll('.social-button').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.animation = 'none';
                this.style.transform = 'translateY(-15px) scale(1.05) rotate(5deg)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.animation = 'float 6s infinite ease-in-out';
                this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            });
        });
        
        // Rotate quotes
        const quotes = [
            "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.",
            "In the middle of difficulty lies opportunity.",
            "Imagination is more important than knowledge.",
            "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
            "Science without religion is lame, religion without science is blind."
        ];
        
        const authors = [
            "RAVI THAKUR",
            "RAVI THAKUR",
            "RAVI THAKUR",
            "RAVI THAKUR",
            "RAVI THAKUR"
        ];
        
        let quoteIndex = 0;
        const quoteElement = document.querySelector('.quote');
        const authorElement = document.querySelector('.author');
        
        function rotateQuote() {
            quoteIndex = (quoteIndex + 1) % quotes.length;
            
            // Fade out
            quoteElement.style.opacity = 0;
            authorElement.style.opacity = 0;
            
            setTimeout(() => {
                quoteElement.textContent = `"${quotes[quoteIndex]}"`;
                authorElement.textContent = `— ${authors[quoteIndex]}`;
                
                // Fade in
                quoteElement.style.opacity = 1;
                authorElement.style.opacity = 1;
            }, 500);
        }
        
        // Rotate quote every 5 seconds
        setInterval(rotateQuote, 5000);