/**
 * @return {string}
 */
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

function FirstReverse(str) {

    let StrRevers = '';
    for (var i = str.length - 1; i >=0; i-- ){
        StrRevers += str[i];
    }

    // code goes here
    return StrRevers;

}


