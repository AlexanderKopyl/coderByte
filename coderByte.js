/**
 * @return {string}
 */
//Return Largest World in string

function LongestWord(sen) {
    const regExp = /\W/g;

    var splitArr = sen.split(' ');
    var mapsplit = splitArr.map((str)=>{
        return  str.replace(regExp,'');
    });

    var lengWorld = 0;
    var largestStr = '';
    for(var i = 0; i < mapsplit.length;i++ ){

        if(mapsplit[i].length > lengWorld){

            lengWorld = mapsplit[i].length;
            largestStr = mapsplit[i];
        }
    }

    // code goes here
    return largestStr;

}


//Palindrom

function FirstReverse(str) {

    let StrRevers = '';
    for (var i = str.length - 1; i >=0; i-- ){
        StrRevers += str[i];
    }

    // code goes here
    return StrRevers;

}
//capitalized
/**
 * @return {string}
 */
function LetterChanges(str) {

    // we will replace every letter in the string with the letter following it
    // by first getting the charCode number of the letter, adding 1 to it, then
    // converting this new charCode number to a letter using the fromCharCode function
    // we also check to see if the character is z and if so we simply convert the z to an a
    var converted = str.replace(/[a-z]/gi, function(char) {
        return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
    });

    // we have now successfully converted each letter to the letter following it
    // in the alphabet, and all we need to do now is capitalize the vowels
    // return the final string
    return converted.replace(/a|e|i|o|u/gi, function (vowel) {
        return vowel.toUpperCase();
    });

}


function SimpleAdding(num) {
    let number = num;

    for (var i = num - 1; i !== 0; i--){
        number += i;
    }


    // code goes here
    return number

}

//Letter Capitalize
/**
 * @return {string}
 */
function LetterCapitalize(str) {

    let arr = str.split(' ');
    let mapArr = arr.map(function (item) {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
    return mapArr.join(" ");
}

//Simple Symbols Results
/**
 * @return {boolean}
 */
function SimpleSymbols(str) {

    // pad the strings so that if a character exists at the beginning
    // of the string for example, we don't get on out-of-bounds error by
    // trying to get the character before it
    str = '=' + str + '=';

    // loop through entire string
    for (let i = 0; i < str.length; i++) {

        // check to see if current character is an alphabetic character
        // by using a simple case-insensitive regex pattern
        if (str[i].match(/[a-z]/i) !== null) {

            // check to see if a + symbol is to the left and right
            // if not, then we know this string is not valid
            if (str[i-1] !== '+' || str[i+1] !== '+') {
                return false;
            }

        }

    }

    return true;

}
//Time Convert
/**
 * @return {string}
 */
function TimeConvert(num) {

    // to get the hours, we divide num by 60 and round it down
    // e.g. 61 / 60 = 1 hour
    // e.g. 43 / 60 = 0 hours
    var hours = Math.floor(num / 60);

    // to get the minutes, now we use the remainder that we discarded above
    // the modulo operation is represented by the % symbol
    // e.g. 61 % 60 = 1 minute
    // e.g. 43 % 60 = 43 minutes
    var minutes = num % 60;

    // combine the hours and minutes
    return hours + ':' + minutes;


}
// SortCharecter
/**
 * @return {string}
 */
// function AlphabetSoup(str) {
//
//     let arr = [];
//
//     var string = "";
//
//     for(let i = 0; i < str.length; i++){
//        arr.push(str[i].charCodeAt());
//     }
//     arr.sort();
//
//     arr.forEach(function (item) {
//         string += String.fromCharCode(item);
//     });
//
//     // code goes here
//     return string;
//
// }

function AlphabetSoup(str) {

    // convert the string into an array of characters
    var chars = str.split("");

    // sort the array in alphabetical order
    var sorted = chars.sort();

    // return the newly sorted string
    return sorted.join("");

}

//Kaprekars Constant

/**
 * @return {number}
 */
function KaprekarsConstant(num) {

    const KAP = 6174;
    var count = 0;

    while (true) {
        var nums = evaluator(num);
        if (nums === true) {
            return count;
        }
    }

    function evaluator(num) {
        count++;
        // console.log('count', count);
        var minNumArr = num.toString().split('').sort();
        var maxNumArr = minNumArr.slice(0).reverse();
        var littleNum = parseInt(minNumArr.join(''), 10);
        var bigNum = parseInt(maxNumArr.join(''), 10);

        while (bigNum < 1000) {
            bigNum = bigNum * 10;
        }

        return bigNum - littleNum === KAP ? true : bigNum - littleNum;
    }
}

//prototype Object()
function Person(first, last, age, gender, interests) {

    // property and method definitions
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}
/*
Этот метод --  Object.valueOf()наследуется person1, потому что его конструктором является Person(), а прототипом Person () является Object(). valueOf() возвращает значение вызываемого объекта - попробуйте и убедитесь! В этом случае происходит следующее:

Сначала браузер проверяет, имеет ли объект person1, доступный в нем метод valueOf(), как определено в его конструкторе, Person().
Это не так, поэтому следующим шагом браузер проверяет, имеет ли прототип объекта (Object()) конструктора Person() доступный в нем метод  valueOf(). Так оно и есть, поэтому он вызывается, и все хорошо!
 */

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

Person.prototype.farewell = function() {
    alert(this.first + ' has left the building. Bye for now!');
};

//Разбить массив на нажуное количество елментов в одном обькте
var a = [{A:'A'}, {B:'B'}, {C:'C'}, {D:'D'}, {E:'E'}, {F:'F'}, {G:'G'}, {H:'H'}, {I:'I'}];

function splitTo( arr, n) {
    var plen = Math.ceil(arr.length / n);

    return arr.reduce( function( p, c, i, a) {
        if(i%plen === 0) p.push({});
        p[p.length-1][i] = c;
        return p;
    }, []);
}

var result = splitTo( a, 3);
