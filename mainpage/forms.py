# -*- coding: utf-8 -*-
from django import forms

class CallbackForm(forms.Form):
     name = forms.CharField(
        widget=forms.TextInput(attrs={'class': "name"}),
        help_text='Укажите свое имя',
        max_length = 200,
        required = True,
     )
     place= forms.CharField(
        widget=forms.TextInput(attrs={'class': "place"}),
        help_text='Укажите откуда вы',
        max_length = 200,
        required = False,
     )

     descripton= forms.CharField(
        help_text='Напишите ваш отзыв',
        widget=forms.Textarea(attrs={'class': "message"}),
        max_length = 2000,
        required = True,
     )


class OrderForm(forms.Form):
     name = forms.CharField(
        label="Ваше имя",
        max_length = 200,
        required = True,
     )
     phone=forms.CharField(
        label="Ваш телефон",
        max_length = 20,
        required = True,
     )

     placefrom=forms.CharField(
        label="Откуда",
        max_length=400,
        required=True,
        )
     placeto=forms.CharField(
        label="Куда",
        max_length=400,
        required=True,
        )
     comments=forms.CharField(
        label="Комментарии",
        max_length=3000,
        required=False,
        )

     def __init__(self, *args, **kwargs):
        super(OrderForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_method = 'post'
        self.helper.add_input(Submit('submit', 'Отправить'))