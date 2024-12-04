// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the header element
    const header = document.querySelector('header');

    // Add a slight delay and then trigger the animation
    setTimeout(function() {
        header.classList.add('header-visible');
    }, 500); // Delay of 500ms for smooth effect
});
