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