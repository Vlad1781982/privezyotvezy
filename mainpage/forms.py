# -*- coding: utf-8 -*-
from django import forms
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit

class CallbackForm(forms.Form):
     name = forms.CharField(
        label="Имя",
        widget=forms.TextInput(attrs={'class': "name"}),
        max_length = 200,
        required = True,
     )
     place= forms.CharField(
        label="Откуда вы",
        widget=forms.TextInput(attrs={'class': "place"}),
        max_length = 200,
        required = False,
     )

     description= forms.CharField(
        label='Напишите ваш отзыв',
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
        widget=forms.Textarea(),
        required=False,
        )

     def __init__(self, *args, **kwargs):
        super(OrderForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_method = 'post'
        self.helper.add_input(Submit('submit', 'Отправить'))