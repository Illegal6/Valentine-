function moveNo() {
  let x = Math.random() * 250;
  let y = Math.random() * 400;

  let no = document.getElementById("no");
  no.style.left = x + "px";
  no.style.top = y + "px";
}

function yesClick() {
  window.location.href = "yes.html";
}

// hearts animation
setInterval(function () {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 5000);
}, 400);