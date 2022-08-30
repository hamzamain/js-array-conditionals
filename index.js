var numbers =[10, 20, 30, 40, 50, 60, 60.5, 70, 80, 90, 100]

//1.get elements by index
var news = numbers[5];
// console.log(news);
// console.log(numbers[7]);

//2.set value by index
numbers[3] = 55;
// console.log(numbers);

//3.find index of an element
console.log(numbers.indexOf(60.5));
var jantechai = numbers.indexOf(100);
console.log(jantechai);
console.log(numbers.indexOf(55));
console.log(numbers.indexOf(40));