let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

function getFormattedDate(dateObject) {
    if (isNaN(dateObject.getTime()) === false) {
        let month = '';
        if (dateObject.getMonth() === 0) {
            month = '01';
        } else if (dateObject.getMonth() < 10) {
            month = '0' + dateObject.getMonth();
        } else {
            month = dateObject.getMonth();
        }
        let day = (dateObject.getDay() < 10) ? '0' + dateObject.getDay() : dateObject.getDay();
        let year = dateObject.getFullYear();
        let hours = (dateObject.getHours() < 10) ? '0' + dateObject.getHours() : dateObject.getHours();
        let minutes = (dateObject.getMinutes() < 10) ? '0' + dateObject.getMinutes() : dateObject.getMinutes();

        return `${day}.${month}.${year} ${hours}:${minutes} ${weekday[dateObject.getDay()]}`;
    } else {
        return 'Wrond date';
    }
}

const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date3 = new Date(121, 32, 2234444);
const date2 = new Date('42 03:24:00');
const date4 = new Date('34 01:223:00');
const date5 = new Date('151 16:16:16');
const date6 = new Date('34 01:22:00');
console.log(getFormattedDate(date0)); // 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1)); // 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2)); // 01.01.2042 03:24 Wednesday
console.log(getFormattedDate(date3));
console.log(getFormattedDate(date4));
console.log(getFormattedDate(date5));
console.log(getFormattedDate(date6));