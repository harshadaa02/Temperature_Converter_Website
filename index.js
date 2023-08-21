let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
let kel = document.getElementById("kel");
cel.addEventListener("input", function () {
  let c = this.value;
  let f = (c * 9) / 5 + 32;
  let k = parseInt(c) + 273.15;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  if (!Number.isInteger(k)) {
    k = k.toFixed(4);
  }
  fah.value = f;
  kel.value = k;
});
fah.addEventListener("input", function () {
  let y = this.value;
  let h = (y - 32) * (5 / 9);
  let r = ((y - 32) * 5) / 9 + 273.15;
  if (!Number.isInteger(h)) {
    h = h.toFixed(4);
  }
  if (!Number.isInteger(r)) {
    r = r.toFixed(4);
  }
  cel.value = h;
  kel.value = r;
});
kel.addEventListener("input", function () {
  let k = this.value;
  let s = parseInt(k) - 273.15;
  let p = (parseInt(k) - 273.15) * 1.8 + 32;
  if (!Number.isInteger(s)) {
    s = s.toFixed(4);
  }
  if (!Number.isInteger(p)) {
    p = p.toFixed(4);
  }
  cel.value = s;
  fah.value = p;
});