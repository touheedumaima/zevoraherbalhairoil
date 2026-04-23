document.addEventListener("DOMContentLoaded", function () {

  let slides = document.querySelectorAll(".slide");
  let index = 0;

  function changeSlide() {
    slides[index].classList.remove("active");

    index++;
    if (index >= slides.length) {
      index = 0;
    }

    slides[index].classList.add("active");
  }

  setInterval(changeSlide, 3000);

});
let qty = 1;
let qtyText = document.querySelector(".qty span");

document.querySelector(".qty button:first-child").onclick = () => {
  if (qty > 1) {
    qty--;
    qtyText.innerText = qty;
  }
};

document.querySelector(".qty button:last-child").onclick = () => {
  qty++;
  qtyText.innerText = qty;
};
document.querySelectorAll('.img-box').forEach(box => {
  let isDown = false;

  box.addEventListener('mousedown', () => isDown = true);
  box.addEventListener('mouseup', () => isDown = false);

  box.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    let rect = box.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let percent = (x / rect.width) * 100;

    box.querySelector('.after').style.width = percent + "%";
  });
});

let btn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

function sendToWhatsApp() {
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let phoneNumber = "923046029609"; // ⚠️ apna WhatsApp number yahan likho (92 ke sath)

    let url = "https://wa.me/" + phoneNumber + "?text="
        + "Name: " + encodeURIComponent(name) + "%0a"
        + "Email: " + encodeURIComponent(email) + "%0a"
        + "Subject: " + encodeURIComponent(subject) + "%0a"
        + "Message: " + encodeURIComponent(message);

    window.open(url, '_blank');
}