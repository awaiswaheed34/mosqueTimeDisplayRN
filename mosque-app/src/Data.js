const namazBeginingTime = require('../assests/March_Beginning.csv');
const namazEndingTime = require('../assests/March_Ending.csv');

/*
Day,Sehri Ends,bFajar,Sun Rise,bZohar,bAsar,bMaghrib,bIsha
1,05:12,05:22,07:00,12:28,15:52,17:47,19:25
*/

const parseNamazTime = (data) => {
    const lines = data.split(',');
    const times = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes(':')) {
            times.push(line);
        }
    }
    return times;
};

console.log(parseNamazTime(namazBeginingTime));

