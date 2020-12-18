const fs = require('fs');
const readline = require('readline');

async function prtct() 
{
    let lines = [];

    const rl = readline.createInterface({input: fs.createReadStream('student.txt'), crlDelay: Infinity});

    for await (const line of rl){lines.push(line);
    }
    return lines;

}
const findAnagrams = (stringArr)=>{
    var anagrams = {};
    for (let index = 0; index < stringArr.length; index++) {
        var sortedWord = stringArr[index].toLowerCase().split('').sort().join('');
        if(anagrams[sortedWord] == undefined){
            anagrams[sortedWord] = [stringArr[index]]

        }   
        else if (!anagrams[sortedWord].includes(stringArr[index])) {
            anagrams[sortedWord].push(stringArr[index])
        }    
    }

    var anagramsCleaned = [];

    for(let key in anagrams){
        if(anagrams[key].length>1){
            anagramsCleaned.push(anagrams[key]);
        }
    }


    //console.log(anagramsCleaned);

    return anagramsCleaned;

}



module.exports = findAnagrams