//to add dataLayer 
window.dataLayer = { 
  pageName: "Ganesh Store", 
  userType: "Guest"
};


const images = document.querySelectorAll('.category-card img');
// Loop through each image and add event listeners for zoom
images.forEach(img => {
    // Zoom in on mouse enter
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)'; // Zoom in by 10%
        img.style.transition = 'transform 0.3s ease';
    });
    // Zoom out on mouse leave
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)'; // Reset to original size
        img.style.transition = 'transform 0.3s ease';
    });
});


// subscribe button
function myFunction() {

  const email = document.querySelector('input[type="email"]').value;
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
  } else {
      alert("Subscription successful, Thank You!");
  }
}