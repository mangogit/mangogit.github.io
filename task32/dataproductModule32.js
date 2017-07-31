function Data_product(data_box){
	this.box = data_box;
	this.id = 0;
}
Data_product.prototype = {
	init : function(){
		this.addEvent();
	},
	addEvent : function(){
		on($('#data_create'),'change',this.showTable.bind(this));
		on(this.box.style_box.box,'change',this.setStyle.bind(this));
	},
	showTable : function(e){
		if(e.target.getAttribute('type') === 'radio'){
			e.target.parentNode.className = e.target.id;
			if(!/necessary/.test(e.target.id)){
				this.box.type_name_box.box.value = e.target.nextElementSibling.textContent;
			}
		}
	},
	setStyle : function(){
		var text = this.box.getText(this.box.style_box);
		this.box.result_box.className = text === '样式一' ? 'style1' : 'style2';
	},
	getText : function(data_box){
		return data_box.box[data_box.value];
	},
	getData : function(){
		var data = {
			type_name : '',
			type : '',
			necessary : '',
			input_type : '',
			min_length : '',
			max_length : '',
			validator : function(){},
			default_text : '',
			fail_text : [],
			item : [],
			id : 0,
			success_text : ''

		};
		data = this.getBaseData(data);
		switch(data.type){
			case 'textarea':
			console.log('aaa');
			data = this.getLengthRelativeData(data);
			break;
			case 'input' :
			console.log(data.input_type); 
			switch(data.input_type){
				case 'text' :
				case 'password' :
				data = this.getLengthRelativeData(data);
				break;
				case 'number' :
				case 'email' :
				case 'phone' :
				console.log('aaa');
				data = this.getInputRelativeData(data);
				break;
			}
			break;
			case 'checkbox' : 
			case 'select' :
			case 'radio' :
			data = this.getSpecialRelativeData(data);
			break;
		}
		console.log(data.default_text);
		return data;
	},
	getBaseData : function(data){
		data.type_name = this.getText(this.box.type_name_box);
		data.type = this.getText(this.box.type_box);
		data.necessary = this.getText(this.box.necessary_box) === 'necessary';
		data.input_type = this.getText(this.box.input_type_box);
		data.id = 'form' + this.id++;
		return data;

	},
	getLengthRelativeData : function(data){
		data.min_length =  this.getText(this.box.min_length_box);
		data.max_length = this.getText(this.box.max_length_box);
		data.fail_text = [
			data.type_name + '不能为空',
			data.type_name + '长度不能小于' + data.min_length,
			data.type_name + '长度不能大于' + data.max_length
		];
		data.success_text = data.type_name + '格式正确';
		data.default_text = (data.necessary ? '必填' : '选填') + ',长度为' + data.min_length + '-' + data.max_length + '个字符';
		data.validator = validator.length_control;
		return data;
	},
	getInputRelativeData : function(data){
		data.input_type = this.getText(this.box.input_type_box);
		data.fail_text = [
			data.type_name + '不能为空',
			data.type_name + '格式不正确'
		];
		data.success_text = data.type_name + '格式正确';
		data.default_text = (data.necessary ? '必填' : '选填') + ',请输入您的' + data.type_name;
		data.validator = validator[data.input_type];
		console.log(data.default_text);
		return data;
	},
	getSpecialRelativeData : function(data){
		var items = this.box.item_box[2];
		data.item = [];
		for(var i = 0 ; i < items.length ; i++){
			console.log(items[i].childNodes[1].nodeValue);
			data.item.push(items[i].childNodes[1].nodeValue);
		}
		if(data.item.length === 0){
			alert('你还没有添加' + data.type_name + '的选项');
		} else if(data.item.length === 1){
			alert('至少需要两项' + data.type_name + '才能创建');
		} else {
			data.default_text = (data.necessary ? '必填' : '选填') + ',请选择您的' + data.type_name;
			data.fail_text = [data.type_name + '未选择'];
			data.success_text = data.type_name + '已选择';
			data.validator = validator[data.type];
		}
			return data;
		},
		addForm : function(data){
			switch(data.type){
				case 'input' :
				this.addInputForm(data);
				break;
				case 'radio' :
				this.addRadioForm(data);
				break;
				case 'checkbox' :
				this.addCheckboxForm(data);
				break;
				case 'textarea' : 
				this.addTextareaForm(data);
				break;
				case 'select' : 
				this.addSelectForm(data);
				break;
			}
		},
		addInputForm : function(data){
			var box = document.createElement('div');
			box.innerHTML = '<label>' + data.type_name + '</label><input type="' + data.input_type + '" id="' + data.id + '"><span></span>';
			this.box.result_box.insertBefore(box,this.box.submit_form);
		},
		addTextareaForm : function(data){
			var box = document.createElement('div');
			box.innerHTML = '<label>' + data.type_name + '</label><input type="' + data.input_type + '" id="' + data.id + '"><span></span>';
			this.box.result_box.insertBefore(box,this.box.submit_form);
		},
		addCheckboxForm : function(data){
			var box = document.createElement('div')
			text = '';
			box.className = 'radio_box';
			text += '<div id="' + data.id + '"><label>' + data.type_name + '</label>';
			for(var i = 0 ; i < data.item.length ; i++){
				var id = data.id + '' + i;
				text += '<input type="checkbox" id="' + id + '" name="' + data.id + '"><label for="' + id + '">' + data.item[i] + '</label';
			}
			text += '</div><span></span>';
			box.innerHTML = text;
			this.box.result_box.insertBefore(box,this.box.submit_form);
		},
		addRadioForm : function(data){
			var box = document.createElement('div'),
			text = '';
			box.className = 'radio_box';
			text += '<div id="' + data.id + '"><label>' + data.type_name + '</label>';
			for(var i = 0 ; i < data.item.length ; i++){
				var id = data.id + '' + i ;
				text += '<input type="radio" id="' + id + '" name="' + data.id + '"><label for="' + id + '">' + data.item[i] + '</label>';
			}
			text += '</div><span></span>';
			box.innerHTML = text;
			this.box.result_box.insertBefore(box,this.box.submit_form);
		},
		addSelectForm : function(data){
			var box = document.createElement('div'),
			text = '';
			box.className = 'radio_box';
			text += '<div id="' + data.id + '"><label>' + data.type_name + '</label>';
			for(var i = 0; i < data.item.length ; i++){
				var id = data.id + '' + i ;
				text += '<input type="select" id="' + id + '" name="' + data.id + '"><label for="' + data.id + '">' + data.item[i] + '</label>';
			}
			text += '</div><span></span>';
			box.innerHTML = text;
			this.box.result_box.insertBefore(box,this.box.submit_form);
		}
};