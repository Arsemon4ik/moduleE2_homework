let value = prompt('Введите значение, желательно число :');
value ++;
concole.log(typeof(value))
if (Number(value) && !isNaN(value)){
    if (value % 2 == 1){
        console.log('Число четное!')
    }
    else{
        console.log('Число НЕ четное!')
    }
}
else{
    console.log('Упс, кажется вы ошиблись!')
}