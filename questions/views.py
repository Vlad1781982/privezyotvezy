from django.shortcuts import render
from questions.models import Question

# Create your views here.

def question(request, slug):
    question=Question.objects.get(slug=slug)
    return render(request, 'questions/question.html', {'question':question})


