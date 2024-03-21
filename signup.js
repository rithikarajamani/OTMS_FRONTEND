
// const registration = async () => {
//   const orgId = document.getElementById('Org_ID').value;
//   const roleId = document.getElementById('Role_ID').value;
//   const empCode = document.getElementById('Emp_Code').value;
//   const empName = document.getElementById('Emp_Name').value;
//   const username = document.getElementById('username').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const createdBy = document.getElementById('Created_By').value;
//   const updatedBy = document.getElementById('Updated_By').value;

//   console.log("ok>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", empCode, empName);

//   fetch("http://localhost:8080/api/user/signup", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(
//       {
//         "orgId": orgId,
//         "roleId": roleId,
//         "empCode": empCode,
//         "empName": empName,
//         "username": username,
//         "email": email,
//         "password": password,
//         "createdBy": createdBy,
//         "updatedBy": updatedBy
//       })
//   })
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error('Error:', response.statusText);
//       }
//     })
//     .then(data => {
//       console.log(data, ">>>>>>>>>>>>>>>>>>>>>>>");
//     })
//     .catch(error => {
//       console.error('Error:', error.message);
//     });
// }

const createNew = async () => {

  const orgId = document.getElementById('Org_ID').value;
  const roleId = document.getElementById('Role_ID').value;
  const empCode = document.getElementById('Emp_Code').value;
  const empName = document.getElementById('Emp_Name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const createdBy = document.getElementById('Created_By').value;
  const updatedBy = document.getElementById('Updated_By').value;

  console.log("Orgnization ID : "+orgId);
  console.log('Role ID : '+roleId);
  console.log('Employee Code :'+empCode)
  console.log('Employee Name : '+ empName);
  console.log('User name : '+username);
  console.log('Email : '+email);
  console.log('Password : '+password);
  console.log('Created By : '+createdBy);
  console.log('Updated By : '+updatedBy);


  try {
    const res = await fetch("http://localhost:8080/api/user/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          "orgId": orgId,
          "roleId": roleId,
          "empCode": empCode,
          "empName": empName,
          "username": username,
          "email": email,
          "password": password,
          "createdBy": createdBy,
          "updatedBy": updatedBy,
        })
    })

    if (!res.ok) {
      throw new console.log("check your api");
    }
    const data = await res.json()
    console.log("Registartion data : ", data);
    alert("Registration Successful!! \n Login with Email and password")
    window.location.href = "./Login.html";
  }
  catch (err) {
    console.log("check your fecth method", err)
  }
}
