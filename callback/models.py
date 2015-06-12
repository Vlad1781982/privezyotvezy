# -*- coding: utf-8 -*-
from django.db import models
from django.contrib import admin
from slugify import Slugify, UniqueSlugify, slugify
from slugify import slugify_url
from slugify import slugify_ru

# Create your models here.
class Callback(models.Model):
    title=models.CharField('Заголовок', max_length=200)
    slug=models.SlugField(max_length=45, null=True, blank=True)
    body=models.TextField('Содержание отзыва', max_length=3000)
    author=models.CharField('Автор', max_length=200)
    place=models.CharField('Место проживания', max_length=300, blank=True)
    date=models.DateField('Дата написания', auto_now_add=True, blank=True, null=True)
    visible=models.BooleanField('Видимость', default=False)


    class Meta:
        verbose_name = ('Отзыв')
        verbose_name_plural = ('Отзывы')

    def __unicode__(self):
        return u'%s' % self.title


    def save(self, *args, **kwargs):
        self.title=self.body[:60]
        self.slug = slugify_url(self.title, max_length=40)
        return super(Callback, self).save(*args, **kwargs)

class CallbackAdmin(admin.ModelAdmin):
    exclude = ('title','slug',)



