/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
	const firstDisplayedStudent = (page * 9) - 9;
	const lastDisplayedStudent = page * 9;
	const studentList = document.querySelector('.student-list');

	studentList.innerHTML = '';
	
	for (i = 0; i < list.length; i++) {
		if (i >= firstDisplayedStudent && i < lastDisplayedStudent) {
			var studentItem = `
               <li class="student-item cf">
                  <div class="student-details">
                     <img class="avatar" src=${data[i]["picture"]["large"]} alt="Profile Picture">
                     <h3>${data[i]["name"]["first"]} ${data[i]["name"]["last"]}</h3>
                     <span class="email">${data[i]["email"]}</span>
                  </div>
                  <div class="joined-details">
                     <span class="date">${data[i]["registered"]["date"]}</span>
                  </div>
               </li>`
			studentList.insertAdjacentHTML('beforeend', studentItem);
		};
	};
};
/*
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   var numStudentsDisplayed = 9;
	var numOfPages = Math.ceil(list.length / numStudentsDisplayed);
	var linkList = document.querySelector('.link-list');
	linkList.innerHTML = '';

	for (i = 1; i <= numOfPages; i++) {
		var button = `
     <li>
        <button type="button">${i}</button>
     </li>
     `
		linkList.insertAdjacentHTML('beforeend', button);
	}
	linkList.firstElementChild.className = 'active';
   //if a button is clicked, it will have a class of active and the previously clicked button will lose it's active class
	linkList.addEventListener('click', (e) => {
		if (e.target.tagName === 'BUTTON') {
			document.querySelector('.active').className = '';
			e.target.className = 'active';
         
			showPage(data, e.target.textContent);
		}
	});
};
showPage(data, 1);
addPagination(data);