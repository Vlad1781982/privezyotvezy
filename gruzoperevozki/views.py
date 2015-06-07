from django.shortcuts import render
from cars.models import Cars

def gruzoperevozki(request):
    cars=Cars.objects.all()
    return render(request, 'gruzoperevozki/gruzoperevozki.html', {'cars':cars})