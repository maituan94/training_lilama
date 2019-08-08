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
    cylin_1:"cylinder 1",
    cylin_1_other:"cylinder one",
    cylin_2:"cylinder 2",
    cylin_2_other:"cylinder two",
    cylin_3:"cylinder 3",
    cylin_3_other:"cylinder three",
    cylin_4:"cylinder 4",
    cylin_4_other:"cylinder four",
    cylin_5:"cylinder 5",
    cylin_5_other:"cylinder five",
}   

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
        case mess_obj.cylin_1_other:
            cylinder_1()
            break;
        case mess_obj.cylin_2:
            cylinder_2()
            break;
        case mess_obj.cylin_2_other:
            cylinder_2()
            break;
        case mess_obj.cylin_3:
            cylinder_3()
            break;
        case mess_obj.cylin_3_other:
            cylinder_3()
            break;
        case mess_obj.cylin_4:
            cylinder_4()
            break;
        case mess_obj.cylin_4_other:
            cylinder_4()
            break;
        case mess_obj.cylin_5:
            cylinder_5()
            break;
        case mess_obj.cylin_5_other:
            cylinder_5()
            break;
        default:
            break;


    }
}