const sectionPilotos = document.querySelector("#pilotos");
for (const driver of drivers) {
    const figureDriver = document.createElement("figure");
    const imgDriver = document.createElement("img");
    imgDriver.setAttribute("alt", "Piloto de Fórmula 1");
    imgDriver.setAttribute("src", driver);
    figureDriver.append(imgDriver);
    sectionPilotos.append(figureDriver);
}

const sectionEquipos = document.querySelector("#equipos");
for (const team of teams) {
    const figureTeam = document.createElement("figure");
    const imgTeam = document.createElement("img");
    imgTeam.setAttribute("alt", "Equipo de Fórmula 1");
    imgTeam.setAttribute("src", team);
    figureTeam.append(imgTeam);
    sectionEquipos.append(figureTeam);
}

const tituloMain = document.querySelector("h1");

const elementosLista = document.getElementsByTagName("li");
for (const elemento of elementosLista) {
    elemento.addEventListener("click", (e) => {

        tituloMain.innerText = e.target.textContent;

        switch (e.target.textContent) {
            case "Pilotos":
                sectionPilotos.classList.remove("inactive");
                sectionEquipos.classList.add("inactive");
                break;

            case "Equipos":
                sectionEquipos.classList.remove("inactive");
                sectionPilotos.classList.add("inactive");
                break;
        }

    });
}