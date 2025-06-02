# urls.py

from django.urls import path
from .views import StaffByDepartmentView

urlpatterns = [
    path('api/staff/<str:department_name>/', StaffByDepartmentView.as_view(), name='staff-by-department'),
]
