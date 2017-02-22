//分号的作用是代码压缩有，引入其他JS库
;
(function(){
	'use strict';
	var $form_add_task = $('.add-task'),
	new_task={},
	task_list={};
	$form_add_task.on('submit',function(e) {
		e.preventDefault();
		new_task.content = $('.add-task').find('input[name=content]').val();
        
		if (!new_task.content) return;
	
		console.log('newstask',new_task.content);
	})
	
})();
