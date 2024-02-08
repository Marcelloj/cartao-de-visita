
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  let variavellet = 0;
  const variavelconst = 8;

  variavellet = 5
  variavelconst = 34

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
