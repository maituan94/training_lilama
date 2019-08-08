var mess_obj={
    auto:"auto",
    automation:"automation",
    manual:"manual",
    slow_speed:"slow speed",
    low_speed:"low speed",
    high_speed:"high speed",
    hi_speed:"hi speed",
    back_auto:"back auto",
    back_automation:"back automation",
    home_automation:"home automation",
    back_manual:"back manual",
    reset:"reset",
    run:"run",
    stop:"stop",
    stopped:"stopped",
    end:"end",
    one:"1",
    two:"2",
    two_other:"to",
    three:"3",
    four:"4",
    five:"5",
    one_one:"one",
    two_two:"two",
    three_three:"three",
    four_four:"four",
    five_five:"five",
    cylin_1:"cylinder 1",
    cylin_1_other:"cylinder one",
    cylin_2:"cylinder 2",
    cylin_2_other:"cylinder two",
    cylin_2_to:"cylinder to",
    cylin_3:"cylinder 3",
    cylin_3_other:"cylinder three",
    cylin_4:"cylinder 4",
    cylin_4_other:"cylinder four",
    cylin_5:"cylinder 5",
    cylin_5_other:"cylinder five",
    back_auto_tv:"tự động trở về",
    back_manual_tv:"bằng tay trở về",
    auto_tv:"tự động",
    auto_start_tv:"bắt đầu",
    auto_stop_tv:"dừng lại",
    auto_stop_tv_other:"dân",
    reset_tv:"đặt lại",
    reset_tv_other:"đặc lại",
    manual_tv:"bằng tay",
    slow_speed_tv:"chạy chậm",
    high_speed_tv:"chạy nhanh",
    cy_1_tv:"một",
    cy_2_tv:"hai",
    cy_2_tv_other:"hài",
    cy_3_tv:"ba",
    cy_4_tv:"bốn",
    cy_5_tv:"năm",
    cy_1_tv_num:"1",
    cy_2_tv_num:"2",
    cy_3_tv_num:"3",
    cy_4_tv_num:"4",
    cy_5_tv_num:"5",
}

// var message_json={
//     auto:["auto","automation","oto"],
//     manual:["manual"],
//     back_auto:["back auto","back automation","home automation"],
// }

// function isContainstring(command,message){
//     if(command.includes(message)){
//         return message
//     }
// }


// function voice_decode(command){
    
// }

function voice_decode(command){
    switch(command){
        case mess_obj.auto:
            displayAuto()
            break;
        case mess_obj.automation:
            displayAuto()
            break;
        case mess_obj.manual:
            displayManual()
            break;
        case mess_obj.back_automation:
            back_from_auto()
            break;
        case mess_obj.home_automation:
            back_from_auto()
            break;
        case mess_obj.slow_speed:
            run_slow()
            break;
        case mess_obj.high_speed:
            run_fast()
            break;
        case mess_obj.hi_speed:
            run_fast()
            break;
        case mess_obj.back_manual:
            back_from_manual()
            break;
        case mess_obj.reset:
            auto_reset()
            break;
        case mess_obj.run:
            auto_start()
            break;
        case mess_obj.stop:
            auto_stop()
            break;
        case mess_obj.stopped:
            auto_stop()
            break;
        case mess_obj.end:
            auto_stop()
            break;
        case mess_obj.cylin_1:
            cylinder_1()
            break;
        case mess_obj.one:
            cylinder_1()
            break;
        case mess_obj.one_one:
            cylinder_1()
            break;
        case mess_obj.cylin_1_other:
            cylinder_1()
            break;
        case mess_obj.cylin_2:
            cylinder_2()
            break;
        case mess_obj.two:
            cylinder_2()
            break;
        case mess_obj.two_two:
            cylinder_2()
            break;
        case mess_obj.cylin_2_other:
            cylinder_2()
            break;
        case mess_obj.cylin_2_to:
            cylinder_2()
            break;
        case mess_obj.cylin_3:
            cylinder_3()
            break;
        case mess_obj.three:
            cylinder_3()
            break;
        case mess_obj.three_three:
            cylinder_3()
            break;
        case mess_obj.cylin_3_other:
            cylinder_3()
            break;
        case mess_obj.cylin_4:
            cylinder_4()
            break;
        case mess_obj.four:
            cylinder_4()
            break;
        case mess_obj.four_four:
            cylinder_4()
            break;
        case mess_obj.cylin_4_other:
            cylinder_4()
            break;
        case mess_obj.cylin_5:
            cylinder_5()
            break;
        case mess_obj.five:
            cylinder_5()
            break;
        case mess_obj.five_five:
            cylinder_5()
            break;
        case mess_obj.cylin_5_other:
            cylinder_5()
            break;
        //vietnamese
        case mess_obj.auto_tv:
            displayAuto()
            break;
        case mess_obj.back_auto_tv:
            back_from_auto()
            break;
        case mess_obj.back_manual_tv:
            back_from_manual()
            break;
        case mess_obj.auto_start_tv:
            auto_start();   
            break;
        case mess_obj.auto_stop_tv:
            auto_stop();   
            break;
        case mess_obj.auto_stop_tv_other:
            auto_stop();   
            break;
        case mess_obj.reset_tv:
            auto_reset();   
            break;
        case mess_obj.reset_tv_other:
            auto_reset();   
            break;
        case mess_obj.manual_tv:
            displayManual()
            break;
        case mess_obj.high_speed_tv:
            run_fast()
            break;
        case mess_obj.slow_speed_tv:
            run_slow()
            break;
        case mess_obj.cy_1_tv:
            cylinder_1()
            break;
        case mess_obj.cy_1_tv_num:
            cylinder_1()
            break;
        case mess_obj.cy_2_tv:
            cylinder_2()
            break;
        case mess_obj.cy_2_tv_num:
            cylinder_2()
            break;
        case mess_obj.cy_2_tv_other:
            cylinder_2()
            break;
        case mess_obj.cy_3_tv:
            cylinder_3()
            break;
        case mess_obj.cy_3_tv_num:
            cylinder_3()
            break;
        case mess_obj.cy_4_tv:
            cylinder_4()
            break;
        case mess_obj.cy_4_tv_num:
            cylinder_4()
            break;
        case mess_obj.cy_5_tv:
            cylinder_5()
            break;
        case mess_obj.cy_5_tv_num:
            cylinder_5()
            break;
        default:
            break;
    }
}