from django.shortcuts import render

def cottage(request):
    return render(request, 'cottage/cottage.html')