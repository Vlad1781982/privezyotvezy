# -*- coding: utf-8 -*-
from django.shortcuts import render
from cars.models import Cars
from questions.models import Question
from callback.models import Callback
from news.models import News
# Create your views here.

def car_detail(request, slug):
    callbacks=Callback.objects.order_by('-date')[:3]
    news=News.objects.order_by('-data')[:3]
    questions=Question.objects.all()
    car=Cars.objects.get(slug=slug)
    return render(request, 'cars/car_detail.html', {'car':car,'callbacks':callbacks,'news':news,'questions':questions})


