/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// Variable that contains the number of items shown on the page.

const itemsPerPage = 8;

// Function that shows all the student info of 9 students at a time.

function displayPage(list, page) {
  const startOfIndex = page * itemsPerPage - itemsPerPage;
  const endOfIndex = page * itemsPerPage;

  let studentList = document.querySelector(".student-list");
  studentList.innerHTML = " ";

  for (let i = 0; i < list.length; i++) {
    let student = list[i];

    // Condition that checks if i is bigger or equal to the start of the index and lesser then the end of the index.

    if (i >= startOfIndex && i <= endOfIndex) {
      let studentInfo = `<li class="student-item cf">
             <div class="student-details">
             <img class = "avatar"
             src = "${student.picture.large}" alt = "Profile Picture" >
             <h3>${student.name.first} ${student.name.last}</h3>
             <span class = "email" > ${student.email} </span> 
             </div> 
         <div class = "joined-details" >
          <span class = "date" > ${student.registered.date} </span>
          </div> 
         </li>`;
      studentList.insertAdjacentHTML("beforeend", studentInfo);
    }
  }
}

// Function  that makes buttons depending on the number of pages and also lets you get to that page
function addPagination(list) {
  const buttonsNeeded = Math.ceil(list.length / itemsPerPage) + 1;
  const buttons = document.querySelector(".link-list");
  buttons.innerHTML = "";

  // Makes the buttons depending on the number of pages

  for (let i = 1; i < buttonsNeeded; i++) {
    let buttonMaker = `<li>
         <button type="button" >${i}</button>
       </li>`;
    buttons.insertAdjacentHTML("beforeend", buttonMaker);
  }
  const setButtonActive = document.getElementsByTagName("button");
  const firstButton = buttons.firstElementChild.firstChild.nextSibling;

  // Removes all the "active" classes and sets the class of the clicked button to "active" en displays that page.

  firstButton.classList.add("active");
  buttons.addEventListener("click", (e) => {
    for (i = 0; i < setButtonActive.length; i++) {
      if (e.target == setButtonActive[i]) {
        const buttonClicked = e.target;
        buttons.querySelector(".active").className = "";
        buttonClicked.classList.add("active");
        displayPage(data, buttonClicked.textContent);
      }
    }
  });
}

// Calls the functions
displayPage(data, 1);
addPagination(data);