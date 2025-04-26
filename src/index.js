import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import styles from "./styles.css";
function clearPage() {
  let content = document.querySelector("#content");
  content.innerHTML = "";
}

const menuButton = document.querySelector("#menu");
const homeButton = document.querySelector("#home");
menuButton.addEventListener("click", () => {
  clearPage();
  loadMenuPage();
});
homeButton.addEventListener("click", () => {
  clearPage();
  loadHomePage();
});
loadHomePage();
console.log("me");
