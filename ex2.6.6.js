let arr1 = [1,2,3]
let arr2 = [3,2,1]

let _length = arr1.length
let _length2 = arr2.length
let counter = 0;
if (_length == _length2){
    let result = false
    arr1.forEach(function(item1){
        arr2.forEach(function(item2){
            if (item1 === item2){
                counter += 1;
                // console.log(item2);
            }
        })
    })
    if (counter==_length2){
        result = true;
    }
    console.log(result);
}
else{
    console.log('Not the same length of arrays!')
}


