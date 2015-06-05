from django.shortcuts import render
from cars.models import Cars, CarGroups
from django.http import HttpResponse
from django.template import RequestContext, loader
from django.utils import timezone
from datetime import datetime, date, time
#from django.template.defaultfilters import slugify
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

def index(request):
    cars=Cars.objects.all()
    groups=CarGroups.objects.all()
    return render(request, 'mainpage/index.html', {'cars':cars, 'groups':groups})



def test1(request):
	cars=Cars.objects.all()
    groups=CarGroups.objects.all()
    return render(request, 'mainpage/test1.html', {'cars':cars, 'groups':groups})

def test2(request):
	cars=Cars.objects.all()
    groups=CarGroups.objects.all()
    return render(request, 'mainpage/test2.html', {'cars':cars, 'groups':groups})
