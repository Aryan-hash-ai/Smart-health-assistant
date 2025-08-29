from django.urls import path
from . import views

urlpatterns = [
    
    path('', views.home, name='home'),         # root URL
    path('about/', views.about, name='about'),
    path('services/', views.services, name='services'),
    path('login/', views.login, name='login'),
    path('contact/', views.contact, name='contact'),
    path('assistant/', views.assistant, name='assistant'),
    path('prediction/', views.prediction, name='prediction'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('doctordashboard/', views.doctordashboard, name='doctordashboard'),
    path('doctor_chatroom/', views.doctor_chatroom, name='doctor_chatroom'),
    path('patientdashboard/', views.patientdashboard, name='patientdashboard'),
    path('patient_chatroom/', views.patient_chatroom, name='patient_chatroom'),
    
   
    
]

