const list = document.querySelector('ul');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

button.onclick = function(){
    let myBook = input.value;
    input.value = '';

    const listBook = document.createElement('li');
    const listName = document.createElement('span');
    const listClik = document.createElement('button');

    listBook.appendChild(listName);
    listName.textContent = myBook;
    listBook.appendChild(listClik);
    listClik.textContent = '❌';
    list.appendChild(listBook);

    listClik.onclick= function(e){
        list.removeChild(listBook);
    }

    input.focus();

}