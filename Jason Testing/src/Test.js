
fetch('http://localhost:3000/cards')
.then(response => response.json())
.then(result => console.log(result))