# -*- coding: utf-8 -*-
from django.db import models
from slugify import slugify_url
from django.contrib import admin

class Question(models.Model):
    slug=models.SlugField(max_length=60, null=True, blank=True)
    content=models.CharField('Вопрос',max_length=400)
    answer=models.TextField('Ответ')

    class Meta:
        verbose_name = ('Вопрос/Ответ')
        verbose_name_plural = ('Вопросы/Ответы')

    def __unicode__(self):
        return u'%s' % self.content

    def save(self, *args, **kwargs):
        self.slug = slugify_url(self.content, max_length=40)
        return super(Question, self).save(*args, **kwargs)


class QuestionAdmin(admin.ModelAdmin):
    exclude = ('slug',)


