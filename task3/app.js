function add(text) {
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.innerHTML = text;
    li.appendChild(span);
    var button1 = document.createElement("button");
    button1.innerHTML = "Удалить";
    button1.addEventListener("click",  function(){ li.remove()});

    li.appendChild(button1);
    ul.appendChild(li);
}

var div = document.getElementById("root");
var ul = document.createElement('ul');
div.appendChild(ul);

add("Сделать задание #3 по web-программированию");

var input = document.createElement("input");
input.id = "add_task_input";

var button2 = document.createElement("button");
button2.innerHTML = "add_task";
button2.id = "add_task";
button2.addEventListener("click", function(){add(input.value)});
div.appendChild(input);
div.appendChild(button2);
