// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



// Function to simulate typing effect
function typeEffect() {
    const text = "Solutions";
    let index = 0;
    const interval = setInterval(() => {
      document.getElementById("typing").textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setTimeout(() => {
          document.getElementById("typing").textContent = "";
          typeEffect(); // Restart the typing effect
        }, 1000); // Pause for 1 second before restarting
      }
    }, 100);
  }
  
  // Call the function after the page loads
  window.onload = typeEffect;

 
window.addEventListener('scroll', function() {
    animateOnScroll();
});

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateOnScroll() {
    var serviceSection = document.getElementById('services'); // Change 'services' to the ID of your section
    var elementsToAnimate = serviceSection.querySelectorAll('.animate__animated');

    if (isInViewport(serviceSection)) {
        elementsToAnimate.forEach(function(element) {
            element.classList.add('animate__fadeInUp');
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the dropdown menu
    var dropdownMenu = document.querySelector(".dropdown-menu");
  
    // Get the Services dropdown trigger
    var servicesDropdown = document.querySelector(".nav-item.dropdown");
  
    // Show dropdown menu on hover
    servicesDropdown.addEventListener("mouseover", function() {
      dropdownMenu.classList.add("show");
    });
  
    // Hide dropdown menu when mouse leaves the Services dropdown trigger or the dropdown menu itself
    servicesDropdown.addEventListener("mouseleave", function() {
      dropdownMenu.classList.remove("show");
    });
  
    dropdownMenu.addEventListener("mouseleave", function() {
      dropdownMenu.classList.remove("show");
    });
  });

  

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' +id + ']').classList.add('active');
            });
        };
    });
};