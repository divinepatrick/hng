/* Updates the time display element with current timestamp */
function updateTime() {
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}


 /* Initializes the profile card functionality */
function initProfileCard() {
    // Set initial time
    updateTime();

    // Update time every 100ms for accuracy
    setInterval(updateTime, 100);

    // Add keyboard navigation enhancement for social links
    const socialLinks = document.querySelectorAll('.social-list a');
    socialLinks.forEach((link, index) => {
        link.addEventListener('keydown', (e) => {
            // Navigate with arrow keys
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextLink = socialLinks[(index + 1) % socialLinks.length];
                nextLink.focus();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevLink = socialLinks[(index - 1 + socialLinks.length) % socialLinks.length];
                prevLink.focus();
            }
        });
    });

    // Optional: Add smooth scroll behavior for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on load
    const profileCard = document.querySelector('[data-testid="test-profile-card"]');
    if (profileCard) {
        profileCard.style.opacity = '0';
        profileCard.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            profileCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            profileCard.style.opacity = '1';
            profileCard.style.transform = 'translateY(0)';
        }, 100);
    }

    // Log initialization for debugging
    console.log('Profile card initialized successfully');
    console.log('Current timestamp:', Date.now());
}

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProfileCard);
} else {
    // DOM is already loaded
    initProfileCard();
}

// Optional: Export functions for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateTime,
        initProfileCard
    };
}