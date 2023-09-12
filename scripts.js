const slackNameElement = document.getElementById("slackUserName");

        
slackNameElement.textContent = "Millie Muteti";


const currentDayOfTheWeek = document.querySelector(`[data-testid="currentDayOfTheWeek"]`)
const currentUTCTimeElement = document.querySelector(`[data-testid="currentUTCTime"]`);
setInterval(() => {
    const date = new Date();
    const currentTime = date.getTime();
    const currentDay = date.getDay();
    currentUTCTimeElement.textContent = currentTime;
    currentDay.textContent = currentTimeMillis;
}, 1000);