const fetchUsersBtn = document.querySelector(".fetch-btn");
const userList = document.querySelector(".response-user-list");

const baseUrl = "https://jsonplaceholder.typicode.com/users";

fetchUsersBtn.addEventListener("click", () => {
  fetch(baseUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((users) => {
      const markup = users
        .map((user) => {
          return `<li>
	<p><b>Name</b>: ${user.name}</p>
	<p><b>Email</b>: ${user.email}</p>
	<p><b>Company</b>: ${user.company.name}</p>
	</li></br>`;
        })
        .join("");

      userList.insertAdjacentHTML("beforeend", markup);
    })
    .catch((error) => console.log(error));
});
