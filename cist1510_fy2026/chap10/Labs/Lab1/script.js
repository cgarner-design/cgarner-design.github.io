const container = document.getElementById("bg-animation");

const shapes = [];
const NUM_SHAPES = 6;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createShape() {
    const div = document.createElement("div");
    div.classList.add("shape");

    const size = random(150, 300);
    div.style.width = size + "px";
    div.style.height = size + "px";

    div.style.background = `hsl(${random(0, 360)}, 70%, 60%)`;

    const shape = {
        el: div,
        x: random(0, window.innerWidth),
        y: random(0, window.innerHeight),
        dx: random(-1, 1),
        dy: random(-1, 1)
    };

    container.appendChild(div);
    shapes.push(shape);
}

function animate() {
    shapes.forEach(s => {
        s.x += s.dx;
        s.y += s.dy;

        // bounce
        if (s.x < 0 || s.x > window.innerWidth) s.dx *= -1;
        if (s.y < 0 || s.y > window.innerHeight) s.dy *= -1;

        s.el.style.transform = `translate(${s.x}px, ${s.y}px)`;
    });

    requestAnimationFrame(animate);
}

// create shapes
for (let i = 0; i < NUM_SHAPES; i++) {
    createShape();
}

animate();