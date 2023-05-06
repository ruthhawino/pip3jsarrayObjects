

// 1 .Given an array of strings, use a function to reverse all the elements in the string 
//in ascending order and the specific elements in descending order
function reverseStrings(arr) {
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        arr[i] = arr[i].split('').reverse().join('');
      }
    }
  
    return arr;
  }
const stringsArr = ['my', 'name', 'is', 'Ruth'];
const reversedArr = reverseStrings(stringsArr);

console.log(reversedArr);



// 2. Given an array of objects, each object representing a person with a name
 //and age property, write a function that returns the sum of all people
  //who are less than 18 years.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

console.log(sumAgesUnder18(people));



//Using JS functions and an array of numbers, return positive if an element 
//within the array is positive, negative if an element 
//is negative, else zero



function checkSign(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        return "positive";
      } else if (numbers[i] < 0) {
        return "negative";
      }
    }
    return "zero";
  }

  let arr = [1, 2, 3, 4, 5];
console.log(checkSign(arr));

arr = [0, -1, -2, -3, -4];
console.log(checkSign(arr));

arr = [0, 0, 0];
console.log(checkSign(arr));



//Given an array of objects, where each object represents an employee with an
// id, name, and salary property, write a function that returns a 
//new array of employee objects sorted by their salary in ascending order.


function sortEmployeesBySalary(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
  }