/*Задание 1:
Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}.*/

var array = ['Vasya', 'Petya', 'Vanya'];
var array2 = array.map(function (item) {
    return {'name': item}
})

console.log(array2);

/*Задание 2:
Написать функцию, принимающую массив вида ['00', '13', '24'] и возвращающую строку "Текущее время : 00 : 13 : 24".
Для решения использовать перебирающий метод массивов.*/

var strings = ['00', '13', '24'];
var timesString = strings.reduce(function (acc, curr) {
    return acc + ' : ' + curr;
},'Текущее время');

console.log(timesString); // Текущее время : 00 : 13 : 24

/*Задание 3:
Написать чистую функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой. Решение не
должно быть "топорным".*/

function getCount(str) {
    str = str.toLowerCase();
    var vowels = 'aeiouy';
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) > -1) {
            count++;
        }
    }
    return count;
}

var result = getCount('Function');
console.log(result);//3

/*Задание 4:
Написать функцию, которая будет принимать текст в качестве параметра. У текста должны быть пробелы, точки, запятые,
восклицательные и вопросительные знаки. Текст необходимо разбить на предложения (по точкам, восклицательным и
вопросительным знакам - убрав их - разрешается использовать регулярное выражение в методе split).
Для каждого из предложений вывести текст предложения и рядом количество букв в нем (без учета пробелов, запятых
и т.д. - именно букв).*/

function countLetters(text) {
    var string = text.split(/[!.?]\s*/).filter(function(item) {
	return item !== '';
    }).forEach(function(item) {
	console.log(item + '. (' +'всего букв: ' + item.split(/[\s,.:;-]/).join('').length + ')');
    });
}

countLetters('Парус. Белеет парус одинокой в тумане моря голубом! Что ищет он в стране далекой? Что кинул он в краю родном? Играют волны - ветер свищет, и мачта гнется и скрипит. Увы! Он счастия не ищет и не от счастия бежит!')

//Парус (всего букв: 5)
//Белеет парус одинокой в тумане моря голубом (всего букв: 37)
//Что ищет он в стране далекой (всего букв: 23)
//Что кинул он в краю родном (всего букв: 21)
//Играют волны - ветер свищет, и мачта гнется и скрипит (всего букв: 42)
//Увы (всего букв: 3)
//Он счастия не ищет и не от счастия бежит (всего букв: 32)

