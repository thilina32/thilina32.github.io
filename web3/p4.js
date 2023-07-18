
let nr2 = {'in1':'name','in2':'email','in3':'numder'};
function inf(id){
    f[0](id+'s').innerText = nr2[id]+': '+ f[0](id).value;

}
function page4(){
    if(w[1]){
        if(w[1] !=0){
            clearInterval(w[1]);
        }
    }
    div.innerHTML = '<div class="d6_1"><div class="d6"><div></div><div></div><div></div></div><div class="d6_2"><span id="in1s">Name</span><input oninput="inf(this.id)" id="in1"/></div><div class="d6_2"><span id="in2s">Email</span><input oninput="inf(this.id)" id="in2"/></div><div class="d6_2"><span id="in3s">Number</span><input oninput="inf(this.id)" id="in3"/></div><textarea placeholder="message" id="in5" cols="30" rows="10">Type massege hear: \n</textarea><div class="in5"><button onclick="send();">Send</button></div></div>';
    let nr1 = (f[1]('.d6_2').offsetWidth);
    for(w[4]=1;w[4]<4;w[4]++){
        f[0]('in'+w[4]).style.width = (nr1-20)+'px';
        f[0]('in'+w[4]).style.display = "unset";
    };
    //document.getElementById("d").style.display = "unset"; 
}
page4();