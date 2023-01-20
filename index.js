
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

let content = document.getElementById("body");
let btn = document.createElement('input');

btn.type= 'button';
btn.id='all';
btn.value='Run All';

btn.addEventListener('click', function(e)
{
});
content.insertBefore(btn,content.childNodes[0]);
let lastBtn = btn;
for (let i = 0; i < tests.length; i++) {
    
    btn = document.createElement('input');
    btn.type= 'button';
    btn.id=tests[i].name;
    btn.value='Run ' + btn.id;
    content.insertAfter(btn, lastBtn);
}