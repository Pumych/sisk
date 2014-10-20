function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

var rString = randomString(32, '                    0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');


function writeRandomString(){
    return randomString(Math.floor((Math.random() * 700) + 300), rString);
}

$(document).ready(function(){
    var output = '';
    var addClass = '';
    for(var i=0; i<30; i++){
        if (i==17) addClass="w2";
        else addClass='';
        output += '<div class="pinItem '+addClass+'">' + writeRandomString() + '</div>';

    }

    $('.main').html(output);

    var $container = $('.main');
    // initialize
    $container.masonry({
        itemSelector: '.pinItem'
    });

    var msnry = $container.data('masonry');
    console.log('>>> msnry', msnry);

    var html = '';
    for(var i=0; i<10; i++){
        html += '<div class="pinItem newAdded">' + writeRandomString() + '</div>';
    }

    var html = $(html);

    $($container).append( html ).masonry( 'appended', html, true );

});


