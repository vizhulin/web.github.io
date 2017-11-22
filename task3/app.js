$(document).ready(function()
{
	$("#root").append("<ul><li></li></ul>");
	$("li").append("<span>Сделать задание #3 по web-программированию</span>");
	$("li").append("<button>Удалить</button>").click(function()
	{
		$(this).remove();
	});
	$("#root").append("<input id='add_task_input'>");
	$("#root").append("<button id='add_task'></button>");
	var i = 0;
	$("#add_task").click(function()
	{
		++i;
		var newstr = $("input").val();
		$("ul").append($("<li><span></span></li>").attr("id", i));
		$("#" + i).text(newstr);
		$("#" + i).append("<button>Удалить</button>").click(function()
		{
			$(this).remove();
		})
	});
});
