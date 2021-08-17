window.addEventListener('load',function(){
    var ad = document.querySelector('.ad');
    var adbtn = document.querySelector('.adbtn');
    adbtn.addEventListener('click',function(){
        ad.style.display = 'none';
    })
    var position = document.getElementById('position');
    var shortcutPosition = document.getElementsByClassName('shortcut-position');
    //shortcut中的li悬浮增加边框
    position.addEventListener('mouseover',function(){
        shortcutPosition[0].style.display = 'block';
        position.style.backgroundColor = '#fff';
        position.style.borderTop =  '1.5px solid #ccc';
        position.style.borderLeft =  '1.5px solid #ccc';
        position.style.borderRight =  '1.5px solid #ccc';
        position.style.borderBottom =  '1.5px solid #fff';
    })
    shortcutPosition[0].addEventListener('mouseover',function(){
        shortcutPosition[0].style.display = 'block';
        position.style.backgroundColor = '#fff';
        position.style.borderTop =  '1.5px solid #ccc';
        position.style.borderLeft =  '1.5px solid #ccc';
        position.style.borderRight =  '1.5px solid #ccc';
        position.style.borderBottom =  '1.5px solid #fff';
    })
    position.addEventListener('mouseout',function(){
        shortcutPosition[0].style.display = 'none';
        position.style.backgroundColor = '#e3e4e5';
        position.style.borderTop =  '1.5px solid #e3e4e5';
        position.style.borderLeft =  '1.5px solid #e3e4e5';
        position.style.borderRight =  '1.5px solid #e3e4e5';
        position.style.borderBottom =  '1.5px solid #e3e4e5';

    })
    shortcutPosition[0].addEventListener('mouseout',function(){
        shortcutPosition[0].style.display = 'none';
        position.style.backgroundColor = '#e3e4e5';
        position.style.borderTop =  '1.5px solid #e3e4e5';
        position.style.borderLeft =  '1.5px solid #e3e4e5';
        position.style.borderRight =  '1.5px solid #e3e4e5';
        position.style.borderBottom =  '1.5px solid #e3e4e5';
    })
    //定位
    var zones = document.querySelectorAll('.zones');
    var zoneName = document.getElementById('zone-name');
    zones[0].style.color = '#fff';
    zones[0].style.backgroundColor = '#f10215';
    for(i = 0;i < zones.length;i++){
        zones[i].addEventListener('click',function(){
            for(j = 0;j < zones.length;j++){
                zones[j].style.color = '#999';
                zones[j].style.backgroundColor = '#fff';
            }
            zoneName.innerHTML = this.innerHTML;
            this.style.color = '#fff';
            this.style.backgroundColor = '#f10215';
        })
    }
    /*//搜索框内定时改变内容
    var searchtext = document.querySelector('.searchtxt');
    var searchcont=['投影仪家用','钢笔','oppo手机','洗衣机','费列罗巧克力','华为盒子','办公椅','无线鼠标'];
    searchtext.value = searchcont[0];
    var searchNum = 1;
    var searchfun = function(){
        searchtext.value = searchcont[searchNum%searchcont.length];
        searchNum++;
    }
    var searchtimer = setInterval(searchfun,1000);
    searchtext.addEventListener('focus',function(){
        clearInterval(searchtimer);
        this.style.color = '#000';
        this.value = '';
    })
    searchtext.addEventListener('blur',function(){
        this.style.color = '#999';
        searchtext.value = searchcont[searchNum%searchcont.length];
        searchtimer = setInterval(searchfun,1000);
    })*/
    //轮播图自动切换
    var lunboimg = document.getElementsByClassName('lunboimg');
    var imgNum = 0;
    var point = document.querySelector('.point');
    var points = point.children;
    lunboimg[0].style.opacity = '1';
    points[0].style.backgroundColor = '#fff';
    var lunbofunc = function(){
        imgNum++;
        if(imgNum==5){
            imgNum = imgNum % 5;
        }
        for(i = 0;i < lunboimg.length;i++){
            lunboimg[i].style.opacity = '0';
            points[i].style.backgroundColor = 'rgba(255,255,255,.4)';
        }
        lunboimg[imgNum].style.opacity = '1';
        points[imgNum].style.backgroundColor = '#fff';
    }
    var lunboTimer = setInterval(lunbofunc,5000);
    var arrowl = document.querySelector('.arrowl');
    var arrowr = document.querySelector('.arrowr');
    //轮播图左右箭头
    arrowl.addEventListener('click',function(){
        clearInterval(lunboTimer);
        imgNum--;
        if(imgNum==5){
            imgNum = imgNum % 5;
        }else if(imgNum==-1){
            imgNum = 4;
        }
        for(i = 0;i < lunboimg.length;i++){
            lunboimg[i].style.opacity = '0';
            points[i].style.backgroundColor = 'rgba(255,255,255,.4)';
        }
        lunboimg[imgNum].style.opacity = '1';
        points[imgNum].style.backgroundColor = '#fff';
        lunboTimer = setInterval(lunbofunc,3000);
    })
    arrowr.addEventListener('click',function(){
        clearInterval(lunboTimer);
        imgNum++;
        if(imgNum==5){
            imgNum = imgNum % 5;
        }
        for(i = 0;i < lunboimg.length;i++){
            lunboimg[i].style.opacity = '0';
            points[i].style.backgroundColor = 'rgba(255,255,255,.4)';
        }
        lunboimg[imgNum].style.opacity = '1';
        points[imgNum].style.backgroundColor = '#fff';
        lunboTimer = setInterval(lunbofunc,3000);
    })
    //轮播图小圆圈
    for(i = 0;i < points.length;i++){
        points[i].addEventListener('click',function(){
            clearInterval(lunboTimer);
            var flag = 0;
            for(j = 0;j < points.length;j++){
                if(this==point.children[j]){
                    break;
                }else{
                    flag++;
                }
            }
            // console.log(flag)
            imgNum = flag;
            for(i = 0;i < lunboimg.length;i++){
                lunboimg[i].style.opacity = '0';
                points[i].style.backgroundColor = 'rgba(255,255,255,.4)';
            }
            lunboimg[imgNum].style.opacity = '1';
            points[imgNum].style.backgroundColor = '#fff';
            lunboTimer = setInterval(lunbofunc,3000);
        })
    }
    //话费机票酒店
    var huafei = document.querySelector('.huafei');
    var huafeii = document.querySelector('.huafeii');
    var huafeis = document.querySelector('.huafeis');
    var jipiao = document.querySelector('.jipiao');
    var jipiaoi = document.querySelector('.jipiaoi');
    var jipiaos = document.querySelector('.jipiaos');
    var jiudian = document.querySelector('.jiudian');
    var jiudiani = document.querySelector('.jiudiani');
    var jiudians = document.querySelector('.jiudians');
    var serviceMain = document.querySelector('.service-main');
    huafei.addEventListener('mouseover',function(){
        huafeii.style.marginTop = '-35px';
        jipiaoi.style.marginTop = '-35px';
        jiudiani.style.marginTop = '-35px';
        huafeis.style.color = '#f10215';
        jipiaos.style.color = '#999';
        jiudians.style.color = '#999';
        huafeis.style.paddingBottom = '6px';
        huafeis.style.borderBottom = '2px solid #f10215';
        jipiaos.style.borderBottom = 'none';
        jiudians.style.borderBottom = 'none';
        serviceMain.style.top = '36px';
    })
    jipiao.addEventListener('mouseover',function(){
        huafeii.style.marginTop = '-35px';
        jipiaoi.style.marginTop = '-35px';
        jiudiani.style.marginTop = '-35px';
        huafeis.style.color = '#999';
        jipiaos.style.color = '#f10215';
        jiudians.style.color = '#999';
        jipiaos.style.paddingBottom = '6px';
        huafeis.style.borderBottom = 'none';
        jipiaos.style.borderBottom = '2px solid #f10215';
        jiudians.style.borderBottom = 'none';
        serviceMain.style.top = '36px';
    })
    jiudian.addEventListener('mouseover',function(){
        huafeii.style.marginTop = '-35px';
        jipiaoi.style.marginTop = '-35px';
        jiudiani.style.marginTop = '-35px';
        huafeis.style.color = '#999';
        jipiaos.style.color = '#999';
        jiudians.style.color = '#f10215';
        jiudians.style.paddingBottom = '6px';
        huafeis.style.borderBottom = 'none';
        jipiaos.style.borderBottom = 'none';
        jiudians.style.borderBottom = '2px solid #f10215';
        serviceMain.style.top = '36px';
    })
    var searchclose = document.querySelector('.searchclose');
    searchclose.addEventListener('click',function(){
        huafeii.style.marginTop = '0';
        jipiaoi.style.marginTop = '0';
        jiudiani.style.marginTop = '0';
        huafeis.style.color = '#999';
        jipiaos.style.color = '#999';
        jiudians.style.color = '#999';
        serviceMain.style.top = '206px';
    })
    //吸顶灯 边条
    var xidingdeng = document.querySelector('.xidingdeng');
    var searchlogo = document.querySelector('.searchlogo');
    var search = document.querySelector('.search');
    var shopcar = document.querySelector('.shopcar');
    var searcha = document.querySelector('.searcha');
    var backTop = document.querySelector('.backTop');
    var side = document.querySelector('.side');
    var jdms = document.querySelector('.jdms');
    // jdms.addEventListener('mouseover',function(){
    // 	jdms.style.color = '#fff';
    // 	jdms.style.backgroundColor = '#c81623';
    // })
    // jdms.addEventListener('mouseout',function(){
    // 	jdms.style.color = '#000';
    // 	jdms.style.backgroundColor = '#fff';
    // })
    window.onscroll = function(){
        if(window.pageYOffset > 270){
            backTop.style.display = 'block';
            side.style.position = 'fixed';
            var currentWidth = window.innerWidth - 1371;
            var nowWidth = currentWidth/2 + 13.5;
            side.style.right = nowWidth + 'px';
            jdms.style.color = '#f10215';
            backTop.style.color = '#f10215';
        }else{
            backTop.style.display = 'none';
            side.style.position = 'absolute';
            side.style.right = '-70px';
            jdms.style.color = '#000';
            backTop.style.color = '#f10215';
        }
        if(window.pageYOffset > 500){
            searcha.style.display = 'block';
            searchlogo.style.position = 'fixed';
            search.style.position = 'fixed';
            search.style.left = '370px';
            shopcar.style.position = 'fixed';
            shopcar.style.left = '1000px';
            searchlogo.style.top = '5px';
            search.style.top = '9px';
            shopcar.style.top = '9px';
            xidingdeng.style.display = 'block';
            xidingdeng.style.position = 'fixed';
            // backTop.style.display = 'block';
            side.style.top = '60px';
        }else{
            searcha.style.display = 'none';
            searchlogo.style.position = 'absolute';
            search.style.position = 'absolute';
            search.style.left = '280px';
            shopcar.style.position = 'absolute';
            shopcar.style.left = '850px';
            searchlogo.style.top = '30px';
            search.style.top = '30px';
            shopcar.style.top = '30px';
            xidingdeng.style.display = 'none';
            xidingdeng.style.position = 'absolute';
            // backTop.style.display = 'none';
            side.style.top = '0';
        }
    }
    //返回顶部
    backTop.addEventListener('click',function(){
        // alert(1);
        var back = setInterval(function(){
            window.scroll(0,window.pageYOffset-50);
            if(window.pageYOffset == 0){
                clearInterval(back);
            }
        },10)
    })
})


