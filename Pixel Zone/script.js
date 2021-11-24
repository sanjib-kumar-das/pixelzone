const searchBar = document.querySelector(".searchBar input");
const searchResult = document.querySelector(".searchResults");

let getPhotos = (key) => {
  const result = axios({
    method: "GET",
    url: `https://api.unsplash.com/search/photos?query=${key}&client_id=fMwy2O7IqHD_drb8-qWHHeJCZKTuHX07T7Uws6VP90k`,
  })
    .then((res) => {
      const results = res.data.results;

      let html = "";

      results.forEach((el) => {
        html += `<li><img src=${el.links.download} alt="" /></li>`;
      });
      html = `<ul>${html}</ul>`;
      searchResult.innerHTML = html;
    })
    .catch((err) => {
      console.log(err);
    });
};

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && searchBar.value.trim().length > 0)
    getPhotos(searchBar.value.trim());
});
