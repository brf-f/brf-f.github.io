document.addEventListener("DOMContentLoaded", function() {
    const windowHeight = window.innerHeight;
    const textElement = document.body;

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const percentScrolled = scrollPosition / windowHeight;

        // Adjust these values for the range where text color remains constant
        const constantStart = 1.9;
        const constantEnd = 3.1;

        const color1 = [97, 86, 219];       // RGB values for color1

        let textColor;
        if (percentScrolled < constantStart) {
            // Interpolate between black and color1
            const startColor = [0, 0, 0];      // RGB values for black

            const normalizedPosition = percentScrolled / constantStart;

            const currentColor = startColor.map((channel, index) => {
                const range = color1[index] - channel;
                return Math.round(channel + normalizedPosition * range);
            });

            textColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
        } else if (percentScrolled > constantEnd) {
            textColor = "#CFE9FF";
        } else {
            // Interpolate between color1 and color2
            const endColor = [207, 233, 255];  // RGB values for #CFE9FF

            const normalizedPosition = (percentScrolled - constantStart) / (constantEnd - constantStart);

            const currentColor = color1.map((channel, index) => {
                const range = endColor[index] - channel;
                return Math.round(channel + normalizedPosition * range);
            });

            textColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
        }

        textElement.style.color = textColor;
    });
});
