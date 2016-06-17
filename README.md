# animateCssTest
use animate.css to make page with animation


###animate.css
bower install animate.css --save  
<link rel="stylesheet" href="animate.min.css">


###css设置animate
animation属性是一个简写属性，用于设置以下六个动画属性：  
animation-name  
animation-duration  
animation-timing-function  
animation-delay  
animation-iteration-count  
animation-direction  
需要始终规定animation-duration属性，否则时长为0，就不会播放动画了  
 语法  
animation: name duration timing-function delay iteration-count direction;  

animation-name属性为 @keyframes动画规定名称  

animation-duration: time; 规定完成动画所花费的时间。默认值是0，意味着没有动画效果  

animation-timing-function 规定动画的速度曲线  
linear 动画从头到尾的速度都是相同的  
ease 默认。动画以低速开始，然后加快，在结束前变慢  
ease-in 动画以低速开始  
ease-out 动画以低速结束  
ease-in-out 动画以低速开始和结束  
cubic-bezier 在cubic-bezier函数中自己的值，可能的值是从0到1的数值  

animation-delay属性定义动画何时开始，值以秒或毫秒计  

animation-iteration-count 属性定义动画的播放次数  
n 定义动画播放次数的数值  
infinite 规定动画应该无限次播放  

animation-direction 属性定义是否应该轮流反向播放动画  
normal 默认值，动画应该正常播放  
alternate 动画应该轮流反向播放  

@keyframes  
通过@keyframes规则，可以创建动画  
创建动画的原理是，将一套css样式逐渐变化为另一套样式  
在动画过程中，可以多次改变这套css样式  
以百分比来规定改变发生的时间，或者通过关键词'from'和'to',等价于0%和100%  
为了获得最佳的浏览器支持，应该始终定义0%和100%选择器  
语法  
@keyframes animationname {keyframes-selector {css-styles;}}  

css3 transform属性  
transform属性向元素应用2D或3D转换。该属性允许我们对元素进行旋转，缩放，移动或倾斜。  
none 定义不进行转换  
matrix(n, n, n, n, n, n) 定义2D转换，使用六个值的矩阵  
matrix3d(n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n) 定义3D转换，使用16个值的4*4矩阵  
translate(x, y) 定义2D转换  
translate3d(x, y, z) 定义3D转换  
translateX(x) 定义转换，只是用x轴的值  
translateY(y) 定义转换，只是用y轴的值  
translateZ(z) 定义3D转换，只是用z轴的值  
scale(x, y) 定义2D缩放转换  
scale3d(x, y, z) 定义3D缩放转换  
scaleX(x) 通过设置X轴的值来定义缩放转换  
scaleY(y) 通过设置Y轴的值来定义缩放转换  
scaleZ(z) 通过设置Z轴的值来定义3D缩放转换  
rotate(angle) 定义2D旋转，在参数中规定角度  
rotate3d(x, y, z, angle) 定义3D旋转  
rotateX(angle) 定义沿着X轴的3D旋转  
rotateY(angle) 定义沿着Y轴的3D旋转  
rotateZ(angle) 定义沿着Z轴的3D旋转  
skew(x-angle, y-angle) 定义沿着x和y轴的2D倾斜转换  
skewX(angle) 定义沿着X轴的2D倾斜转换  
skewY(angle) 定义沿着Y轴的2D倾斜转换  
perspective(n) 为3D转换元素定义透视视图  
