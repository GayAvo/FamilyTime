// var username1 = "lucy"

// console.log (username1)

// var username1age = 20

// console.log (username1age)

function activitiesAge() {
    var user_input = document.getElementById("Age").value

    if (user_input == "5 and below") {
        document.getElementById("age-response").textContent = "The Artground – A Curious Place to be is managed by The Ground Co Limited, a registered arts charity dedicated to children from birth to 9 years old. As the first multi-disciplinary children’s arts centre in Singapore, we aim to provide positive arts experiences across a variety of art forms, and build bridges between artists, educators, parents and children from various communities so that they may discover and co-create meaningful arts experiences together. https://www.theartground.com.sg/"
    } else if (user_input == "6 - 10 years") {
        document.getElementById("age-response").textContent = "The Singapore Botanic Gardens (the Gardens) was inscribed as a UNESCO World Heritage Site on 4th July 2015, at the 39th session of the World Heritage Committee (WHC) in Bonn, Germany. The Gardens is the first and only tropical botanic garden on the UNESCO’s World Heritage List. https://www.nparks.gov.sg/sbg/whats-happening/calendar-of-events"
    } else {
        document.getElementById("age-response").textContent = "National Gallery Singapore is a leading visual arts institution which oversees the world’s largest public collection of Singapore and Southeast Asian modern art. The Gallery aims to be a progressive museum that creates dialogues between the art of Singapore, Southeast Asia and the world to foster and inspire a creative and inclusive society. https://www.nationalgallery.sg/whats-on"
    }


    // Get the value from the input field of ID #user-input
    // Store this value in a variable called user_input
    // var user_input = document.getElementById("user-input").value

    // Update the content for the HTML element with ID #header-age with 
    // whatever the user_input varible contains
    // document.getElementById("header-age").textContent = user_input

}

function activitiesInterest() {
    var user_input = document.getElementById("Interest").value

    if (user_input == "Arts and Culture") {
        document.getElementById("interest-response").textContent = "The Artground – A Curious Place to be is managed by The Ground Co Limited, a registered arts charity dedicated to children from birth to 9 years old. As the first multi-disciplinary children’s arts centre in Singapore, we aim to provide positive arts experiences across a variety of art forms, and build bridges between artists, educators, parents and children from various communities so that they may discover and co-create meaningful arts experiences together. https://www.theartground.com.sg/"
    } else if (user_input == "Sports") {
        document.getElementById("interest-response").textContent = "Singapore Sports Hub. Here’s a chance for the young ones to build new skills, have fun and make new friends! Explore the variety of kids programmes available at Singapore Sports Hub. The wide array of programmes range from multi-activity classes, camps, groovy dance sessions and more! https://www.sportshub.com.sg/sport-fitness/kids-activities"
    } else {
        document.getElementById("interest-response").textContent = "The Singapore Botanic Gardens (the Gardens) was inscribed as a UNESCO World Heritage Site on 4th July 2015, at the 39th session of the World Heritage Committee (WHC) in Bonn, Germany. The Gardens is the first and only tropical botanic garden on the UNESCO’s World Heritage List. https://www.nparks.gov.sg/sbg/whats-happening/calendar-of-events"
    }