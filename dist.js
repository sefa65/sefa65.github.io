var towns = [
        [0,16,16,8,27,19,27,39,43,22,42,39,54,60,52,74],
        [16,0,18,12,20,28,28,43,50,11,27,23,39,44,37,61],
        [16,18,0,24,23,12,20,31,35,18,42,40,53,59,53,79],
        [8,12,24,0,9,29,22,38,46,40,19,19,30,36,30,63],
        [27,20,23,9,0,25,14,36,38,36,36,27,33,40,36,71],
        [19,28,12,29,25,0,19,19,23,12,48,47,58,66,59,89],
        [27,28,20,22,14,19,0,16,24,26,40,40,48,54,49,85],
        [39,43,31,38,36,19,16,0,4,27,54,56,61,68,64,100],
        [43,50,35,46,38,23,24,4,0,26,62,64,69,77,74,108],
        [22,11,18,40,36,12,26,27,26,0,59,59,69,75,70,96],
        [42,27,42,19,36,48,40,54,62,59,0,8,12,17,11,50],
        [39,23,40,19,27,47,40,56,64,59,8,0,16,22,14,45],
        [54,39,53,30,33,58,48,61,69,69,12,19,0,7,10,52],
        [60,44,59,36,40,65,54,68,77,75,17,22,7,0,9,46],
        [52,37,53,30,36,59,49,64,74,70,11,14,10,9,0,41],
        [74,61,79,63,71,89,85,100,108,96,50,45,52,46,41,0]
    ];

$(document).ready(function(){
    $("form").submit(function(){return false;});
    $("select").change(function(){
        setTime($('#start').val(),$("#stop").val(),$("#trans").val(),parseInt($("#hours").val()));
    });
    $("#hours").change(function(){
        var hours = parseInt($("#hours").val());
        if ( !isNaN(hours) && 0 < hours && hours <= 24 ){
            setTime($('#start').val(),$("#stop").val(),$("#trans").val(),Math.floor(hours));
        }
        else{
            setTime($('#start').val(),$("#stop").val(),$("#trans").val(),9);
            $("#hours").val(9);
            $("#hours").html(9);
            $("#hours").text(9);
        }
    });
});


function setTime(a,b,c,d){
    if (a==b){
        $('#time').html('0 heures');
        return;
    }
    var tmp = towns[a][b];

    if (tmp < 0){
        $('#time').html('pas encore implementer');
        return;
    }
    switch(c){
        case "0":
        case "1":
            $('#time').html(tmp + ' heures');
            break;
        case "2":
            $('#time').html(hourify(tmp/3));
            break;
        case "3":
            $('#time').html(dayify(tmp/3,d));
            break;
        case "4":
            $('#time').html(dayify(tmp,d));
            break;
    }
}

function hourify(time){
    var h = Math.floor(time);
    if ( h == time){
        return ( time + ' heures');
    }
    var m = Math.floor((time - h) * 60);
    return ( h + ' heures ' + m + ' minutes');
}

function dayify(time,hpd){
    var d = Math.floor(time/hpd);
    if (d == time){
        return ( time + ' jours');
    }
    return ( d + ' jours ' + hourify(time%9));
}