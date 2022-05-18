const output = document.querySelector('#output');
let isOnEdit;
// fetch('  https://testapi.io/api/converse/resource/testapi', {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'Gytis7',
//     lastname: 'Juozenas3',
//     age: 23
//   })
// })
//   .then((response) => {
//     if (response.ok) {
//       console.log('ok');
//       return response.json();
//     } else {
//       console.log('not okay');
//     }
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
function getUsers() {
  fetch('   https://testapi.io/api/converse/resource/testapi')
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then(result => render(result.data)); 
}
function render(users) {
  users.forEach(user => {
    const div = document.createElement('div');
    const name = document.createElement('p');
    name.textContent = user.name;
    const lastname = document.createElement('p');
    lastname.textContent = user.lastname;
    const age = document.createElement('p');
    age.textContent = user.age;
    const delButton = document.createElement('button');
    delButton.textContent = 'DELETE USER';
    delButton.addEventListener('click', (event) => {
      const elementId = event.target.parentElement.id;
      deleteUser(elementId);
    })
    const editButton = document.createElement('button');
    editButton.textContent = 'EDIT USER';
    editButton.addEventListener('click', (event) => {
      isOnEdit = true;
      const elementId = event.target.parentElement.id;
      // console.log(elementId, name.textContent, lastname.textContent, age.textContent);
      editUser(elementId, name.textContent, lastname.textContent, age.textContent, event);
    })
    div.append(name, lastname, age, delButton, editButton);
    div.setAttribute('id', user.id);
    output.append(div);
  })
}
async function deleteUser(userId) {
  const fethg = await fetch(`https://testapi.io/api/converse/resource/testapi/${userId}`, {
    method: 'DELETE'
  })
  console.log(fethg);
  output.innerHTML = '';
  if (fethg) {
    getUsers();
  }
}
getUsers();