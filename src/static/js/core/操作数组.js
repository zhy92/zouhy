
// 待办提醒框
var isOpen = false; 
$(document).on('click', '#remind-tips', function (){
	if(!isOpen) {
		$('#remind').animate({
			right: '155px'
		},200);
		$(this).find('.iconfont').html('&#xe605;');
		isOpen = true;
	} else {
		$('#remind').animate({
			right: '0'
		},200);
		$(this).find('.iconfont').html('&#xe697;');
		isOpen = false;
	}
});

//复选框
$(document).on('selectstart', '.checkbox-normal', false);
// $(document).on('click', '.checkbox-normal', function() {
// 	var keyData = $(this).attr("data-key");
// 	var keyCode = $(this).attr("data-code");
// 	var keyMark = $(this).attr("data-mark");
// 	if(keyData){
// 		$(".hklx").each(function(){
// 			$(this).removeClass('checked').attr('checked',false);
// 			$(this).html('');
// 		})
// 	}
// 	if(keyCode){
// 		$(".gzd").each(function(){
// 			$(this).removeClass('checked').attr('checked',false);
// 			$(this).html('');
// 		})
// 	}
// 	if(keyMark){
// 		$(".jzlx").each(function(){
// 			$(this).removeClass('checked').attr('checked',false);
// 			$(this).html('');
// 		})
// 	}
// 	if(!$(this).attr('checked')) {
// 		$(this).addClass('checked').attr('checked',true);
// 		$(this).html('<i class="iconfont">&#xe659;</i>');
// 	} else {
// 		$(this).removeClass('checked').attr('checked',false);
// 		$(this).html('');
// 	}
// })

//单选框
$(document).on('selectstart', '.radio', false);
$(document).on('click', '.radio', function() {
	if(!$(this).attr('checked')) {
		$(this).addClass('checked').attr('checked',true);
	} else {
		$(this).removeClass('checked').attr('checked',false);
	}
})


//右边栏
$('.sideBar-item').hover(function() {
	$(this).find('.sideBar-content').show();	
},function() {
	$(this).find('.sideBar-content').hide();		
});


//测试鼠标移上提示框
$('.tips-area').hover(function() {
	$(this).find('.tips-content').toggle();
})

/**
* 顶部二维码、消息和用户展开效果
**/

//二维码
$(document).on('hover', '#navigator .QR-Code', function() {
	$(this).find('.QR-Code-area').toggle();
});

//消息
$(document).on('hover', '#navigator .message', function() {
	$(this).find('.message-area').toggle();
});

//用户名
$(document).on('hover', '#navigator .user', function() {
	$(this).find('.user-area').toggle();
	// $(this).find('.user-field-item').toggleClass('user-field-item-active');
});



/**
 * 排序
 */
 $(document).on('click', '.time-sort', function() {
 	// 数据更新
 	
 	// 箭头更新
 	if( $(this).hasClass('time-sort-up') ) {
 		$(this).removeClass('time-sort-up').addClass('time-sort-down');	
 	} else if ( $(this).hasClass('time-sort-down') ) {
 		$(this).removeClass('time-sort-down').addClass('time-sort-up');	
 	}
	
});



/*=========信息录入表格通用js=zhy===========*/
	//点击下拉选项赋值zhy
	$(document).on('click', '.selectOptBox li', function() {
		var value = $(this).data('key');
		var text = $(this).text();
		console.log(value);
		$(this).parent().parent().siblings(".placeholder").html(text);
		$(this).parent().parent().siblings(".placeholder").attr('title',text);
		$(this).parent().parent().siblings("input").val(value);
		var value1 = $(this).parent().parent().siblings("input").val();
		if(!value1){
			$(this).parent().parent().siblings(".placeholder").html("请选择");
		}else{
			$(this).parent().parent().parent().removeClass("error-input");
			$(this).parent().parent().siblings("i").remove();
//			$(this).parent().parent().after("<div class='opcity0'>这个是新增的div</div>");
		}
		$(".selectOptBox").hide();
		$(".searchInp").hide();
		return false;
	})
//点击下拉消失	zhy
	$(document).on("click",function(e){ 
		var target = $(e.target);
		if(target.closest(".selectOptBox").length == 0){ 
			$(".selectOptBox").hide();
			return;
		}
	})







/**
* 从对象数组中删除属性为objPropery，值为objValue元素的对象
* @param Array arrPerson 数组对象
* @param String objPropery 对象的属性
* @param String objPropery 对象的值
* @return Array 过滤后数组
*/
function remove(arrPerson, objPropery, objValue){
    return $.grep(arrPerson,
    function(cur, i) {
        return cur[objPropery] != objValue;
    });
}

/**
* 从对象数组中获取属性为objPropery，值为objValue元素的对象
* @param Array arrPerson 数组对象
* @param String objPropery 对象的属性
* @param String objPropery 对象的值
* @return Array 过滤后的数组
*/
function get(arrPerson, objPropery, objValue){
    return $.grep(arrPerson,
    function(cur, i) {
        return cur[objPropery] == objValue;
    });
}

/**
* 显示对象数组信息
* @param String info 提示信息
* @param Array arrPerson 对象数组
*/
function showPersonInfo(info, arrPerson){
    $.each(arrPerson,
    function(index, callback) {
        info += "Person id:" + arrPerson[index].id + " name:" + arrPerson[index].name + " sex:" + arrPerson[index].sex + " age:" + arrPerson[index].age + "\r\t";
    });
    alert(info);
}

//测试数据
var arrPerson = new Array();
var person = new Object();
person.id = 1;
person.name = "帅哥";
person.sex = "男";
person.age = 30;
arrPerson.push(person);
person = new Object();
person.id = 2;
person.name = "美眉甲";
person.sex = "女";
person.age = 28;
arrPerson.push(person);
person = new Object();
person.id = 3;
person.name = "美眉乙";
person.sex = "女";
person.age = 20;
arrPerson.push(person);
console.log(person);
//测试删除（更改alert样式调用）
//showPersonInfo("原始数组：\r\t", arrPerson);
arrPerson = remove(arrPerson, "id", 1);
//showPersonInfo("删除之后：\r\t", arrPerson);
//测试获取
arrPerson = get(arrPerson, "id", 3);
//showPersonInfo("只获取ID为3的元素：\r\t", arrPerson);
console.log(arrPerson);



	function startData(){
		var dataArr = [
		    {
		        "code":"isSecond",
		        "empty":0,
		        "fieldName":"isSecond",
		        "name":"新车还是二手车",
		        "orderBy":0,
		        "type":3
		    },
		    {
		        "code":"orderNo",
		        "empty":0,
		        "fieldName":"orderNo",
		        "name":"订单编号",
		        "orderBy":0,
		        "type":0
		    }
		];
		var changeArr = {};
		for(var i=0;i<dataArr.length;i++){
			if(dataArr[i].code == 'isSecond'){
				dataArr[i].join(changeArr);
				return changeArr;
			}
		}
		console.log(changeArr);
	}
