var deck = [];

$(document).ready(function(){
    deck = init(deck);
    $("#pitton").click(function(){shuffle()});
});

function shuffle(){
    var seed = $("#seed").val();
    console.log(seed);
    console.log($("#seed").val());
    console.log(seed.length);
    if (seed.length == 0){
        seed = Math.random();
        $("#seed").val(seed);
    }
    console.log(seed);
    Math.seedrandom(seed);
    var temp_deck = deck.slice();
    var shuffled_deck = [];
    for (i=0; i<deck.length;i++){
        var x = Math.round(Math.random()*temp_deck.length);
        shuffled_deck.push(temp_deck[x]);
        temp_deck.slice(x, 1);
    }
    print_deck(shuffled_deck);
    return (false);
}

function print_deck(card_set){
    result = $("#result");
    result.val('');
    for(i=0;i<card_set.length;i++){
        result.append('<p>'+card_set[i]+'</p>');
    }
}

function init(card_set){
    var i=1;
    for( i = 1 ; i < 11 ; i ++ ){
        card_set.push('Pique'+i);
        card_set.push('Tr&eacute;fle'+i);
        card_set.push('Carreau'+i);
        card_set.push('Coeur'+i);
    }
    card_set = card_set.concat(['Pique Roi','Pique Dame','Pique Valet','Tr&eacute;fle Roi', 'Tr&eacute;fle Dame', 'Tr&eacute;fle Valet', 'Carreau Roi', 'Carreau Dame', 'Carreau Valet', 'Coeur Roi', 'Coeur Dame', 'Coeur Valet']);
    return card_set;
}





