# serializers.py

from rest_framework import serializers
from .models import Staff

class StaffSerializer(serializers.ModelSerializer):
    department = serializers.StringRelatedField()  # returns the name of department

    class Meta:
        model = Staff
        fields = ['id', 'name', 'designation', 'photo', 'department']
