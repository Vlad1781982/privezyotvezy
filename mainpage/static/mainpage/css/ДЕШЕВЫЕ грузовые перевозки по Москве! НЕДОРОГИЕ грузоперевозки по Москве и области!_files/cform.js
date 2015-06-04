
function cform(fname)
{
    $('body').on('click', '#' + fname + '_go', function()
    {
        var err = '';
        $("#from").prop("disabled", 0);
        $("#to").prop("disabled", 0);
        
        // обнуление дефолтных значений
        $("." + fname).each(function(index){
            if ($(this).data('default') == $(this).val()) {
                $(this).val('');
            }
        });
        
        // проверка обязательных полей
        $(".required." + fname).each(function(index){
            if ($(this).parents().hasClass('ignoreme')) {
                return;
            }
            if ($(this).hasClass('required')) {
                if ($(this).val() == '') {
                    err = 'Не заполнены обязательные поля';
                    $(this).focus();
                }
            }
        });
        if (err.length > 0) {
            $('#' + fname + '_err').html('<p>' + err + '</p>').show();
            $("." + fname).each(function(index){
                if ($(this).val() == '') {
                    $(this).val( $(this).data('default') );
                }
            });
            return;
        }
        $('#' + fname + '_err').html('&nbsp;').hide();
        
        // сабмит формы
        $.post('/' + fname + '_standalone.php', $("." + fname).not(".ignoreme ." + fname).serialize())
        .done(function(data)
        {
            data = $.parseJSON(data);
            if (data.err) {
                $('#' + fname + '_err').html('<p>' + data.err + '</p>');
                $('#' + fname + '_err').show();
                $("." + fname).each(function(index){
                    if ($(this).val() == '') {
                        $(this).val( $(this).data('default') );
                    }
                });
                return;
            }
            if (data.result) {
                $('#' + fname + '_result').html('<p><strong style="color: green;">Готово</strong></p>');
                $.fancybox({
                    content : '<div class="h3">Результат</div>' + data.result,
                    openEffect : 'none',
                    width: '400px',
                    autoDimensions : true,
                    helpers : { title : { type : 'inside' } },
                    afterLoad: function(){
                        setTimeout( function() { $.fancybox.close(); },20000);
                    }
                });
                return;
            }
        });
    });
    $('#' + fname + '_err').hide();
    
    // активация дефолтных значений
    $("." + fname).each(function(index){
        if (!$(this).data('default')) {
            return;
        }
        
        $(this).focus(function(){
            if ($(this).val() == $(this).data('default') ) {
                $(this).val('');
            }
        });
        $(this).blur(function(){
            if ($(this).val() == '') {
                $(this).val( $(this).data('default') );
            }
        });
        $(this).val( $(this).data('default') );
    });
    
}