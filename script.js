const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let eyes = [];
let theta;
let gameFrame = 1;

const back = new Image();
const wheel = new Image();
back.src = "land1.png";
wheel.src = "wheel.png";

const data = {
    url: "land1.png",
    width: 786,
    height: 969,
    movement: 11,
    spites: [
        {
            url: "wheel.png",
            width: 216,
            height: 145,
            fileHeight: 1450,
            top: 265,
            left: 420,
            frames: 10,
            fps: 10,
        },
        {
            url: "bulbs.png",
            width: 192,
            height: 146,
            fileHeight: 1460,
            top: 414,
            left: 300,
            frames: 10,
            fps: 10,
        },
        {
            url: "cups.png",
            width: 67,
            height: 193,
            fileHeight: 1930,
            top: 342,
            left: 32,
            frames: 10,
            fps: 10,
        }
    ],
};


function animate() {
    requestAnimationFrame(animate);
    gameFrame++;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        back,
        0,
        0,
        data.width,
        data.height,
    );
    for (let i = 0; i < data.spites.length; i++) {
        const sprite = data.spites[i];
        const img = new Image();
        img.src = sprite.url;
        ctx.drawImage(img, 0, (gameFrame % 10) * sprite.height, sprite.width, sprite.height, sprite.left, sprite.top, sprite.width, sprite.height);
    }

}

animate();

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
