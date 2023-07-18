function schange(a2){
    let d = f[1]('.home');
    let d2 = f[1]('.l1');
    let d3 = f[5](f[0]('top1'));
    let wh = window.outerHeight;
    if(window.scrollY < wh / 2){
        if(a==1 || a2==1){
            a=0;
            w1 = setInterval(img,4000);
            body.style.backgroundColor = "rgb(56, 0, 0)";
            d2.innerHTML = n['home1'];
        d.innerHTML = n['home2'];
    }}
    if(window.scrollY > wh / 1.2 && window.scrollY < (wh*2) / 1.2){
        if(a == 0 || a == 2 || a2==1){
            a = 1;
            clearInterval(w1);
            body.style.backgroundColor = "rgb(46, 0, 42)";
            d2.innerHTML ="<span class='sp'><p>Why choose us as your web development partner?</p><ol><li><p>Unparalleled Expertise: Our team consists of seasoned professionals who have mastered the art of web development. From coding wizards to design maestros, we have the talent to bring your vision to life.</p></li><li><p>Customized Solutions: We believe that every business is unique, and your website should reflect that. Our approach involves understanding your specific goals and tailoring a solution that aligns perfectly with your brand identity.</p></li></ol></span>";
        d.innerHTML = "<span><ol><li class='none'></li><li class='none'></li><li><p>Cutting-Edge Technologies: We stay ahead of the curve by keeping up with the latest trends and technologies in web development. Rest assured, your website will be built using the most robust and innovative tools available.</p></li><li><p>User-Centric Design: We prioritize the user experience, ensuring that your website is intuitive, visually appealing, and optimized for conversions. Our designs are crafted to engage and captivate your audience from the moment they land on your site.</p></li><li><p>Timely Delivery: We understand the importance of meeting deadlines. With our efficient project management and streamlined development process, we strive to deliver your web pages on time, without compromising on quality.</p></li><li><p>Ongoing Support: Our commitment to your success doesn't end with the completion of your website. We provide reliable post-launch support and maintenance services to ensure your website continues to perform flawlessly.</p></li></ol></span>";
    }
    }
    if(window.scrollY > (wh*2) / 1.2 && window.scrollY < (wh*4) / 1.2){
        if(a == 1 || a == 3 || a2==1){
            a = 2;
            body.style.backgroundColor = "rgb(59, 59, 0)";
            d2.innerHTML ='<div class="co"><div><span>Full name</span><input id="in1" type="text"></div><div><span>Email</span><input id="in2" type="text"></div><div><span>Contact numder(whatsapp)</span><input id="in3" type="text"></div><div><span>Title</span><input id="in4" type="text"></div><div><span>Dr</span><textarea id="in5" type="text"></textarea></div><span><div onclick="send();" class="bu bu2">send</div></span></div>';
            d3.height='100vh';
            d3.boxShadow = '30px 0px 80px 90px rgb(55, 55, 55)';
            d.innerHTML = '<div class="gr"><div style="background-image: url(img/social16.svg);" class="list"><h3>contact on whatsapp</h3><span>+94719036042</span><span><a href="http://wa.com" target="_blank" rel="noopener noreferrer"><button class="bu">Join</button></a></span></div><div style="background-image: url(img/social28.svg);" class="list"><h3>contact on Telegram</h3><span>+94719036042</span><span><a href="http://wa.com" target="_blank" rel="noopener noreferrer"><button class="bu">Join</button></a></span></div><div style="background-image: url(img/social28.svg);" class="list"><h3>contact on Email</h3><span>+94719036042</span><span><a href="http://wa.com" target="_blank" rel="noopener noreferrer"><button class="bu">Join</button></a></span></div><div class="list"><h3>more</h3><span>gmail: thilinakavishan32@gmail.com</span><br/><span>+94716963286</span></div></div>';
        }
    }
    if(window.scrollY > (wh*4) / 1.2){
        if(a == 2 || a == 4 || a2==1){
            a = 3;
            d3.height='0px';
            d2.innerHTML ='';
            d.innerHTML ='';
            d3.boxShadow = 'none';
        }
    }
}
function scl(id){
    if(id == 4){}//code setting
    else{
        window.scrollTo(0,window.outerHeight*id);
        schange(1);
    }
}
var a= 0;
document.addEventListener("scroll",function(){
    schange(0);
});
schange(1);