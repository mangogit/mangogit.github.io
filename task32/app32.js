var data_box = {
    style_box: {
        box: $('#select_box'),
        value: 'value'
    },
    type_box: {
        box: $('#type_box'),
        value: 'className'
    },
    type_name_box: {
        box: $('#type_name'),
        value: 'value'
    },
    input_type_box: {
        box: $('#rule_input'),       //input类型的规则（邮箱，号码，数字，文本，密码）
        value: 'className'
    },
    necessary_box: {
        box: $('#basic_box'),
        value: 'className'
    },
    item_box: [
        $('#item_box_input'),
        $('#item_box_show'),
        document.getElementsByClassName('item')
    ],
    min_length_box: {
        box: $('#min_length'),
        value: 'value'
    },
    max_length_box: {
        box: $('#max_length'),
        value: 'value'
    },
    add_btn: $('#add_btn'),
    result_box: $('#result'),
    submit_form: $('#submit_form')
}
var validator = {
    'length_control': function() {
        var min_length = this.data.min_length,
            max_length = this.data.max_length,
            text = this.ipt.value;
        if (text === '') {
            if (this.data.necessary){
                this.error_tip(0);
            }
            else {
                this.default_tip();
                return true;
            }
        } else {
            var total = (/[\x00-\xff]/.test(text) ? text.match(/[\x00-\xff]/g).length : 0) + (/[^\x00-\xff]/.test(text) ? text.match(/[^\x00-\xff]/g).length * 2 : 0);
            if (total < min_length) {
                this.error_tip(1);
            } else if (total > max_length) {
                this.error_tip(2);
            } else {
                this.true_tip();
                return true;
            }
        }
        return false;
    },
    'number': function() {
        var text = this.ipt.value;
        if (text === '') {
            if (this.data.necessary)
                this.error_tip(0);
            else {
                this.default_tip();
                return true;
            }
        } else {
            if (/^\d*$/.test(text)) {
                this.true_tip();
                return true;
            } else {
                this.error_tip(1);
            }
        }
        return false;
    },
    'email': function() {
        var text = this.ipt.value;
        if (text === '') {
            if (this.data.necessary)
                this.error_tip(0);
            else {
                this.default_tip();
                return true;
            }
        } else {
            if (/^[0-9a-z]+([._\\-]*[a-z0-9])@([a-z0-9]+[a-z0-9]+.){1,63}[a-z0-9]+$/.test(text)) {
                this.true_tip();
                return true;
            } else {
                this.error_tip(1);
            }
        }
        return false;
    },
    'phone': function() {
        var text = this.ipt.value;
        if (text === '') {
            if (this.data.necessary) {
                this.error_tip(0);
            } else {
                this.default_tip();
                return true;
            }
        } else {
            if (/\d{11}/.test(text)) {
                this.true_tip();
                return true;
            } else {
                this.error_tip(1);
            }
        }
        return false;
    },
    'radio': function() {
        var item = $('#' + this.data.id).getElementsByTagName('input');
        for (var i = 0; i < item.length; i++) {
            if (item[i].checked) {
                this.true_tip();
                return true;
            }
        }
        if (this.data.necessary) {
            this.error_tip(0);
        } else {
            this.default_tip();
            return true;
        }
        return false;
    },
    'checkbox': function(){
    	var children = this.ipt.children;
    	for(var i in children){
    		if(children[i].checked){
    			this.true_tip();
    			return true;
    		}
    	}
    	if(this.data.necessary){
    		this.error_tip(0);
    	} else {
    		this.default_tip();
    		return true;
    	}
    	return false;
    },
    'select' : function(){
    	this.true_tip();
    	return true;
    }
};
var data_product = new Data_product(data_box),
    tagipt = new TagIpt(data_box.item_box[0], data_box.item_box[1], 100),
    formArr = [];
data_product.init();
tagipt.init();
//为add按钮绑定事件
on(data_product.box.add_btn, 'click', function() {
    var data = data_product.getData();
    console.log(validator);
    if (data !== null) {
        data_product.addForm(data);
        console.log(data);
        formArr.push(new Form(data));
        if (data.type === 'radio' || data.type === 'checkbox') {
            formArr[formArr.length - 1].default_tip;
        }
    }
});
//为提交按钮绑定事件
on(data_product.box.submit_form, 'click', function() {
    var text = '';
    for (var i = 0; i < formArr.length; i++) {
    	console.log(formArr[i].tip.textContent);
        text += !formArr[i].validator() ? formArr[i].tip.textContent + '\n' : '';
    }
    text === '' ? alert('提交成功') : alert(text);
});

function $(selector) {
    return document.querySelector(selector);
}

function on(element, eventName, listener) {
    if (element.addEventListener) {
        element.addEventListener(eventName, listener, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, listener);
    } else {
        element['on' + eventName] = listener;
    }
}
