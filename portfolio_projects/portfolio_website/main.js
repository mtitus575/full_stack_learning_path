//Clickability to the portfolio navigtion bar:
const clickAll = document.getElementById('all').addEventListener('click', function () {
    document.getElementById('img1').style.display = 'flex';
    document.getElementById('img2').style.display = 'flex';
    document.getElementById('img3').style.display = 'flex';
});
const clickWebsites = document.getElementById('sites').addEventListener('click', function () {
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'flex';
    document.getElementById('img3').style.display = 'none';
});
const clickApps = document.getElementById('apps').addEventListener('click', function () {
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'flex';
});

//Click each image to show options:
//img1:
const img1Click = document.getElementById('img1').addEventListener('click', function () {
    document.getElementById('img1Info').style.display = 'flex';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    //Below removes the box shadow from .img1
    document.getElementById('img1').style.boxShadow = 'none';
});
const img1MouseOut = document.getElementById('img1Info').addEventListener('mouseout', function () {
    document.getElementById('img1Info').style.display = 'none';
    document.getElementById('img1').style.boxShadow = '';
    document.getElementById('img1').style.display = '';
    document.getElementById('img2').style.display = '';
    document.getElementById('img3').style.display = '';
});

//img2:
const img2Click = document.getElementById('img2').addEventListener('click', function () {
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2Info').style.display = 'flex';
    document.getElementById('img3').style.display = 'none';
    //Below removes the box shadow from .img1
    document.getElementById('img2').style.boxShadow = 'none';
});
const img2MouseOut = document.getElementById('img2Info').addEventListener('mouseout', function () {
    document.getElementById('img2Info').style.display = 'none';
    document.getElementById('img2').style.boxShadow = '';
    document.getElementById('img1').style.display = '';
    document.getElementById('img2').style.display = '';
    document.getElementById('img3').style.display = '';
});

//img3
const img3Click = document.getElementById('img3').addEventListener('click', function () {
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3Info').style.display = 'flex';
    //Below removes the box shadow from .img1
    document.getElementById('img3').style.boxShadow = 'none';
});
const img3MouseOut = document.getElementById('img3Info').addEventListener('mouseout', function () {
    document.getElementById('img3Info').style.display = 'none';
    document.getElementById('img3').style.boxShadow = '';
    document.getElementById('img1').style.display = '';
    document.getElementById('img2').style.display = '';
    document.getElementById('img3').style.display = '';
});