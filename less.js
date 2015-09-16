/**
 * Created by zxy on 2015/9/16.
 */
//居中
.center(@top:0,@bottom:0){
    margin: @top auto @bottom auto;
}
//渐变色
.change_color(@start:#b8c4cb,@end:#f6f6f8){
    filter: progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=@start,endColorStr=@end); /*IE 6 7 8*/
    background: -ms-linear-gradient(top, @start, @end);        /* IE 10 */
    background:-moz-linear-gradient(top, @start, @end);/*火狐*/
    background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(@start), to(@end));/*谷歌*/
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(@start), to(@end));      /* Safari 4-5, Chrome 1-9*/
    background: -webkit-linear-gradient(top, @start, @end);   /*Safari5.1 Chrome 10+*/
    background: -o-linear-gradient(top, @start, @end);  /*Opera 11.10+*/
}
//圆角
.border_radius(@pixel:4px){
    -moz-border-radius: @pixel;      /* Gecko browsers */
    -webkit-border-radius: @pixel;   /* Webkit browsers */
    border-radius:@pixel;            /* W3C syntax */
}
//阴影 x偏移 y偏移 颜色 阴影半径 模糊
.box_shadow(@x:1px,@y:1px,@color:#000,@r:1px,@fuzzy:1px){
    -webkit-box-shadow:@x @y @fuzzy @r @color;
    -moz-box-shadow:@x @y @fuzzy @r @color;
    box-shadow: @x @y @fuzzy @r @color;
}
//超出省略
.ellipsis(){
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
//透明
.opacity(@x:0.5){
    opacity: @x;
    filter:Alpha(opacity=@x);
}
//字体
.font_family(@font:Arial){
    font-family: @font, "Hiragino Sans GB", "Microsoft YaHei",
        "WenQuanYi Micro Hei", sans-serif;
}
//转行
.font_break(){
    word-wrap: break-word;
    word-break: break-all;
}
