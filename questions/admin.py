from django.contrib import admin
from questions.models import Question, QuestionAdmin

# Register your models here.
admin.site.register(Question, QuestionAdmin)
