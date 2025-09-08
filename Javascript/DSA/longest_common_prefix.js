let arr = ["dog","racecar","car"];
// let arr = ["flower","flow","flight"];

function prefix(){
    let jhola = arr[0];

    let jhola_leng = jhola.length;

    for (let i =1;i < arr.length; i++) {
        let currentString = arr[i];
        while (jhola === currentString.substring(0, jhola_leng)){
            jhola_leng--;
            if (jhola_leng === 0) return "";
        }
    }
    return jhola;
}

let ans = prefix();
console.log('~ ans:', ans);