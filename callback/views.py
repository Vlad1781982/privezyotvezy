from django.shortcuts import render
from callback.models import Callback
from news.models import News
from questions.models import Question
# Create your views here.

def callback(request,slug):
    callbacks=Callback.objects.order_by('-date')[:3]
    news=News.objects.order_by('-data')[:3]
    questions=Question.objects.all()
    call=Callback.objects.get(slug=slug)
    return render(request, 'callbacks/callback.html', {'callbacks':callbacks, 'questions':questions,'news':news, 'call':call})
