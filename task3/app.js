$(function() {
    var list = $('<ul>');
    var element = $('<li>');
    element.make_line('Сделать задание #3 по web-программированию');
    var input_line = $('<input>').attr({type: 'text', id: 'add_task_input'});
    var add_button = $('<button>').attr({id: 'add_task'});
    add_button.text('Добавить');
    $(add_button).click(function() {
        var add_line = $('<li>');
        add_line.make_line($('#add_task_input').val());
        list.append(add_line);
    });
    list.append(element);
    $('#root').append(list);    
    $('#root').append(input_line);
    $('#root').append(add_button);
});

$.fn.make_line = function(text){
    this.append($('<span>').text(text));
    var delete_button = $('<button>').text('Удалить');
    $(delete_button).click(function(){
        $(this).closest('li').remove();
    });
    this.append(delete_button);
};
