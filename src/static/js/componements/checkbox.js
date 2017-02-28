'use strict';
(function($) {
	$.fn.checking = function() {
		return this.each(function() {
			var that = $(this);
			this.$checking = new checking(that, that.data());
		});
	}

	/**
	* @params {element} $el 要渲染的对象
	* @params {object} data 要渲染的数据 
	* --@checked {string} 是否被选中
	**/
	function checking($el, data) {
		var self = this;
		self.opt = $.extend({
			checked: undefined
		}, data);
		self.$el = $el;
		self.evt = {};
		self.init();
	}

	checking.prototype.onChange = function(fn) {
		console.log(this);
		this.evt.onchange = fn;
	}

	checking.prototype.init = function() {
		var self = this;
		self.onselectstart = function(e) { return false };
		if(!self.opt.checked) {
			self.empty();
		} else {
			self.full();
		}
		self.setupEvt();
	};

	checking.prototype.setupEvt = function() {
		var self = this;
		self.$el.on('click', function() {
			console.log(1)
			if(!self.$el.attr('checked')) {
				self.full();
			} else {
				self.empty();
			}
			self.evt.onchange && self.evt.onchange(11);
		})
	}

	checking.prototype.full = function() {
		var self = this;
		self.$el.addClass('checked').attr('checked', true);
		self.$el.html('<i class="iconfont">&#xe659;</i>');
	}


	checking.prototype.empty = function() {
		var self = this;
		self.$el.removeClass('checked').attr('checked', false);
		self.$el.html();
	}
})(jQuery);