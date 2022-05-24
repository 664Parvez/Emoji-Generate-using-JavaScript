let img_1 = document.getElementById('img1');
let img_2 = document.getElementById('img2');
let img_3 = document.getElementById('img3');
let img_4 = document.getElementById('img4');
let img_5 = document.getElementById('img5');
let img_6 = document.getElementById('img6');
let img_7 = document.getElementById('img7');

img_1.addEventListener('click', function() {
    let img1 = document.getElementById('resImg');
    img1.src = img_1.src;
    let detail = document.getElementById('detail').innerHTML = 'Happy';
})

img_2.addEventListener('click', function() {
    let img2 = document.getElementById('resImg');
    img2.src = img_2.src;
    let detail = document.getElementById('detail').innerHTML = 'Love';
})

img_3.addEventListener('click', function() {
    let img3 = document.getElementById('resImg');
    img3.src = img_3.src;
    let detail = document.getElementById('detail').innerHTML = 'Clap';
})

img_4.addEventListener('click', function() {
    let img4 = document.getElementById('resImg');
    img4.src = img_4.src;
    let detail = document.getElementById('detail').innerHTML = 'Safe';
})

img_5.addEventListener('click', function() {
    let img5 = document.getElementById('resImg');
    img5.src = img_5.src;
    let detail = document.getElementById('detail').innerHTML = 'Sleep';
})

img_6.addEventListener('click', function() {
    let img6 = document.getElementById('resImg');
    img6.src = img_6.src;
    let detail = document.getElementById('detail').innerHTML = 'Surprise';
})

img_7.addEventListener('click', function() {
    let img7 = document.getElementById('resImg');
    img7.src = img_7.src;
    let detail = document.getElementById('detail').innerHTML = 'Drunk';
})