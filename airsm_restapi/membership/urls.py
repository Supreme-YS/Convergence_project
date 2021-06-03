from django.contrib import admin
from django.urls import path, include
from .views import helloAPI, userList, getUser, getRank, memberCreate, login, point

# 순서 규칙
urlpatterns = [
    path('rank/',getRank),
    path('hello/',helloAPI),
    path('users/',userList),
    path('signin/',login),
    path('point/',point),
    path('users/signup/',memberCreate),
    path('<str:id>/',getUser),
    
]
