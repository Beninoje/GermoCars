// NAV BAR
const hamburger = document.querySelector('.hamburger_buttons');
const nav_menu = document.querySelector('.nav_menu');
const hamburger_bar_1 = document.querySelector('.line-one');
const hamburger_bar_2 = document.querySelector('.line-two');
const hamburger_bar_3 = document.querySelector('.line-three');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle("is-active");
    nav_menu.classList.toggle("active");
    hamburger_bar_1.classList.add("active");
    hamburger_bar_2.classList.add("active");
    hamburger_bar_3.classList.add("active");
    if(!nav_menu.classList.contains("active")){
        hamburger_bar_1.classList.remove("active");
        hamburger_bar_2.classList.remove("active");
        hamburger_bar_3.classList.remove("active");
    }
});
// EMAIL JS
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
    e.preventDefault();

    //serviceId -templateID - #form -publicKey
    emailjs.sendForm('service_5mueryj','template_pi2ac0a','#contact-form','6MybuPC8dLJt-FOrl')
    .then(()=>{
        //Show the message
       contactMessage.textContent = 'Message sent successfully'; 
        //Clear the message
       setTimeout(()=>{
        contactMessage.textContent = ''
       },5000)

       //Clear input fields
        contactForm.reset()
    },()=>{
        //show error message
        contactMessage.textContent = 'Message not sent';
    })
    
}
contactForm.addEventListener('submit',sendEmail)
// Scroll up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button');
const body = document.querySelector('body');

themeButton.addEventListener('click', function(){
    this.classList.toggle('fa-sun');
    if(this.classList.toggle('fa-moon')){
        body.classList.add('dark-theme');
    }
    else{
        body.classList.remove('dark-theme');
    }
})
// SCROLL REVEAL
const scroll = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    //reset:true // Animation repeat
})
scroll.reveal('.home_perfil, .about_image , .contact_mail',{origin:'right'})
scroll.reveal('.home_name, .home_info, .about_container, .section_title-1, .section_title-2, .about_info, .contact_social, .contact_data ', {origin: 'left'})
scroll.reveal('.services_card, .projects_card, .skill',{interval:100})

// document.addEventListener("DOMContentLoaded", function() {
//     const notificationModal = document.getElementById("notificationModal");
//     const overlay = document.createElement("div");
//     overlay.className = "overlay";
  
//     // Check local storage to determine if the user has visited before
//     // const hasVisited = localStorage.getItem("hasVisited");
  
//     // if (!hasVisited) {
//       // Show the overlay and modal on the user's first visit
//       document.body.appendChild(overlay);
//       overlay.style.display = "block";
//       notificationModal.style.display = "block";
  
//       // Use setTimeout to give time for the modal to be displayed before changing its position
//       setTimeout(function() {
//         notificationModal.style.bottom = "0";
//       }, 100);
  
//       // Set the local storage flag to indicate that the user has visited
//     //   localStorage.setItem("hasVisited", "true");
//     //}
  
//     // Function to close the modal
//     window.closeModal = function() {
//       overlay.style.display = "none";
//       notificationModal.style.bottom = "-100%";
//       document.body.style.overflow = "auto"; // Restore scrolling
//     };
//   });
  



























