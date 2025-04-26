import menu1 from "./images/menu1.jpg";
import menu2 from "./images/menu2.jpg";
import menu3 from "./images/menu3.jpg";
const menuImages = [menu1, menu2, menu3];
let content = document.querySelector("#content");
function createCards(container) {
  for (let i = 0; i < 3; i++) {
    let menuImage = document.createElement("img");
    menuImage.src = menuImages[i];
    menuImage.classList.add("menuImage");
    let menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");
    let itemName = document.createElement("p");
    itemName.classList.add("itemName");
    if (menuImage.src === menu1) {
      itemName.textContent = "Korean Fried Chicken";
      itemName.classList.add("nonVeg");
    } else if (menuImage.src === menu2) {
      itemName.textContent = "Korean Hotpot";
      itemName.classList.add("veg");
      itemName.classList.add("pescatarian");
    } else {
      itemName.textContent = "Bulgogi";
      itemName.classList.add("nonVeg");
    }
    menuItem.appendChild(menuImage);
    menuItem.appendChild(itemName);
    container.appendChild(menuItem);
  }
}

function loadMenuPage() {
  let title = document.createElement("p");
  title.textContent = "Today's Specials";
  title.classList.add("title");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");
  createCards(cardContainer);
  content.appendChild(title);
  content.appendChild(cardContainer);
}
export { loadMenuPage };
