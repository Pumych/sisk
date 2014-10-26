function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

var rString = randomString(32, '                    0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');


function writeRandomString(){
    return randomString(Math.floor((Math.random() * 700) + 300), rString);
}

/**
 *
 */

(function(window){
    var _plugin = {}, _pluginName = 'Sisk';
    _plugin[_pluginName] = function(){
        var _ = this;
        _.settings = {
            debug: true
        }; // settings

        _.selectors = {
            // add_post page
            addPost_InputTitle:         'body#add_post input[name="title"]',
            addPost_InputVideoUrl:      'body#add_post input[name="video_url"]',
            addPost_InputText:          'body#add_post input[name="text"]',
            addPost_previewTitle:       'body#add_post .preview .title',
            addPost_previewVideo:       'body#add_post .preview .video',
            addPost_previewText:        'body#add_post .preview .text'
        }; // selectors

        _.vars = {

        }; // vars

        _.log = function(msg){
            if(!this.settings.debug) return;
            var _args = [_pluginName + ' lib :: '];
            _args = _args.concat(arguments);
            if (typeof console == 'object' && typeof console.log != "undefined") {
                console.info.apply(this, _args);
            }
        }; // log

        _.utils = {
            // Creates new post
            createPost: function(){
                // On keyup update preview
                $( _.selectors.addPost_InputTitle ).keyup(function(){
                    $( _.selectors.addPost_previewTitle ).text( $(this).val() );
                });

                $( _.selectors.addPost_InputVideoUrl ).keyup(function(){
                    $( _.selectors.addPost_previewVideo ).html( '<iframe width="420" height="315" src="http://youtube.com/embed/' + $(this).val() + '"></iframe>' );
                });

                $( _.selectors.addPost_InputText ).keyup(function(){
                    $( _.selectors.addPost_previewText ).text( $(this).val() );
                });
            },

            // All code after document is ready
            documentReadyInit: function(){

                /**
                 * This is static output of posts for example
                 */
//                var output = '';
//                var addClass = '';
//                for(var i=0; i<30; i++){
//                    if (i==17) addClass="w2";
//                    else addClass='';
//                    output += '<div class="pinItem '+addClass+'">' + writeRandomString() + '</div>';
//
//                }
//
//                $('.main').html(output);
//
//                var $container = $('.main');
//                // initialize
//                $container.masonry({
//                    itemSelector: '.pinItem'
//                });
//
//                var msnry = $container.data('masonry');
//                console.log('>>> msnry', msnry);
//
//                var html = '';
//                for(var i=0; i<10; i++){
//                    html += '<div class="pinItem newAdded">' + writeRandomString() + '</div>';
//                }
//
//                var html = $(html);
//
//                $($container).append( html ).masonry( 'appended', html, true );


            },

            // Prints on all pages what need to be done in application
            whatTodo: function(){
                if(_.settings.debug){
                    var list ='';
                    var listArr = [
                        "Animated hover etc.",
                        "Stay logged in for 1 hour"
                    ];

                    list += '<ol class="whatTodo">';
                    for(var item in listArr){
                        list += '<li>' + listArr[item] + '</li>';
                    }
                    list += '</ol>';
                    $('body').append(list);
                }
            }
        }; // utils

        _.init = function(){
            _.utils.documentReadyInit();
            _.utils.whatTodo();
            _.utils.createPost();

        };

    };
    window[_pluginName] = new _plugin[_pluginName];
}(window));

$(document).ready(function(){
    Sisk.init();
});
