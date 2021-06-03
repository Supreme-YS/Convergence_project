from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from .models import Member, Discharge
from .serializers import MemberSerializer, DischargeSerializer
from django.core.exceptions import ObjectDoesNotExist
import json
# Create your views here.

# Create your views here.
# 문자열을 반환하는 API
@api_view(['GET'])
def helloAPI(request):
    return Response ("hello world!")

# 사용자 리스트 API
@api_view(['GET'])
def userList(request):
    users = Member.objects.all()
    serializer = MemberSerializer(users, many=True)
    return Response(serializer.data)

# 개인별 사용자 정보 제공 API - 사용자 포인트 정보 화면에 필요
@api_view(['GET'])
def getUser(request, id):
    userInfo = Member.objects.get(phone=id)
    serializer = MemberSerializer(userInfo)
    return Response(serializer.data)

@api_view(['GET'])
def getRank(request):
    rank = Member.objects.order_by('-points')
    serializer = MemberSerializer(rank, many=True)
    print(rank)
    return Response(serializer.data)

# 회원가입
@api_view(['POST'])
def memberCreate(request):
    print(request.data)
    serializer = MemberSerializer(data = request.data)
    if(serializer.is_valid()):
        print("Hi")
        serializer.save()
        return Response(serializer.data,status=200)
    print(serializer.errors)
    return Response("member create error",status=400)

# 로그인
@api_view(['POST'])
def login(request):
    print(request.data)
    # value 추출
    # phone이 DB에 존재하는지 여부
    p = request.data.get('phone')
    print(p)
    pw = request.data.get('password')
    print(pw)
    if(Member.objects.get(phone=p)):
        m = Member.objects.get(phone=p)
        if(pw == m.password):
            print(m.password)
            serializer = MemberSerializer(m)
            return Response(serializer.data,200)
    else:
        return Response("no",status=400)

@api_view(['POST'])
def point(request):
    num = 50
    p = request.data.get('phone')
    print(request)
    try:
        obj = Member.objects.get(phone=p)

    except ObjectDoesNotExist:
        serializer = MemberSerializer(data = request.data)
        if(serializer.is_valid()):
            serializer.save()
        obj = Member.objects.get(phone=p)
    obj.points+=num
    obj.save()
    return Response(num, status=200)
        