let cont = document.getElementById("trendcont");
let sec;
// trending page api
async function second() {
  try {
    let res =
      await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9dce6c4162bebd9aa6d63f6880f3f269&language=en-US&page=1
        `);
    sec = await res.json();

    secondappend(sec.results);
    console.log(sec.results);
  } catch (err) {
    console.log(err);
  }
}
second();

function secondappend(data) {
  cont.innerHTML = "";
  data.forEach(function (el) {
    let mdiv = document.createElement("div");
    mdiv.setAttribute("id", "mdiv");
    let poster = document.createElement("img");
    poster.src = `https://image.tmdb.org/t/p/w185${el.poster_path}`;

    let name = document.createElement("p");
    name.innerText = el.title;

    let rd = document.createElement("p");
    rd.innerText = el.release_date;
    mdiv.append(poster, name, rd);
    cont.append(mdiv);
  });
}
