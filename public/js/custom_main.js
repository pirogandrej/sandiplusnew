$(window).on("mousewheel", function(e){
    if ( scroll_allowed == 0 ){
        e.preventDefault();
    }
    mouse_y_scroll = $(window).scrollTop();
    delta = e.deltaY || e.detail || e.wheelDelta;
    if(((sumdelta > 0) || ((sumdelta == 0) && (delta < 0))) && (scroll_allowed == 1)){
        sumdelta = sumdelta + (-1)*delta*100;
    }
    if((sumdelta > hwin) && (scroll_allowed == 1)){
        sumdelta = hwin;
    }
    if((sumdelta < 0) && (scroll_allowed == 1)){
        sumdelta = 0;
    }
    // console.log('hwin = ' + hwin + ' | m_y_scroll = ' + mouse_y_scroll + ' | s_y_scroll = ' + scroll_y_scroll + ' | scroll_allowed = ' + scroll_allowed + ' | delta = ' + delta+ ' | sumdelta = ' + sumdelta + ' ---> scroll');
    if (( sumdelta > 0 ) && ( sumdelta <= 100 ) && ( delta == -1 ) && (scroll_allowed == 1)){
        e.preventDefault();
        process_to_down();
    }
    if (( sumdelta >= (hwin - 100) ) && ( sumdelta < hwin ) && ( delta == 1 ) && (scroll_allowed == 1)){
        e.preventDefault();
        process_to_top();
    }
});

$(window).bind('scroll', function (e) {
    var scroll_direction;
    scroll_y_scroll = $(window).scrollTop();
    if( scroll_y_scroll > old_scroll_y_scroll ){
        scroll_direction = -1;
    }
    else{
        scroll_direction = 1;
    }
    old_scroll_y_scroll = scroll_y_scroll;
    // console.log('hwin = ' + hwin + ' | m_y_scroll = ' + mouse_y_scroll + ' | s_y_scroll = ' + scroll_y_scroll + ' | scroll_allowed = ' + scroll_allowed + ' | delta = ' + scroll_direction + '---> scroll');
    if (( scroll_y_scroll > 0 ) && ( scroll_y_scroll <= 50 ) && (scroll_allowed == 1) && (scroll_direction == -1)){
        scroll_allowed = 0;
        process_to_down();
    }
    if (( scroll_y_scroll >= (hwin - 100)) && ( scroll_y_scroll < hwin ) && (scroll_allowed == 1) && (scroll_direction == 1)){
        scroll_allowed = 0;
        process_to_top();
    }
});
