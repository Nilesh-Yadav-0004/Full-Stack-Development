const apiFunc = (param) => {
    return API_BASE_URL =`https://api.tvmaze.com/search/shows?q=${param}`;
}
const api_fetch = async() =>{
    const dataSearch = document.querySelector("#search-input").Value;
    let Value = apiFunc(dataSearch);
    try{
        let res = await fetch(Value);
        let data = await res.json();
        Render_UI(data)
    } catch(error) {
        console.log('~ error:', error);
    }
}

const Render_UI = (infoData) =>{
    console.log('🚀 ~ infoData:', infoData);
    const mainDiv = document.getElementById("mainContainer");
    infoData.forEach(element => {
        element = element.show;

        const cardDiv = document.createElement("div");
        const id = document.createElement("h4");
        const img = document.createElement("img");
        const name = document.createElement("h4");
        const language = document.createElement("h3");
        const genres = document.createElement("h3");
        const runtime = document.createElement("h3");
        const rating = document.createElement("h5");
        const summary = document.createElement("p");

        
        id.innerText = `id ${element.id}`;
        img.src = element.image.original;
        name.innerText = `name ${element.name}`;
        genres.innerText = `genres ${element.genres}`;
        language.innerText = `language ${element.language}`;
        runtime.innerText = `runtime ${element.runtime}`;
        rating.innerText = `rating ${element.rating}`;
        summary.innerText = `summary ${element.summary}`;

        cardDiv.className = "card_Div";

        cardDiv.append(img,id,name,language,genres,runtime,rating,summary);
        mainDiv.append(cardDiv);
    });
}