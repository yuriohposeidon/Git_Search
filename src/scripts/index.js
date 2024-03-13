import { getUserByName } from "./request.js";

// const searchInput = document.querySelector('.input__login')
// searchInput.addEventListener(input, () => {
//     // return console.log(searchInput.value)
// const userInput = searchInput.value

// })

async function formSubmit() {
  const buttonSubmit = document.querySelector(".button__login");
  console.log(buttonSubmit);

  buttonSubmit.addEventListener("click", async (event) => {
    const searchInput = document.querySelector(".input__login");

    event.preventDefault();
    let userInput = searchInput.value;
    await getUserByName(userInput);
  });
}
formSubmit();
