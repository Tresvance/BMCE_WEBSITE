
from rest_framework import generics
from .models import Staff
from .serializers import StaffSerializer

class StaffByDepartmentView(generics.ListAPIView):
    serializer_class = StaffSerializer

    def get_queryset(self):
        dept_name = self.kwargs['department_name']  # e.g., 'CSE'
        return Staff.objects.filter(department__name__iexact=dept_name)
