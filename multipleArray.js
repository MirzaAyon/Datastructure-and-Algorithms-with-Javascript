function multipleArray(n) {
    for (let i = 0; i <= n; i++) { //complexity n
        for (let j = 0; j <= n; j++) { //complexity n
            //etae j<=3 hole total complexity n ba bigO(n) hoto karon uper for loop e n complexity holeo etar n na
            console.log(i, j);
        }
    }
}
multipleArray(2)
//2 tar complexity n 
//n+n = n2
//porer tar khetre n+3 = n+3 = n
//tai ei code er compleity n square/BigO(n2)
//aro ekta thakle hoto big0(n3)