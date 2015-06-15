# -*- coding: utf-8 -*-
from django.shortcuts import render
from cars.models import Cars, CarGroups
from questions.models import Question
from callback.models import Callback
from django.http import HttpResponseRedirect
from django.template import RequestContext, loader
from django.utils import timezone
from datetime import datetime, date, time
from mainpage.forms import CallbackForm
from questions.models import Question
from callback.models import Callback
from news.models import News
#from django.template.defaultfilters import slugify
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

def index(request):
    callbacks=Callback.objects.order_by('-date')[:3]
    news=News.objects.order_by('-data')[:2]
    cars=Cars.objects.all()
    questions=Question.objects.all()
    groups=CarGroups.objects.all()
    return render(request, 'mainpage/main.html', {'cars':cars, 'groups':groups, 'questions':questions, 'callbacks':callbacks, 'news':news})


def test1(request):
    cars=Cars.objects.all()
    groups=CarGroups.objects.all()
    return render(request, 'mainpage/test1.html', {'cars':cars, 'groups':groups})

def test1html(request):
    cars=Cars.objects.all()
    return render(request, 'mainpage/test1html.html', {'cars':cars})


def test2(request):
    cars=Cars.objects.all()
    groups=CarGroups.objects.all()
    return render(request, 'mainpage/test2.html', {'cars':cars, 'groups':groups})

def formcallback(request):
    callbacks=Callback.objects.order_by('-date')[:3]
    news=News.objects.order_by('-data')[:3]
    questions=Question.objects.all()
    errors = []
    form=CallbackForm(request.POST)
    if request.POST:
        name= request.POST.get('name')
        place= request.POST.get('place')
        description= request.POST.get('description')

        if not name:
            errors.append('Введите свое имя')
        if not description:
            errors.append('Телепаты в отпуске. Введите свой отзыв.')

        if not errors:
            call=Callback.objects.create(author=name, body=description, place=place)
            call.save()
            return HttpResponseRedirect('/cars/')


    return render(request,'mainpage/form-callback.html', {'errors': errors,'form':form, 'questions':questions, 'callbacks':callbacks, 'news':news})


