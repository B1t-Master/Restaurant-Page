import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { loadContactsPage } from "./contacts";
import styles from "./styles.css";
function clearPage() {
  let content = document.querySelector("#content");
  content.innerHTML = "";
}

const menuButton = document.querySelector("#menu");
const homeButton = document.querySelector("#home");
const contactsButton = document.querySelector("#contacts");
menuButton.addEventListener("click", () => {
  clearPage();
  loadMenuPage();
});
homeButton.addEventListener("click", () => {
  clearPage();
  loadHomePage();
});
contactsButton.addEventListener("click", () => {
  clearPage();
  loadContactsPage();
});

loadHomePage();
console.log("me");
