// JavaScript to shrink the header after a delay and show the footer
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('header').classList.add('shrink');
        document.getElementById('footer').classList.add('visible');
    }, 3000); // Delay of 3 seconds
});

// JavaScript to trigger the animation when the rust-oration section is loaded
document.addEventListener('DOMContentLoaded', function() {
    const rustOrationSection = document.getElementById('rust-oration');
    const circleImg = document.getElementById('circle-img');
    const arrowImg = document.getElementById('arrow-img'); // Reference to the arrow image

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                circleImg.style.animation = 'moveCircle 3s forwards';
                setTimeout(() => {
                    arrowImg.style.display = 'block'; // Show the arrow image
                    arrowImg.style.transform = 'scaleX(-1)'; // Flip the arrow horizontally
                    arrowImg.style.opacity = '1'; // Make the arrow visible
                }, 3000); // Delay the arrow animation
                observer.unobserve(rustOrationSection);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(rustOrationSection);
});