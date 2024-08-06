from django.shortcuts import render
from .models import Letter

# Create your views here.
def home(request):
    return render(request, 'Letters/home.html')

def letters(request):
    letters = Letter.objects.all()
    context = {'letters': letters}
    return render(request, 'Letters/letter.html', context)

