from django.shortcuts import render

def flat(request):
    return render(request, 'flat/flat.html')