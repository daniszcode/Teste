function Appear() {
  document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("clicou");
    document.getElementById("button-last-up").style.display = "none";
    document.getElementById("button-animated").style.display = "flex";
  });
}
