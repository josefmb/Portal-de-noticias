let divCard = document.querySelector('#listaDeNoticias');

async function getNews() {
  let res = await fetch('https://newsapi.org/v2/top-headlines/?apikey=a5127ee5dd5043f48d54c9d124f90e92&country=br');
  let news = await res.json();
  let e = news.articles;

  for (let i = 0; i < e.length; i++) {
    let newsHTML = `
    <div class="col-3">
      <div class="card" id="card">
        <img src="${e[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${e[i].title}</h5>
          <p class="card-text">${e[i].description}</p>
          <a href="${e[i].url}" class="btn btn-primary">Go to Notice</a>
        </div>
      </div>
    </div>
    `
    divCard.innerHTML += newsHTML
  }
}
getNews();