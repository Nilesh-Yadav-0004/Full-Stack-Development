const infoFunc = () => {
    let information = document.getElementsByTagName("p")[0].innerText;
    console.log('~ information:', information);
}

const generator = async () => {
    const API = 'https://official-joke-api.appspot.com/random.joke';

    const jokeDiv = document.getElementById("joke");

    try {
        let res = await fetch(API);
        let data = await res.json();
        console.log('~ data:', data);

        let id = document.createElement("h3");
        let punchLine = document.createElement("h4");
        let setUp = document.createElement("h5");
        let type = document.createElement("p");
        id.innerText = data.id;
        punchLine.innerText = data.punchLine;
        setUp.innerText = data.setUp;
        type.innerText = data.type;

        jokeDiv.append(id, punchLine, setUp, type)
           } catch (error) {
                console.log('~ error:', error);
    }
}