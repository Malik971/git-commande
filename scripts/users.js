function handleResponse(response) {
  return response.json();
}

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => handleResponse(response))
    .then(function(data) {
      console.log(data);
      return data;
    })
      
    /*
    .then(function(response) {
      const data = response;
      console.log(data);
      return data;

    })*/
  
}