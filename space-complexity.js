// BigO(1)

// function sum(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total
// }
// console.log(sum([23, 4, 5]));
//prottekta total er sathe prottekta array element jog hochee
//BigO(1), 0(1)  etar complexity
//joto boro element hok joto boro array hok ami sudhu ekta number e pachi jeta amr total
//tai space complexity 0(1)
//which is too good

// BigO(n)

function double(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr
}
console.log(double([3, 4, 5]));
//array er number er upr ans depend kortese mane array te joto gula element ache thik toto gula maan return krbe mane n tomo pod 
//50 ta thakle 50 ta hoto
//etar complexity BigO(n) , O(n)
