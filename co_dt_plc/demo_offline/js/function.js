function displayHome(id, status) {
    if (status == "hide") {
        $('#' + id).hide()
    } else if (status == "show") {
        $('#' + id).show()
    }
}

function displayAuto(){
    displayHome('content_home', 'hide')
    displayHome('content_auto', 'show')
    $.get(url + '?"AUTO_WBS"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"AUTO_WBS"=0', function () { })
    }, 250)
}

function displayManual(){
    displayHome('content_home', 'hide')
    displayHome('content_manual', 'show')
    $.get(url + '?"MAN_WBS"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"MAN_WBS"=0', function () { })
    }, 250)
}

function back_from_auto(){
    displayHome('content_home', 'show')
    displayHome('content_auto', 'hide')
    $.get(url + '?"RESET ERROR AUTO"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"RESET ERROR AUTO"=0', function () { })
    }, 250)
}

function back_from_manual(){
    displayHome('content_home', 'show')
    displayHome('content_manual', 'hide')
    $.get(url + '?"RESET ERROR MANUAL"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"RESET ERROR MANUAL"=0', function () { })
    }, 250)
}

function run_fast(){
    $.get(url + '?"CHAY_NHANH"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"CHAY_NHANH"=0', function () { })
    }, 250)
}

function run_slow(){
    $.get(url + '?"CHAY_CHAM"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"CHAY_CHAM"=0', function () { })
    }, 250)
}

function cylinder_1(){
    $.get(url + '?"XYLANH_1"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"XYLANH_1"=0', function () { })
    }, 250)
}

function cylinder_2(){
    $.get(url + '?"XYLANH_2"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"XYLANH_2"=0', function () { })
    }, 250)
}
function cylinder_3(){
    $.get(url + '?"XYLANH_3"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"XYLANH_3"=0', function () { })
    }, 250)
}
function cylinder_4(){
    $.get(url + '?"XYLANH_4"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"XYLANH_4"=0', function () { })
    }, 250)
}
function cylinder_5(){
    $.get(url + '?"XYLANH_5"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"XYLANH_5"=0', function () { })
    }, 250)
}


function auto_start(){
    $.get(url + '?"START_WBS"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"START_WBS"=0', function () { })
    }, 250)
}

function auto_stop(){
    $.get(url + '?"STOP_WBS"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"STOP_WBS"=0', function () { })
    }, 250)
}

function auto_reset(){
    $.get(url + '?"RESET_WBS"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"RESET_WBS"=0', function () { })
    }, 250)
}

function btnset(){
    $.get(url + '?"Set_Quantity"=1', function () { })
    setTimeout(function () {
        $.get(url + '?"Set_Quantity"=0', function () { })
    }, 250)
}