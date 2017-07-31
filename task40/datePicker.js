var DatePicker = function(container) {
    this.container = container;
    this.date = new Date();
    this.mainEle = null;
    this.selectedEle = null;
    this.init();
};
DatePicker.prototype = {
    days: ["日", "一", "二", "三", "四", "五", "六"],
    init: function() {
        this.mainEle = $('<div>')
            .css('width', '350px')
            .css('height', '400px')
            .css('border', '1px solid lightgray')
            .css('font-family', '微软雅黑')
            .appendTo(this.container);

        var p = $('<p>')
            .css('text-align', 'center')
            .css('margin', '0')
            .css('padding', '5px')
            .css("background", 'rgb(200,27,1)')
            .css('color', 'white')
            .appendTo(this.mainEle);

        var title = $('<strong>').addClass('title').appendTo(p);

        var self = this;

        var arrLeft = $('<strong')
            .html('<-')
            .css('float', 'left')
            .css('cursor', 'pointer')
            .appendTo(p)
            .click(function() {
                self.preMonth();
            });

        var arrRight = $('<strong>')
            .html('->')
            .css('float', 'right')
            .css('cursor', 'pointer')
            .appendTo(p)
            .click(function() {
                self.nextMonth();
            });

        function createEle() {
            var ele = $('<span>')
                .css('text-align', 'center')
                .css('display', 'inline-block')
                .css('width', '50px')
                .css('height', '50px')
                .css('line-height', '50px');
            return ele;
        }
        for (var i = 0; i < 7; i++) {
            var el = createEle().html(this.day[i]).appendTo(this.mainEle);
            if (i === 0 || i === 6) {
                el.css('color', 'rgb(200,17,1)');
            }
        }
        for (var i = 0; i < 42; i++) {
            var ele = createEle()
                .css('cursor', 'pointer')
                .appendTo(this.mainEle);
        }
        this.renderByDate(this.date);
        this.mainEle.click(function(e) {
            if (e.target.nodeName === 'SPAN') {
                var allSpan = $('span'),
                    index = allSpan.index($(e.target)),
                    selectedIndex = allSpan.index(self.selectedEle);
                var dat = new Date(self.date);
                dat.setDate(dat.getDate() + index - selectedIndex);
                self.selectDate(dat);
            }
        });
    },
    preMonth : function(){
    	var dat = new Date(this.date);
    	dat.setMonth(dat.getMonth() - 1);
    	this.selectDate(dat);
    },
    nextMonth : function(){
    	var dat = new Date(this.date);
    	dat.setMonth(dat.getMonth() + 1);
    	this.selectDate(dat);
    },
    selectDate : function(date){
    	this.selectedEle.css('background-color','').css('color','');
    	if(date.getMonth() === this.date.getMonth()){
    		var allSpan = $('span'),
            oIndex = allSpan.get(this.selectedEle);
    		var temp = allSpan.get(date.getDate() + oIndex - this.date.getDate());
    		this.selectedEle = $(temp).css('background-color','rgb(200,17,1)').css('color','white');
    	} else{
    		this.renderByDate(date);
    	}
    	this.date = date;
    },
    renderByDate : function(date){
    	$('.title').html(date.getFullYear() + '年' + (date.getMonth() + 1) + '月');
    	var dat = new Date(date);
    	dat.setDate(dat.getDate() - date.getDate() + 1);
    	dat.setDate(dat.getDate() - dat.getDay());
    	var allSpan = $('span');
    	for(var i = 0 ; i < 42 ; i++){
    		var ele = $(allSpan.get(i + 7)).html(dat.getDate());
    		if(dat.getMonth() !== date.getMonth()){
    			ele.css('color','lightgray');
    		} else {
    			if(dat.getDay() === 0 || dat.getDay() === 6){
    				ele.css('color','rgb(200,17,1)');
    			}
    		}
    		if(dat.getTime() === date.getTime()){
    			ele.css('background-color','rgb(200,17,1)').css('color','white');
    			this.selectedEle = ele;
    		}
    		dat.setDate(dat.getDate() + 1);
    	}
    }
};
