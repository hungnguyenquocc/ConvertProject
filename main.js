function convert(){
    var hex = document.calcuform.x.value;
    hex = hex.replace("0x","");
    hex = hex.replace("0X","");
    if(document.getElementById("ins").value =="hexa"){
        if(document.getElementById("outs").value =="binary"){
            document.getElementById("y").textContent = hexToBin(hex);
            document.getElementById("y2").textContent = hexToDec(hex);

        } else if(document.getElementById("ins").value =="decimal"){
            document.getElementById("y2").textContent = hexToBin(hex);
            document.getElementById("y").textContent = hexToDec(hex);
        } else{
            document.getElementById("y").textContent = hex;
            document.getElementById("y2").textContent = hex;
        }
    }
    else if(document.getElementById("ins").value =="binary"){
        if(document.getElementById("outs").value =="decimal"){
            document.getElementById("y").textContent = binToDec(hex);
            document.getElementById("y2").textContent = binToHex(hex);
        } else if(document.getElementById("outs").value =="hex"){
            document.getElementById("y2").textContent = binToDec(hex);
            document.getElementById("y").textContent = binToHex(hex);
        }
        else{
            document.getElementById("y").textContent = hex;
            document.getElementById("y2").textContent = hex;
        }
    }else{
        if(document.getElementById("outs").value =="binary"){
            document.getElementById("y").textContent = decToBin(hex);
            document.getElementById("y2").textContent = decToHex(hex);
        } else if(document.getElementById("outs").value =="hex"){
            document.getElementById("y2").textContent = decToBin(hex);
            document.getElementById("y").textContent = decToHex(hex);
        }
        else{
            document.getElementById("y").textContent = hex;
            document.getElementById("y2").textContent = hex;
        }
    }
}

document.querySelector('.reset').addEventListener("click",() =>{
    document.getElementById("y").textContent = "";
    document.getElementById("y2").textContent = "";
})


function binToDec(src) {
    let answer = 0;
    let n = 0;
    let srcString = src.toString();
    
    for (let i = srcString.length - 1; i >= 0; i--) {
        answer += srcString[i] * 2 ** n;
        n++;
    }

    return answer;
}

function binToHex(src) {
    const baseMap = {
        '0000': '0',
        '0001': '1',
        '0010': '2',
        '0011': '3',
        '0100': '4',
        '0101': '5',
        '0110': '6',
        '0111': '7',
        '1000': '8',
        '1001': '9',
        '1010': 'A',
        '1011': 'B',
        '1100': 'C',
        '1101': 'D',
        '1110': 'E',
        '1111': 'F'
    };

    let i;
    let answer = '';
    let rem = '';
    const len = 4;
    const srcString = src.toString();

    for (i = srcString.length; i >= len; i -= len) {
        if (i - len < srcString.length) {
            answer = baseMap[srcString.substr(i - len, len)] + answer;
        }
    }
    
    if (i !== 0) {
        rem = srcString.substr(0, i);
        while (rem.length < 4) {
            rem = '0' + rem;
        }
        answer = baseMap[rem] + answer;
    }

    return answer;
}

function decToBin(src) {
    let n = 0;
    let answer = '';

    while (2 ** (n) < src) n++;
    
    for (n; n >= 0; n--) {
        if (2 ** n <= src) {
            answer += '1';
            src = src % 2 ** n;
        } else {
            answer += answer === '' ? '' : '0';
        }
    }
    return answer;
}

function decToHex(src) {
    const baseMap = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': 'A',
        '11': 'B',
        '12': 'C',
        '13': 'D',
        '14': 'E',
        '15': 'F'
    };

    let n = 0;
    let answer = '';
    const base = 16;

    while (base ** (n + 1) < src) n++;

    for (n; n >= 0; n--) {
        if (base ** n <= src) {
            answer += baseMap[Math.floor(src / base ** n).toString()];
            src = src - Math.floor(src / base ** n) * (base ** n);
        } else {
            answer += '0';
        }
    }
    
    return answer;
}

function hexToBin(src) {
    const baseMap = {
        '0': '0000',
        '1': '0001',
        '2': '0010',
        '3': '0011',
        '4': '0100',
        '5': '0101',
        '6': '0110',
        '7': '0111',
        '8': '1000',
        '9': '1001',
        'A': '1010',
        'B': '1011',
        'C': '1100',
        'D': '1101',
        'E': '1110',
        'F': '1111'
    };

    let srcString = src.toString().toUpperCase();
    let answer = '';

    for (let i = 0; i < srcString.length; i++) {
        answer += baseMap[srcString[i]];
    }
    
    return answer;
}

function hexToDec(src) {
    const baseMap = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        'A': '10',
        'B': '11',
        'C': '12',
        'D': '13',
        'E': '14',
        'F': '15'
    };

    let srcString = src.toString().toUpperCase();
    let answer = 0;

    for (let i = 0; i < srcString.length; i++) {
        answer += baseMap[srcString[i]] * (16 ** (srcString.length - 1 - i))
    }

    return answer;
}
