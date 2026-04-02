
      const images = [
  'assets/dress/pic1.jpg', 'assets/dress/pic2.jpg', 'assets/dress/pic3.jpg', 
  'assets/dress/pic4.jpg', 'assets/dress/pic5.jpg', 'assets/dress/pic6.jpg', 
  'assets/dress/pic7.jpg', 'assets/dress/pic8.jpg', 'assets/dress/pic9.jpg'   
];


const box1Images = images.slice(0, 3);
const box2Images = images.slice(3, 6);
const box3Images = images.slice(6, 9);


let index1 = 0;
let index2 = 0;
let index3 = 0;

function changeBoxImage(boxId, boxImages, indexVar) {
  const box = document.getElementById(boxId);
  box.classList.add('out');
  
  setTimeout(() => {
    box.src = boxImages[indexVar.index];
    box.classList.remove('out');
    indexVar.index = (indexVar.index + 1) % boxImages.length;
  }, 1000);
}


const indexObj1 = { index: 0 };
const indexObj2 = { index: 0 };
const indexObj3 = { index: 0 };

setInterval(() => changeBoxImage('box1', box1Images, indexObj1), 4000);
setInterval(() => changeBoxImage('box2', box2Images, indexObj2), 4000);
setInterval(() => changeBoxImage('box3', box3Images, indexObj3), 4000);



        const quotes = [
            {
                text: "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
                author: "Albert Einstein"
            },
            {
                text: "Science is a way of thinking much more than it is a body of knowledge.",
                author: "Carl Sagan"
            },
            {
                text: "The good thing about science is that it's true whether or not you believe in it.",
                author: "Neil deGrasse Tyson"
            },
            {
                text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
                author: "Marie Curie"
            },
            {
                text: "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'",
                author: "Isaac Asimov"
            }
        ];
        
        let currentQuoteIndex = 0;
        const quoteElement = document.querySelector('.quote');
        const authorElement = document.querySelector('.author');
        
        function rotateQuote() {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            const quote = quotes[currentQuoteIndex];
            
           
            quoteElement.style.opacity = 0;
            authorElement.style.opacity = 0;
            
            setTimeout(() => {
                quoteElement.textContent = `"${quote.text}"`;
                authorElement.textContent = `— ${quote.author}`;
                
               
                quoteElement.style.opacity = 1;
                authorElement.style.opacity = 1;
            }, 500);
        }
       
        setInterval(rotateQuote, 5000);
        

        const formulaElements = [
            "∫f(x)dx", "F = G(m₁m₂)/r²", "c = λf", "PV = nRT", "v = λf", 
            "S = k ln Ω", "K.E. = ½mv²", "λ = h/p", "V = IR", "d = vt"
        ];
        
        const formulaContainer = document.querySelector('.formulas');
        
      
        for (let i = 0; i < 15; i++) {
            const formula = document.createElement('div');
            formula.className = 'formula';
            formula.textContent = formulaElements[Math.floor(Math.random() * formulaElements.length)];
            
           
            formula.style.left = `${Math.random() * 100}%`;
            
         
            const delay = Math.random() * 20;
            const duration = 20 + Math.random() * 30;
            
            formula.style.animation = `floatFormula ${duration}s infinite linear ${delay}s`;
            
            formulaContainer.appendChild(formula);
        }
        
      
        const tableRows = document.querySelectorAll('.fee-table tr');
        tableRows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.transform = 'scale(1.01)';
                row.style.transition = 'transform 0.3s ease';
            });
            
            row.addEventListener('mouseleave', () => {
                row.style.transform = 'scale(1)';
            });
        });
        
     
        const dressCards = document.querySelectorAll('.dress-card');
        dressCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'rotateY(180deg)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateY(0deg)';
            });
        });