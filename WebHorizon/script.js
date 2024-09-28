// Dynamic Content Loading
document.addEventListener("DOMContentLoaded", function() {
    const newsGrid = document.querySelector('.news-grid');

    // Simulate a delay to fetch articles
    setTimeout(() => {
        const dynamicContent = `
        <div class="news-card">
            <img src="/mnt/data/Screenshot 2024-09-27 120306.png" alt="Dynamic News" class="news-img">
            <h3 class="news-title">Dynamic News Headline</h3>
            <p class="news-summary">This news is dynamically loaded and displays new and relevant content.</p>
        </div>`;
        
        newsGrid.innerHTML += dynamicContent;
    }, 3000);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
