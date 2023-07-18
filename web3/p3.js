
let scrollTimeout;
function d5Scroll() {
    clearTimeout(scrollTimeout);
    if (!scrollTimeout) {
        sr['d5scroll'] = false;
    }
    scrollTimeout = setTimeout(function () {
    scrollTimeout = null;
    sr['d5scroll'] = true;
    }, 200);
}

function page3(srn,srn2){
    if(w){
        if(w[1] !=0){
            clearInterval(w[1]);
        }
    }
    let d5 = f[7]('div');f[2](d5,'d5');f[6](d5,'onscroll','d5Scroll()');
    let d5_1 = f[7]('div');f[2](d5,'l1');
    let d5_2 = f[7]('span');f[2](d5,'sp');
    f[4](d5_2,'<p class="d5_P">Why choose us as your web development partner?</p>');
    let d5_3 = f[7]('ol');
    f[3](d5_2,d5_3);
    f[3](d5_1,d5_2);
    f[3](d5,d5_1);
    f[4](div,'');f[3](div,d5);
    w[3]=["<p>Unparalleled Expertise: Our team consists of seasoned professionals who have mastered the art of web development. From coding wizards to design maestros, we have the talent to bring your vision to life.</p>",
        "<p>Customized Solutions: We believe that every business is unique, and your website should reflect that. Our approach involves understanding your specific goals and tailoring a solution that aligns perfectly with your brand identity.</p>",
        "<p>Cutting-Edge Technologies: We stay ahead of the curve by keeping up with the latest trends and technologies in web development. Rest assured, your website will be built using the most robust and innovative tools available.</p>",
        "<p>User-Centric Design: We prioritize the user experience, ensuring that your website is intuitive, visually appealing, and optimized for conversions. Our designs are crafted to engage and captivate your audience from the moment they land on your site.</p>",
        "<p>Timely Delivery: We understand the importance of meeting deadlines. With our efficient project management and streamlined development process, we strive to deliver your web pages on time, without compromising on quality.</p>",
        "<p>Ongoing Support: Our commitment to your success doesn't end with the completion of your website. We provide reliable post-launch support and maintenance services to ensure your website continues to perform flawlessly.</p>"
    ];
    for(var x2=0;x2<6;x2++){
        let d5_4 = f[7]('li');
        f[4](d5_4,w[3][x2]);
        f[3](d5_3,d5_4);
    }
    setTimeout(function(){if(f[1]('.d5')){
        f[1]('.d5').scrollTo(0,500);
    }},3000);
    //document.getElementById('d2').onscroll
    //d5.addEventListener('scroll',function(){
    //    alert(d5.offsetHeight +'/'+ d5.scrollTop);
    //});
}
page3();