function uniqueName(arr) {
    let uniqueName = []
    for (let i = 0; i < arr.length; i++) { //condition comarison n times, adding and assignment korbo n times tarpor prottekta element ke abr push korte hochee n times // tar mane eta n time complexity bigO(n)
        let element = arr[i];
        if (!uniqueName.includes(element)) {
            uniqueName.push(element)
        } //abr n times check kortese upore giye and array take abr iterate kortese tar etar o time com n
        //total complexity n2
    }
    return uniqueName;
}

let nameArray = ['rafi', 'Tasib', 'Rakib', 'rafi', 'tasib', 'Tawrat'];
console.log(uniqueName(nameArray));

//space complexity n karon array er upr depend kortese, karon je koeta element thakbe she koyta push korbe