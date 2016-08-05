MONTH = ['Bouclier','Berserker','Chameau','Dragon noir','Hibou-Tr&eacute;ant','&Eacute;l&eacute;phant','Aurige','Pierre de Sceau','Gobelin','Clef','Marteau','Bateau'];

$(document).ready(function(){
    $("form").submit(function(){return false;});
    $("#to-convert").change(function(){
        convert($("#to-convert").val());
    });
});

function convert(date_to_convert){
    var tmp = date_to_convert.split("-");
    var year = parseInt(tmp[0])-1731;
    var month = calcMonth(parseInt(tmp[1]));
    var day = parseInt(tmp[2]);
    $('#result').html(day + ' ' + month + ' ' + year);
}

function calcMonth(val){
    return MONTH[val-1];
}