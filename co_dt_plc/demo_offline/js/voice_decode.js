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
        default:
            break;
    }
}