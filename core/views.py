from django.shortcuts import render

# Create your views here.

def login(request):
    return render(request,'login.html',)

def home(request):
    return render(request,'home.html',)

def about(request):
    return render(request,'about.html',)

def services(request):
    return render(request,'services.html',)

def contact(request):      
    return render(request,'contact.html',)

def assistant(request):      
    return render(request,'assistant.html',)

def prediction(request):      
    return render(request,'prediction.html',)

def dashboard(request):      
    return render(request,'Dashboard.html',)

def doctordashboard(request):      
    return render(request,'doctordashboard.html',)

def doctor_chatroom(request):      
    return render(request,'doctor_chatroom.html',)

def patientdashboard(request):
    return render(request,'patientdashboard.html',)

def patient_chatroom(request):
    return render(request,'patient_chatroom.html',)

