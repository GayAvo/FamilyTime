// var username1 = "lucy"

// console.log (username1)

// var username1age = 20

// console.log (username1age)

// function activitiesAge() {
//     var user_input = document.getElementById("Age").value

//     if (user_input == "5 and below") {
//         document.getElementById("age-response").textContent = "The Artground – A Curious Place to be is managed by The Ground Co Limited, a registered arts charity dedicated to children from birth to 9 years old. As the first multi-disciplinary children’s arts centre in Singapore, we aim to provide positive arts experiences across a variety of art forms, and build bridges between artists, educators, parents and children from various communities so that they may discover and co-create meaningful arts experiences together. https://www.theartground.com.sg/"
//     } else if (user_input == "6 - 10 years") {
//         document.getElementById("age-response").textContent = "The Singapore Botanic Gardens (the Gardens) was inscribed as a UNESCO World Heritage Site on 4th July 2015, at the 39th session of the World Heritage Committee (WHC) in Bonn, Germany. The Gardens is the first and only tropical botanic garden on the UNESCO’s World Heritage List. https://www.nparks.gov.sg/sbg/whats-happening/calendar-of-events"
//     } else {
//         document.getElementById("age-response").textContent = "National Gallery Singapore is a leading visual arts institution which oversees the world’s largest public collection of Singapore and Southeast Asian modern art. The Gallery aims to be a progressive museum that creates dialogues between the art of Singapore, Southeast Asia and the world to foster and inspire a creative and inclusive society. https://www.nationalgallery.sg/whats-on"
//     }


    // Get the value from the input field of ID #user-input
    // Store this value in a variable called user_input
    // var user_input = document.getElementById("user-input").value

    // Update the content for the HTML element with ID #header-age with 
    // whatever the user_input varible contains
    // document.getElementById("header-age").textContent = user_input

// }

// function activitiesInterest() {
//     var user_input = document.getElementById("Interest").value

//     if (user_input == "Arts and Culture") {
//         document.getElementById("interest-response").textContent = "The Artground – A Curious Place to be is managed by The Ground Co Limited, a registered arts charity dedicated to children from birth to 9 years old. As the first multi-disciplinary children’s arts centre in Singapore, we aim to provide positive arts experiences across a variety of art forms, and build bridges between artists, educators, parents and children from various communities so that they may discover and co-create meaningful arts experiences together. https://www.theartground.com.sg/"
//     } else if (user_input == "Sports") {
//         document.getElementById("interest-response").textContent = "Singapore Sports Hub. Here’s a chance for the young ones to build new skills, have fun and make new friends! Explore the variety of kids programmes available at Singapore Sports Hub. The wide array of programmes range from multi-activity classes, camps, groovy dance sessions and more! https://www.sportshub.com.sg/sport-fitness/kids-activities"
//     } else {
//         document.getElementById("interest-response").textContent = "The Singapore Botanic Gardens (the Gardens) was inscribed as a UNESCO World Heritage Site on 4th July 2015, at the 39th session of the World Heritage Committee (WHC) in Bonn, Germany. The Gardens is the first and only tropical botanic garden on the UNESCO’s World Heritage List. https://www.nparks.gov.sg/sbg/whats-happening/calendar-of-events"
//     }

function activities() {
    var age = document.getElementById("Age").value;
    var interest = document.getElementById("Interest").value;
  
    var response = '';
  
    if (age == "5 and below") {
      if (interest == "Arts and Culture") {
        response = 'Visit <a href="https://www.theartground.com.sg/" target="_blank">The Artground</a> – A Curious Place to be for arts and cultural experiences suitable for children from birth to 9 years old.';
      } else if (interest == "Sports") {
        response = 'Enroll in a toddler sports program for a fun and energetic activity suitable for young children. Visit the <a href=https://www.sportshub.com.sg/sport-fitness/kids-activities" target="_blank">Singapore Sports Hub</a> and explore the variety of kids programmes!';
      } else if (interest == "Greenery") {
        response = "Visit the Jacob Ballas Children's Garden, which is located within the Singapore Botanic Gardens. It offers a fun, interactive, and educational experience where young children can explore various themed zones like the farm, orchard, and forest.";
      }
    } else if (age == "6 - 10 years") {
      if (interest == "Arts and Culture") {
        response = 'Catch something at The Esplanade - Theatres on The Bay’s <a href=https://www.esplanade.com/whats-on/festivals-and-series/festivals/2024/flipside" target="_blank">Flipside Festival</a>, presenting artists who see and express the world through a unique lens: puppetry, circus, physical theatre and comedy.';
      } else if (interest == "Sports") {
        response = "Consider Kids’ Martial Arts Classes such as such as Taekwondo, Karate, or Judo that focus on self-discipline, respect, and physical fitness. These classes often include belt progression to keep children motivated. Such programmes are available at Martial arts schools, community centers, and sports complexes.";
      } else if (interest == "Greenery") {
        response = "The MacRitchie Reservoir Treetop Walk offers a thrilling experience for children with a sense of adventure. This free-standing suspension bridge offers a bird's-eye view of the forest canopy, and the trail leading to the bridge provides opportunities to spot wildlife and learn about nature.";
      }
    } else if (age == "Above 10 years") {
      if (interest == "Arts and Culture") {
        response = 'Explore the <a href="https://www.nationalgallery.sg/whats-on" target="_blank">National Gallery Singapore</a>, which offers a variety of art exhibitions and programs for older children and teenagers.';
      } else if (interest == "Sports") {
        response = "Youth rock climbing is suitable for older children where they can learn climbing techniques, safety practices, and build physical strength and problem-solving skills. They are available at indoor climbing gyms and outdoor climbing facilities. Climb Central is one of them.";
      } else if (interest == "Greenery") {
        response = "Bukit Timah Nature Reserve Hiking. Older children and teenagers can enjoy a more challenging hike at Bukit Timah Nature Reserve. This reserve is home to Singapore’s highest natural point and offers several trails of varying difficulty levels, perfect for those interested in outdoor activities and nature exploration.";
      }
    }
  
    var responseBox = document.getElementById("response");
    // responseBox.textContent = response;
    responseBox.innerHTML = response;
    responseBox.style.display = 'block'; // Show the response box
  }