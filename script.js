document.getElementById("cheat-toggle").addEventListener("click", function () {
  const content = document.getElementById("cheat-content");

  // Toggle classok a gombon és a tartalmon
  content.classList.toggle("active");
  this.classList.toggle("active");

  // A gomb feliratának változtatása
  if (content.classList.contains("active")) {
    this.textContent = "Hide Cheat";
  } else {
    this.textContent = "Show Cheat";
  }
});

// Képek listája (ezt kézzel kell karbantartani, mivel nincs szerveroldal)
const imageList = [
  "N1.png",
  "NE1.png",
  "E1.png",
  "SE1.png",
  "S1.png",
  "SW1.png",
  "W1.png",
  "NW1.png",
  "N2.png",
  "NE2.png",
  "E2.png",
  "SE2.png",
  "S2.png",
  "SW2.png",
  "W2.png",
  "NW2.png",
  "N3.png",
  "NE3.png",
  "E3.png",
  "SE3.png",
  "S3.png",
  "SW3.png",
  "W3.png",
  "NW3.png",
  "N4.png",
  "NE4.png",
  "E4.png",
  "SE4.png",
  "S4.png",
  "SW4.png",
  "W4.png",
  "NW4.png",
  "N5.png",
  "NE5.png",
  "E5.png",
  "SE5.png",
  "S5.png",
  "SW5.png",
  "W5.png",
  "NW5.png",
  "N6.png",
  "NE6.png",
  "E6.png",
  "SE6.png",
  "S6.png",
  "SW6.png",
  "W6.png",
  "NW6.png",
  "N7.png",
  "NE7.png",
  "E7.png",
  "SE7.png",
  "S7.png",
  "SW7.png",
  "W7.png",
  "NW7.png",
  "N8.png",
  "NE8.png",
  "E8.png",
  "SE8.png",
  "S8.png",
  "SW8.png",
  "W8.png",
  "NW8.png",
];

// Változók
let currentImage = "";
let buttonsLocked = false; // Gombok lezárásának nyomon követése

// Véletlen kép betöltése
function loadRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageList.length);
  currentImage = imageList[randomIndex];
  const imgElement = document.getElementById("random-image");
  imgElement.src = `img/${currentImage}`;
  buttonsLocked = false; // Gombok újra elérhetők
}

// Gombok véletlenszerű sorrendbe rendezése
function shuffleButtons() {
  const buttonsContainer = document.getElementById("buttons-container");
  const buttons = Array.from(buttonsContainer.children);

  // Fisher-Yates keverési algoritmus
  for (let i = buttons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
  }

  // Gombok újrarendezése
  buttons.forEach((button) => buttonsContainer.appendChild(button));
}

// Gombok megnyomásának kezelése
document.querySelectorAll(".direction-button").forEach((button) => {
  button.addEventListener("click", function () {
    if (buttonsLocked) return; // Ha a gombok lezártak, ne reagáljon

    const selectedDirection = this.getAttribute("data-direction");
    const correctDirection = currentImage
      .replace(/[0-9]/g, "")
      .replace(".png", ""); // Kép nevéből szám eltávolítása

    if (selectedDirection === correctDirection) {
      this.classList.add("correct");
      this.classList.remove("wrong");
    } else {
      this.classList.add("wrong");
      this.classList.remove("correct");
    }

    // Gombok lezárása a kattintás után
    buttonsLocked = true;
  });
});

// Új feladvány betöltése
document.getElementById("new-challenge").addEventListener("click", function () {
  // Gombok visszaállítása alapértelmezettre
  document.querySelectorAll(".direction-button").forEach((button) => {
    button.classList.remove("correct");
    button.classList.remove("wrong");
  });

  shuffleButtons(); // Gombok véletlenszerű sorrendbe rendezése
  loadRandomImage(); // Új feladvány betöltése
});

// Első kép betöltése és gombok véletlenszerű sorrendbe rendezése
shuffleButtons();
loadRandomImage();
