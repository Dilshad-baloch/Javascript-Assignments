var username, userEmail, userPassword;

function signUp() {
    username = document.getElementById('NameFormControlInput1').value;
    userEmail = document.getElementById('exampleInputEmail2').value;
    userPassword = document.getElementById('exampleInputPassword2').value;
    localStorage.setItem('user', username);
    localStorage.setItem('email', userEmail);
    localStorage.setItem('password', userPassword);
    Swal.fire({
        icon: "success",
        title: "Done!",
        text: "Sign up Compeleted",
    });
    document.getElementById('NameFormControlInput1').value = '';
    document.getElementById('exampleInputEmail2').value = '';
    document.getElementById('exampleInputPassword2').value = '';
}

var names = document.getElementById('names');
if (names) {
    names.innerHTML = localStorage.getItem('user');
}

function login() {
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var storedPassword = localStorage.getItem('password');
    var storedEmail = localStorage.getItem('email');

    if (email === storedEmail) {
        if (password === storedPassword) {
            window.location.href = 'welcome.html';
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong Password",
            });
            document.getElementById('exampleInputPassword1').value = '';
        }

    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Email",
        });
        document.getElementById('exampleInputEmail1').value = '';
    }
}

var body = document.body;
var switchBtn = document.getElementById('dark');
var ICONS = {
    light: '<i class="fa-regular fa-moon"></i>',
    dark: '<i class="fa-solid fa-moon"></i>'
};

function Dark() {
    if (body.classList.contains('darkMode')) {
        body.classList.remove('darkMode');
        localStorage.setItem('theme', 'light');
        switchBtn.innerHTML = ICONS.light;
    }
    else {
        body.classList.add('darkMode');
        localStorage.setItem('theme', 'dark');
        switchBtn.innerHTML = ICONS.dark;
    }
}

function theme() {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('darkMode');
        switchBtn.innerHTML = ICONS.dark;
    }
    else {
        switchBtn.innerHTML = ICONS.light;
    }
}

window.onload = theme;
//html data 
var htmlCssQuiz = [
    {
        question: "What does HTML stand for?",
        option1: "Hyper Text Markup Language",
        option2: "Home Tool Markup Language",
        option3: "Hyperlinks and Text Markup Language",
        option4: "High-level Text Machine Language",
        answer: "Hyper Text Markup Language",
    },
    {
        question: "Which property in CSS is used to change the background color?",
        option1: "color",
        option2: "background-color",
        option3: "bg-color",
        option4: "background",
        answer: "background-color",
    },
    {
        question: "What is the purpose of the 'box-shadow' property in CSS?",
        option1: "To add shadows around an element",
        option2: "To add borders around an element",
        option3: "To set an element's width",
        option4: "To center an element",
        answer: "To add shadows around an element",
    },
    {
        question: "Which unit is NOT relative in CSS?",
        option1: "em",
        option2: "rem",
        option3: "px",
        option4: "%",
        answer: "px",
    },
    {
        question: "What does the 'overflow' property in CSS control?",
        option1: "How content fits inside a container",
        option2: "Visibility of elements",
        option3: "How content outside a container is handled",
        option4: "How elements float",
        answer: "How content outside a container is handled",
    },
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        option1: "link",
        option2: "a",
        option3: "href",
        option4: "nav",
        answer: "anchor",
    },
    {
        question: "What does the 'z-index' property in CSS control?",
        option1: "Stacking order of elements",
        option2: "Color depth",
        option3: "Opacity of elements",
        option4: "Visibility of elements",
        answer: "Stacking order of elements",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "break",
        option2: "lb",
        option3: "br",
        option4: "hr",
        answer: "br",
    },
    {
        question: "Which attribute is used in HTML to specify an inline CSS style?",
        option1: "class",
        option2: "style",
        option3: "css",
        option4: "id",
        answer: "style",
    },
    {
        question: "What does the <ul> tag in HTML stand for?",
        option1: "Underlined List",
        option2: "Upper Level List",
        option3: "Unordered List",
        option4: "Universal List",
        answer: "Unordered List",
    },
    {
        question: "What is the default position of an HTML element?",
        option1: "absolute",
        option2: "relative",
        option3: "static",
        option4: "fixed",
        answer: "static",
    },
    {
        question: "Which tag is used to define a table in HTML?",
        option1: "tr",
        option2: "td",
        option3: "table",
        option4: "th",
        answer: "table",
    },
    {
        question: "What is the purpose of the <meta> tag in HTML?",
        option1: "Defines metadata about an HTML document",
        option2: "Creates hyperlinks",
        option3: "Adds images to the document",
        option4: "Defines lists",
        answer: "Defines metadata about an HTML document",
    },
    {
        question: "Which CSS property is used to specify the space between letters?",
        option1: "line-height",
        option2: "letter-spacing",
        option3: "text-spacing",
        option4: "font-spacing",
        answer: "letter-spacing",
    },
    {
        question: "Which property is used to create animations in CSS?",
        option1: "transition",
        option2: "transform",
        option3: "animation",
        option4: "keyframes",
        answer: "animation",
    },
];

// js data
var jsQuiz = [
    {
        question: "What keyword is used to declare a variable in JavaScript?",
        option1: "var",
        option2: "let",
        option3: "const",
        option4: "All of the above",
        answer: "All of the above",
    },
    {
        question: "What is the output of `typeof null`?",
        option1: "null",
        option2: "object",
        option3: "undefined",
        option4: "string",
        answer: "object",
    },
    {
        question: "Which method is used to join two or more arrays in JavaScript?",
        option1: "concat()",
        option2: "combine()",
        option3: "join()",
        option4: "merge()",
        answer: "concat()",
    },
    {
        question: "What does the `this` keyword refer to in JavaScript?",
        option1: "Current object",
        option2: "Global object",
        option3: "DOM object",
        option4: "The current function",
        answer: "Current object",
    },
    {
        question: "Which JavaScript method is used to fetch data from an API?",
        option1: "fetch()",
        option2: "getData()",
        option3: "request()",
        option4: "ajax()",
        answer: "fetch()",
    },
    {
        question: "How do you convert a string to an integer in JavaScript?",
        option1: "parseInt()",
        option2: "toInt()",
        option3: "Number()",
        option4: "Both parseInt() and Number()",
        answer: "Both parseInt() and Number()",
    },
    {
        question: "What is the output of `[] + []` in JavaScript?",
        option1: "0",
        option2: "Empty string",
        option3: "NaN",
        option4: "Undefined",
        answer: "Empty string",
    },
    {
        question: "Which event is triggered when a user presses a key on the keyboard?",
        option1: "onpress",
        option2: "onkeydown",
        option3: "onkeypress",
        option4: "onkeyup",
        answer: "onkeydown",
    },
    {
        question: "What does the `reduce()` method do in JavaScript?",
        option1: "Reduces an array size",
        option2: "an accumulator and each element in an array",
        option3: "Sorts an array",
        option4: "Filters elements in an array",
        answer: "an accumulator and each element in an array",
    },
    {
        question: "What is the purpose of the `await` keyword in JavaScript?",
        option1: "To pause a function until a Promise",
        option2: "To catch errors",
        option3: "To create a new Promise",
        option4: "To iterate through an array",
        answer: "To pause a function until a Promise",
    },
];

// Ai & ML data
var aiMlQuiz = [
    {
        question: "What is the meaning of 'Islam'?",
        option1: "Peace",
        option2: "Submission to God",
        option3: "Faith",
        option4: "Pray",
        answer: "Submission to God",
    },
    {
        question: "Who is considered the last Prophet in Islam?",
        option1: "Prophet Ibrahim",
        option2: "Prophet Musa",
        option3: "Prophet Muhammad (PBUH)",
        option4: "Prophet Isa",
        answer: "Prophet Muhammad (PBUH)",
    },
    {
        question: "What is the primary religious text of Islam?",
        option1: "Torah",
        option2: "Bible",
        option3: "Quran",
        option4: "Hadith",
        answer: "Quran",
    },
    {
        question: "What is the name of the holy month of fasting in Islam?",
        option1: "Ramadan",
        option2: "Shawwal",
        option3: "Hajj",
        option4: "Muharram",
        answer: "Ramadan",
    },
    {
        question: "What is the meaning of 'Salah'?",
        option1: "Charity",
        option2: "Pilgrimage",
        option3: "Prayer",
        option4: "Fasting",
        answer: "Prayer",
    },
    {
        question: "What is the term used for Islamic charity?",
        option1: "Zakah",
        option2: "Sadaqah",
        option3: "Hajj",
        option4: "Jihad",
        answer: "Zakah",
    },
    {
        question: "Which one of these is NOT an Islamic pillar?",
        option1: "Shahada",
        option2: "Salah",
        option3: "Hajj",
        option4: "Yoga",
        answer: "Yoga",
    },
    {
        question: "What is the name of the first Islamic month?",
        option1: "Ramadan",
        option2: "Shawwal",
        option3: "Muharram",
        option4: "Rajab",
        answer: "Muharram",
    },
    {
        question: "What is the significance of the Kaaba?",
        option1: "The first mosque",
        option2: "The birthplace of Prophet Muhammad",
        option3: "The house of God",
        option4: "The burial place of the Prophet",
        answer: "The house of God",
    },
    {
        question: "What is the name of the Islamic pilgrimage to Mecca?",
        option1: "Hajj",
        option2: "Umrah",
        option3: "Ziyarat",
        option4: "Fasting",
        answer: "Hajj",
    },
    {
        question: "What does 'Jihad' mean in Islam?",
        option1: "Holy war",
        option2: "Struggle in the way of Allah",
        option3: "A charity act",
        option4: "A pilgrimage",
        answer: "Struggle in the way of Allah",
    },
    {
        question: "What is the name of the Islamic festival that marks the end of Ramadan?",
        option1: "Eid al-Fitr",
        option2: "Eid al-Adha",
        option3: "Mawlid al-Nabi",
        option4: "Lailat al-Miraj",
        answer: "Eid al-Fitr",
    },
    {
        question: "Who is considered the first Caliph of Islam?",
        option1: "Prophet Muhammad (PBUH)",
        option2: "Abu Bakr al-Siddiq",
        option3: "Ali ibn Abi Talib",
        option4: "Umar ibn al-Khattab",
        answer: "Abu Bakr al-Siddiq",
    },
    {
        question: "What is the name of the Islamic prayer that is performed five times a day?",
        option1: "Tahajjud",
        option2: "Fajr",
        option3: "Salah",
        option4: "Duha",
        answer: "Salah",
    },
    {
        question: "What does 'Haram' mean in Islam?",
        option1: "Forbidden",
        option2: "Recommended",
        option3: "Permissible",
        option4: "Obligatory",
        answer: "Forbidden",
    },
];


// Python Data
var pythonQuiz = [
    {
        question: "What does Python primarily emphasize?",
        option1: "Performance",
        option2: "Readability",
        option3: "Compilation",
        option4: "Low-level programming",
        answer: "Readability",
    },
    {
        question: "Which symbol is used for comments in Python?",
        option1: "#",
        option2: "//",
        option3: "/* */",
        option4: "**",
        answer: "#",
    },
    {
        question: "How do you create a dictionary?",
        option1: "[]",
        option2: "{}",
        option3: "()",
        option4: "<>",
        answer: "{}",
    },
    {
        question: "Which keyword defines a function?",
        option1: "def",
        option2: "function",
        option3: "define",
        option4: "create",
        answer: "def",
    },
    {
        question: "What is the correct file extension for Python files?",
        option1: ".python",
        option2: ".py",
        option3: ".pyt",
        option4: ".pt",
        answer: ".py",
    },
    {
        question: "Which operator is used for exponentiation?",
        option1: "**",
        option2: "^",
        option3: "*",
        option4: "exp()",
        answer: "**",
    },
    {
        question: "Which method adds an element to a list?",
        option1: "append()",
        option2: "insert()",
        option3: "add()",
        option4: "push()",
        answer: "append()",
    },
    {
        question: "How do you handle exceptions in Python?",
        option1: "try-except",
        option2: "try-catch",
        option3: "try-finally",
        option4: "try-error",
        answer: "try-except",
    },
    {
        question: "Which loop is used for iteration over sequences?",
        option1: "for",
        option2: "while",
        option3: "foreach",
        option4: "loop",
        answer: "for",
    },
    {
        question: "What does `len()` function return?",
        option1: "Size",
        option2: "Length",
        option3: "Index",
        option4: "Range",
        answer: "Length",
    },
    {
        question: "What is a tuple in Python?",
        option1: "Immutable list",
        option2: "Mutable list",
        option3: "Dynamic object",
        option4: "Custom data type",
        answer: "Immutable list",
    },
    {
        question: "Which keyword is used to import modules?",
        option1: "import",
        option2: "include",
        option3: "require",
        option4: "load",
        answer: "import",
    },
    {
        question: "What is the output of `bool(0)`?",
        option1: "True",
        option2: "False",
        option3: "0",
        option4: "None",
        answer: "False",
    },
    {
        question: "How do you declare a set in Python?",
        option1: "[]",
        option2: "()",
        option3: "{}",
        option4: "set()",
        answer: "set()",
    },
    {
        question: "What does `is` keyword check?",
        option1: "Identity",
        option2: "Equality",
        option3: "Comparison",
        option4: "Index",
        answer: "Identity",
    },
];

var currentQuiz = [];
var count = 0;
var score = 0;
var quizOptions = document.getElementsByName('option');
var quizWin = document.getElementById('quizWindow');
var resultWin = document.getElementById('resultWindow');
var resultQuiz = document.getElementById('resultQuizName');
var noOfQues = document.getElementById('numQues');
var correctAns = document.getElementById('score');
var percentagevalue = document.getElementById('percentage');
var comment = document.getElementById('comment');

var quizType = localStorage.getItem('selectedQuiz');
if (quizType) {
    startQuiz(quizType);
}

function selectQuizType(type) {
    localStorage.setItem('selectedQuiz', type);
}

function startQuiz(type, event) {
    if (type === 'html') {
        currentQuiz = htmlCssQuiz;
    }
    else if (type === 'python') {
        currentQuiz = pythonQuiz;
    }
    else if (type === 'js') {
        currentQuiz = jsQuiz;
    }
    else if (type === 'ai') {
        currentQuiz = aiMlQuiz;
    }
    count = 0;
    score = 0;
    LoadQuestion();
}

function LoadQuestion() {
    var question = document.getElementById('question');
    question.innerHTML = currentQuiz[count].question;

    // Labels
    var label1 = document.getElementById('label1');
    label1.innerHTML = currentQuiz[count].option1;
    var label2 = document.getElementById('label2');
    label2.innerHTML = currentQuiz[count].option2;
    var label3 = document.getElementById('label3');
    label3.innerHTML = currentQuiz[count].option3;
    var label4 = document.getElementById('label4');
    label4.innerHTML = currentQuiz[count].option4;

    // options
    var option1 = document.getElementById('option1');
    option1.value = currentQuiz[count].option1;
    var option2 = document.getElementById('option2');
    option2.value = currentQuiz[count].option2;
    var option3 = document.getElementById('option3');
    option3.value = currentQuiz[count].option3;
    var option4 = document.getElementById('option4');
    option4.value = currentQuiz[count].option4;
}

function next() {
    var radiocheck = false;
    for (var i = 0; i < quizOptions.length; i++) {
        if (quizOptions[i].checked) {
            radiocheck = true;
            if (quizOptions[i].value === currentQuiz[count].answer) {
                score++;
            }
            count++;
            quizOptions[i].checked = false;
            if (count < currentQuiz.length) {
                LoadQuestion();
            }
            else {
                quizWin.style.display = 'none';
                resultWin.style.display = 'block';
                resultQuiz.style.color = 'block';
                resultQuiz.innerHTML = localStorage.getItem('selectedQuiz').toUpperCase() + " Quiz Completed!";
                noOfQues.innerHTML = currentQuiz.length;
                noOfQues.style.color = 'black';
                correctAns.innerHTML = score;
                var percentage = score / currentQuiz.length * 100;
                percentagevalue.innerHTML = Math.round(percentage) + '%';
                if (percentage <= 33) {
                    comment.innerHTML = 'You are Failed!';
                    comment.style.color = 'red';
                    percentagevalue.style.border = '1px solid red';
                }
                if (percentage > 33) {
                    comment.innerHTML = "Congratulations you are pass!";
                    comment.style.color = "green";
                    percentagevalue.style.border = '1px solid green';
                }
                Swal.fire({
                    icon: "success",
                    title: "Done!",
                    text: "Quiz Completed",
                });
                localStorage.removeItem('selectedQuiz');
                currentQuiz = [];
            }
        }
    }
    if (!radiocheck) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Select an option",
        });
    }
}

