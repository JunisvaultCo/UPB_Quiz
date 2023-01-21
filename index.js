let isAll = false;
let currentTest;

function clear() 
{
    let content = document.getElementById("body");
    while (content.children.length != 1) {
        content.removeChild(content.children[1]);
    }
}

function openTest()
{
    clear();
    let content = document.getElementById("body");
    for (let i = 0; i < tests[currentTest].questions.length; i++) {
        let question = document.createElement('div');
        question.innerHTML = tests[currentTest].questions[i].text;
        question.appendChild(document.createElement("br"));
        if (tests[currentTest].questions[i].img !== undefined) {
            let img = document.createElement("img");
            img.src = tests[currentTest].questions[i].img;
            question.appendChild(img);
            question.appendChild(document.createElement("br"));
        }
        for (let j = 0; j < tests[currentTest].questions[i].options.length; j++) {
            let option = document.createElement("input");
            option.type = "checkbox";
            option.value = i + "_" + j;
            option.id = i + "_" + j;
            question.appendChild(option);
            let label = document.createElement("label");
            label.for = option.id;
            label.innerHTML = tests[currentTest].questions[i].options[j];
            question.appendChild(label);
            question.appendChild(document.createElement("br"));
        }
        content.appendChild(question);
        content.appendChild(document.createElement("br"));
    }
    let btn = document.createElement('input');
    btn.type= 'button';
    btn.id='grade';
    btn.value='Get grade!';

    btn.addEventListener('click', gradeTest);
    content.appendChild(btn);
}

function gradeTest()
{
    let content = document.getElementById("body");
    content.removeChild(document.getElementById("grade"));
    for (let i = 0; i < tests[currentTest].questions.length; i++) {
        
    }
    if (isAll && currentTest !== tests.length - 1) {
        let btn = document.createElement('input');
        btn.type= 'button';
        btn.id='next';
        btn.value='Next';
        currentTest++;
        btn.addEventListener('click', openTest);
        content.appendChild(btn);
        content.appendChild(document.createElement("br"));
    }
    let btn = document.createElement('input');
    btn.type= 'button';
    btn.id='return';
    btn.value='Return';

    btn.addEventListener('click', readTests);
    content.appendChild(btn);
}

function changePage(event)
{
    let id = event.srcElement.id;
    if (id !== "all") {
        if (id.startsWith("Matei: ")) {
            id = id.split("Matei: ")[1];
        }
        isAll = false;
        for (let i = 0; i < tests.length; i++) {
            if (tests[i].name == id) {
                currentTest = i;
                break;
            }
        }
    } else {
        isAll = true;
        currentTest = 0;
    }
    openTest();
}

let tests;

function readTests() {
    clear();
    tests = list.list;

    let content = document.getElementById("body");
    let btn = document.createElement('input');

    btn.type= 'button';
    btn.id='all';
    btn.value='Run All';

    btn.addEventListener('click', changePage);
    content.appendChild(btn);
    content.appendChild(document.createElement("br"));
    for (let i = 0; i < tests.length; i++) {
        
        btn = document.createElement('input');
        btn.type = 'button';
        btn.id = "Matei: " + tests[i].name;
        btn.value = 'Run ' + btn.id;
        btn.addEventListener('click', changePage);
        content.appendChild(btn);
        content.appendChild(document.createElement("br"));
    }
}