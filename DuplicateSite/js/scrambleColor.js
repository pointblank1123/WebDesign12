
var color = "#";
var tempColor = "";
var alpha = ["A","B","C","D","E","F"];
var i;
function scramble(){
    for(i = 0; i<2;i++){
        for(i = 0; i<6; i++){
            tempColor = Math.floor(Math.random()*17);
            if(tempColor-9 > 0){
                tempColor = alpha[i];
            }
            color +=tempColor;
            console.log(color);
        }
        document.body.style.background = color;
        color = "#";
        var start = new Date().getTime();
        while (new Date().getTime() < start + 1);
    }
}