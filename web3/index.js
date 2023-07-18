

var w ={1:0,2:0};
var x = 0;
function back(){x = x-1;document.querySelector('body').style.backgroundPositionY = x+'px';}
setInterval(back,10);

function page1(){
    setTimeout(function(){document.getElementById('d3').innerHTML = "<span class='d3_sp'><p>Let Us Bring Your Web Pages to Life - Our Expertise at Your Service!</p>Dear Valued Customer,<br><p>We hope this message finds you well. We are reaching out to let you know that we possess the expertise and passion to build your web pages and turn your digital dreams into reality. Whether you need a simple and elegant website or a complex and dynamic online platform, we are here to serve you.</p><p>At dhishu, we understand that having a strong online presence is crucial in today's fast-paced digital landscape. A well-designed and functional website not only enhances your brand's visibility but also creates a seamless user experience that keeps visitors coming back for more. We pride ourselves on delivering exceptional web development services tailored to your unique requirements.</p></span>";},1000);
}
function pageset(id){
    if(document.getElementById('p'+id)){
        if(sr['page'] ==2){page2();}
        if(sr['page'] ==3){page3();}
        if(sr['page'] ==4){page4();}
        if(sr['page'] ==5){page5();}
    }
    else{
        let script= f[7]('script');
        f[6](script,'src','web3/p'+sr['page']+'.js');
        script.id='p'+sr['page'];
        f[3](document.querySelector('body'),script)
        
    }
}

window.onbeforeunload = function(){window.scrollTo(0,0);}
var sr={'d5scroll':true};
var div = document.getElementById('d3');
function page(x){
    if(x=='up'){
        if(sr['page']){
            if(sr['page']<5){
                sr['page']=sr['page'] + 1;
            }
        }
        else{
            sr['page']=2;
        }
    }
    else{
        if(sr['page']){
            if(sr['page']>1){
                sr['page']=sr['page'] - 1;
            }
        }
    }
    if(sr['page']){
        if(sr['page']>1){
            pageset(sr['page']);
        }
        else if(sr['page']==1){
            page1();
        }
    }
}

window.addEventListener('touchmove',function(event){
    
});
var br2 = document.querySelector('.d2');
window.addEventListener("touchstart",function clicked(e) {sr['x'] = e.touches[0].clientX;sr['y'] = e.touches[0].clientY;sr['y2']=false});
window.addEventListener("touchmove",
function clicked(e) {
    var br = document.getElementById("body").getBoundingClientRect();
    if(e.touches[0].clientX > (sr['x']+100)){
        br2.style.width = '80%';
    }
    if(e.touches[0].clientX < (sr['x']+100)){
        br2.style.width = '0%';
    }
    sr['y2']=e.touches[0].clientY;
});
window.addEventListener('touchend',function(){
    if(sr['y2']!=false && sr['d5scroll']){
    if(sr['y2'] < (sr['y']-100)){
        page('up');
    }
    if(sr['y2'] > (sr['y']+100)){
        page('down');
    }}
});
document.getElementById('b1').addEventListener('click',function(){
    if(br2.offsetWidth < 10){
        br2.style.width ='80%';
    } 
    if(br2.offsetWidth > 10){
        br2.style.width = '0%';
    }
});
    let s1 = f[7]('script');
    f[6](s1,'src','web3/script.js');
    f[3](body,s1);
var music = new Audio('web3/img/r.mp3');
function b3(){
    if(music.paused){music.play();}
    else{music.pause();}
    
}

//bu
function m_bu(id){
    br2.style.width = '0%';
    if(id == 1){
        page1();
    }
    else{
        sr['page'] = id;
        pageset(id);
    }
}
