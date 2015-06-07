from django.shortcuts import render
from cars.models import Cars, CarGroups
from questions.models import Question
from callback.models import Callback
from django.http import HttpResponse
from django.template import RequestContext, loader
from django.utils import timezone
from datetime import datetime, date, time
#from django.template.defaultfilters import slugify
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

def index(request):
    callbacks=Callback.objects.all()
    cars=Cars.objects.all()
    questions=Question.objects.all()
    groups=CarGroups.objects.all()
    return render(request, 'mainpage/main.html', {'cars':cars, 'groups':groups, 'questions':questions, 'callbacks':callbacks})



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

