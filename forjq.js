//placeholder兼容
    function placeh(selector,message){
        var _$ele = $(selector);
        if(message&&typeof message === 'string'){
            _$ele.data('placeh',message);
        }
        var _mes = _$ele.data('placeh');
        _$ele.on('focus',function(){
            if(this.value === _mes){
                this.value = '';
            }
        });
        _$ele.on('blur',function(){
            if(this.value === ''){
                this.value = _mes;
            }
        })
    }

    //检查图片是否加载完成
    function check_img(img_ar,cb){
        var _bool = true,
            _len = img_ar.length;
        for(var i = 0;i<_len;i++){
            if(img_ar[i].css('width') === 0){
                _bool = false
            }
        }
        if(_bool){
            cb();
        }
        else{
            setTimeout(function(){
                check_img(img_ar,cb);
            },100);
        }
    }