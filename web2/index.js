
var n= {};

f[4](f[0]('loding'),'');let link = f[7]('link');f[6](link,'rel','stylesheet');
f[6](link,'href','web2/style.css');f[3](f[1]('head'),link);
var x = 0;var body = f[1]('body');
function back(){x = x-1;f[5](body).backgroundPositionY = x+'px';}
setInterval(back,10);

let he = f[7]('div');f[2](he,'he');f[3](he,f[7]('div'));f[3](body,he);
let d2 = f[7]('div');d2.id='d1';f[2](d2,'d1');
let l1 = f[7]('div');f[2](l1,'l1');
let im1 =f[7]('img');im1.id='im1';f[6](im1,'src','web2/img/s1.jpg');f[3](l1,im1);
let l2 = f[7]('l2');f[2](l2,'l2');
let d3 = f[7]('div');f[2](d3,'hader');
f[3](d2,l1);n['home1'] =l1.innerHTML;
var st = Array('HOME','Why choose us','CONTACT','PRICE','SETTING');
for(var x1 = 0;x1 < 5;x1++){
    let d4 = f[7]('div');d4.id='hb'+x1;
    f[6](d4,'onclick','scl('+x1+')');
    f[4](d4,svg[x1]+st[x1]);
    f[3](d3,d4);
}
let d5 = f[7]('div');f[2](d5,'home')
let d6s = f[7]('span');
f[4](d6s,'Let Us Bring Your Web Pages to Life - Our Expertise at Your Service!')
f[3](d5,d6s);
let d6s2 = f[7]('span');
f[4](d6s2,"Dear Valued Customer,<br/>We hope this message finds you well. We are reaching out to let you know that we possess the expertise and passion to build your web pages and turn your digital dreams into reality. Whether you need a simple and elegant website or a complex and dynamic online platform, we are here to serve you.<br/><br/>At dhishu, we understand that having a strong online presence is crucial in today's fast-paced digital landscape. A well-designed and functional website not only enhances your brand's visibility but also creates a seamless user experience that keeps visitors coming back for more. We pride ourselves on delivering exceptional web development services tailored to your unique requirements.");
f[3](d5,d6s2);
f[3](l2,d3);
f[3](d2,l2);f[3](l2,d5);f[3](body,d2);
n['home2'] = d5.innerHTML;

var x2 = 1;var w1;
function img(){
    if(document.getElementById('im1')){
        x2 = x2 + 1;
        var img = f[0]('im1');
        f[5](img).height= 0;
        img.src = "web2/img/s"+x2+".jpg";
        setTimeout(function(){
            f[5](img).height = 90+"%";
        },1000)
        if(x2 > 5){x2 = 1;}
    }
}w1 = setInterval(img,4000);


for(var x3 = 2;x3 < 4;x3++){let d6 = f[7]('div');d6.id = 'd'+x3;f[2](d6,'d2');f[3](body,d6);}
d6 = f[7]('div');d6.id = 'top1';f[2](d6,'top1');
d7 = f[7]('div');f[2](d7,'t1');
for(var x4 = 1;x4<4;x4++){
    let d8 = f[7]('div');
    let d8s = f[7]('span');f[4](d8s,d8s.outerHTML+svg[5]);f[4](d8s,d8s.outerHTML+svg[6]);f[4](d8s,d8s.outerHTML+svg[5]);
    let d8s1 = f[7]('span');f[4](d8s1,'150LKR');
    let d8s2 = f[7]('label');f[4](d8s2,'unlimited pages(1 page 150LKR)<br/>Fast Loding<br/>Custome Disign<br/>artcale change<br/>10 change code<br/>Hosting help');
    let d9 = f[7]('div');f[2](d9,'bu');f[2](d9,'bu2');f[4](d9,'Send');
    f[3](d8,d8s);f[3](d8,d8s1);f[3](d8,d8s2);f[3](d8,d9);f[3](d7,d8);

}
f[3](d6,d7);
f[3](body,d6);
let d10 = f[7]('div');d10.id = 'top2';f[2](d10,'d2');f[2](d10,'top1');f[2](d10,'top2');
let d10s = f[7]('span');f[4](d10s,'powerd and dising by thilina kavishan');f[3](d10,d10s);
f[3](body,d10);
d6 = f[7]('script');f[6](d6,'src','web2/script.js');f[3](body,d6);