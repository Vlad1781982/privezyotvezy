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