from rest_framework import serializers
from .models import Member, Discharge

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['phone','name', 'points', 'password']

class DischargeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discharge
        fields = ['discharge_date', 'material', 'machine_id','who']

# class RankSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Rank
#         fields = ['who']

