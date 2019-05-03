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
