from django.shortcuts import render
from questions.models import Question
from callback.models import Callback
from news.models import News

# Create your views here.

def question(request, slug):
    callbacks=Callback.objects.order_by('-date')[:3]
    news=News.objects.order_by('-data')[:3]
    questions=Question.objects.all()
    quest=Question.objects.get(slug=slug)
    return render(request, 'questions/question.html', {'questions':questions,'quest':quest, 'callbacks':callbacks,'news':news})


