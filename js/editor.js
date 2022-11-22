const editor = document.getElementById('editor');
const btnBold = document.getElementById('btn-bold');
const btnItalic = document.getElementById('btn-italic');
const btnUnderline = document.getElementById('btn-underline');
const btnStrike = document.getElementById('btn-strike');
const btnOrderedList = document.getElementById('btn-ordered-list');
const btnUnorderedList = document.getElementById('btn-unordered-list');

btnBold.addEventListener('click', function () {
    setStyle('bold');
});

btnUnderline.addEventListener('click', function () {
    setStyle('underline');
});

btnStrike.addEventListener('click', function () {
    setStyle('strikeThrough')
});

function setStyle(style) {
    document.execCommand(style);
    focusEditor();
}

// 버튼 클릭 시 에디터가 포커스를 잃기 때문에 다시 에디터에 포커스를 해줌
function focusEditor() {
    editor.focus({preventScroll: true});
}

editor.addEventListener('keydown', function () {
    checkStyle();
});

editor.addEventListener('mousedown', function () {
    checkStyle();
});

function setStyle(style) {
    document.execCommand(style);
    focusEditor();
    checkStyle();
}