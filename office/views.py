from django.shortcuts import render
from questions.models import Question
from callback.models import Callback
from news.models import News
from texts.models import OfficeTexts, OfficePhoto, OfficeTable

def office(request):
	tables=OfficeTable.objects.all()
    photos=OfficePhoto.objects.all()
    sub=OfficeTexts.objects.all()
    callbacks=Callback.objects.order_by('-date')[:3]
    news=News.objects.order_by('-data')[:3]
    questions=Question.objects.all()
    return render(request, 'office/office.html', {'questions':questions, 'callbacks':callbacks,'news':news, 'sub':sub, 'photos':photos, 'tables':tables})