
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


const getWeekDaysFromNow = () => {
    const d = new Date();
    let i = d.getDay();
    const today = weekDay[i];
    // let weeklyOutlook = ['Today'];
    let weeklyOutlook = [today];

    let j = (i === 6) ? 0 : i + 1;
    while (j !== i) {
        weeklyOutlook.push(weekDay[j]);
        ++j;
        if (j === 7) j = 0;
    }


    return weeklyOutlook;
}


export default getWeekDaysFromNow;
