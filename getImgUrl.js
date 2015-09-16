//获得file中图片本地路径
/**
 *
 * @param id
 * @returns {*}
 */
var getImgUrl = function(id){
    var img_file,
        img_url;
    if(typeof id === "string"&&id !== ''){
        img_file = document.getElementById(id);
    }
    else{
        img_file = id;
    }
    //取得图片本地路径
    if(navigator.userAgent.toLocaleLowerCase().indexOf('msie') !== -1) {
        img_file.select();
        //IE下取得图片的本地路径
        img_url = document.selection.createRange().text;
    }
//    } else if(isFirefox = navigator.userAgent.indexOf("Firefox")>0) {
    else{
        if (img_file.files) {  // Firefox下取得的是图片的数据
            if(img_file.files.item(0).getAsDataURL){
                img_url = img_file.files.item(0).getAsDataURL()
            }
            else{
                img_url = window.URL.createObjectURL(img_file.files.item(0));
            }
        }
        else{
            img_url = img_file.value;
        }
    }
    return img_url;
};