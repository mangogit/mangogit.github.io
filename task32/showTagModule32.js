function ShowTag(ipt,box){
	this.box = box;
	this.ipt = ipt;
	this.length = 100;
	this.arr = [];
}
ShowTag.prototype = {
	add : function(){
		var str = this.ipt.value.split(/,，\n\t/);
		for(var i = 0 ; i < str.length ; i++){
			var item = str[i];
			if(item === ''){}
			else {
				this.arr.push(item);
			}
		}
		this.trim();
		return this;
	},
	trim : function(){
		var i = 0,j = 0;
		for(; i < this.arr.length ; i++){
			for(j = i + 1; j < this.arr.length ; j++){
				if(this.arr[i] === this.arr[j]){
					this.arr.splice(j,1);
					j--;
				}
			}
		}
		while(this.arr.length > this.length){
			this.arr.shift();
		}
		this.show();
		return this;
	},
	show : function(){
		var text = '';
		for(var index = 0; index < this.arr.length ; index++){
			text += '<div data_num="' + index +'" class="item"' + '><span>点击删除</span>' + this.arr[index] + '</div>';
		}
		this.box.innerHTML = text;
		return this;
	},
	deleteEvent : function(e){
		var item = e.target.className === 'item' ? e.target : e.target.parentNode.className ==='item' ? e.target.parentNode : null;
		if(item === null){
			return 0;
		} else{
			this.arr.splice(item.getAttribute('data_num'),1);
			this.show();
		}
	},
	getData : function(){
		return this.arr;
	}
};
function TagIpt(tag_ipt,tag_box){
		ShowTag.call(this,tag_ipt,tag_box);
}
TagIpt.prototype = Object.create(ShowTag.prototype);
TagIpt.prototype.init = function(){
	on(this.box,'click',this.deleteEvent.bind(this));
	on(this.ipt,'keyup',this.keyUp.bind(this));
	on(this.ipt,'keydown',this.preventDefault);
};
TagIpt.prototype.keyUp = function(e){
	if(e.keyCode === 188 || e.keyCode === 32 || e.keyCode === '13'){
		this.add();
		this.ipt.value = '';
	}
};
TagIpt.prototype.keydown = function(e){
	if(e.keyCode === '13'){
		e.preventDefault ? e.preventDefault() : e.returnValue = false; 
	}
};