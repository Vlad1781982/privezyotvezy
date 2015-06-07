from django.shortcuts import render

def office(request):
    return render(request, 'office/office.html')