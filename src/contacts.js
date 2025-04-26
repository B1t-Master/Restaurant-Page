import { content } from "./menu";
import phoneIcon from "./images/phoneIcon.png";
import emailIcon from "./images/emailIcon.png";
function loadContactsPage() {
  let title = document.createElement("div");
  title.textContent = "Reserve a table today";
  title.classList.add("title");
  let phoneSymbol = document.createElement("img");
  phoneSymbol.src = phoneIcon;
  phoneSymbol.classList.add("icon");
  phoneSymbol.classList.add("phone");
  let number = document.createElement("div");
  number.textContent = "02-312-3456";
  number.classList.add("contact");
  let emailSymbol = document.createElement("img");
  emailSymbol.src = emailIcon;
  emailSymbol.classList.add("icon");
  let email = document.createElement("div");
  email.textContent = "Nabi@gmail.com";
  email.classList.add("contact");
  email.appendChild(emailSymbol);
  title.appendChild(email);
  number.appendChild(phoneSymbol);
  title.appendChild(number);
  content.appendChild(title);
}

export { loadContactsPage };
