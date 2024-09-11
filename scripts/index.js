class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.id = 0;
    this.activities = [];
  }
  getAllActivities() {
    return this.activities;
  }
  createActivity(title, description, imgUrl) {
    let id = this.id;
    let activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
    this.id++;
  }
  deleteActivity(id) {
    this.activities = this.activities.filter((element) => element.id != id);
  }
}

let repository = new Repository();

function convertirHtml(activity) {
  let { id, title, description, imgUrl } = activity;
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let img = document.createElement("img");
  h3.innerHTML = title;
  p.innerHTML = description;
  img.src = imgUrl;
  h3.className = "sTitle";
  p.className = "paragraph";
  img.className = "foto";
  let div = document.createElement("div");
  div.append(h3, p, img);
  div.className = "marco";
  div.id = id;
  return div;
}

function handlerDelete(id) {
  let contenedor = document.getElementById("cards");
  repository.deleteActivity(id);
  let activities = repository.getAllActivities();
  activities.length != 0
    ? convertirActivities()
    : (contenedor.innerHTML = "<p>Nada agregado aun.</p>");
}

function convertirActivities() {
  let contenedor = document.getElementById("cards");
  contenedor.innerHTML = "";
  let activities = repository.getAllActivities();
  let cards = activities.map(function (activity) {
    return convertirHtml(activity);
  });
  cards.forEach((card) => {
    contenedor.appendChild(card);
    card.addEventListener("click", () => handlerDelete(card.id));
  });
}

function handlerClick() {
  let inputTitulo = document.getElementById("titulo").value;
  let inputDescription = document.getElementById("description").value;
  let inputImg = document.getElementById("url").value;
  if (inputTitulo == "" || inputDescription == "" || inputImg == "") {
    alert("Debe completar todos los campos");
  } else {
    repository.createActivity(inputTitulo, inputDescription, inputImg);
    document.getElementById("titulo").value = "";
    document.getElementById("description").value = "";
    document.getElementById("url").value = "";
    convertirActivities();
  }
}

if (typeof window != "undefined") {
  //Agregué esta condición para que Jasmine no me detecte un error de -document is undefined-
  let button = document.getElementById("add");
  button.addEventListener("click", () => handlerClick());
}

module.exports = {
  Activity,
  Repository,
};
