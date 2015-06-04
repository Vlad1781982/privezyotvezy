
var metro = [
'������������', '�������������', '�������������', '��������������� ���', '������������', '���������', '������', 
'��������� (��������-���������� �����)', '��������� (��������� �����', '��������', '������������', '���������������', 
'�����������', '����������', '�������', '�����������', '�������', '��������', '���������� ����� ������', 
'���������� ����', '����������', '������������ ���', '�������������', '������� �������� �������', 
'������� ������� ��������', '��������� �����', '����������', '����', '���������', '������ �������', '����������', 
'������������� ��������', '��������', '�������������', '��������� ����', '�����������', '������', '������� �����', 
'������', '�����������', '������������', '�������������', '�����������', '��������', '��������', '������������', 
'���������', '��������������', '���������', '���������', '��������', '�����-�����', '�����������', '�����������', 
'�������������', '��������', '�����������������', '�����������������', '��������������', '������� ������', 
'������������ �������', '�������������', '����������', '��������� ����', '���������', '����������', '�������', 
'�����������', '��������� ��������', '�������', '�������', '������������', '������� ����', '�������', '����������', 
'����������', '�������������', '�������������', '������', '����������', '��������', '�����������', '��������', 
'����������� ��������', '�����������', '�������������', '��������������', '��������������', '����� ���������', 
'�����������', '����������� ����', '�������', '��������', '����������', '����������', '���� ��������', 
'���� ������', '������������', '������������', '������', '���������-�����������', '���������', '����������', 
'���������', '������� ������', '������� ���������', '������������', '�������', '��������', '�������������� �������', 
'������������', '�������� �����������', '�������� ����', '�����������', '����������', '������ ������', '�������', 
'�������', '��������� ��������', '�����������', '��������', '���������������', '�����������', '������������', 
'���������� �������', '���������� (��������-���������� �����)', '���������� (��������� �����)', '�����', '����������', 
'����������', '���������� �������', '��������', '������������', '�����������', '�����������', '���������', 
'��������', '�����������', '������������', '����������', '�������������', '�������������', '�������', '��������', 
'������������', '���������', '����� 1905����', '����� ��������� ������', '����� ���������', '����� ������������', 
'����� ������������', '����� ����������������', '�����������', '��������� ����', '����', '�����������', '��������', 
'������� �������', '������������', '������������', '���������', '������ �����', '����������', '�����������', 
'����� �����������', '����������', '���������', '����������������', '���-��������', '�����', '�������'];
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
        $('p #through').parent().before('<p><label>�����</label><input type="text" name="through[]" value="" rel="through_'+(thrucnt++)+'" /></p>');
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
        if (obj.val()=='����� ������: �����, ����� ��� ���. �����') obj.val('');
        if (obj.val()=='�������� �����: �����, ����� ��� ���. �����') obj.val('');
        
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
                        lMetro += '<div class="tt-suggestion tt-newcalc"><p><a href="#" title="">������, ������, ����� '+metro[a]+'</a></p></div>';
                    }
                }
                if (data!=''){
                eval('r = ('+data+')');
                html = '';

for (a in r.response.GeoObjectCollection.featureMember){
    //alert(r.response.GeoObjectCollection.featureMember[a].GeoObject.metaDataProperty.GeocoderMetaData.text);
    //html += '<p><a href="#" title="">' + r.response.GeoObjectCollection.featureMember[a].GeoObject.metaDataProperty.GeocoderMetaData.text + '</a></p>';
    t = r.response.GeoObjectCollection.featureMember[a].GeoObject.metaDataProperty.GeocoderMetaData.text;
    if (t.indexOf('������, ������')!=-1){
        if(t.indexOf('�����')!=-1){
            //lMetro += '<p class="tt-suggestion tt-newcalc"><a href="#" title="">'+t+'</a></p>';
        }else{
            lMoscow += '<div class="tt-suggestion tt-newcalc"><p><a href="#" title="">'+t+'</a></p></div>';
        }
    }else{
        if (t.indexOf('������, ���������� �������')!=-1){
            lRegion += '<div class="tt-suggestion tt-newcalc"><p><a href="#" title="">'+t+'</a></p></div>';
        }else{
            if (t.indexOf('������,')!=-1){
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
            if ((v.indexOf('���������� �������')+1) == 0) {
                if((v.indexOf('������')+1) == 0) {
                     $('label#time').html('���� ������ �� ������ � ����� ���� �������, � ��� ����� ����� �������� � ���������');
                } else {
               
                    $('label#time').html('����������� ����������������� ������ (�����)');
                }
               
            }else{
                $('label#time').html('����������� ����������������� ������ (�����)');
            }
            */
            return false;
        });
    }
    function throughClick(obj){
        //added = '<p><label>�����</label><input type="text" name="through[]" value="" rel="name_' + Math.floor( Math.random( ) * 300 ) +'" autocomplete="off" /></p>';
        added = '<p><label>�����</label><select name="through[]" rel="name_' + Math.floor( Math.random( ) * 300 ) +'"><option>��. �����</option>[[metro_select]]</select></p>';
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
    var metro = ['������������', '�������������', '�������������', '��������������� ���', '������������', '���������', '������',
                '��������� (��������-���������� �����)', '��������� (��������� �����', '��������', '������������', '���������������',
                '�����������', '����������', '�������', '�����������', '�������', '��������', '���������� ����� ������',
                '���������� ����', '����������', '������������ ���', '�������������', '������� �������� �������',
                '������� ������� ��������', '��������� �����', '����������', '����', '���������', '������ �������', '����������',
                '������������� ��������', '��������', '�������������', '��������� ����', '�����������', '������', '������� �����',
                '������', '�����������', '������������', '�������������', '�����������', '��������', '��������', '������������',
                '���������', '��������������', '���������', '���������', '��������', '�����-�����', '�����������', '�����������',
                '�������������', '��������', '�����������������', '�����������������', '��������������', '������� ������',
                '������������ �������', '�������������', '����������', '��������� ����', '���������', '����������', '�������',
                '�����������', '��������� ��������', '�������', '�������', '������������', '������� ����', '�������', '����������',
                '����������', '�������������', '�������������', '������', '����������', '��������', '�����������', '��������',
                '����������� ��������', '�����������', '�������������', '��������������', '��������������', '����� ���������',
                '�����������', '����������� ����', '�������', '��������', '����������', '����������', '���� ��������',
                '���� ������', '������������', '������������', '������', '���������-�����������', '���������', '����������',
                '���������', '������� ������', '������� ���������', '������������', '�������', '��������', '�������������� �������',
                '������������', '�������� �����������', '�������� ����', '�����������', '����������', '������ ������', '�������',
                '�������', '��������� ��������', '�����������', '��������', '���������������', '�����������', '������������',
                '���������� �������', '���������� (��������-���������� �����)', '���������� (��������� �����)', '�����', '����������',
                '����������', '���������� �������', '��������', '������������', '�����������', '�����������', '���������',
                '��������', '�����������', '������������', '������ ����', '�������������', '�������������', '�������', '��������',
                '������������', '���������', '����� 1905����', '����� ��������� ������', '����� ���������', '����� ������������',
                '����� ������������', '����� ����������������', '�����������', '��������� ����', '����', '�����������', '��������',
                '������� �������', '������������', '������������', '���������', '������ �����', '����������', '�����������',
                '����� �����������', '����������', '���������', '����������������', '���-��������', '�����', '�������'];

    for (var i = 0; i < metro.length; i++){
        metro[i] = '������, ����� ' + metro[i];
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
            err = '��������� �������� ����� ���������';
        }
        if ($("#select_from").val() == '') {
            err = '��������� ����� ������ ����������';
        }
        if ($("#select_fill").val() == '0') {
            err = '�������� ���������� ��� ���������';
        }
        if (err.length > 0) {
            $('#calcerr').text('������: ' + err);
            return false;
        }
    });

});