const daysCount = 31 // Assmption: always display 31 days

// MODELING AN APPOINTMENT
// -- Time
// -- Day
// -- Name / Title
//
// Let's assume we deal only with strings, no dates or timestamps at the moment
// { day: 12, time: "12:00", title: "Lunch" }

// MODEL A DAY
// Let's suppose that in a day we can have as many appointments as we want...
let firstDay = [
    { day: 12, time: "12:00", title: "Lunch" },
    { day: 12, time: "14:00", title: "Gym" },
    { day: 12, time: "16:00", title: "Coffee with Paul" }
]
let secondDay = [
    { day: 12, time: "12:00", title: "Lunch" },
]

// MODEl THE MONTH
// It will be an array of days...
let calendar = [
    firstDay,
    secondDay
    //etc etc
]

// EXAMPLE
// Let's get the title of the first meeting of the second day
// Given the calendar
// console.log(calendar[1][0].title)

function displayDaysOfTheMonth() {
    // 1) Get the div where we want to add the days as children: the parent
    let monthNode = document.getElementById("month")

    for (let day = 1; day <= daysCount; day++) {

        // 1st iteration: day --> 1
            // Creating the first DIV, the first DAY
            // We need to show 1, and we have 1 in "day"
        // 2nd iteration: day --> 2
            // Creating the second DIV, the second DAY
            // We need to show 2, and we have 2 in "day"
        // 3rd iteration: day --> 3
        // ...

        // 2) Create a new div (the day div)
        let dayNode = document.createElement('div')

        // 3) We customize it
        dayNode.innerText = day
        dayNode.classList.add('day')
        dayNode.addEventListener('click', selectDay) // We want it to be called later, and so no brackets ()
        // ANOTHER WAY TO DO IT: dayNode.onclick = selectDay

        // 4) Append it to the parent
        monthNode.appendChild(dayNode)
    }
}

function selectDay(event) {
    let clickedDayNode = event.target
    // Exactly if we get a node in any other way, it's a node
    // We selected a node (the first step of the usual process...)

    // Get the previously selected day
    let previouslySelectedDay = document.querySelector('.selected-day')


    // Remove the selection from the previous day
    if (previouslySelectedDay !== null) {
        previouslySelectedDay.classList.remove('selected-day')
    }

    // Add the selection to the newly clicked day
    clickedDayNode.classList.add('selected-day')

    displayMeetingsForTheDay()
}

function displayMeetingsForTheDay() {
    // Inside calendar we have our meeting data...
    // GET THE MEETINGS FOR THE DAY WE SELECTED
    let selectedDayNode = document.querySelector('.selected-day')
    let dayNumber = parseInt(selectedDayNode.innerText) // Needed because we cannot use a string to index an array

    let arrayOfMeetings = calendar[dayNumber - 1]

    // LET'S DISPLAY THEM:
    // 1) Target the div where we want to display the meetings
    let meetingsListNode = document.getElementById('meetings-list')

    // 2) We create elements....
    let listNode = document.createElement('ul')

    for (let meeting of arrayOfMeetings) {
        let listItemNode = document.createElement('li')

        listItemNode.innerText = meeting.time + " - " + meeting.title

        listNode.appendChild(listItemNode)
    }

    meetingsListNode.replaceChildren(listNode)
}


function createNewMeeting() {

}

function onLoad() {
    // I can put more than one thing
    displayDaysOfTheMonth()
}
window.onload = onLoad // Without brackets because we don't to call it during the assignment
