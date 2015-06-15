from django.shortcuts import render
from questions.models import Question
from callback.models import Callback
from news.models import News
from texts.models import CottageTexts, CottagePhoto

def cottage(request):
    photos=CottagePhoto.objects.all()
    callbacks=Callback.objects.order_by('-date')[:3]
    news=News.objects.order_by('-data')[:3]
    questions=Question.objects.all()
    return render(request, 'cottage/cottage.html', {'callbacks':callbacks,'news':news,'questions':questions, 'photos':photos})