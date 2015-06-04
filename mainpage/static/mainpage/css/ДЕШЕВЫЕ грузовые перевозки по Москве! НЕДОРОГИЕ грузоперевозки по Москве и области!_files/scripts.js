$(function(){
    $("a.otzyv_up").click(function(){
        var $element = $(this);
        if (typeof $(this).data('stop') == 'undefined') {
            $.get('/vote.php?id=' + $(this).data('oid') + '&dir=up&hash=' + Math.random())
            .done(function(data){
                if (data == '1') {
                    $element.text( '+' + ( + $element.text().replace('+', '') + 1) );
                    show_msg('<p>��� ����� �����, �������!</p>', '��������� �����������');
                } else {
                    show_msg('<p>�� ��� ����������.</p>', '��������� �����������');
                }
                $element.data('stop', 'yes');
            });
        } else {
            show_msg('<p>�� ��� ����������.</p>', '��������� �����������');
        }
    });
    $("a.otzyv_down").click(function(){
        var $element = $(this);
        if (typeof $(this).data('stop') == 'undefined') {
            $.get('/vote.php?id=' + $(this).data('oid') + '&dir=down&hash=' + Math.random())
            .done(function(data){
                if (data == '1') {
                    $element.text( '-' + ( + $element.text().replace('-', '') + 1) );
                    show_msg('<p>��� ����� �����, �������!</p>', '��������� �����������');
                } else {
                    show_msg('<p>�� ��� ����������.</p>', '��������� �����������');
                }
                $element.data('stop', 'yes');
            });
        } else {
            show_msg('<p>�� ��� ����������.</p>', '��������� �����������');
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
