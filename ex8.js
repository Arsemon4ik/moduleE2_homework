let arr = new Map([
    ['name','Andrey'],
    ['age', 18],
    ['height',182]
]);

// first method

// arr.forEach(function(value,key){
//     console.log(`Key - ${key}, Value - ${value}`);
// });

// second method
for (let key of arr.keys()){
    console.log(`Key - ${key}, Value - ${arr.get(key)}`);
}