function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //ou

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img")
  const desq = document.querySelector("alt")

  //substituir a img
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    desq.setAttribute("alt", "Foto de Juliana Sandes usando óculos no modo claro")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    desq.setAttribute("alt", "Foto de Juliana Sandes usando óculos no modo escuro")
  }

}
