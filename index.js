let isAll = false;
let currentTest;
let correct = 0;
let soFar = 0;

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
    soFar += tests[currentTest].questions.length;
    let content = document.getElementById("body");
    for (let i = 0; i < tests[currentTest].questions.length; i++) {
        let question = document.createElement('div');
        question.id = "question" + i;
        question.innerHTML = tests[currentTest].questions[i].text;
        question.appendChild(document.createElement("br"));
        if (tests[currentTest].questions[i].img !== undefined) {
            let img = document.createElement("img");
            img.src = tests[currentTest].questions[i].img;
            question.appendChild(img);
            question.appendChild(document.createElement("br"));
        }
        if (tests[currentTest].questions[i].isField === undefined
            || !tests[currentTest].questions[i].isField) {
            for (let j = 0; j < tests[currentTest].questions[i].options.length; j++) {
                let option = document.createElement("input");
                option.type = "checkbox";
                option.value = i + "_" + j;
                option.id = i + "_" + j;
                question.appendChild(option);
                let label = document.createElement("label");
                label.for = option.id;
                label.id = "l_" + option.id;
                label.innerHTML = tests[currentTest].questions[i].options[j];
                question.appendChild(label);
                question.appendChild(document.createElement("br"));
            }
        } else {
            let option = document.createElement("input");
            option.type = "text";
            option.id = "t_" + i;
            question.appendChild(option);
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
    let toDelete = document.getElementsByClassName("delete");
    for (let i = 0; i < toDelete.length; i++)
        toDelete[i].parentElement.removeChild(toDelete[i]);
    let thisRoundCorrect = 0;
    for (let i = 0; i < tests[currentTest].questions.length; i++) {
        let questionEle = document.getElementById("question" + i);
        let correctness = document.createElement("div");
        correctness.innerHTML = "Incorrect!";
        correctness.style.backgroundColor = "red";
        correctness.className = "delete";
        if (tests[currentTest].questions[i].isField !== undefined &&
            tests[currentTest].questions[i].isField) {
            let ele = document.getElementById("t_" + i);
            let value = ele.value;
            let allowedChars = tests[currentTest].questions[i].allowed;
            for (let i = 0; i < value.length; i++) {
                if (allowedChars.find(f => f[0] == value[i]) !== value[i]) {
                    correctness.innerHTML = "Expresia contine litera ilegala!";
                    questionEle.appendChild(correctness);
                    return;
                }
            }
        }
    }
    for (let i = 0; i < tests[currentTest].questions.length; i++) {
        let correctness = document.createElement("div");
        correctness.innerHTML = "Incorrect!";
        correctness.style.backgroundColor = "red";
        correctness.className = "delete";
        
        let questionEle = document.getElementById("question" + i);
        if (tests[currentTest].questions[i].isField !== undefined &&
                tests[currentTest].questions[i].isField) {
            let ele = document.getElementById("t_" + i);
            let value = ele.value;
            let allowedChars = tests[currentTest].questions[i].allowed;
            for (let i = 0; i < value.length; i++) {
                if (allowedChars.find(f => f[0] == value[i]) !== value[i]) {
                    correctness.innerHTML = "Expresia contine litera ilegala!";
                    questionEle.appendChild(correctness);
                    return;
                }
            }
    //        let result = verifyRegex(value, tests[currentTest].questions[i].correctSuggestion);
            if (tests[currentTest].questions[i].correct.find(f => f === value) === value)
            {
                thisRoundCorrect++;
                correctness.style.backgroundColor = "green";
                correctness.innerHTML = "Correct!";
            } else {
                correctness.innerHTML = "Incorrect! Suggestions:<br>";
                for (let j = 0; j < tests[currentTest].questions[i].correct.length; j++) {
                    correctness.innerHTML += tests[currentTest].questions[i].correct[j] + "<br>";
                }
            }
        } else {
            let correctInQuestion = 0;
            for (let j = 0; j < tests[currentTest].questions[i].options.length; j++) {
                let option = tests[currentTest].questions[i].options[j];
                let shouldBeChecked = tests[currentTest].questions[i].correct.find((v) => v === option) !== undefined;
                let optionEle = document.getElementById(i + "_" + j);
                let labelEle = document.getElementById("l_" + i + "_" + j);
                if (shouldBeChecked) {
                    labelEle.style.backgroundColor = "green";
                } else {
                    labelEle.style.backgroundColor = "red";
                }
                if (shouldBeChecked == optionEle.checked)
                    correctInQuestion++;
            }
            if (correctInQuestion == tests[currentTest].questions[i].options.length) {
                thisRoundCorrect++;
                correctness.style.backgroundColor = "green";
                correctness.innerHTML = "Correct!";
            }
        }
        questionEle.appendChild(correctness);
    }
    correct += thisRoundCorrect;
    content.removeChild(document.getElementById("grade"));
    let soFarDiv = document.createElement("div");
    if (isAll)
        soFarDiv.innerHTML = "So far: " + correct + " / " + soFar;
    else
        soFarDiv.innerHTML = "Test result: " + correct + " / " + soFar;
    content.appendChild(soFarDiv);
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
    correct = 0;
    soFar = 0;
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