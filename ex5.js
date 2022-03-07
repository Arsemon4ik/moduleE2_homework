let _length = prompt('Enter a length of array')
if (Number(_length)){
    let arr = [];
    for (let index = 0; index < _length; index++) {
        let rand = (Math.random(100)*100).toFixed(0); //целое число в диапазоне [0; 100]
        arr.push(rand);
    }
    //console.log(arr)
    console.log(`Length of array is ${_length}`);
    let result = arr.map(function(item,index,array) {
        console.log(`${index} : ${item}`)
    })
}
else{
    console.log('It\'s not a number!')
}