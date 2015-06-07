from django.shortcuts import render
from callback.models import Callback
# Create your views here.

def callback(request,slug):
    callback=Callback.objects.get(slug=slug)
    return render(request, 'callbacks/callback.html', {'callback':callback})
