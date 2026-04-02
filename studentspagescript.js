     document.addEventListener('DOMContentLoaded', function() {
            let currentQuoteIndex = 0;
            let currentLinkIndex = 0;
            let currentEventIndex = 0;
            
            
            const currentQuote = document.getElementById('currentQuote');
            const currentAuthor = document.getElementById('currentAuthor');
            
            const currentLinkName = document.getElementById('currentLinkName');
            const currentLinkDesc = document.getElementById('currentLinkDesc');
            
            const currentEventTitle = document.getElementById('currentEventTitle');
            const currentEventDate = document.getElementById('currentEventDate');
            const currentEventDesc = document.getElementById('currentEventDesc');
            
 
            
            const quotes = [
                { text: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle" },
                { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
                { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
                { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
                { text: "Education is not preparation for life; education is life itself.", author: "John Dewey" }
            ];
            
            const importantLinks = [
                { 
                    name: "Academic Calendar", 
                    desc: "View important dates and events" 
                },
                { 
                    name: "E-Library Portal", 
                    desc: "Access digital books and resources" 
                },
                { 
                    name: "Examination Schedule", 
                    desc: "Check exam dates and timings" 
                },
                { 
                    name: "Scholarship Forms", 
                    desc: "Download scholarship applications" 
                },
                { 
                    name: "Science Lab Bookings", 
                    desc: "Reserve lab time for projects" 
                }
            ];
            
            const importantEvents = [
                { 
                    title: "Annual Science Fair", 
                    date: "August 15, 2025 | 9:00 AM - 3:00 PM", 
                    desc: "Students showcase their innovative science projects. Parents and community members are invited to attend." 
                },
                { 
                    title: "Sports Day", 
                    date: "September 5, 2025 | 8:00 AM - 5:00 PM", 
                    desc: "Annual sports competition featuring track and field events. All students participate in various activities." 
                },
                { 
                    title: "Parent-Teacher Meeting", 
                    date: "October 12, 2025 | 10:00 AM - 2:00 PM", 
                    desc: "Quarterly meeting for parents to discuss their child's progress with teachers. Appointments required." 
                },
                { 
                    title: "Cultural Festival", 
                    date: "November 20-22, 2025 | 4:00 PM - 8:00 PM", 
                    desc: "Three-day celebration of cultural diversity with performances, food stalls, and art exhibitions." 
                },
                { 
                    title: "Final Exams", 
                    date: "December 10-20, 2025 | School Hours", 
                    desc: "End-of-year examinations for all classes. Regular classes suspended during this period." 
                }
            ];
            
            const formulas = [
              
                "x = [-b ± √(b² - 4ac)] / (2a)",
                "a² + b² = c²",
                "sin²θ + cos²θ = 1",
                "d/dx xⁿ = n xⁿ⁻¹",
                "∫xⁿ dx = xⁿ⁺¹/(n+1) + C",
                "eⁱᶿ = cosθ + i sinθ",
                "logₐb = ln b / ln a",
                "A = πr²",
                "V = (4/3)πr³",
                "P(A|B) = P(B|A)P(A)/P(B)",
                
                
                "F = ma",
                "E = mc²",
                "v = u + at",
                "s = ut + ½at²",
                "v² = u² + 2as",
                "P = IV",
                "V = IR",
                "F = G(m₁m₂)/r²",
                "E = hf",
                "λ = h/p",
              
                "PV = nRT",
                "ΔG = ΔH - TΔS",
                "K = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ",
                "pH = -log[H⁺]",
                "E = E⁰ - (RT/nF) ln Q",
                "q = mcΔT",
                "λ = h / mv",
                "c = λν",
                "ΔE = -2.18×10⁻¹⁸ J (1/n²)",
                "N = N₀ e^(-λt)",
                
          
                "P = G + E",
                "dN/dt = rN (1 - N/K)",
                "H-W: p² + 2pq + q² = 1",
                "A = πr² (leaf area)",
                "Q₁₀ = (R₂/R₁)^(10/(T₂-T₁))",
                "C₁V₁ = C₂V₂",
                "ΔG = -nFE",
                "V = (4/3)πr³ (cell volume)",
                "SA = 4πr² (cell surface)",
                "SA:V = 3/r"
            ];
            
            function initPage() {
                displayCurrentQuote();
                displayCurrentLink();
                displayCurrentEvent();
                createFormulas();
                loadTimetableData();
                
                setInterval(rotateQuote, 5000);
                setInterval(rotateLink, 6000);
                setInterval(rotateEvent, 7000);
            }
            
            function createFormulas() {
     
                for (let i = 0; i < 20; i++) {
                    addFormula();
                }
                
                setInterval(addFormula, 3000);
            }
            
            function addFormula() {
                const formulaElement = document.createElement('div');
                formulaElement.className = 'formula';
                
                const randomFormula = formulas[Math.floor(Math.random() * formulas.length)];
                formulaElement.textContent = randomFormula;
                
                const startY = Math.random() * 100;
                const endY = startY + (Math.random() * 20 - 10); 
                const rotation = Math.random() * 20 - 10;
                const duration = 20 + Math.random() * 20; 
                
                formulaElement.style.setProperty('--start-y', `${startY}%`);
                formulaElement.style.setProperty('--end-y', `${endY}%`);
                formulaElement.style.setProperty('--rotation', `${rotation}deg`);
                formulaElement.style.animationDuration = `${duration}s`;
                formulaElement.style.animationDelay = `${Math.random() * 5}s`;
                
                formulasBg.appendChild(formulaElement);
                
                setTimeout(() => {
                    if (formulaElement.parentNode) {
                        formulaElement.parentNode.removeChild(formulaElement);
                    }
                }, duration * 1000);
            }
            
          
            
            function displayCurrentQuote() {
                if (quotes.length > 0) {
                    currentQuote.textContent = quotes[currentQuoteIndex].text;
                    currentAuthor.textContent = quotes[currentQuoteIndex].author;
                }
            }
            
            function displayCurrentLink() {
                if (importantLinks.length > 0) {
                    const link = importantLinks[currentLinkIndex];
                    currentLinkName.textContent = link.name;
                    currentLinkDesc.textContent = link.desc;
                }
            }
            
            function displayCurrentEvent() {
                if (importantEvents.length > 0) {
                    const event = importantEvents[currentEventIndex];
                    currentEventTitle.textContent = event.title;
                    currentEventDate.textContent = event.date;
                    currentEventDesc.textContent = event.desc;
                }
            }
            
            function rotateQuote() {
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
                displayCurrentQuote();
            }
            
            function rotateLink() {
                currentLinkIndex = (currentLinkIndex + 1) % importantLinks.length;
                displayCurrentLink();
            }
            
            function rotateEvent() {
                currentEventIndex = (currentEventIndex + 1) % importantEvents.length;
                displayCurrentEvent();
            }
    
            initPage();
        });