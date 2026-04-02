        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.getElementById('navbar');
            const navbarItems = document.getElementById('navbarItems');
            const leftArrow = document.getElementById('leftArrow');
            const rightArrow = document.getElementById('rightArrow');
            const highlightBar = document.getElementById('highlightBar');
            
            // Initialize highlight position
            function initHighlight() {
                const activeItem = document.querySelector('.navbar-item a.active') || 
                                  document.querySelector('.navbar-item:first-child a');
                if (activeItem) {
                    const itemRect = activeItem.parentElement.getBoundingClientRect();
                    const navbarRect = navbar.getBoundingClientRect();
                    
                    highlightBar.style.width = `${itemRect.width}px`;
                    highlightBar.style.left = `${itemRect.left - navbarRect.left}px`;
                    activeItem.classList.add('active');
                }
            }
            
            // Set active nav item
            document.querySelectorAll('.navbar a').forEach(link => {
                link.addEventListener('click', function(e) {
                    document.querySelectorAll('.navbar a').forEach(a => a.classList.remove('active'));
                    this.classList.add('active');
                    
                    const itemRect = this.parentElement.getBoundingClientRect();
                    const navbarRect = navbar.getBoundingClientRect();
                    
                    highlightBar.style.width = `${itemRect.width}px`;
                    highlightBar.style.left = `${itemRect.left - navbarRect.left}px`;
                });
            });
            
            // Initialize highlight
            initHighlight();
            
            // Arrow functionality
            leftArrow.addEventListener('click', function() {
                navbarItems.scrollBy({
                    left: -200,
                    behavior: 'smooth'
                });
            });
            
            rightArrow.addEventListener('click', function() {
                navbarItems.scrollBy({
                    left: 200,
                    behavior: 'smooth'
                });
            });
            
            // Show/hide arrows based on scroll position
            function updateArrowVisibility() {
                // Show right arrow if not scrolled to the end
                if (navbarItems.scrollWidth > navbarItems.clientWidth) {
                    rightArrow.classList.add('visible');
                } else {
                    rightArrow.classList.remove('visible');
                }
                
                // Show left arrow if scrolled away from start
                if (navbarItems.scrollLeft > 0) {
                    leftArrow.classList.add('visible');
                } else {
                    leftArrow.classList.remove('visible');
                }
            }
            
            navbarItems.addEventListener('scroll', updateArrowVisibility);
            
            // Update on resize
            window.addEventListener('resize', function() {
                initHighlight();
                updateArrowVisibility();
            });
            
            // Initial check
            updateArrowVisibility();
        });


        //titlebar
           // Pause animation on hover for better readability
        const titlebars = document.querySelectorAll('.titlebar');
        const animatedBorder = document.querySelector('.animated-border');
        
        titlebars.forEach(titlebar => {
            titlebar.addEventListener('mouseenter', () => {
                titlebar.style.animationPlayState = 'paused';
            });
            
            titlebar.addEventListener('mouseleave', () => {
                titlebar.style.animationPlayState = 'running';
            });
        });
        
        // Enhance border animation on hover
        animatedBorder.addEventListener('mouseenter', () => {
            animatedBorder.style.animationDuration = '5s';
            animatedBorder.style.filter = 'blur(3px) brightness(1.2)';
        });
        
        animatedBorder.addEventListener('mouseleave', () => {
            animatedBorder.style.animationDuration = '15s';
            animatedBorder.style.filter = 'blur(2px)';
        });
        
        // Add dynamic title effect
        const mainTitle = document.querySelector('.main-title');
        
        mainTitle.addEventListener('mouseenter', () => {
            mainTitle.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
            mainTitle.style.color = '#fffb00';
        });
        
        mainTitle.addEventListener('mouseleave', () => {
            mainTitle.style.textShadow = '0 0 15px rgba(255, 215, 0, 0.5)';
            mainTitle.style.color = '#ffd700';
        });
