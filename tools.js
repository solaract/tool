var tools = {
    /**
     *
     * @param id
     * @returns {HTMLElement}
     */
//js触发onsubmit
    fire_sub:function(form){
        //IE fire event
        if (form.fireEvent) {
            var result = form.fireEvent('onsubmit');
            //DOM2 fire event
        } else if (document.createEvent) {
            var ev = document.createEvent('HTMLEvents');
            ev.initEvent('submit', false, true);
            form.dispatchEvent(ev);
        }
    },
    /**
     *
     * @param id
     * @returns {HTMLElement}
     */
    //获取
    getEle:function(id){
        return typeof id =="string"?document.getElementById(id):id;
    },
    /**
     *
     * @param ele
     * @param event
     * @param callback
     * @param cap
     */
    //简单事件绑定兼容
    on:function(ele,event,callback,cap){
        cap = cap||false;
        if(ele.addEventListener){
            ele.addEventListener(event,callback,cap);
        }
        else if(ele.attachEvent){
            ele.attachEvent('on'+event,callback);
        }
        else{
            ele['on'+event] = callback;
        }
    },
    /**
     *
     * @param ele
     * @param event
     * @param callback
     * @param cap
     */
    //简单事件解绑兼容
    remove:function(ele,event,callback,cap){
        cap = cap||false;
        if(ele.removeEventListener){
            ele.removeEventListener(event,callback,cap);
        }
        else if(ele.detachEvent){
            ele.detachEvent('on'+event,callback);
        }
        else{
            ele['on'+event] = null;
        }
    },
    /**
     *
     * @param obj
     * @param extensions
     * @returns {*}
     */
    //传入两个以上参数，依次扩展第一个obj
    extend:function(obj,extensions){
        if(arguments.length < 2){
            return obj;
        }
        var obj_ar = Array.prototype.slice.call(arguments,1);
        for(var i = 0,len = obj_ar.length;i < len;i++){
            for(var key in obj_ar[i]){
                if(!obj.hasOwnProperty(key)&&obj_ar[i].hasOwnProperty(key)){
                    obj[key] = obj_ar[i][key];
                }
            }
        }
        return obj;
    },
    /**
     *
     * @param ele
     * @param data_name
     * @param data
     * @returns {*} 属性值
     */
    //dataset兼容
    dataSet:function(ele,data_name,data){
        function name(str){
            var name_ar = [];
            var reg = /[A-Z]/g;
            var result = reg.exec(str);
            for(var i = 0,j = 0,k = 0;result;i++,result = reg.exec(str)){
                k = result.index;
                name_ar[i] = str.substring(j,k).toLowerCase();
                j = k;
            }
            name_ar[i] = str.substring(j).toLowerCase();
            return 'data-'+name_ar.join("-");
        }
        if(ele.dataset){
            if(data){
                ele.dataset[data_name] = data;
            }
            return ele.dataset[data_name];
        }
        else{
            var dataName = name(data_name);
            if(data){
                ele.setAttribute(dataName,data);
            }
            return ele.getAttribute(dataName);
        }
    },
    //代理
        proxy:function(context,cb){
            if(typeof cb !== 'function'){
                throw('cb should be a function');
            }
            return function(){
                var arg = Array.prototype.slice.call(arguments);
                return cb.apply(context,arg);
            }
        }
};


//添加事件


//修改属性
var EleAttr=function(id,Attname,value){
	var ele=getEle(id);
	for (var i = 0; i<ele.attributes.length; i++) {
		var attrName=ele.attributes[i].nodeName;
		if(attrName==Attname&&typeof(value)=='string'){  
			ele.attributes[i].nodeValue=value;           
			return ele.attributes[i].nodeValue;
		}
		else if(attrName==Attname)return ele.attributes[i].nodeValue;
	}
};

//取消默认事件
function cancelHandler(event){
    var event = event || window.event;
    if(event.preventDefault) event.preventDefault();
    if(event.cancelBubble) event.cancelBubble = false;
    return false;
}

