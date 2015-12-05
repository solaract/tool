/**
 * Created by zxy on 2015/9/1.
 */
/**
 *
 * @param c_name
 * @param c_value
 * @param freeTime
 */

//设置cookie值
function cookie_set(c_name,c_value,freeTime){
     var time = new Date();
     if(!freeTime)freeTime=3600*1000;
     time.setTime(time.getTime()+freeTime);
     if(c_name!=''||c_name!=null){
         document.cookie=c_name+'='+c_value+';expires='+time.toUTCString();
     }
}
//获取cookie值,没有则返回空值
function cookie_get(c_name){
     var cookie = document.cookie;
     if(cookie.length>0){
         var c_start = document.cookie.indexOf(c_name);
         if(c_start!=-1){
            c_start += c_name.length+1;
             var c_end = cookie.indexOf(';',c_start);
             if(c_end!=-1)return cookie.substring(c_start,c_end);
             else{
                 return cookie.substring(c_start);
             }
         }

     }
     return '';
}
//删除cookie
function cookie_del(c_name){
     var time = new Date();
     time.setTime(time.getTime()-1000);
     if(c_name!=''||c_name!=null){
         var c_value = cookie_get(c_name);
         document.cookie=c_name+'='+c_value+';expires='+time.toUTCString();
     }
}