const textarea = document.getElementsByClassName('to-do');
const btn = document.getElementsByClassName('to-do-list__clear')

btn[0].addEventListener('click', function handleClick() {
  for (var i = 0; i < 3; i++) {
    textarea[i].value = '';
  }
});

date = new Date().toLocaleDateStrWWWing();