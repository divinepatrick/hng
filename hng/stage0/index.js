// Update time once page loads
function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Initial update
updateTime();

// Update every second
setInterval(updateTime, 1000);