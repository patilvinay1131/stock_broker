const socket = io();
const email = localStorage.getItem("email");

socket.emit("login", email);

function subscribe() {
  const stock = document.getElementById("stock").value;
  socket.emit("subscribe", stock);
}

socket.on("priceUpdate", data => {
  const ul = document.getElementById("prices");
  ul.innerHTML = "";

  for (let stock in data) {
    const li = document.createElement("li");
    li.textContent = `${stock}: ₹${data[stock]}`;
    ul.appendChild(li);
  }
});

