const daysCount = 31 // Assmption: always display 31 days

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

}


function onLoad() {
    // I can put more than one thing
    displayDaysOfTheMonth()
}
window.onload = onLoad // Without brackets because we don't to call it during the assignment
