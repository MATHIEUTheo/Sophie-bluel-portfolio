async function afficherWorks() {
    const reponse = await fetch("http://localhost:5678/api/works")
    const works = await reponse.json()
    console.log(works)
    effaceGallery()
    for (let i= 0; i< works.length; i++) {
        var fig = works[i]
        var gallery = document.querySelector(".gallery")
        var workellements = document.createElement("figure")
        const images = fig.imageUrl
        const titre = fig.title
        workellements.innerHTML = "<img src=" + images + " alt=" + titre +"><figcaption>" + titre + "</figcaption>"
        gallery.appendChild(workellements)
  }
}

async function afficherObjets(categorie) {
  const reponse = await fetch("http://localhost:5678/api/works")
  var works = await reponse.json()
  var objets = works.filter(function(objets){ return objets.categoryId == categorie})
  console.log(objets)
effaceGallery()
  for (let i= 0; i< objets.length; i++) {
      var fig = objets[i]
      var gallery = document.querySelector(".gallery")
      var workellements = document.createElement("figure")
      const images = fig.imageUrl
      const titre = fig.title
      workellements.innerHTML = "<img src=" + images + " alt=" + titre +"><figcaption>" + titre + "</figcaption>"
      gallery.appendChild(workellements)
  }
}
afficherWorks()

function effaceGallery(){
  var gallery = document.querySelector(".gallery")
  while (gallery.firstChild) {
    gallery.removeChild(gallery.firstChild);
  } 
}

if (localStorage.getItem("token") != "undefined" && localStorage.getItem("token")!=null) {
  document.getElementById("#urllogin").textContent="logout";
  console.log("I'm here");
}
// afficherWorks()
// afficherObjets("1")

//onclick="afficherObjets('1')"
//onclick="afficherWorks()"