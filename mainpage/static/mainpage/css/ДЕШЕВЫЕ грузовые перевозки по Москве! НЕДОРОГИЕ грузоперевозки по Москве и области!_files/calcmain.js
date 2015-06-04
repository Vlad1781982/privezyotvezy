
var metro = [
'Авиамоторная', 'Автозаводская', 'Академическая', 'Александровский сад', 'Алексеевская', 'Алтуфьево', 'Аннино', 
'Арбатская (Арбатско-Покровская линия)', 'Арбатская (Филевская линия', 'Аэропорт', 'Бабушкинская', 'Багратионовская', 
'Баррикадная', 'Бауманская', 'Беговая', 'Белорусская', 'Беляево', 'Бибирево', 'Библиотека имени Ленина', 
'Битцевский парк', 'Боровицкая', 'Ботанический сад', 'Братиславская', 'Бульвар адмирала Ушакова', 
'Бульвар Дмитрия Донского', 'Бунинская аллея', 'Варшавская', 'ВДНХ', 'Владыкино', 'Водный стадион', 'Войковская', 
'Волгоградский проспект', 'Волжская', 'Волоколамская', 'Воробьевы горы', 'Выставочная', 'Выхино', 'Деловой центр', 
'Динамо', 'Дмитровская', 'Добрынинская', 'Домодедовская', 'Достоевская', 'Дубровка', 'Жулебино', 'Измайловская', 
'Калужская', 'Кантемировская', 'Каховская', 'Каширская', 'Киевская', 'Китай-город', 'Кожуховская', 'Коломенская', 
'Комсомольская', 'Коньково', 'Красногвардейская', 'Краснопресненская', 'Красносельская', 'Красные ворота', 
'Крестьянская застава', 'Кропоткинская', 'Крылатское', 'Кузнецкий мост', 'Кузьминки', 'Кунцевская', 'Курская', 
'Кутузовская', 'Ленинский проспект', 'Лубянка', 'Люблино', 'Марксистская', 'Марьина роща', 'Марьино', 'Маяковская', 
'Медведково', 'Международная', 'Менделеевская', 'Митино', 'Молодежная', 'Мякинино', 'Нагатинская', 'Нагорная', 
'Нахимовский проспект', 'Новогиреево', 'Новокузнецкая', 'Новослободская', 'Новоясеневская', 'Новые Черемушки', 
'Октябрьская', 'Октябрьское поле', 'Орехово', 'Отрадное', 'Охотныйряд', 'Павелецкая', 'Парк культуры', 
'Парк Победы', 'Партизанская', 'Первомайская', 'Перово', 'Петровско-Разумовская', 'Печатники', 'Пионерская', 
'Планерная', 'Площадь Ильича', 'Площадь Революции', 'Полежаевская', 'Полянка', 'Пражская', 'Преображенская площадь', 
'Пролетарская', 'Проспект Вернадского', 'Проспект Мира', 'Профсоюзная', 'Пушкинская', 'Речной вокзал', 'Рижская', 
'Римская', 'Рязанский проспект', 'Савеловская', 'Свиблово', 'Севастопольская', 'Семеновская', 'Серпуховская', 
'Славянский бульвар', 'Смоленская (Арбатско-Покровская линия)', 'Смоленская (Филевская линия)', 'Сокол', 'Сокольники', 
'Спортивная', 'Сретенский бульвар', 'Строгино', 'Студенческая', 'Сухаревская', 'Сходненская', 'Таганская', 
'Тверская', 'Театральная', 'Текстильщики', 'ТеплыйСтан', 'Тимирязевская', 'Третьяковская', 'Трубная', 'Тульская', 
'Тургеневская', 'Тушинская', 'Улица 1905года', 'Улица Академика Янгеля', 'Улица Горчакова', 'Улица Подбельского', 
'Улица Скобелевская', 'Улица Старокачаловская', 'Университет', 'Филевский парк', 'Фили', 'Фрунзенская', 'Царицыно', 
'Цветной бульвар', 'Черкизовская', 'Чертановская', 'Чеховская', 'Чистые пруды', 'Чкаловская', 'Шаболовская', 
'Шоссе Энтузиастов', 'Щелковская', 'Щукинская', 'Электрозаводская', 'Юго-Западная', 'Южная', 'Ясенево'];
active_suggestion = 0;
$(function () {
    $(window).keydown(function(event){
        if(event.keyCode == 13 && active_suggestion > 0) {
            event.preventDefault();
            return false;
        }
    });
    $('input[name=to_city]').keyup(function(event){
        findGeoMap($(this), event);
        return false;
    });
    $('input[name=from_city]').keyup(function(event){
        findGeoMap($(this), event);
        return false;
    });
    $('input[name=to_city]').click(function(event){
        findGeoMap($(this), event);
    });
    $('input[name=from_city]').click(function(event){
        findGeoMap($(this), event);
    });

    $('#through').click(function(){
        $('p #through').parent().before('<p><label>Через</label><input type="text" name="through[]" value="" rel="through_'+(thrucnt++)+'" /></p>');
        $('input[name=through\\\\[\\\\]]').keyup(function(){
            findGeoMap($(this));
        });
        return false;
    });
    
    $(document).click(function() {
        $('#dropdown').hide();
    });
    $('#dropdown').click(function(event) {
        event.stopPropagation();
    });
    $('#tt-suggestion a').click(function(event) {
        event.stopPropagation();
    });
    $('#dropdown').on('mouseover', '.tt-suggestion', function() {
        active_suggestion = $('.tt-suggestion').index( this );
        $('.tt-suggestion').removeClass('tt-hover');
        $('.tt-suggestion:hover').addClass('tt-hover');
    });

});
    function findGeoMap(obj, event){
        if (obj.val()=='Пункт подачи: адрес, метро или нас. пункт') obj.val('');
        if (obj.val()=='Конечный пункт: адрес, метро или нас. пункт') obj.val('');
        
        var kc = parseInt(event.keyCode);
		if (kc == 40) {
            event.stopPropagation();
            var next =  + active_suggestion + 1;
			if (next >= $('.tt-suggestion').length) {
				next = 0;
            }
            $('.tt-suggestion').removeClass('tt-hover');
            $('.tt-suggestion:eq(' + next + ')').addClass('tt-hover');
			active_suggestion = next;
            return;
		} else if (kc == 38) {
            event.stopPropagation();
            var next =  + active_suggestion - 1;
			if (next < 0) {
				next = $('.tt-suggestion').length - 1;
            }
            $('.tt-suggestion').removeClass('tt-hover');
            $('.tt-suggestion:eq(' + next + ')').addClass('tt-hover');
			active_suggestion = next;
            return;
		}
        // if ($('#dropdown').css('display') != 'none') {
            if (kc == 13 && $('#dropdown .tt-suggestion.tt-hover').length > 0) {
                event.preventDefault();
                obj.val( $('.tt-suggestion.tt-hover a').text() );
                $('.tt-suggestion').removeClass('tt-hover');
                $('#dropdown').hide();
                active_suggestion = 0;
                return false;
            }
            if (kc == 27) {
                event.stopPropagation();
                $('.tt-suggestion').removeClass('tt-hover');
                $('#dropdown').hide();
                active_suggestion = 0;
                return;
            }
        // }
        
        var txt = $(obj).val();
        var ttt = txt.replace(/^(.)|\\s(.)/g, function($1){ return $1.toUpperCase( ); });
        apikey = 'AEsJllIBAAAAYj8nTgMAxttCCLx-6osWM8vY-tanNjapF4AAAAAAAAAAAADjZ5wkp916Oa0Yh9ZS4WmDF3YZ7A==';
        $.ajax({
            url:    '/_calc/xsajax.php?format=json&geocode='+ttt+'&key='+apikey,
            type:    'GET',
            success: function(data){
                //console.log(data);
                lMetro  = '';
                lMoscow = '';
                lRegion = '';
                lRussia = '';
                lOther  = '';
                for (a in metro){
                    if (metro[a].indexOf(ttt)!=-1){
                        lMetro += '<div class="tt-suggestion tt-newcalc"><p><a href="#" title="">Россия, Москва, метро '+metro[a]+'</a></p></div>';
                    }
                }
                if (data!=''){
                eval('r = ('+data+')');
                html = '';

for (a in r.response.GeoObjectCollection.featureMember){
    //alert(r.response.GeoObjectCollection.featureMember[a].GeoObject.metaDataProperty.GeocoderMetaData.text);
    //html += '<p><a href="#" title="">' + r.response.GeoObjectCollection.featureMember[a].GeoObject.metaDataProperty.GeocoderMetaData.text + '</a></p>';
    t = r.response.GeoObjectCollection.featureMember[a].GeoObject.metaDataProperty.GeocoderMetaData.text;
    if (t.indexOf('Россия, Москва')!=-1){
        if(t.indexOf('метро')!=-1){
            //lMetro += '<p class="tt-suggestion tt-newcalc"><a href="#" title="">'+t+'</a></p>';
        }else{
            lMoscow += '<div class="tt-suggestion tt-newcalc"><p><a href="#" title="">'+t+'</a></p></div>';
        }
    }else{
        if (t.indexOf('Россия, Московская область')!=-1){
            lRegion += '<div class="tt-suggestion tt-newcalc"><p><a href="#" title="">'+t+'</a></p></div>';
        }else{
            if (t.indexOf('Россия,')!=-1){
                 lRussia += '<div class="tt-suggestion tt-newcalc"><p><a href="#" title="">'+t+'</a></p></div>';
            }else{
                 lOther += '<div class="tt-suggestion tt-newcalc"><p><a href="#" title="">'+t+'</a></p></div>';
            }
        }
    }
}
                $('#dropdown').html(lMetro + lMoscow + lRegion + lRussia + lOther);
                active_suggestion = 0;
                $('#dropdown .tt-suggestion:eq(0)').addClass('tt-hover');
                
                $('#dropdown').css("top", ( + obj.offset().top + obj.height() * 2 - 4 ) + "px");
                $('#dropdown').css("left", ( + obj.offset().left + 2 ) + "px");
                $('#dropdown').css("width", obj.width());
                $('#dropdown').show();
                checkGeoEvent(obj.attr('rel'));
                }
            }
        });
    }
    function checkGeoEvent(name){
        $('#dropdown a').click(function(){
            v = $(this).html();
            $('input[rel='+name+']').val(v);
            $('#dropdown').hide();
            /*
            if ((v.indexOf('Московская область')+1) == 0) {
                if((v.indexOf('Москва')+1) == 0) {
                     $('label#time').html('Часы работы по Москве и время всех стоянок, в том числе время погрузки и разгрузки');
                } else {
               
                    $('label#time').html('Планируемая продолжительность заказа (часов)');
                }
               
            }else{
                $('label#time').html('Планируемая продолжительность заказа (часов)');
            }
            */
            return false;
        });
    }
    function throughClick(obj){
        //added = '<p><label>Через</label><input type="text" name="through[]" value="" rel="name_' + Math.floor( Math.random( ) * 300 ) +'" autocomplete="off" /></p>';
        added = '<p><label>Через</label><select name="through[]" rel="name_' + Math.floor( Math.random( ) * 300 ) +'"><option>ст. метро</option>[[metro_select]]</select></p>';
        //obj.parent().before(added);
        $('input[name=through\\\\[\\\\]]', obj.parent().parent()).parent().before(added);
         $('input[name=through\\\\[\\\\]]').keyup(function(){
            findGeoMap($(this));
        });
    }
    
    
$(function () {
        return;
    if (location.pathname.split("/")[1] == 'calc') {
        return;
    }
    //var metro = Array;
    var metro = ['Авиамоторная', 'Автозаводская', 'Академическая', 'Александровский сад', 'Алексеевская', 'Алтуфьево', 'Аннино',
                'Арбатская (Арбатско-Покровская линия)', 'Арбатская (Филевская линия', 'Аэропорт', 'Бабушкинская', 'Багратионовская',
                'Баррикадная', 'Бауманская', 'Беговая', 'Белорусская', 'Беляево', 'Бибирево', 'Библиотека имени Ленина',
                'Битцевский парк', 'Боровицкая', 'Ботанический сад', 'Братиславская', 'Бульвар адмирала Ушакова',
                'Бульвар Дмитрия Донского', 'Бунинская аллея', 'Варшавская', 'ВДНХ', 'Владыкино', 'Водный стадион', 'Войковская',
                'Волгоградский проспект', 'Волжская', 'Волоколамская', 'Воробьевы горы', 'Выставочная', 'Выхино', 'Деловой центр',
                'Динамо', 'Дмитровская', 'Добрынинская', 'Домодедовская', 'Достоевская', 'Дубровка', 'Жулебино', 'Измайловская',
                'Калужская', 'Кантемировская', 'Каховская', 'Каширская', 'Киевская', 'Китай-город', 'Кожуховская', 'Коломенская',
                'Комсомольская', 'Коньково', 'Красногвардейская', 'Краснопресненская', 'Красносельская', 'Красные ворота',
                'Крестьянская застава', 'Кропоткинская', 'Крылатское', 'Кузнецкий мост', 'Кузьминки', 'Кунцевская', 'Курская',
                'Кутузовская', 'Ленинский проспект', 'Лубянка', 'Люблино', 'Марксистская', 'Марьина роща', 'Марьино', 'Маяковская',
                'Медведково', 'Международная', 'Менделеевская', 'Митино', 'Молодежная', 'Мякинино', 'Нагатинская', 'Нагорная',
                'Нахимовский проспект', 'Новогиреево', 'Новокузнецкая', 'Новослободская', 'Новоясеневская', 'Новые Черемушки',
                'Октябрьская', 'Октябрьское поле', 'Орехово', 'Отрадное', 'Охотныйряд', 'Павелецкая', 'Парк культуры',
                'Парк Победы', 'Партизанская', 'Первомайская', 'Перово', 'Петровско-Разумовская', 'Печатники', 'Пионерская',
                'Планерная', 'Площадь Ильича', 'Площадь Революции', 'Полежаевская', 'Полянка', 'Пражская', 'Преображенская площадь',
                'Пролетарская', 'Проспект Вернадского', 'Проспект Мира', 'Профсоюзная', 'Пушкинская', 'Речной вокзал', 'Рижская',
                'Римская', 'Рязанский проспект', 'Савеловская', 'Свиблово', 'Севастопольская', 'Семеновская', 'Серпуховская',
                'Славянский бульвар', 'Смоленская (Арбатско-Покровская линия)', 'Смоленская (Филевская линия)', 'Сокол', 'Сокольники',
                'Спортивная', 'Сретенский бульвар', 'Строгино', 'Студенческая', 'Сухаревская', 'Сходненская', 'Таганская',
                'Тверская', 'Театральная', 'Текстильщики', 'Теплый Стан', 'Тимирязевская', 'Третьяковская', 'Трубная', 'Тульская',
                'Тургеневская', 'Тушинская', 'Улица 1905года', 'Улица Академика Янгеля', 'Улица Горчакова', 'Улица Подбельского',
                'Улица Скобелевская', 'Улица Старокачаловская', 'Университет', 'Филевский парк', 'Фили', 'Фрунзенская', 'Царицыно',
                'Цветной бульвар', 'Черкизовская', 'Чертановская', 'Чеховская', 'Чистые пруды', 'Чкаловская', 'Шаболовская',
                'Шоссе Энтузиастов', 'Щелковская', 'Щукинская', 'Электрозаводская', 'Юго-Западная', 'Южная', 'Ясенево'];

    for (var i = 0; i < metro.length; i++){
        metro[i] = 'Москва, метро ' + metro[i];
    }
    $(".from_city").typeahead({
        local: metro
    });

    $(".to_city").typeahead({
        local: metro
    });

    $("#hover_calc_form").submit(function(){
        $('#calcerr').text('');
        var err = '';
        if ($("#select_to").val() == '') {
            err = 'Заполните конечный пункт перевозки';
        }
        if ($("#select_from").val() == '') {
            err = 'Заполните пункт подачи автомобиля';
        }
        if ($("#select_fill").val() == '0') {
            err = 'Выберите автомобиль для перевозки';
        }
        if (err.length > 0) {
            $('#calcerr').text('Ошибка: ' + err);
            return false;
        }
    });

});