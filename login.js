
// const form = {
//     email: document.querySelector("#email"),
//     password: document.querySelector("#password"),
//     submit: document.querySelector("#submit"),
//   };
//   let button = form.submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const login = "http://localhost:5678/api/users/login";
  
//     fetch(login, {
//       method: "POST",
//       headers: {
//         Accept: "application/json, text/plain, */*",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: form.email.value,
//         password: form.password.value,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         // code here //
//         if (data.error) {
  
  
//           alert("Error Password or Username"); /*displays error message*/
//         } else {
//           window.open(
//             "./index.html"
//           ); /*opens the target page while Id & password matches*/
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
  
  function mysubmit(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email+" "+password);
  
     fetch("http://localhost:5678/api/users/login", {
       method: "POST",
       headers: {
         Accept: "application/json, text/plain, */*",
         "Content-Type": "application/json",
       },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
     });
  }