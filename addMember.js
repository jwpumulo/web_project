//addMember.js

let members = JSON.parse(localStorage.getItem('members'));

console.log(members);

drawTable();

document.forms.add_member_form.addEventListener('submit', function (e) {
  e.preventDefault();

  let id = document.querySelector('input[name="user_id"]').value;
  let pw = document.querySelector('input[name="user_pw"]').value;
  let name = document.querySelector('input[name="user_name"]').value;

  let member = {id: id, pw: pw, name: name};

  document.querySelector('#list').appendChild(makeRow(member));

  members.push(member);
  localStorage.setItem('members', JSON.stringify(members));
  
});

function makeRow(item = {}) {

  let tr = document.createElement('tr');

  for (let prop in item) {
    // str += '<td>' + element[prop] + '</td>';
    let td = document.createElement('td');
    let text = document.createTextNode(item[prop]);
    td.appendChild(text);
    tr.appendChild(td);
  }

  return tr;
}

function drawTable() {
  members.forEach(function (element, index, array) {

    // let str = '';
    // str += '<tr>';
    // let tr = document.createElement('tr');

    // for (let prop in element) {
    //   // str += '<td>' + element[prop] + '</td>';
    //   let td = document.createElement('td');
    //   let text = document.createTextNode(element[prop]);
    //   td.appendChild(text);
    //   tr.appendChild(td);
    // }

    // str += '</tr>';

    // document.querySelector('#list').innerHTML += str;
    document.querySelector('#list').appendChild(makeRow(element));
  });
}