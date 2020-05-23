const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var end = canvas.width;

var bottom = canvas.height;
const pi = Math.PI;

// #############################

class TheObjes {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

destroy = (block) => {
  ctx.fillStyle = "#222";
  ctx.beginPath();
  ctx.fillRect(block.x, block.y, block.w, block.h);

  if (
    circle.x >= block.x &&
    circle.x <= block.x + block.w &&
    circle.y - circle.r === block.y + block.h
  ) {
    circle.dy = circle.dy * -1;
    block.w = 0;
    block.x = 0;
  }

  if (
    circle.x >= block.x &&
    circle.x <= block.x + block.w &&
    circle.y + circle.r === block.y
  ) {
    circle.dy = circle.dy * -1;
    block.w = 0;
    block.x = 0;
  }

  if (
    (circle.y >= block.y &&
      circle.y <= block.y + block.h &&
      circle.x + circle.r === block.x) ||
    (circle.y >= block.y &&
      circle.y <= block.y + block.h &&
      circle.x - circle.r === block.x + block.w)
  ) {
    circle.dx = circle.dx * -1;
    block.w = 0;
    block.x = 0;
  }
  // #########################""
  if (
    circle.x >= block.x &&
    circle.x <= block.x + block.w &&
    circle.y >= block.y &&
    circle.y <= block.y + block.h
  ) {
    circle.dy = circle.dy * -1;
    block.w = 0;
    block.x = 0;
  }
};

// #############################

const circle = {
  x: 44,
  y: 332,
  r: 10,
  dx: 2,
  dy: 2,
};

let rec = {
  x: 440,
  y: 450,
  w: 100,
  h: 10,
  dy: 4,
  dx: 4,
};
var nimp = [
  (recA = new TheObjes(50, 10, 100, 200)),
  (recB = new TheObjes(300, 10, 50, 200)),
  (recC = new TheObjes(560, 100, 50, 40)),
  (recD = new TheObjes(620, 55, 45, 85)),
  (recE = new TheObjes(160, 10, 50, 40)),
  (recF = new TheObjes(220, 10, 50, 90)),
  (recG = new TheObjes(160, 110, 100, 40)),
  (recH = new TheObjes(353, 10, 100, 40)),
  (recI = new TheObjes(353, 90, 50, 40)),
  (recJ = new TheObjes(410, 55, 44, 160)),
  (recK = new TheObjes(500, 10, 50, 200)),
  (recL = new TheObjes(560, 10, 100, 40)),
  (recM = new TheObjes(700, 10, 50, 200)),
  (recN = new TheObjes(755, 10, 100, 40)),
  (recO = new TheObjes(755, 80, 90, 40)),
  (recP = new TheObjes(755, 170, 100, 40)),
];
function draw() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.r, 0, pi * 2);
  ctx.fillStyle = "#FFF";
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.fillRect(rec.x, rec.y, rec.w, rec.h);
}

moveball = () => {
  circle.x += circle.dx;
  circle.y += circle.dy;
};

colisions = () => {
  if (circle.x + circle.r >= end || circle.x - circle.r <= 0) {
    circle.dx = circle.dx * -1;
  }
  if (circle.y + circle.r >= bottom || circle.y - circle.r <= 0) {
    circle.dy = circle.dy * -1;
  }
  // ##################################
  if (
    (circle.x >= rec.x &&
      circle.x <= rec.x + rec.w &&
      circle.y + circle.r === rec.y) ||
    (circle.x >= rec.x &&
      circle.x <= rec.x + rec.w &&
      circle.y - circle.r === rec.y + rec.h)
  ) {
    circle.dy = circle.dy * -1;
  }

  if (
    (circle.y >= rec.y &&
      circle.y <= rec.y + rec.h &&
      circle.x + circle.r === rec.x) ||
    (circle.y >= rec.y &&
      circle.y <= rec.y + rec.h &&
      circle.x - circle.r === rec.x + rec.w)
  ) {
    circle.dx = circle.dx * -1;
  }
  // ##########################

  for (let i = 0; i < nimp.length; i++) {
    destroy(nimp[i]);
  }
};

window.addEventListener("keydown", (e) => {
  const key = e.key;
  switch (key) {
    case "ArrowUp":
      rec.y -= rec.dy;
      break;
    case "ArrowDown":
      rec.y += rec.dy;

      break;
    case "ArrowRight":
      if (rec.x + rec.w === end) {
        return;
      }
      rec.x += rec.dx;
      break;
    case "ArrowLeft":
      if (rec.x === 0) {
        return;
      }
      rec.x -= rec.dx;
      break;
    // default:
    //  cobe
  }
});

function update() {
  ctx.clearRect(0, 0, end, bottom);

  draw();
  moveball();
  colisions();

  requestAnimationFrame(update);
}
update();
// ##########################################

// const touches = document.querySelector("#contner").children;

// for (touch of touches) {
//   touch.addEventListener("touchstart", (e) => {
//     const key = e.target;
//     switch (key) {
//       case touches[0]:
//         rec.y -= rec.dy;
//         break;
//       case touches[1]:
//         rec.y += rec.dy;
//         break;
//       case touches[2]:
//         if (rec.x === 0) {
//           return;
//         }
//         rec.x -= rec.dx;
//         break;
//       case touches[3]:
//         if (rec.x + rec.w === end) {
//           return;
//         }
//         rec.x += rec.dx;
//         break;
//     }
//   });
// }
