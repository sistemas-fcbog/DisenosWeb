fetch("https://raw.githubusercontent.com/sistemas-fcbog/DisenosWeb/refs/heads/main/headerun.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el HTML");
    }
    return response.text();
  })
  .then(html => {
    document.getElementById("header-container").innerHTML = html;
  })
  .catch(error => {
    console.error("Error al cargar el HTML:", error);
  });
