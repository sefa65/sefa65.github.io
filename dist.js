$(document).ready(function(){
    $("select").change(function(){
        setTime($('#start').val(),$("#stop").val(),$("#trans").val());
    })
})


function setTime(a,b,c){
    if (a==b){
        $('#time').html('0 heures');
        return;
    }
    var tmp;
    if (parseInt(b)<parseInt(a)){
        tmp = b;
        b = a;
        a= tmp;
    }
    switch(a){
        case "0":
            {
                switch(b){
                    case "1":
                    case "2":
                        tmp = 16;
                        break;
                    case "3":
                        tmp = 8;
                        break;
                    case "4":
                    case "6":
                        tmp = 27;
                        break;
                    case "5":
                        tmp = 19;
                        break;
                    case "7":
                        tmp = 39;
                        break;
                    case "8":
                        tmp = 43;
                        break;
                    case "9":
                        tmp = 22;
                        break;
                    case "10":
                        tmp = 42;
                        break;
                    case "11":
                        tmp = 39;
                        break;
                    case "12":
                        tmp = 54;
                        break;
                    case "13":
                        tmp = 60;
                        break;
                    case "14":
                        tmp = 52;
                        break;
                    case "15":
                        tmp = 74;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "1":
            {
                switch(b){
                    case "2":
                        tmp = 18;
                        break;
                    case "3":
                        tmp = 12;
                        break;
                    case "4":
                        tmp = 20;
                        break;
                    case "5":
                    case "6":
                        tmp = 28;
                        break;
                    case "7":
                        tmp = 43;
                        break;
                    case "8":
                        tmp = 50;
                        break;
                    case "9":
                        tmp = 11;
                        break;
                    case "10":
                        tmp = 27;
                        break;
                    case "11":
                        tmp = 23;
                        break;
                    case "12":
                        tmp = 39;
                        break;
                    case "13":
                        tmp = 44;
                        break;
                    case "14":
                        tmp = 37;
                        break;
                    case "15":
                        tmp = 61;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "2":
            {
                switch(b){
                    case "3":
                        tmp = 24;
                        break;
                    case "4":
                        tmp = 23
                        break;
                    case "5":
                        tmp = 12;
                        break;
                    case "6":
                        tmp = 20;
                        break;
                    case "7":
                        tmp = 31;
                        break;
                    case "8":
                        tmp = 35;
                        break;
                    case "9":
                        tmp = 18;
                        break;
                    case "10":
                        tmp = 42;
                        break;
                    case "11":
                        tmp = 40;
                        break;
                    case "12":
                        tmp = 53;
                        break;
                    case "13":
                        tmp = 59;
                        break;
                    case "14":
                        tmp = 53;
                        break;
                    case "15":
                        tmp = 79;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "3":
            {
                switch(b){
                    case "4":
                        tmp = 9;
                        break;
                    case "5":
                        tmp = 29;
                        break;
                    case "6":
                        tmp = 22;
                        break;
                    case "7":
                        tmp = 38;
                        break;
                    case "8":
                        tmp = 46;
                        break;
                    case "9":
                        tmp = 40;
                        break;
                    case "10":
                    case "11":
                        tmp = 19;
                        break;
                    case "12":
                    case "14":
                        tmp = 30;
                        break;
                    case "13":
                        tmp = 36;
                        break;
                    case "15":
                        tmp = 63;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "4":
            {
                switch(b){
                    case "5":
                        tmp = 25;
                        break;
                    case "6":
                        tmp = 14;
                        break;
                    case "7":
                    case "9":
                    case "10":
                    case "14":
                        tmp = 36;
                        break;
                    case "8":
                        tmp = 48;
                        break;
                    case "11":
                        tmp = 27;
                        break;
                    case "12":
                        tmp = 33;
                        break;
                    case "13":
                        tmp = 40;
                        break;
                    case "15":
                        tmp = 71;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
            case "5":
            {
                switch(b){
                    case "6":
                    case "7":
                        tmp = 19;
                        break;
                    case "8":
                        tmp = 23;
                        break;
                    case "9":
                        tmp = 12;
                        break;
                    case "10":
                        tmp = 48;
                        break;
                    case "11":
                        tmp = 47;
                        break;
                    case "12":
                        tmp = 58;
                        break;
                    case "13":
                        tmp = 65;
                        break;
                    case "14":
                        tmp = 59;
                        break;
                    case "15":
                        tmp = 89;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "6":
            {
                switch(b){
                    case "7":
                        tmp = 16;
                        break;
                    case "8":
                        tmp = 24;
                        break;
                    case "9":
                        tmp = 26;
                        break;
                    case "10":
                    case "11":
                        tmp = 40;
                        break;
                    case "12":
                        tmp = 48;
                        break;
                    case "13":
                        tmp = 54;
                        break;
                    case "14":
                        tmp = 49;
                        break;
                    case "15":
                        tmp = 85;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "7":
            {
                switch(b){
                    case "8":
                        tmp = 4;
                        break;
                    case "9":
                        tmp = 27;
                        break;
                    case "10":
                        tmp = 54;
                        break;
                    case "11":
                        tmp = 56;
                        break;
                    case "12":
                        tmp = 61;
                        break;
                    case "13":
                        tmp = 68;
                        break;
                    case "14":
                        tmp = 64;
                        break;
                    case "15":
                        tmp = 100;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "8":
            {
                switch(b){
                    case "9":
                        tmp = 26;
                        break;
                    case "10":
                        tmp = 62;
                        break;
                    case "11":
                        tmp = 64;
                        break;
                    case "12":
                        tmp = 69;
                        break;
                    case "13":
                        tmp = 77;
                        break;
                    case "14":
                        tmp = 74;
                        break;
                    case "15":
                        tmp = 108;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "9":
            {
                switch(b){
                    case "10":
                    case "11":
                        tmp = 59;
                        break;
                    case "12":
                        tmp = 69;
                        break;
                    case "13":
                        tmp = 75;
                        break;
                    case "14":
                        tmp = 70;
                        break;
                    case "15":
                        tmp = 96;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "10":
            {
                switch(b){
                    case "11":
                        tmp = 8;
                        break;
                    case "12":
                        tmp = 12;
                        break;
                    case "13":
                        tmp = 17;
                        break;
                    case "14":
                        tmp = 11;
                        break;
                    case "15":
                        tmp = 50;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "11":
            {
                switch(b){
                    case "12":
                        tmp = 19;
                        break;
                    case "13":
                        tmp = 22;
                        break;
                    case "14":
                        tmp = 14;
                        break;
                    case "15":
                        tmp = 45;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "12":
            {
                switch(b){
                    case "13":
                        tmp = 7;
                        break;
                    case "14":
                        tmp = 10;
                        break;
                    case "15":
                        tmp = 52;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "13":
            {
                switch(b){
                    case "14":
                        tmp = 9;
                        break;
                    case "15":
                        tmp = 46;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "14":
            {
                switch(b){
                    case "15":
                        tmp = 41;
                        break;
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        case "15":
            {
                switch(b){
                    default :
                        tmp = 0;
                        break;
                }
            }
            break;
        default:
            tmp = 0;
            break;
    }
    if (tmp == 0){
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
            $('#time').html(dayify(tmp/3));
            break;
        case "4":
            $('#time').html(dayify(tmp));
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

function dayify(time){
    var d = Math.floor(time/9);
    if (d == time){
        return ( time + ' jours');
    }
    return ( d + ' jours ' + hourify(time%9));
}