/* 
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")

এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

Sample Input & Output

Input: 5
Output: 7.5

Input: 50
Output: 75

Input: 33
Output: 49.5
*/

function mindGame(number){
    const multiply = number * 3;
    const sumassion = multiply + 10;
    const divide = sumassion / 2;
    const result = divide - 5;
    return result;
}

let numbers = mindGame(5);
console.log(numbers);