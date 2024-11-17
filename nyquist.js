SPIN_FREQ = 1;
SAMPLE_FREQ = 1;
T_START = 0;

let c;
let ctx;

window.onload = () => {
  const spinFreqSlider = document.getElementById("spin-freq");
  const sampleFreqSlider = document.getElementById("sample-freq");
  SPIN_FREQ = Number(spinFreqSlider.value);
  SAMPLE_FREQ = Number(sampleFreqSlider.value);

  spinFreqSlider.onchange = (e) => {
    SPIN_FREQ = Number(e.target.value);
  };
  sampleFreqSlider.onchange = (e) => {
    SAMPLE_FREQ = Number(e.target.value);
  };

  T_START = Date.now();
  c = document.getElementById("c");
  ctx = c.getContext("2d");
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.fillStyle = "red";
  draw();
};

function draw() {
  const t = Date.now() - T_START;
  const theta = (t * 2 * Math.PI * SPIN_FREQ) / 1000;
  requestAnimationFrame(() => {
    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.arc(c.width / 2, c.height / 2, c.width / 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(c.width / 2, c.height / 2);
    ctx.lineTo(
      c.width / 2 + (Math.cos(theta) * c.width) / 3,
      c.height / 2 + (Math.sin(theta) * c.height) / 3,
    );
    ctx.stroke();
  });

  window.setTimeout(draw, 1000 / SAMPLE_FREQ);
}
