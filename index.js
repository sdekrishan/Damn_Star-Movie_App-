
// for our search data we make this
let data;
let id;
async function main() {
  try {
    let query = document.querySelector("#query").value;
    console.log(query);

    let res = await fetch(
      `https://www.omdbapi.com/?apikey=e69f7110&s=${query}`
    );
    data = await res.json();
    let actual = data.Search;

    if (actual != undefined) {
      appenddata(actual);
    }

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// for appending into the main container
let moviesdiv = document.createElement("div");
moviesdiv.setAttribute("id", "movies");

function appenddata(data) {
  moviesdiv.innerHTML = "";

  data.forEach(function (el) {
    let mdiv = document.createElement("div");
    mdiv.setAttribute("id", "mdiv");
    mdiv.addEventListener("click", function () {
      change(el);
    });
    let p = document.createElement("p");
    p.setAttribute("id", "mname");
    p.innerText = el.Title;

    let pimg = document.createElement("img");
    pimg.setAttribute("id", "mimg");
    pimg.src = el.Poster;

    mdiv.append(pimg, p);
    moviesdiv.append(mdiv);
    document.querySelector("body").append(moviesdiv);
  });
}

// function that help you to click and show data on container

function change(el) {
  document.querySelector("#cont").innerHTML = "";
  let imgdiv = document.createElement("div");
  imgdiv.setAttribute("id", "imgdiv");

  let pdiv = document.createElement("div");
  pdiv.setAttribute("id", "pdiv");

  let p = document.createElement("p");
  p.setAttribute("id", "contp");
  p.innerText = `Movie Name - ${el.Title}`;

  let pimg = document.createElement("img");
  pimg.setAttribute("id", "contimg");
  pimg.src = el.Poster;

  let type = document.createElement("p");
  type.setAttribute("id", "conttype");
  type.innerText = `Type - ${el.Type}`;

  let year = document.createElement("p");
  year.setAttribute("id", "contyear");
  year.innerText = `Year - ${el.Year}`;

  imgdiv.append(pimg);
  pdiv.append(p, type, year);
  document.querySelector("#cont").append(imgdiv, pdiv);
}

// our debounce function

function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(function () {
    func();
  }, delay);
}

// when you click the search div will remove

document.addEventListener("click", function () {
  moviesdiv.remove();
});

//for trending page

document.querySelector("#trend").addEventListener("click", function () {
  window.location.href = "trending.html";
});
