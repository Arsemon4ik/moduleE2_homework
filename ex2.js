// let X = Number(); // тут меняем тип данных - легкий способ
let X = prompt()
let isnum = Number(X)
let isstr = String(X)
let isbool = Boolean(X)
if (isnum)
    console.log('X - Number');
else if (isstr)
    console.log('X - String');
else if (isbool === false || isbool === true)
    console.log('X - Boolean'); // как проверить на истину так и не понял, а на ложь получилось путем пустой строки
else
    console.log('Тип x не определён');