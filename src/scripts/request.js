export async function getUserByName(userName) {
  const users = await fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      response
        .json()
        .then((response) =>
          localStorage.setItem("gitSearch", JSON.stringify(response))
        );
      window.location.replace("../src/pages/profile.html");
    } else if ((response.message = "Not Found")) {
      window.location.replace("../src/pages/error.html");
    }
    return response.json();
  });

  return users;
}

export async function requestUser(userName) {
  const reposit = await fetch(`https://api.github.com/users/${userName}/repos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  return reposit;
}
