function send(){
    let msg;
    msg = 'Name:+'+f[0]('in1').value+'\nEmail:+'+f[0]('in2').value+'\n+Number:+'+f[0]('in3').value;
    if(f[0]('in4')){
        msg = msg + '\n+Title:+'+f[0]('in4').value;
    }
    msg = msg + '\n+msg:+\n'+f[0]('in5').value;
    alert(msg);

    let r = new XMLHttpRequest();
    r.open('get','https://api.callmebot.com/whatsapp.php?phone=94716963286&text='+msg+'&apikey=9447479',true);
    r.send();
}