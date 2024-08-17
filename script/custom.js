// banner slide code begin from here
      let slideIndex = 0;
        showSlides();
        function showSlides() {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
           for (i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" active", "");
           }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 4000); // Change image every 4 seconds
        }

//smart slider code begin from here 
        const initSlider = () => {
            const imageList = document.querySelector(".slider-wrapper .image-list");
            const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
            const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
            const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
            const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
            
            scrollbarThumb.addEventListener("mousedown", (e) => {
                const startX = e.clientX;
                const thumbPosition = scrollbarThumb.offsetLeft;

                     const handleMouseMove = (e) => {
                     const deltaX = e.clientX - startX;
                     const newThumbPosition = thumbPosition + deltaX;
                     const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
                     const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                     const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
                     scrollbarThumb.style.left = `${boundedPosition}px`;
                     imageList.scrollLeft = scrollPosition;
                 }

                const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                }

                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
                
            });

//Slide images according to the slide button clicks
            slideButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const direction = button.id === "prev-slide" ? -1 : 1;
                    const scrollAmount = imageList.clientWidth * direction;
                    imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
                });
            });
            const handleSliderButtons = () => {
                slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
                slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
            }

 // update scrollbar thumb position based on image scroll
            const updateScrollThumbPosition = () => {
                const scrollPosition = imageList.scrollLeft;
                const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
                scrollbarThumb.style.left = `${thumbPosition}px`;
            }
            imageList.addEventListener("scroll", () => {
                handleSliderButtons();
                updateScrollThumbPosition();
            });
        }
        window.addEventListener("load", initSlider);




// Reveal Website Elements On Scroll
        function reveal(){
          var reveals = document.querySelectorAll('.reveal');
          for(var i = 0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;
            if (revealtop < windowheight - revealpoint){
              reveals[i].classList.add('active');
            }
            else{
              reveals[i].classList.remove('active');
            }
          }
        }
        window.addEventListener('scroll', reveal);

// scroll top coding start from here
        let myButton = document.getElementById("myBtn");
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        function scrollFunction(){
          if (document.bodyscrollTop > 20 || document.documentElement.scrollTop > 20 ){
            myButton.style.display =  "block";
          } else {
            myButton.style.display = "none";
          }
        }

// When the user clicks on the button, scroll to the top of the document
        function topFunction(){
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }

//Custom modal code start from here
        const openModal = document.querySelector('#openModal')
        const closeModal = document.querySelector('#closeModal')
        const customModal = document.querySelector('#customModal')
        
        openModal.addEventListener('click', () => {
          customModal.style.display = 'block'
        })
        closeModal.addEventListener('click', () => {
          customModal.style.display = 'none'
        })

// Mobile view Navigation toggle code start from here
        function toggleNav(x) {
          x.classList.toggle("active");
        }