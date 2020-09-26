/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const itemsPerPage = 8;

function displayPage(list, page) {
  const startOfIndex = page * itemsPerPage - itemsPerPage;
  const endOfIndex = page * itemsPerPage;

  let studentList = document.querySelector(".student-list");
  studentList.innerHTML = " ";

  for (let i = 0; i < list.length; i++) {
    let student = list[i];
    if (i >= startOfIndex && i <= endOfIndex) {
      let studentBuild = `<li class="student-item cf">
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

      studentList.insertAdjacentHTML("beforeend", studentBuild);
    }
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  const buttonsNeded = list.length / itemsPerPage;
  const buttons = document.querySelector(".link-list");
  buttons.innerHTML = "";

  for (let i = 1; i < buttonsNeded; i++) {
    let buttonMaker = `<li>
         <button type="button" >${i}</button>
       </li>`;
    buttons.insertAdjacentHTML("beforeend", buttonMaker);
  }
  const setButtonActive = document.getElementsByTagName("button");
  const firstButton = buttons.firstElementChild.firstChild.nextSibling;

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

// Call functions
displayPage(data, 1);
addPagination(data);
