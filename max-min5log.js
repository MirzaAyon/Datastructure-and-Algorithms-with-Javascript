//min
function min5log(n) {
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
min5log(100); //0(n)
// min5log(3);
//etar complexity bin0(n)
//karon 5 er upore n er jekono number er upor vary kortese
//max
function max5log(n) {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
// max5log(100);
max5log(3); //0(1)
//etar complexity big0(1)
//karon 5 er upore n er jekono number er upor vary kortese na
//karon shorbo nimno 5 agei dewa ache