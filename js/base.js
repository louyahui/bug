//分号的作用是代码压缩有，引入其他JS库
;
(function(){
	'use strict';
	var $form_add_task = $('.add-task'),
	new_task={},
	task_list={};
	
	$form_add_task.on('submit',function(e) {
		/*禁用默认行为*/
		e.preventDefault();
		/*获取新TASK的值*/
		new_task.content = $(this).find('input[name=content]').val();
        
		//if (!new_task.content) return;
	
		console.log('newstask',new_task);
		//存入新TASK
		add_task(new_task);
		
	})
	function add_task(new_task) {
		//将新的TASK推入task_list
		task_list.push(new_task);
		//更新loaclStorage
		store.set('task_list',task_list);
		console.log('task_list',task_list);
		
	}
	function init () {
		task_list = store.get('task_list') || [];
	}
	function render_task_list () {
		var $task_list = $('.task-list');
		for (var i=0;i<task_list.length;i++) {
			var $task = render_task_tpl(task_list[i]);
			$task_list.append($task);
		}
	}
	function render_task_tpl (data) {
		var list_item_tpl='<div class="task-item">'+'
					<span>'+' <input type="checkbox" /></span>'
					 +
					 '<span class="task_content">+data.content+</span>'+
					 '<span>删除</span>'+
					 '<span>详情</span>'+
					 '</div>';
					 return $(list_item_tpl);
	}
})();
