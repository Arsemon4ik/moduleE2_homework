let arr = [1,NaN,3,'4qwer',null,12,Object,0,true]
let counter_even = 0;
let counter_odd = 0;
for (let index = 0; index < arr.length; index++) {
    if (Number(arr[index]) && (arr[index] % 2 == 0)){
        counter_even += 1;
    }
    else if (Number(arr[index]) && (arr[index] % 2 != 0)){
        counter_odd += 1;
    }

    else if (Number(arr[index]) && (arr[index] === 0) || (arr[index] == null)){
        console.log(`Index ${index} is null or 0`); // 4 индекс попадает - null, а 7 индекс то есть 0 не хочет попадать в if, помогите найти ошибку пожалуйста
    }

}
console.log(`Even counter = ${counter_even}` + '\n' + `Odd counter = ${counter_odd}`);