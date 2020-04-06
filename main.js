"use strict"

//Homework 6

//CRUD на тегах, стилях, атрибутах



//create tag

function createTag(newTag, parentElement) {
    let newElement = document.createElement(newTag);
    parentElement.append(newElement);

}
createTag("a", document.querySelector('h1'));

//read tag

function readTag(nameOfClass) {
    return nameOfClass.tagName;
}
alert(readTag(document.querySelector(".greating")));

// update tag
let parentP = document.querySelector(".parent_p");
let firstP = document.querySelector(".first");
let secondP = document.querySelector(".second");

parentP.prepend(secondP);

//delete tag

function deleteTag(tagToDelete) {
    tagToDelete.remove();

}
deleteTag(document.querySelector("a"));

//style

//add

parentP.style.cssText = `color: blue;
font-size: 30px;
 font-weight: 700;
`;

//read
let getStyle = window.getComputedStyle(parentP).getPropertyValue('font-size');
console.log("font-size = " + getStyle);

//delete
parentP.style.cssText = " ";


//attribute

//create
parentP.setAttribute("id", "paragraph");

//read
let ValueOfAttribute = parentP.getAttribute('id');
console.log("A value of the id is " + ValueOfAttribute);

//update
parentP.setAttribute("style", "color: green;");

//delete 
parentP.removeAttribute('style');

//Получить первый  дочерний элемент

let parentUl = document.querySelector(".parent_ul");
let UlFirstChild = parentUl.firstElementChild;
console.log(UlFirstChild.innerHTML);

//Получить последний  дочерний элемент
let UlLastChild = parentUl.lastElementChild;
console.log(UlLastChild.innerHTML);

//Получить родителя 
let childLi = document.querySelector('.child');

let parentOfChild = childLi.parentNode;
console.log(parentOfChild.textContent);


//Дан элемент #elem. Добавьте ему класс www.
let elem = document.querySelector("#elem");
elem.classList.add("www");

//Дан элемент #elem. Удалите у него класс www.
elem.classList.remove("www");

//Дан элемент #elem. Проверьте наличие у него класса www.
let present = elem.classList.contains('www');
console.log(present);

//Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
elem.classList.toggle('www');

//Дан элемент #elem. Узнайте количество его классов.
let amount = elem.classList.length;
console.log(amount);


//Дан элемент #elem. Выведите последовательно алертом его классы.
for (var i = 0, length = elem.classList.length; i < length; i++) {
    alert(elem.classList[i]);
}

//Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. 
elem.style.cssText = 'color: red; font-size: 30px; border: dotted blue 3px;';

//Дан элемент #elem. По клику на него выведите название его тега.
elem.onclick = function () {
    alert(elem.tagName);
}

//Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.
elem.onclick = function () {
    alert(elem.tagName.toLowerCase());
}

// Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.
var elements = document.querySelectorAll('.www');
for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = elements[i].innerHTML + " " + elements[i].tagName.toLowerCase();

};

// Дан ol. Вставьте ему в конец li с текстом 'пункт'.

let parent = document.querySelector("ol");
let li = document.createElement("li");
li.innerHTML = "пункт";
parent.appendChild(li);

//Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.

let arrayLi = [1, 2, 3, 4, 5];

let ul = document.querySelector('ul');
// for (let i = 0; i < arrayLi.length; i++) {
//     let li = document.createElement("li");
//     li.innerHTML = arrayLi[i];
//     ul.appendChild(li);
// }

// Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы к вставляемым li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.

for (let i = 0; i < arrayLi.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = arrayLi[i];

    li.addEventListener('click', function () {
        alert(this.innerHTML);
    });

    ul.appendChild(li);
}

//Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.

// let elen = document.querySelector("#elen");
// let newLi = document.createElement("li");
// newLi.innerHTML = "!!!";
// ul.insertBefore(newLi, elen);


//Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.
elem.insertAdjacentHTML('beforeBegin', '<span>!!!</span>');

//Дан элемент #elem. Вставьте после него span с текстом '!!!'.
elem.insertAdjacentHTML('afterEnd', '<span>!!!</span>');

//Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.

elem.insertAdjacentHTML('afterBegin', '<span>!!!</span>');

// Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.
elem.insertAdjacentHTML('beforeEnd', '<span>!!!</span>');



//Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.

let firstChild = elem.firstElementChild;

firstChild.style.color = "blue";

//Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

let lastChild = elem.lastElementChild;

lastChild.style.color = "green";

// Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

let children = elem.children;

for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = children[i].innerHTML + '!';
};

//Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.

let siblingUp = elem.previousElementSibling;
siblingUp.innerHTML += "!";

//Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.

let siblingDown = elem.nextElementSibling;
siblingDown.innerHTML += "!";

//Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет

elem.parentElement.style.color = "red";

//Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.

let parent1 = elem.parentElement;

parent1.parentElement.style.color = "red";

//Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.

let parent2 = document.querySelector("#parent");
let child = document.querySelector("#child");


document.getElementById("btn").onclick = function () {
    parent2.removeChild(child);
}

//Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.
let ol = document.querySelector("ol");

document.getElementById("btn").onclick = function () {
    let lastChildOfOl = ol.lastElementChild;
    ol.removeChild(lastChildOfOl);
}

//Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.

let remove = document.querySelector("#remove");

document.getElementById("remove").onclick = function () {
    ul.removeChild(remove);
}

//Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.

let elemList = ol.children;
for (let i = 0; i < elemList.length; i++) {
    elemList[i].addEventListener('click', function () {
        this.parentElement.removeChild(this);
    });
}
//Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

let input = document.querySelector("input");
document.getElementById("form_btn").onclick = function () {
    input.parentElement.appendChild(input.cloneNode(false));
}

//Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.

let array = ["понедельник", "вторник", "среда", "четверг", "пятница"];

let ulItem = document.createElement("ul");

for (let i = 0; i < array.length; i++) {
    let liItem = document.createElement("li");
    liItem.innerHTML = array[i];
    ulItem.appendChild(liItem);
}

document.body.appendChild(ulItem);

// Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.

let inputText = document.querySelector('input[type="text"]');

document.getElementById('input_btn').onclick = function () {
    let newInputText = inputText.cloneNode(true);
    inputText.parentElement.insertBefore(newInputText, inputText);
}


// Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.

let button = document.getElementById('input_btn');


inputText.addEventListener('blur', function () {
    let arr = inputText.value.split('');
    for (let i = 0; i < arr.length; i++) {
        let input = document.createElement('input');
        input.value = arr[i];
        document.body.appendChild(input);
    }
    inputText.value = null;
})

//Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.


document.getElementById("hidden").onclick = function () {
    document.getElementById("hidden").parentElement.style.cssText = "display: none";
}

//Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы. 
document.getElementById("border_button").onclick = function () {
    console.log(document.getElementById("element").clientTop);
};

// Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его левой границы

document.getElementById("border_button").onclick = function () {
    console.log(document.getElementById("element").clientLeft);
};

//Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding

document.getElementById("input_btn").onclick = function () {
    console.log(document.getElementById("element").offsetWidth);
};

// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту с учетом границы и padding.

document.getElementById("input_btn").onclick = function () {
    console.log(document.getElementById("element").offsetHeight);
};

// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину без учета границы, но с padding.
document.getElementById("input_btn").onclick = function () {
    console.log(document.getElementById("element").clientWidth);
};

// Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту без учета границы, но с padding
document.getElementById("input_btn").onclick = function () {
    console.log(document.getElementById("element").clientHeight);
};

//Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding.

let element = document.querySelector("#element");
let style = getComputedStyle(element);

console.log("width: " + style.width);
console.log("height: " + style.height);

//Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен сверху

document.getElementById("border_button").onclick = function () {
    alert(element.scrollTop);
};

//Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен слева

document.getElementById("border_button").onclick = function () {
    alert(element.scrollLeft);
};

//Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px сверху. 

document.getElementById("border_button").onclick = function () {
    element.scrollTop = 100;
};

// Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента.
document.getElementById("border_button").onclick = function () {
    element.scrollTop += 100;
};

//Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по вертикали

document.getElementById("border_button").onclick = function () {
    console.log(pageYOffset);
};

//Дана страница с горизонтальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали.

document.getElementById("border_button").onclick = function () {
    console.log(pageXOffset);
};

//Дана страница с горизонтальной и вертикальной полосами прокрутки. По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху. 

document.getElementById("border_button").onclick = function () {
    window.scrollTo(300, 500);
};

//

document.getElementById("border_button").onclick = function () {
    window.scrollBy(0, 300);
};

//По нажатию на кнопку прокрутите страницу до самого низа
document.getElementById("border_button").onclick = function () {
    window.scrollTo(0, document.body.clientHeight);
};

//По нажатию на кнопку прокрутите страницу до самого низа
document.getElementById("border_button").onclick = function () {
    window.scrollBy(0, 400);
}

//По нажатию на кнопку проверьте, прокручена ли страница до самого низа. Если это так - прокрутите ее в положение 100px от верхнего края. 

document.getElementById("border_button").onclick = function () {
    let body = document.documentElement;
    if (body.scrollHeight - body.scrollTop == body.clientHeight) {
        window.scrollTo(0, 100);
    }
}

//Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза

document.getElementById("element").onclick = function () {
    let oldWidth = this.offsetWidth;
    let oldHeight = this.offsetHeight;
    this.style.width = oldWidth * 2 + 'px';
    this.style.height = oldHeight * 2 + 'px';
}

//Дана кнопка. По нажатию на эту кнопку выведите высоту окна браузера.

document.getElementById("border_button").onclick = function () {
    alert(document.documentElement.clientHeight)
}

// Дана кнопка. По нажатию на эту кнопку прокрутите окно браузера до самого низа. 

document.getElementById("border_button").onclick = function () {
    window.scrollBy(0, document.body.clientHeight);
}

//Дана кнопка. По нажатию на эту кнопку узнайте, есть ли у окна браузера вертикальная прокрутка.

document.getElementById("border_button").onclick = function () {
    console.log(window.pageYOffset);
}

//Реализуйте функцию prettify, которая находит текст (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф

function prettifyDivById(tagId) {
    let div = document.getElementById(tagId);
    let p = document.createElement("p");
    let text = div.innerHTML;
    p.innerHTML = text;
    div.innerHTML = '';
    div.appendChild(p);
}

prettifyDivById("div");

//Реализуйте функцию normalize, которая нормализует имена классов для всех элементов на странице. В данном случае это означает что происходит преобразование всех классов написанных используя kebab нотацию в camelCase нотацию: text-center => textCenter

function Normalize() {
    let elemList = document.querySelectorAll('*');
    for (let i = 0; i < elemList.length; i++) {
        if (elemList[i].className) {
            let arr = elemList[i].className.split('-');
            let capital = arr.map(function (item, index) {
                if (index)
                    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
                else
                    return item
            });
            elemList[i].className = capital.join("");

        }
    }
}

Normalize();


//Динамический список покупок

let addButton = document.getElementById('add_btn');
let ulElem = document.querySelector('#product');
let inputElem = document.querySelector('#item');


addButton.onclick = function () {
    let userItem = inputElem.value;
    inputElem.value = '';

    let liElem = document.createElement('li');
    let spanElem = document.createElement('span');
    let deleteButton = document.createElement('button');

    liElem.appendChild(spanElem);
    spanElem.textContent = userItem;
    liElem.appendChild(deleteButton);
    deleteButton.textContent = "Delete";
    ulElem.appendChild(liElem);

    deleteButton.onclick = function () {
        ulElem.removeChild(liElem);
    }

    inputElem.focus();
}