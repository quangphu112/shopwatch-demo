// Sticky
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()){
            $('#header').addClass('sticky');
        }
        else{
            $('#header').removeClass('sticky');
        }
    });
});



// Img-background
var index = 1;
 changeImg = function() {
    var imgs = [
                'assets/img/slide1.jpg',
                'assets/img/slide2.jpg',
                'assets/img/slide3.jpg'
               ];
                document.querySelector('#img-slider').src = imgs[index];
                index++;
                if(index == 3){
                    index = 0;
                }        
}
setInterval(changeImg,5000)


// Show Login

document.querySelector('.js-link-login').addEventListener('click', function(){
    document.querySelector('.js-modal-login').classList.add('open-login') 
});







