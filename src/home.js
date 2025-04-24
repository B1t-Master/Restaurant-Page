import styles from "./home.css";
function loadHomePage() {
  const content = document.querySelector("#content");
  let welcomeMessage = document.createElement("div");
  welcomeMessage.classList.add("welcome");
  welcomeMessage.textContent = "Welcome to Nabi's Cusine";
  let about = document.createElement("p");
  about.classList.add("about");
  about.textContent = `      Elevated Korean Dining Discover refined Korean flavors reimagined with
            elegance and precision. At Nabi’s, tradition meets contemporary
            technique in a curated menu designed to honor heritage while embracing
            innovation. An intimate dining experience, crafted with intention.`;
  let info = document.createElement("div");
  info.classList.add("info");
  let infoDiv1 = document.createElement("div");
  infoDiv1.textContent = "123-45 Jeollabuk-do, South Korea";
  let infoDiv2 = document.createElement("div");
  infoDiv2.textContent = "Nabi@gmail.com";
  content.appendChild(welcomeMessage);
  content.appendChild(about);
  content.appendChild(info);
  info.appendChild(infoDiv1);
  info.appendChild(infoDiv2);
}

export { loadHomePage };
