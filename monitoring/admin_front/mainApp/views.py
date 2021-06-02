from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Machine
from django.core import serializers
from django.http import HttpResponse
from django.db import connection
import json


# Create your views here.
def index(request):
    # if request.method == 'POST':
    machine_datas = Machine.objects.all()
    print('success - ', type(machine_datas), machine_datas)
    list = []
    for machine_data in machine_datas:
        list.append({
            'machine_id': machine_data.machine_id,
            'lat': machine_data.lat,
            'lng': machine_data.lng,
            'addr': machine_data.addr,
            'reset': machine_data.reset,
            'pet_cnt': machine_data.pet_cnt,
            'pp_cnt': machine_data.pp_cnt,
            'ps_cnt': machine_data.ps_cnt,
            'total_cnt': machine_data.total_cnt
        })

    machineJson = json.dumps(list,ensure_ascii=False)
    print('oh - ', machineJson)
    return render(request, 'index.html', {'machineJson' : machineJson})