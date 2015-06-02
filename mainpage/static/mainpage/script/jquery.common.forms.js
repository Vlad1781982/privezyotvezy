$(document).ready(function() { // jquery ready
    // ФОРМЫ
    
    // подтверждение формы "Расчет стоимости квартирного переезда" на http://www.sferatrans.ru/pereezd-kvartiry/
    $('#flat_order_name, #flat_order_phone, #flat_order_from, #flat_order_to').keypress(function (e) {
        var key = e.which;
        if (key == 13) { // the enter key code
            $('#flat_order_submit_button').click();
            return false;  
        }
    });
    
    $('#flat_order_submit_button').on('click', function() {
        // проверяем, заполненно ли поле "Имя"
        var name = $('#flat_order_name').val();
        if (!name) {
            $('#flat_order_name').focus();
            showMessage('#flat_order_name', 'Пожалуйста, укажите Ваше имя');
            return false;
        }

        // проверяем, заполненно ли поле "Телефон"
        var phone = $('#flat_order_phone').val();
        if (!phone) {
            $('#flat_order_phone').focus();
            showMessage('#flat_order_phone', 'Пожалуйста, укажите контактный телефон');
            return false;
        }
        
        // проверяем, заполненно ли поле "Пункт подачи"
        var from = $('#flat_order_from').val();
        if (!from) {
            $('#flat_order_from').focus();
            showMessage('#flat_order_from', 'Пожалуйста, укажите пункт подачи');
            return false;
        }

        // проверяем, заполненно ли поле "Конечный пункт"
        var to = $('#flat_order_to').val();
        if (!to) {
            $('#flat_order_to').focus();
            showMessage('#flat_order_to', 'Пожалуйста, укажите конечный пункт');
            return false;
        }
        
        var flatType = $('#flat_order_flat_type option:selected').text();
        
        $.get('/js/jquery.ajax.pereezd-kvartiry.php?name=' + name + '&name_en=' + convertRuLettersToEn(name) + '&phone=' + phone + '&phone_en=' + convertRuLettersToEn(phone) + '&from=' + from + '&from_en=' + convertRuLettersToEn(from) + '&to=' + to + '&to_en=' + convertRuLettersToEn(to) + '&flat_type=' + flatType + '&flat_type_en=' + convertRuLettersToEn(flatType), function(data) {
            if (data) {
                $('#flat_order_submit_button').closest('div#calc').html(data);
            }
        });

    }); // /подтверждение формы "Расчет стоимости квартирного переезда"
    
    // подтверждение формы "Расчет стоимости офисного переезда" на http://www.sferatrans.ru/pereezd-ofisa/
    $('#office_order_name, #office_order_phone, #office_order_from, #office_order_to').keypress(function (e) {
        var key = e.which;
        if (key == 13) { // the enter key code
            $('#office_order_submit_button').click();
            return false;  
        }
    });
    
    $('#office_order_submit_button').on('click', function() {
        // проверяем, заполненно ли поле "Имя"
        var name = $('#office_order_name').val();
        if (!name) {
            $('#office_order_name').focus();
            showMessage('#office_order_name', 'Пожалуйста, укажите Ваше имя');
            return false;
        }

        // проверяем, заполненно ли поле "Телефон"
        var phone = $('#office_order_phone').val();
        if (!phone) {
            $('#office_order_phone').focus();
            showMessage('#office_order_phone', 'Пожалуйста, укажите контактный телефон');
            return false;
        }
        
        // проверяем, заполненно ли поле "Пункт подачи"
        var from = $('#office_order_from').val();
        if (!from) {
            $('#office_order_from').focus();
            showMessage('#office_order_from', 'Пожалуйста, укажите пункт подачи');
            return false;
        }

        // проверяем, заполненно ли поле "Конечный пункт"
        var to = $('#office_order_to').val();
        if (!to) {
            $('#office_order_to').focus();
            showMessage('#office_order_to', 'Пожалуйста, укажите конечный пункт');
            return false;
        }
        
        var officeType = $('#office_order_office_type option:selected').text();
        
        $.get('/js/jquery.ajax.pereezd-ofisa.php?name=' + name + '&name_en=' + convertRuLettersToEn(name) + '&phone=' + phone + '&phone_en=' + convertRuLettersToEn(phone) + '&from=' + from + '&from_en=' + convertRuLettersToEn(from) + '&to=' + to + '&to_en=' + convertRuLettersToEn(to) + '&office_type=' + officeType + '&office_type_en=' + convertRuLettersToEn(officeType), function(data) {
            if (data) {
                $('#office_order_submit_button').closest('div#office_moving').html(data);
            }
        });

    }); // /подтверждение формы "Расчет стоимости офисного переезда"
    
    // подтверждение формы "Расчет стоимости перевозки мебели" на http://www.sferatrans.ru/perevozka-mebeli/
    $('#furniture_order_name, #furniture_order_phone, #furniture_order_from, #furniture_order_to').keypress(function (e) {
        var key = e.which;
        if (key == 13) { // the enter key code
            $('#furniture_order_submit_button').click();
            return false;  
        }
    });
    
    $('#furniture_order_submit_button').on('click', function() {
        // проверяем, заполненно ли поле "Имя"
        var name = $('#furniture_order_name').val();
        if (!name) {
            $('#furniture_order_name').focus();
            showMessage('#furniture_order_name', 'Пожалуйста, укажите Ваше имя');
            return false;
        }

        // проверяем, заполненно ли поле "Телефон"
        var phone = $('#furniture_order_phone').val();
        if (!phone) {
            $('#furniture_order_phone').focus();
            showMessage('#furniture_order_phone', 'Пожалуйста, укажите контактный телефон');
            return false;
        }
        
        // проверяем, заполненно ли поле "Пункт подачи"
        var from = $('#furniture_order_from').val();
        if (!from) {
            $('#furniture_order_from').focus();
            showMessage('#furniture_order_from', 'Пожалуйста, укажите пункт подачи');
            return false;
        }

        // проверяем, заполненно ли поле "Конечный пункт"
        var to = $('#furniture_order_to').val();
        if (!to) {
            $('#furniture_order_to').focus();
            showMessage('#furniture_order_to', 'Пожалуйста, укажите конечный пункт');
            return false;
        }
        
        var officeType = $('#furniture_order_furniture_type option:selected').text();
        
        $.post('/js/jquery.ajax.perevozka-mebeli.php', { 'name': name, 'name_en': convertRuLettersToEn(name), 'phone': phone, 'phone_en': convertRuLettersToEn(phone), 'from': from, 'from_en': convertRuLettersToEn(from), 'to': to, 'to_en': convertRuLettersToEn(to), 'furniture_type': officeType, 'furniture_type_en': convertRuLettersToEn(officeType) }, function(data) {
            if (data){ $('#furniture_order_submit_button').closest('div#furniture_moving').html(data); }
        });

    }); // /подтверждение формы "Расчет стоимости перевозки мебели" на http://www.sferatrans.ru/perevozka-mebeli/
    
    // подтверждение формы "Расчет стоимости такелажных работ" на http://www.sferatrans.ru/takelazhnye-raboty/
    $('#lifting_order_name, #lifting_order_phone, #lifting_order_from, #lifting_order_to').keypress(function (e) {
        var key = e.which;
        if (key == 13) { // the enter key code
            $('#lifting_order_submit_button').click();
            return false;  
        }
    });
    
    $('#lifting_order_submit_button').on('click', function() {
        // проверяем, заполненно ли поле "Имя"
        var name = $('#lifting_order_name').val();
        if (!name) {
            $('#lifting_order_name').focus();
            showMessage('#lifting_order_name', 'Пожалуйста, укажите Ваше имя');
            return false;
        }

        // проверяем, заполненно ли поле "Телефон"
        var phone = $('#lifting_order_phone').val();
        if (!phone) {
            $('#lifting_order_phone').focus();
            showMessage('#lifting_order_phone', 'Пожалуйста, укажите контактный телефон');
            return false;
        }
        
        // проверяем, заполненно ли поле "Пункт подачи"
        var from = $('#lifting_order_from').val();
        if (!from) {
            $('#lifting_order_from').focus();
            showMessage('#lifting_order_from', 'Пожалуйста, укажите пункт подачи');
            return false;
        }

        // проверяем, заполненно ли поле "Конечный пункт"
        var to = $('#lifting_order_to').val();
        if (!to) {
            $('#lifting_order_to').focus();
            showMessage('#lifting_order_to', 'Пожалуйста, укажите конечный пункт');
            return false;
        }
        
        var officeType = $('#lifting_order_lifting_type option:selected').text();
        
        $.post('/js/jquery.ajax.takelazhnye-raboty.php', { 'name': name, 'name_en': convertRuLettersToEn(name), 'phone': phone, 'phone_en': convertRuLettersToEn(phone), 'from': from, 'from_en': convertRuLettersToEn(from), 'to': to, 'to_en': convertRuLettersToEn(to), 'lifting_type': officeType, 'lifting_type_en': convertRuLettersToEn(officeType) }, function(data) {
            if (data){ $('#lifting_order_submit_button').closest('div#lifting_moving').html(data); }
        });

    }); // /подтверждение формы "Расчет стоимости такелажных работ"
    
    // подтверждение формы "Хочу статать клиентом" на http://www.sferatrans.ru/company/clients/
    $('#add_client_name, #add_client_phone').keypress(function (e) {
        var key = e.which;
        if (key == 13) { // the enter key code
            $('#add_client_submit_button').click();
            return false;  
        }
    });
    
    $('#add_client_submit_button').on('click', function() {
        // проверяем, заполненно ли поле "Имя"
        var name = $('#add_client_name').val();
        if (!name) {
            $('#add_client_name').focus();
            showMessage('#add_client_name', 'Пожалуйста, укажите Ваше имя');
            return false;
        }

        // проверяем, заполненно ли поле "Телефон"
        var phone = $('#add_client_phone').val();
        if (!phone) {
            $('#add_client_phone').focus();
            showMessage('#add_client_phone', 'Пожалуйста, укажите контактный телефон');
            return false;
        }
        
        $.get('/js/jquery.ajax.company.clients.php?name=' + name + '&name_en=' + convertRuLettersToEn(name) + '&phone=' + phone + '&phone_en=' + convertRuLettersToEn(phone) + '&message=' + $('#add_client_message').val() + '&message_en=' + convertRuLettersToEn($('#add_client_message').val()), function(data){
            if (data) {
                $('#add_client_submit_button').closest('div#add-client').html(data);
            }
        });

    }); // /подтверждение формы "Хочу статать клиентом"
    
    // подтверждение формы "Заявка на сотрудничество" на http://www.sferatrans.ru/company/cooperation/
    $('#cooperation_request_name, #cooperation_request_phone').keypress(function (e) {
        var key = e.which;
        if (key == 13) { // the enter key code
            $('#cooperation_request_button').click();
            return false;  
        }
    });
    
    $('#cooperation_request_button').on('click', function() {
        // проверяем, заполненно ли поле "Имя"
        var name = $('#cooperation_request_name').val();
        if (!name) {
            $('#cooperation_request_name').focus();
            showMessage('#cooperation_request_name', 'Пожалуйста, укажите Ваше имя');
            return false;
        }

        // проверяем, заполненно ли поле "Телефон"
        var phone = $('#cooperation_request_phone').val();
        if (!phone) {
            $('#cooperation_request_phone').focus();
            showMessage('#cooperation_request_phone', 'Пожалуйста, укажите контактный телефон');
            return false;
        }
        
        $.get('/js/jquery.ajax.company.cooperation.php?name=' + name + '&name_en=' + convertRuLettersToEn(name) + '&phone=' + phone + '&phone_en=' + convertRuLettersToEn(phone) + '&message=' + $('#cooperation_request_message').val() + '&message_en=' + convertRuLettersToEn($('#cooperation_request_message').val()), function(data){
            if (data) {
                $('#cooperation_request_button').closest('div#cooperation_form').html(data);
            }
        });

    }); // /подтверждение формы "Хочу статать клиентом"
    
    // подтверждение формы "Запрос на вакансию" на http://www.sferatrans.ru/company/jobs/
    $('#send_vacancy_name, #send_vacancy_phone').keypress(function (e) {
        var key = e.which;
        if (key == 13) { // the enter key code
            $('#send_vacancy_submit_button').click();
            return false;  
        }
    });
    
    $('#send_vacancy_submit_button').on('click', function() {
        // проверяем, заполненно ли поле "Имя"
        var name = $('#send_vacancy_name').val();
        if (!name) {
            $('#send_vacancy_name').focus();
            showMessage('#send_vacancy_name', 'Пожалуйста, укажите Ваше имя');
            return false;
        }

        // проверяем, заполненно ли поле "Телефон"
        var phone = $('#send_vacancy_phone').val();
        if (!phone) {
            $('#send_vacancy_phone').focus();
            showMessage('#send_vacancy_phone', 'Пожалуйста, укажите контактный телефон');
            return false;
        }
        
        $.get('/js/jquery.ajax.company.jobs.php?name=' + name + '&name_en=' + convertRuLettersToEn(name) + '&phone=' + phone + '&phone_en=' + convertRuLettersToEn(phone) + '&message=' + $('#send_vacancy_message').val() + '&message_en=' + convertRuLettersToEn($('#send_vacancy_message').val()), function(data){
            if (data) {
                $('#send_vacancy_submit_button').closest('div#send_vacancy_request').html(data);
            }
        });

    }); // /подтверждение формы "Запрос на вакансию"
    
    // подтверждение формы "Заказать перевозку" на http://www.sferatrans.ru/avtopark/zakazat-udlinennuju-gazel/
    $('#order_form_name, #order_form_phone, #order_form_from, #order_form_to, #order_form_date, #order_form_comment').keypress(function (e) {
        var key = e.which;
        if (key == 13) { // the enter key code
            $('#order_form_submit_button').click();
            return false;  
        }
    });
    
    $('#order_form_submit_button').on('click', function() {
        // проверяем, заполненно ли поле "Имя"
        var name = $.trim($('#order_form_name').val());
        if (!name) {
            $('#order_form_name').focus();
            showMessage('#order_form_name', 'Пожалуйста, укажите Ваше имя');
            return false;
        }

        // проверяем, заполненно ли поле "Телефон"
        var phone = $.trim($('#order_form_phone').val());
		if (!phone || (phone.match(/\d/g) ? phone.match(/\d/g).length : 0) < 10){
			showMessage('#order_form_phone', 'Пожалуйста, укажите контактный телефон с кодом.<br />Например: (495) 134-23-53.')
            $('#order_form_phone').focus();
            return false;
        }
        
        var from = $.trim($('#order_form_from').val());
        var to = $.trim($('#order_form_to').val());
        var date_moving = $.trim($('#order_form_date').val());
        var comment = $.trim($('#order_form_comment').val());
        var url = window.location.pathname;
        // если это заказ из калькулятора
        var calcDetailsHidden = $('#auto_name').val();
        if (calcDetailsHidden.length) var calcDetails = $.trim($('#auto_name').val());
        else var calcDetails = '';
        
        $.post('/js/jquery.ajax_order.php', { 'name': name, 'name_en': convertRuLettersToEn(name), 'phone': phone, 'phone_en': convertRuLettersToEn(phone), 'from': from, 'from_en': convertRuLettersToEn(from), 'to': to, 'to_en': convertRuLettersToEn(to), 'date': date_moving, 'date_en': convertRuLettersToEn(date_moving), 'comment': comment, 'comment_en': convertRuLettersToEn(comment), 'calc_details': calcDetails, 'calc_details_en': convertRuLettersToEn(calcDetails), 'url': url }, function(data) {
            if (data){ $('#order_form_submit_button').closest('div#order').html(data); }
        });

    }); // /подтверждение формы "Заказать перевозку" на http://www.sferatrans.ru/avtopark/zakazat-udlinennuju-gazel/
    
    // /ФОРМЫ
}); // /jquery ready

// ВЫВОДИМ СООБЩЕНИЕ ОБ ОШИБКЕ
function showMessage(element, message)
{
	// проверка переменных
	if (!element) return;
	if (!message) return;
	
	$(element).qtip({
		content: message,
		show: {
			solo: true,
			ready: true
		},
        position: {
            my: 'center left',
            at: 'center right'
        },
		style: {
			classes: 'qtip-text-hint'
		}
	});        
} // /ВЫВОДИМ СООБЩЕНИЕ ОБ ОШИБКЕ

// convert ru letters to en
function convertRuLettersToEn(text){
    // variables checking
    if (!text || typeof text === "undefined") return;
    
	text = text.replace(/а/g, 'a')
           .replace(/А/g, 'A')
           .replace(/б/g, 'b')
           .replace(/Б/g, 'B')
           .replace(/в/g, 'v')
           .replace(/В/g, 'V')
           .replace(/г/g, 'g')
           .replace(/Г/g, 'G')
           .replace(/д/g, 'd')
           .replace(/Д/g, 'D')
           .replace(/е/g, 'e')
           .replace(/Е/g, 'E')
           .replace(/ё/g, 'jo')
           .replace(/Ё/g, 'Jo')
           .replace(/ж/g, 'zh')
           .replace(/Ж/g, 'Zh')
           .replace(/з/g, 'z')
           .replace(/З/g, 'Z')
           .replace(/и/g, 'i')
           .replace(/И/g, 'I')
           .replace(/й/g, 'j')
           .replace(/Й/g, 'J')
           .replace(/к/g, 'k')
           .replace(/К/g, 'K')
           .replace(/л/g, 'l')
           .replace(/Л/g, 'L')
           .replace(/м/g, 'm')
           .replace(/М/g, 'M')
           .replace(/н/g, 'n')
           .replace(/Н/g, 'N')
           .replace(/о/g, 'o')
           .replace(/О/g, 'O')
           .replace(/п/g, 'p')
           .replace(/П/g, 'P')
           .replace(/р/g, 'r')
           .replace(/Р/g, 'R')
           .replace(/с/g, 's')
           .replace(/С/g, 'S')
           .replace(/т/g, 't')
           .replace(/Т/g, 'T')
           .replace(/у/g, 'u')
           .replace(/У/g, 'U')
           .replace(/ф/g, 'f')
           .replace(/Ф/g, 'F')
           .replace(/х/g, 'h')
           .replace(/Х/g, 'H')
           .replace(/ц/g, 'c')
           .replace(/Ц/g, 'C')
           .replace(/ч/g, 'ch')
           .replace(/Ч/g, 'Ch')
           .replace(/ш/g, 'sh')
           .replace(/Ш/g, 'Sh')
           .replace(/щ/g, 'sh')
           .replace(/Щ/g, 'Sh')
           .replace(/ъ/g, '')
           .replace(/Ъ/g, '')
           .replace(/ы/g, 'y')
           .replace(/Ы/g, 'Y')
           .replace(/ь/g, '')
           .replace(/Ь/g, '')
           .replace(/э/g, 'e')
           .replace(/Э/g, 'E')
           .replace(/ю/g, 'ju')
           .replace(/Ю/g, 'Ju')
           .replace(/я/g, 'ya')
           .replace(/Я/g, 'Ya');
	
	return text;
} // /convert ru letters to en