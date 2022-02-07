const button = document.getElementById('sign-in-btn');


button.addEventListener('click', async _ => {
  axios.post('http:localhost:3001/users/login', {
    email: 'Fred',
    Password: '23'
  })
  .then(function (response) {
    console.log(response);
  })
});

const axios = require('axios')

axios.post('http:localhost:3001/users/login', {
    email: 'Fred',
    Password: '23'
  })
  .then(function (response) {
    console.log(response);
  })