const url = " http://localhost:3000/post ";

const submitpost = (event) => {
  event.preventDefault();
  const Email = event.target.Email.value;
  const Password = event.target.Password.value;
  const person = {
    email: Email,
    password: Password,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

// arrow function create
// arrow function er bitore preventdefault,add
//
//
// username,email
// frist name,last
// email,password
// frist name,last,email
// frist name,last,email,password
//
