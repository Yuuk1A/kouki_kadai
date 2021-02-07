var image = new Array;
image[0]=new Image();
image[0].scr="img/0.png";
image[1]=new Image();
image[1].scr="img/1.png";
image[2]=new Image();
image[2].scr="img/3.png";
image[3]=new Image();
image[3].scr="img/4.png";

var cnt=0;
function slidesw(){if(document.getElementById){document.slide.elements[0].disabled=true;
                    document.getElementById("sd").scr=image[cnt].scr;cnt++;
                    if(cnt<=3){var timer1=setTimeout("slidesw()",5000);}
                    else{cnt=0;
                        document.slide.elements[0].disabled=false;clearTimeout(timer1);}}}