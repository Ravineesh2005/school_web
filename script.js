
      const images = [
        "assets/image/pic2.jpg",
        "assets/image/pic4.jpg",
        "assets/image/pic3.jpg",
        "assets/image/pic4.jpg",
        "assets/image/pic3.jpg",
        "assets/image/pic17.jpg",
        "assets/image/pic16.jpg",
        "assets/image/pic18.jpg",
        "assets/image/pic16.jpg",
        "assets/image/pic17.jpg",
        "assets/image/pic12.jpg",
        "assets/image/pic13.jpg",
        "assets/image/pic11.jpg",
        "assets/image/pic12.jpg",
        "assets/image/pic13.jpg",
        "assets/image/pic17.jpg",
        "assets/image/pic16.jpg",
        "assets/image/pic17.jpg",
        "assets/image/pic18.jpg",
        "assets/image/pic17.jpg"
];


const box1Images = images.slice(0, 5);
const box2Images = images.slice(5, 10);
const box3Images = images.slice(10, 15);
const box4Images = images.slice(15, 20);



let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;

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
const indexObj4 = { index: 0 };

setInterval(() => changeBoxImage('box1', box1Images, indexObj1), 2000);
setInterval(() => changeBoxImage('box2', box2Images, indexObj2), 2000);
setInterval(() => changeBoxImage('box3', box3Images, indexObj3), 2000);
setInterval(() => changeBoxImage('box4', box4Images, indexObj4), 2000);




const sectionImages = [
 
    [
        "assets/b_g_image/pic1.jpg",
        "assets/b_g_image/pic2.jpg",
        "assets/b_g_image/pic3.jpg",
        "assets/b_g_image/pic4.jpg",
        "assets/b_g_image/pic5.jpg",
        "assets/b_g_image/pic6.jpg",
        "assets/b_g_image/pica.jpg",
        "assets/b_g_image/picb.jpg",
        "assets/b_g_image/pic1.jpg",
        "assets/b_g_image/pic2.jpg"
     
    ],

    [
        "assets/b_g_image/pic7.jpg",
        "assets/b_g_image/pic8.jpg",
        "assets/b_g_image/pic9.jpg",
        "assets/b_g_image/pic10.jpg",
        "assets/b_g_image/pic11.jpg",
        "assets/b_g_image/pic12.jpg",
        "assets/b_g_image/pic7.jpg",
        "assets/b_g_image/pic9.jpg",
        "assets/b_g_image/pic11.jpg",
        "assets/b_g_image/pic12.jpg"
    ],
 
    [
        "assets/b_g_image/pic13.png",
        "assets/b_g_image/pic14.png",
        "assets/b_g_image/pic15.png",
        "assets/b_g_image/pic16.png",
        "assets/b_g_image/pic17.png",
        "assets/b_g_image/pic13.png",
        "assets/b_g_image/pic14.png",
        "assets/b_g_image/pic15.png",
        "assets/b_g_image/pic16.png",
        "assets/b_g_image/pic17.png"
    ],

    [
        "assets/b_g_image/pic21.jpg",
        "assets/b_g_image/pic22.jpg",
        "assets/b_g_image/pic23.jpg",
       "assets/b_g_image/pic21.jpg",
        "assets/b_g_image/pic22.jpg",
        "assets/b_g_image/pic23.jpg",
       "assets/b_g_image/pic21.jpg",
        "assets/b_g_image/pic22.jpg",
        "assets/b_g_image/pic23.jpg",
        "assets/b_g_image/pic21.jpg",
    ],
 
    [
        "assets/b_g_image/pic1.jpg",
        "assets/b_g_image/pic2.jpg",
        "assets/b_g_image/pic3.jpg",
        "assets/b_g_image/pic4.jpg",
        "assets/b_g_image/pic5.jpg",
        "assets/b_g_image/pic6.jpg",
        "assets/b_g_image/pica.jpg",
        "assets/b_g_image/picb.jpg",
        "assets/b_g_image/pic1.jpg",
        "assets/b_g_image/pic2.jpg",
    ]
];

const sectionQuotes = [
    
    [
        {text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela"},
        {text: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle"},
        {text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin"},
        {text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi"},
        {text: "Education is not the filling of a pail, but the lighting of a fire.", author: "William Butler Yeats"},
        {text: "The function of education is to teach one to think intensively and to think critically.", author: "Martin Luther King Jr."},
        {text: "Learning never exhausts the mind.", author: "Leonardo da Vinci"},
        {text: "You are always a student, never a master. You have to keep moving forward.", author: "Conrad Hall"},
        {text: "Wisdom begins with wonder.", author: "Socrates"},
        {text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin"}
    ],

    [
        {text: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.", author: "Bill Gates"},
        {text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke"},
        {text: "Technology is nothing. What's important is that you have faith in people.", author: "Steve Jobs"},
        {text: "The great growling engine of change—technology.", author: "Alvin Toffler"},
        {text: "The art challenges the technology, and the technology inspires the art.", author: "John Lasseter"},
        {text: "We are stuck with technology when what we really want is just stuff that works.", author: "Douglas Adams"},
        {text: "It has become appallingly obvious that our technology has exceeded our humanity.", author: "Albert Einstein"},
        {text: "The science of today is the technology of tomorrow.", author: "Edward Teller"},
        {text: "The human spirit must prevail over technology.", author: "Albert Einstein"},
        {text: "Technology is a useful servant but a dangerous master.", author: "Christian Lous Lange"}
    ],

    [
        {text: "The important thing in science is not so much to obtain new facts as to discover new ways of thinking about them.", author: "William Lawrence Bragg"},
        {text: "Science is organized knowledge. Wisdom is organized life.", author: "Immanuel Kant"},
        {text: "The scientist is not a person who gives the right answers, he's one who asks the right questions.", author: "Claude Lévi-Strauss"},
        {text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.", author: "Edwin Powell Hubble"},
        {text: "Science is the acceptance of what works and the rejection of what does not.", author: "Jacob Bronowski"},
        {text: "Science knows no country, because knowledge belongs to humanity.", author: "Louis Pasteur"},
        {text: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson"},
        {text: "Research is what I'm doing when I don't know what I'm doing.", author: "Wernher von Braun"},
        {text: "Nothing in life is to be feared, it is only to be understood.", author: "Marie Curie"},
        {text: "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'", author: "Isaac Asimov"}
    ],

    [
        {text: "Safety is not an intellectual exercise to keep us in work. It is a matter of life and death.", author: "Sir Brian Appleton"},
        {text: "Safety isn't expensive, it's priceless.", author: "Unknown"},
        {text: "Safety is something that happens between your ears, not something you hold in your hands.", author: "Jeff Cooper"},
        {text: "Better a thousand times careful than once dead.", author: "Proverb"},
        {text: "Do not think because an accident hasn't happened to you that it can't happen.", author: "Unknown"},
        {text: "Safety means first aid to the uninjured.", author: "Frank E. Bird Jr."},
        {text: "Precaution is better than cure.", author: "Edward Coke"},
        {text: "A ship in harbor is safe, but that is not what ships are built for.", author: "John A. Shedd"},
        {text: "You don't need to know the whole alphabet of Safety. The A, B, C will suffice.", author: "Unknown"},
        {text: "Safety is a cheap and effective insurance policy.", author: "Unknown"}
    ],
  
    [
        {text: "What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another.", author: "Mahatma Gandhi"},
        {text: "The Earth does not belong to us: we belong to the Earth.", author: "Marlee Matlin"},
        {text: "The environment is where we all meet; where all have a mutual interest.", author: "Lady Bird Johnson"},
        {text: "We won't have a society if we destroy the environment.", author: "Margaret Mead"},
        {text: "The greatest threat to our planet is the belief that someone else will save it.", author: "Robert Swan"},
        {text: "Nature is painting for us, day after day, pictures of infinite beauty.", author: "John Ruskin"},
        {text: "He that plants trees loves others besides himself.", author: "Thomas Fuller"},
        {text: "The environment is everything that isn't me.", author: "Albert Einstein"},
        {text: "We do not inherit the earth from our ancestors, we borrow it from our children.", author: "Native American Proverb"},
        {text: "The earth has music for those who listen.", author: "William Shakespeare"}
    ]
];

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section, index) => {
        const bgOverlay = section.querySelector('.bg-overlay');
        const quoteBox = section.querySelector('.quote-box .quote');
        const authorBox = section.querySelector('.quote-box .author');
        
  
        let bgIndex = Math.floor(Math.random() * sectionImages[index].length);
        let quoteIndex = Math.floor(Math.random() * sectionQuotes[index].length);
        
        bgOverlay.style.backgroundImage = `url('${sectionImages[index][bgIndex]}')`;
        bgOverlay.classList.add('active');
        
        const initialQuote = sectionQuotes[index][quoteIndex];
        quoteBox.textContent = `"${initialQuote.text}"`;
        authorBox.textContent = `- ${initialQuote.author}`;

   
        setInterval(() => {
            bgOverlay.classList.remove('active');
            
            setTimeout(() => {
             
                let newBgIndex;
                do {
                    newBgIndex = Math.floor(Math.random() * sectionImages[index].length);
                } while (newBgIndex === bgIndex && sectionImages[index].length > 1);
                
                bgIndex = newBgIndex;
                bgOverlay.style.backgroundImage = `url('${sectionImages[index][bgIndex]}')`;
                bgOverlay.classList.add('active');
            }, 1500);
        }, 8000);

  
        setInterval(() => {
        
            let newQuoteIndex;
            do {
                newQuoteIndex = Math.floor(Math.random() * sectionQuotes[index].length);
            } while (newQuoteIndex === quoteIndex && sectionQuotes[index].length > 1);
            
            quoteIndex = newQuoteIndex;
            const quote = sectionQuotes[index][quoteIndex];
            
         
            quoteBox.style.animation = 'none';
            authorBox.style.animation = 'none';
            
            setTimeout(() => {
                quoteBox.style.animation = 'fadeIn 1.5s ease';
                authorBox.style.animation = 'fadeIn 1.5s ease';
                quoteBox.textContent = `"${quote.text}"`;
                authorBox.textContent = `- ${quote.author}`;
            }, 50);
        }, 10000);
    });
});
