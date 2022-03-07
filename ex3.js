let string = prompt('Введите строку');
let reverse_string = '';
let _length = string.length
if (String(string) && (_length > 1)){
    for (let index = _length-1; index > -1; index--) {
        reverse_string += string[index];
    }
    console.log(reverse_string);
}
else
    console.log('It\'s not a string or it\'s a small string')
