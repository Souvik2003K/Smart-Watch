var TimeSpan = document.getElementById('span');
var hImg = document.querySelector('.hImg');
var hNote = document.querySelector('.hNote');
var spImg = document.querySelector('.spImg');

var red = document.getElementById('red');
var blue = document.getElementById('blue');
var pink = document.getElementById('pink');
var green = document.getElementById('green');
var face = document.getElementById('watch-face');

var time = document.getElementById('tm');
var heart = document.getElementById('hb');
var sport = document.getElementById('sp');

var buying = document.getElementById('buy');


function timing(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    TimeSpan.textContent = 
    ("" + h).substring(-2) + ":" + ("" + m).substring(-2) + ":" + ("" + s).substring(-2);
}


blue.addEventListener('click',function(){
    var watchImg = 'images/blue.png';
    face.src = watchImg;
});
red.addEventListener('click',function(){
    var watchImg = 'images/red.png';
    face.src = watchImg;
});
pink.addEventListener('click',function(){
    var watchImg = 'images/pink.png';
    face.src = watchImg;
});
green.addEventListener('click',function(){
    var watchImg = 'images/green.png';
    face.src = watchImg;
});




time.onclick = function(){
    spImg.style.display = "none";
    hImg.style.display = "none";
    TimeSpan.style.display = "inline";
    hNote.style.display = "none";
}
time.addEventListener('click',timing);
setInterval(timing, 1000);

buying.onclick = function(){
    alert('The item has been added to the cart\nCheckout your cart and proceed');
}

heart.addEventListener('click',function(){
    TimeSpan.style.display = "none";
    hImg.style.display = "inline";
    spImg.style.display = "none";
    hNote.style.display = "block";
})
sport.addEventListener('click',function(){
    spImg.style.display = "inline";
    TimeSpan.style.display = "none";
    hImg.style.display = "none";
    hNote.style.display = "none";
})

