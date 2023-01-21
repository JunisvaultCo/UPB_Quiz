
function changePage(btn)
{
    console.log(btn);
}

let tests;
let xhr = new XMLHttpRequest();
xhr.open('GET', 'list.json', true);
xhr.onreadystatechange = function()
{
    if (xhr.readyState === 4)
    {
        tests = JSON.parse(xhr.responseText).list;
    }
};
xhr.send();
console.log(tests);

let content = document.getElementsByTagName("body")[0];
let btn = document.createElement('input');

btn.type= 'button';
btn.id='all';
btn.value='Run All';

btn.addEventListener('click', changePage);
content.insertBefore(btn,content.childNodes[0]);
let lastBtn = btn;
for (let i = 0; i < tests.length; i++) {
    
    btn = document.createElement('input');
    btn.type= 'button';
    btn.id=tests[i].name;
    btn.value='Run ' + btn.id;
    btn.addEventListener('click', changePage);
    content.insertAfter(btn, lastBtn);
}