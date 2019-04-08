var switchButton = $('.switch-button');
var switchBtnRight = $('.switch-button-case.right');
var switchBtnLeft = $('.switch-button-case.left');
var activeSwitch = $('.active');

function switchLeft() {
    switchBtnRight.removeClass('active-case');
    switchBtnLeft.addClass('active-case');
    activeSwitch.css("left","0%")
}

function switchRight() {
    switchBtnRight.addClass('active-case');
    switchBtnLeft.removeClass('active-case');
    activeSwitch.css('left','50%')
}

switchBtnLeft.click(function(){
    switchLeft();
})

switchBtnRight.click(function(){
    switchRight();
})
