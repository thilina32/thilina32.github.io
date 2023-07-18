function change(){
    let d4 = document.querySelector('.d7').querySelector('div').style;
    w[2] = w[2]+1;
    d4.backgroundSize ='0%';
    d4.backgroundImage ='url(web3/img/s'+w[2]+'.jpg)';
    if(w[2] == 6){
        w[2] = 0;
    }
    setTimeout(function(){d4.backgroundSize='100%';},1000);
}


function page5(){
    div.innerHTML = '<div class="d7_2"><div class="d7"><div></div></div><div class="d7_1">powerd and dising by thilina kavishan</div></div>';
    w[1] = setInterval(change,5000);
}
page5();

