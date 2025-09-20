const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// const apiCalling = () => {
    // let data = fetch(BASE_URL);
    // console.log('~ data:', data);

    // sync way handle promise

//     fetch(BASE_URL).then((res) => res.json()).
//     then((res) => console.log(res)).catch
//     ((error) => console.log(error)).finally
//     (() => console.log("data has been fetch"));
// }
// apiCalling()

// Async way handle promise 

const apiCalling = async () =>{
    try{
        let data = await fetch(BASE_URL);
        let res = await data.json();
        console.log('~ res:', res);
        res.map((els)
            `id ${res.id}
            type ${res.type}
            setup ${res.setup}
            punchline ${res.punchline}
            `
        )
    } catch (error) {
        console.log('~ error:', error);
    }
}
apiCalling()