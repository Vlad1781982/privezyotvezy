# -*- coding: utf-8 -*-
from django.db import models
from slugify import slugify_url
from django.contrib import admin

class Question(models.Model):
    title=models.CharField('Название вопроса', max_length=500)
    slug=models.SlugField(max_length=60, null=True, blank=True)
    content=models.TextField('Вопрос')
    answer=models.TextField('Ответ')

    class Meta:
        verbose_name = ('Вопрос/Ответ')
        verbose_name_plural = ('Вопросы/Ответы')

    def __unicode__(self):
        return u'%s' % self.title

    def save(self, *args, **kwargs):
        self.slug = slugify_url(self.title, max_length=40)
        return super(Question, self).save(*args, **kwargs)


class QuestionAdmin(admin.ModelAdmin):
    list_display = ('title','content','answer')


