// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // append ID to DOM
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = data.id;
      body.appendChild(p);
    })
    .catch((error) => {
      const body = document.querySelector("body");
      const errorMessage = document.createElement("p");
      errorMessage.textContent = error.message;
      body.appendChild(errorMessage);
    });
}
