if(navigator.userAgent.indexOf("Mac OS X")!=-1?$("body").addClass("mac"):$("body").addClass("pc"),jQuery(document).ready(function(n){n(".toggle").on("click",function(){var t=n(n(this).attr("href")),i={};return t.is(":visible")?(i.interactiontype=10,t.removeClass("open"),n("html").hasClass("iem7")?t.hide():t.slideUp(200,"swing")):(i.interactiontype=9,t.addClass("open"),n("html").hasClass("iem7")?t.show():t.slideDown(200,"swing")),n.bi&&(i=n.extend({},n.bi.getLinkData(this),i),i.cot=5,n.bi.record(i)),!1})}),jQuery(document).ready(function(n){
    var t=n(".pivot");
    if(n(".pivot-switch").click(function(t){
        var r,i,u,f;t.preventDefault(),r=n(this).attr("href"),n(this).parent(".pivot").fadeOut(0,function(){n(r).addClass(".hidden").show(0).removeClass(".hidden")}),n.bi&&(i=n.bi.getLinkData(this),i.interactiontype=4,i.cot=5,u=n(r).find("a:visible"),f=n.bi.getAttrData(u),n.extend(i,f),n.bi.record(i))
    
    }),n('html[dir="rtl"]').hasClass("iem7"))

}),$(".slideshow-news .slides").responsiveSlideshow({speed:6e3}),navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)){var viewportmeta=document.querySelector('meta[name="viewport"]');viewportmeta&&(viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0",document.body.addEventListener("gesturestart",function(){viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"},!1))}$(function(){var n=$(".top-bar-storelink a").clone(!0);$(".menulevel-storelink").prepend(n)})

