$(function(){
    $("a.otzyv_up").click(function(){
        var $element = $(this);
        if (typeof $(this).data('stop') == 'undefined') {
            $.get('/vote.php?id=' + $(this).data('oid') + '&dir=up&hash=' + Math.random())
            .done(function(data){
                if (data == '1') {
                    $element.text( '+' + ( + $element.text().replace('+', '') + 1) );
                    show_msg('<p>Ваш голос учтен, спасибо!</p>', 'Результат голосования');
                } else {
                    show_msg('<p>Вы уже голосовали.</p>', 'Результат голосования');
                }
                $element.data('stop', 'yes');
            });
        } else {
            show_msg('<p>Вы уже голосовали.</p>', 'Результат голосования');
        }
    });
    $("a.otzyv_down").click(function(){
        var $element = $(this);
        if (typeof $(this).data('stop') == 'undefined') {
            $.get('/vote.php?id=' + $(this).data('oid') + '&dir=down&hash=' + Math.random())
            .done(function(data){
                if (data == '1') {
                    $element.text( '-' + ( + $element.text().replace('-', '') + 1) );
                    show_msg('<p>Ваш голос учтен, спасибо!</p>', 'Результат голосования');
                } else {
                    show_msg('<p>Вы уже голосовали.</p>', 'Результат голосования');
                }
                $element.data('stop', 'yes');
            });
        } else {
            show_msg('<p>Вы уже голосовали.</p>', 'Результат голосования');
        }
    });
    function show_msg(msg, title){
        $.fancybox({
            wrapCSS    : 'fancybox-custom',
            openEffect : 'none',
            content : '<div class="h3">' + title + '</div>' + msg,
            title : '',
            minHeight : 80,
            minWidth : 400,
            maxWidth : 750,
            helpers : {
                title : {
                    type : 'inside'
                },
                    overlay : {
                    css : {
                        'background' : 'rgba(0,0,0,0.3)'
                    }
                }
            }, 
        });
    };
});
