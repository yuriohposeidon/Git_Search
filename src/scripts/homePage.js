export async function renderUsers(first, array = []) {
  const card__container = document.querySelector(".card__container");

  card__container.innerHTML = "";

  if (first) {
    const allUsersList = await getAllUsers();

    allUsersList.data.forEach((element) => {
      card__container.appendChild(card);
    });
  } else {
    array.forEach((element) => {
      const card = createCard(element);

      card__container.appendChild(card);
    });
  }
}

function createUser(element) {
  const card__list = document.createElement("li");
  const title__card = document.createElement("span");
  const description__card = document.createElement("p");
  const button__card = document.createElement("button");

  card__list.classList.add("card__list");

  title__card.classList.add("title__card");
  title__card.innerText = element.name;

  description__card.classList.add("description__card");
  description__card.innerText = element.bio;

  button__card.classList.add("button__card");
  button__card.innerText = "Repositório";

  card__list.append(title__card, description__card, button__card);

  return card__list;
}
renderUsers();
