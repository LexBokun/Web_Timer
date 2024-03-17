function clock() {
    let now = new Date();
    let H = ("0"+now.getHours()).slice(-2);
    let M = ("0"+now.getMinutes()).slice(-2);
    let S = ("0"+now.getSeconds()).slice(-2);
    return `${H}:${M}:${S}`; 
} 


setInterval(() => {
    let a =  document.querySelector('h1')
    a.innerHTML = clock();
}, 1000);
//console.log(clock());
const windowInnerHeight = document.documentElement.clientHeight
//console.log();
// .innerHTML = clock();