// Initialize Tone.js Synth
const synth = new Tone.Synth({
    oscillator: {
        type: "square" // Classic 8-bit sound
    }
}).toDestination();

// Canvas Setup
const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth * 0.8;
canvas.height = 300;

// Function to draw visuals
function visualize(note) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = canvas.width / 30;
    const barHeight = Math.random() * canvas.height;
    const barX = Math.random() * canvas.width;
    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.fillRect(barX, canvas.height - barHeight, barWidth, barHeight);
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`Playing: ${note}`, canvas.width / 3, canvas.height / 2);
}

// Handle key presses
document.addEventListener("keydown", (e) => {
    const keyToNote = {
        a: "C4",
        s: "D4",
        d: "E4",
        f: "F4",
        g: "G4",
        h: "A4",
        j: "B4",
        k: "C5"
    };
    const note = keyToNote[e.key];
    if (note) {
        synth.triggerAttackRelease(note, "8n");
        visualize(note);
    }
});

