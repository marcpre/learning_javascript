function getSuffix(num) {
    if (num === '1') {
        return 'st';
    }
    if (num === '2') {
        return 'nd';
    }
    if (num === '3') {
        return 'rd';
    }
    return 'th';
};

function convertDateToString(date) {
    let monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    let dayIndex = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return dayNames[dayIndex] + ', ' + monthNames[monthIndex] + ' ' + dayIndex + getSuffix(dayIndex) + ' ' + year;
}

let date = new Date()

console.log(convertDateToString(date));

// wanted format: Thursday, May 2nd 2019