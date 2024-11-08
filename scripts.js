// JavaScript to generate stars and animate them
document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.stars');
    const numberOfStars = 100; // Adjust the number of stars

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize star position and size
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;

        // Append to the star container
        starContainer.appendChild(star);
    }
});
document.addEventListener('DOMContentLoaded', function() {
        const sidebar = document.querySelector('.sidebar');
        const toggleBtn = document.querySelector('.sidebar-toggle .toggle-btn');
        const closeBtn = document.querySelector('.sidebar .close-btn');

        toggleBtn.addEventListener('click', function() {
            sidebar.classList.add('open');
        });

        closeBtn.addEventListener('click', function() {
            sidebar.classList.remove('open');
        });
    });
    


    