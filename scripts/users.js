let users = [];
    let displayMode = "grid";

    function fetchUsers() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          users = data;
          displayGrid();
        });
    }

    function displayGrid(data = users) {
      const grid = document.getElementById("usersGrid");
      const table = document.getElementById("userTable");

      table.classList.add("d-none");
      grid.classList.remove("d-none");
      grid.classList.add("row", "g-4", "row-cols-2");

      let cells = "";
      data.forEach((user) => {
        cells += `
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">Téléphone: ${user.phone}</p>
              <p class="card-text">Email: ${user.email}</p>
            </div>
          </div>
        </div>`;
      });

      grid.innerHTML = cells;
    }

    function displayTable(data = users) {
      const table = document.getElementById("userTable");
      const grid = document.getElementById("usersGrid");

      grid.classList.add("d-none");
      table.classList.remove("d-none");
      table.classList.add("table");

      const rows = data.map((user) => {
        return `
        <tr>
          <td>${user.name}</td>
          <td>${user.phone}</td>
          <td>${user.email}</td>
        </tr>`;
      });

      document.getElementById("userTableBody").innerHTML = rows.join("");
    }

    function searchUsers() {
      const search = document.getElementById("search").value.toLowerCase();
      const filteredUsers = users.filter((user) => {
        const name = user.name.toLowerCase();
        const phone = user.phone.toLowerCase();
        const email = user.email.toLowerCase();
        return name.includes(search) || phone.includes(search) || email.includes(search);
      });

      if (displayMode === "grid") {
        displayGrid(filteredUsers);
      } else {
        displayTable(filteredUsers);
      }
    }

    function toggleDisplayMode() {
      displayMode = (displayMode === "grid") ? "table" : "grid";

      const btn = document.getElementById("toggleViewBtn");
      btn.textContent = (displayMode === "grid") ? "Passer en tableau" : "Passer en grille";

      const search = document.getElementById("search").value;
      if (search.trim() !== "") {
        searchUsers(); // garde le filtre
      } else {
        if (displayMode === "grid") {
          displayGrid();
        } else {
          displayTable();
        }
      }
    }

    // Lancer le chargement dès que la page est prête
    window.onload = fetchUsers;