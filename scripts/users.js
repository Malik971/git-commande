let users = [];
function handleResponse(response) {
  return response.json();
}

const handleData = (data) => {
  users = data;
  displayTable(data);

}

const displayTable = () => {
  let tableLines = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const tableLine = `
    <tr>
      <td>${user.name}</td>
      <td>${user.phone}</td>
      <td>${user.email}</td>
    </tr>`;
    tableLines += tableLine;
  }

  const userCopie = users.map((user) => {
    return `
    <tr>
      <td>${user.name}</td>
      <td>${user.phone}</td>
      <td>${user.email}</td>
    </tr>`;
  }
  );

  const usersGrid = document.getElementById("usersGrid");
  usersGrid.classList.remove("grid");
  usersGrid.classList.add("d-none");

  const table = document.getElementById("userTable");
  table.classList.remove("d-none");
  table.classList.add("table");
  document.getElementById("userTableBody").innerHTML = userCopie.join("");

}

const displayGrid = () => {
  let cells = "";
  users.forEach((user) => {
    const cell = `
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <p class="card-text">Téléphone: ${user.phone}</p>
          <p class="card-text">Email: ${user.email}</p>
        </div>
      </div>

    </div>`;
    cells += cell;
  }
  );
  const usersTable = document.getElementById("userTable");
  usersTable.classList.remove("d-block");
  usersTable.classList.add("d-none");

  const usersGrid = document.getElementById("usersGrid");
  usersGrid.classList.remove("d-none");
  usersGrid.classList.add("row");
  usersGrid.classList.add("g-4");
  usersGrid.classList.add("row-cols-2");
  usersGrid.innerHTML = cells;
}

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => handleResponse(response))
    .then((data) => handleData(data))
      
    /*
    .then(function(response) {
      const data = response;
      console.log(data);
      return data;

    })*/
  
}