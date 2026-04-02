document.addEventListener('DOMContentLoaded', function() {
    
    const quotes = [
        "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",

        "The roots of education are bitter, but the fruit is sweet. - Aristotle",

        "Education is not preparation for life; education is life itself. - John Dewey",

        "The function of education is to teach one to think intensively and to think critically. - Martin Luther King Jr.",

        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",

        "An investment in knowledge pays the best interest. - Benjamin Franklin",

        "The beautiful thing about learning is that no one can take it away from you. - B.B. King",

        "Education is the key to unlock the golden door of freedom. - George Washington Carver",

        "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",

        "Education is not the filling of a pail, but the lighting of a fire. - William Butler Yeats"
    ];

    
    const events = [
        {
            title: "Annual Sports Day",
            description: "Join us for our annual sports day with various competitions and activities for all students.",
            date: "October 15, 2023"
        },
        {
            title: "Science Fair",
            description: "Students will showcase their innovative science projects to the school community.",
            date: "November 5, 2023"
        },
        {
            title: "Parent-Teacher Meeting",
            description: "Opportunity for parents to discuss their child's progress with teachers.",
            date: "November 20, 2023"
        },
        {
            title: "Cultural Festival",
            description: "Celebration of diverse cultures with performances, food, and exhibitions.",
            date: "December 10, 2023"
        },
        {
            title: "Winter Break Begins",
            description: "School will be closed for winter holidays. Classes resume on January 8th.",
            date: "December 22, 2023"
        },
        {
            title: "Career Guidance Workshop",
            description: "Experts will guide students on career options and higher education opportunities.",
            date: "January 25, 2024"
        },
        {
            title: "Book Fair",
            description: "Annual book fair with a wide selection of books for all age groups.",
            date: "February 12, 2024"
        },
        {
            title: "Art Exhibition",
            description: "Display of student artwork from throughout the academic year.",
            date: "March 8, 2024"
        },
        {
            title: "Annual Day Celebration",
            description: "Grand celebration with performances, awards, and recognition of student achievements.",
            date: "April 5, 2024"
        },
        {
            title: "Graduation Ceremony",
            description: "Celebrating our graduating class and their accomplishments.",
            date: "May 20, 2024"
        }
    ];


    const quoteElement = document.getElementById('dynamic-quote');
    const eventTitleElement = document.getElementById('event-title');
    const eventDescriptionElement = document.getElementById('event-description');
    const eventDateElement = document.getElementById('event-date');
    const eventCounterElement = document.getElementById('event-counter');
    const prevEventButton = document.getElementById('prev-event');
    const nextEventButton = document.getElementById('next-event');

    
    let currentQuoteIndex = 0;
    let currentEventIndex = 0;

     function displayQuote(index) {
        quoteElement.textContent = quotes[index];
    }

    function displayEvent(index) {
        const event = events[index];
        eventTitleElement.textContent = event.title;
        eventDescriptionElement.textContent = event.description;
        eventDateElement.textContent = `Date: ${event.date}`;
        eventCounterElement.textContent = `${index + 1}/${events.length}`;
    }

    
    function rotateQuotes() {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        displayQuote(currentQuoteIndex);
    }

    
    displayQuote(currentQuoteIndex);
    displayEvent(currentEventIndex);


    setInterval(rotateQuotes, 8000);

    prevEventButton.addEventListener('click', function() {
        currentEventIndex = (currentEventIndex - 1 + events.length) % events.length;
        displayEvent(currentEventIndex);
    });

    nextEventButton.addEventListener('click', function() {
        currentEventIndex = (currentEventIndex + 1) % events.length;
        displayEvent(currentEventIndex);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevEventButton.click();
        } else if (e.key === 'ArrowRight') {
            nextEventButton.click();
        }
    });
});