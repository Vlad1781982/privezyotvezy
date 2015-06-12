# -*- coding: utf-8 -*-
from django.db import models
from django.contrib import admin
from slugify import Slugify, UniqueSlugify, slugify
from slugify import slugify_url
from slugify import slugify_ru
# Create your models here.

class News(models.Model):
    title=models.CharField('Заголовок новости', max_length=400)
    content=models.TextField('Содержание новости')
    data=models.DateField('Дата создания', auto_now_add=True, blank=True, null=True)

    class Meta:
        verbose_name = ('Новость')
        verbose_name_plural = ('Новости')

    def __unicode__(self):
        return u'%s' % self.title
