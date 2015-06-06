# -*- coding: utf-8 -*-
from django.db import models
from django.contrib import admin
from ckeditor.fields import RichTextField
from imagekit.models import ProcessedImageField
from imagekit.admin import AdminThumbnail
from imagekit.processors import ResizeToFill
from djangular.views.crud import NgCRUDView

# Create your models here.
class Cars(models.Model):
    title=models.CharField('Модель', max_length=200)
    price=models.IntegerField('Стоимость от...')
    carrying=models.IntegerField('Грузоподъемность')
    minorder=models.CharField('Минимальный заказ', max_length=200)
    addtime=models.CharField('Дополнительное время', max_length=200)
    mkad=models.IntegerField('Выезд за мкад')
    photo=ProcessedImageField(verbose_name='Фото',upload_to='media/',
                                           processors=[ResizeToFill(120, 70)],
                                           format='JPEG',
                                           options={'quality': 80})
    visible=models.BooleanField('Видимость', default=True)


    class Meta:
        verbose_name = ('Борт')
        verbose_name_plural = ('Борта')

    def __unicode__(self):
        return u'%s' % self.title


class CarView(NgCRUDView):
    model = Cars


class CarInline(admin.TabularInline):
    model = Cars


class CarAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'admin_thumbnail','title', 'price', 'minorder', 'addtime', 'mkad', 'photo', 'visible')
    admin_thumbnail = AdminThumbnail(image_field='photo')
    tabular=[CarInline]


class CarGroups(models.Model):
    title=models.CharField('Грузоподъемность', max_length=200)
    price=models.IntegerField('Стоимость от...')
    minorder=models.CharField('Минимальный заказ', max_length=200)
    addtime=models.CharField('Дополнительное время', max_length=200)
    mkad=models.IntegerField('Выезд за мкад')
    photo=ProcessedImageField(verbose_name='Фото',upload_to='media/',
                                           processors=[ResizeToFill(120, 70)],
                                           format='JPEG',
                                           options={'quality': 80})
    visible=models.BooleanField('Видимость', default=True)


    class Meta:
        verbose_name = ('По грузоподъемности')
        verbose_name_plural = ('По грузоподъемности')

    def __unicode__(self):
        return u'%s' % self.title

class GroupInline(admin.TabularInline):
    model = CarGroups

class GroupAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'admin_thumbnail','title', 'price', 'minorder', 'addtime', 'mkad', 'photo', 'visible')
    admin_thumbnail = AdminThumbnail(image_field='photo')
    tabular=[GroupInline]



class GroupView(NgCRUDView):
    model = CarGroups
