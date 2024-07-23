document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const dateTimeElement = document.getElementById('date-time');
        dateTimeElement.textContent = now.toLocaleString();
    }

    updateTime();
    setInterval(updateTime, 1000);
});
