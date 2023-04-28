var TimeSpan = document.getElementById('span');
var hImg = document.querySelector('.hImg');
var hNote = document.querySelector('.hNote');
var spImg = document.querySelector('.spImg');

var purple = document.getElementById('purple');
var burgundy = document.getElementById('burgundy');
var burlywood = document.getElementById('burlywood');
var orange = document.getElementById('orange');
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


burgundy.addEventListener('click',function(){
    var watchImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pptf-D8FWjk2pjjsblREUJGK75y6uVENPPAVkEGiTUUIIldS'; // burgundy
    face.src = watchImg;
});
burlywood.addEventListener('click',function(){
    var watchImg = 'https://rukminim1.flixcart.com/image/416/416/khi0yvk0-0/smart-watch-band-strap/9/6/g/ultra-soft-silicone-sport-watch-strap-smart-watch-strap-zeddy-original-imafxhuhnxa8mpmr.jpeg?q=70'; //burlywood
    face.src = watchImg;
});
orange.addEventListener('click',function(){
    var watchImg = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR64cbJld0qibMEGYE1GtBVhy743XMRVqoPuhIqEv8HeggRtm_l'; // orange
    face.src = watchImg;
});
purple.addEventListener('click',function(){
    var watchImg = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRoK5aImDGC-LjacCcAec_5bNAqnzuwsE35KYU1aJwBa4Cl7sOw'; // light purple
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

