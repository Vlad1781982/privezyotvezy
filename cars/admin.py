from django.contrib import admin
from cars.models import Cars, CarGroups, CarAdmin, GroupAdmin
# Register your models here.
admin.site.register(Cars, CarAdmin)
admin.site.register(CarGroups, GroupAdmin)