  document.getElementById('closeBtn').addEventListener('click', function() {
            document.getElementById('feedbackCard').style.display = 'none';
        });
        
   window.addEventListener('click', function(event) {
            if (event.target === document.getElementById('feedbackCard')) {
                document.getElementById('feedbackCard').style.display = 'none';
            }
        });