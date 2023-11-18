'use strict';

document.addEventListener('DOMContentLoaded', function(){
    function hoverText(selector, textSelector){
        selector.forEach((item, i)=>{
            item.addEventListener('mouseenter', function(){
                textSelector[i].style.color = '#fff';
            });
        });

        selector.forEach((item, i)=>{
            item.addEventListener('mouseleave', function(){
                textSelector[i].style.color = 'red';
            });
        });
    }

    hoverText(document.querySelectorAll('.humburger'), document.querySelectorAll('.text_red'));

    const blockSlider = document.querySelector('.slider');

    let imgForSlider = [
        '../img/slider/set_bar.jpg',
        '../img/slider/dragons.jpg'
        ],
        index = 1;

    blockSlider.style.background = 'url(' + imgForSlider[index] + ') center center/cover no-repeat';

    let slider = setInterval(function slid(){
        if(index == imgForSlider.length){
            index = 0;
        }
        else{
            blockSlider.style.background = 'url(' + imgForSlider[index] + ') center center/cover no-repeat';
            index++;
        }
        
    }, 5000);

});