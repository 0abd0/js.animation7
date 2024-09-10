


document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img');
    img.src = 'C:/Users/user/Downloads/image.png';

    const bars = document.querySelectorAll('.bar');
    const colors = [
        '#006400	', // Example color 1
        '#FFFFFF', // Example color 2
        '#000000', // Example color 3
        '#FF0000', // Example color 4 
    ];
    
    // Function to get a random color from the predefined colors array
    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    // Apply random colors to the bars
    setInterval(() => {
        bars.forEach(bar => {
            bar.style.backgroundColor = getRandomColor();
        });
    }, 500); // Randomize color every 500 milliseconds
});
