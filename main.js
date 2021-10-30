const items = document.querySelector('ul');
const input = document.querySelector('.input-wrap>input');
console.log(input)
const addBtn = document.querySelector('.add-btn');


// 내용을 추가하는 함수
function onAdd() {
  // 사용자가 입력한 텍스트 값을 받아오는 변수
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  // 새로운 아이템을 만듬 (리스트)
  const item = createItem(text); 

  // list-item안에 새로운 아이템을 만들어서 추가한다
  items.appendChild(item);

  // 새로운 투두리스트가 추가 되면 추가된 리스트로 포커싱이 됨
  item.scrollIntoView({ block: 'center'});

  // input 초기화
  input.value = '';
  input.focus();
}

function createItem(text) {  
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item-row');

  const item = document.createElement('div')
  item.setAttribute('class', 'list-item');

  const name = document.createElement('p');
  name.setAttribute('class', 'list-name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'del-btn');
  deleteBtn.addEventListener('click', function() {
    items.removeChild(item);
  })
  
  
  item.appendChild(name);
  item.appendChild(deleteBtn);
  
  itemRow.appendChild(item);
  return item;
}

addBtn.addEventListener('click', function() {
  onAdd();
})

input.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    onAdd();
  }
})