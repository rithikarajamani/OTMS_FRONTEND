
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log("username : " + email);
  console.log('password : ' + password);

  await fetch("http://localhost:8080/api/user/signin", { // here you have to give your database end point
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      try {
        if (data.userStatus == 'ACTIVE') {
          alert('Login Successful')
          window.location.href = "./task.html";
        }
        else{
          alert('Login Failed');
        }
      }
      catch (error) {
        console.log('Check your fetch request');
        console.error('login failed:', error.message);
      }
    });

} 
