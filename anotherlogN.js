function anotherLogN(n) {
    if (n <= 1) {
        console.log('Done');
        return
    }
    console.log(n);
    console.log(n / 2); //recursive way
}
anotherLogN(8);
