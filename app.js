 const form = document.getElementById("contactForm");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    form.addEventListener("submit", function(e){
      e.preventDefault();
      popup.style.display = "flex";  // Show popup
      form.reset(); // Reset form
    });

    closePopup.addEventListener("click", function(){
      popup.style.display = "none"; // Hide popup
    });