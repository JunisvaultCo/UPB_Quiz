
let tests;
let xhr = new XMLHttpRequest();
xhr.open('GET', 'list.json', true);
xhr.onreadystatechange = function()
{
    if (xhr.readyState === 4)
    {
        var tests = JSON.parse(xhr.responseText);
    }
};
xhr.send();
console.log(tests);