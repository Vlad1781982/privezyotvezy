from django.contrib import admin
from callback.models import Callback,CallbackAdmin

# Register your models here.
admin.site.register(Callback,CallbackAdmin)