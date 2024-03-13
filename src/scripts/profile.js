import { getUserByName, requestUser } from "./request.js";

/* ------------------------------- Replace ------------------------------- */

export function replaceProfile() {
  const changeUser = document.querySelector(".button__profile");
  changeUser.addEventListener("click", () => {
    window.location.replace("../../index.html");
  });
}

/* ------------------------------- render profile ------------------------------- */

export function renderProfile() {
    const organization__container = document.querySelector(
      ".organization__container"
    );
  
    const usersList = JSON.parse(localStorage.getItem("gitSearch"));
    const [profile, buttons] = createProfile(usersList);
    organization__container.append(profile, buttons);
  }


function createProfile(element) {
  const organization__container = document.createElement("div");
  const profile__container = document.createElement("div");
  const profile__image = document.createElement("img");
  const name__stack = document.createElement("div");
  const name__profile = document.createElement("span");
  const div__button = document.createElement("div");
  const button__profile = document.createElement("button");

  organization__container.classList.add("organization__container");

  profile__container.classList.add("profile__container");

  profile__image.classList.add("profile__image");
  profile__image.src = element.avatar_url;
  profile__image.alt = element.name;

  name__stack.classList.add("name__stack");

  name__profile.classList.add("name__profile");
  name__profile.innerText = element.name;

  div__button.classList.add("div__button");

  button__profile.classList.add("button__profile");
  button__profile.innerText = "Trocar de usuário";

  div__button.appendChild(button__profile);
  name__stack.append(name__profile);
  profile__container.append(profile__image, name__stack);

  return [profile__container, div__button];
}

/* ------------------------------- render Card ------------------------------- */

export async function renderCard(array = []) {
    const card__container = document.querySelector(".card__container");
  
    array.forEach((element) => {
      const card = createCard(element);
      card__container.append(card);
    });
  }

function createCard(element) {
  const card__list = document.createElement("li");
  const title__card = document.createElement("span");
  const description__card = document.createElement("p");
  const button__card = document.createElement("a");

  card__list.classList.add("card__list");

  title__card.classList.add("title__card");
  title__card.innerText = element.name;

  description__card.classList.add("description__card");
  description__card.innerText = element.description;

  button__card.classList.add("button__card");
  button__card.innerText = "Repositório";
  button__card.href = element.html_url;
  button__card.target = "_blank";

  card__list.append(title__card, description__card, button__card);

  return card__list;
}
renderProfile();

async function renderRepository() {
  const repository = JSON.parse(localStorage.getItem("gitSearch")).login;
  const reposit = await requestUser(repository);
  renderCard(reposit);
}
renderRepository();
replaceProfile()
