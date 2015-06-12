# -*- coding: utf-8 -*-
from django.db import models
from django.contrib import admin
from ckeditor.fields import RichTextField
from imagekit.models import ProcessedImageField
from imagekit.admin import AdminThumbnail
from imagekit.processors import ResizeToFill
from djangular.views.crud import NgCRUDView
from slugify import slugify_url

# Create your models here.
class Cars(models.Model):
    title=models.CharField('Модель', max_length=200)
    description=models.TextField('Описание', max_length=2000,blank=True, null=True)
    price=models.IntegerField('Стоимость от...')
    carrying=models.IntegerField('Грузоподъемность')
    slug=models.SlugField(blank=True, null=True)
    minorder=models.CharField('Минимальный заказ', max_length=200)
    addtime=models.CharField('Дополнительное время', max_length=200)
    mkad=models.IntegerField('Выезд за мкад')
    photo=ProcessedImageField(verbose_name='Фотоминиатюра',upload_to='media/',
                                           processors=[ResizeToFill(120, 70)],
                                           format='JPEG',
                                           options={'quality': 80})
    photodetail=ProcessedImageField(verbose_name='Фото',upload_to='media/',
                                           processors=[ResizeToFill(310, 185)],
                                           format='JPEG',
                                           options={'quality': 80}, blank=True, null=True)
    
    photochar=ProcessedImageField(verbose_name='Габариты',upload_to='media/',
                                           processors=[ResizeToFill(310, 185)],
                                           format='JPEG',
                                           options={'quality': 80}, blank=True, null=True)


    visible=models.BooleanField('Видимость', default=True)


    class Meta:
        verbose_name = ('Борт')
        verbose_name_plural = ('Борта')

    def __unicode__(self):
        return u'%s' % self.title

    def save(self, *args, **kwargs):
        self.slug = slugify_url(self.title, max_length=40)
        return super(Cars, self).save(*args, **kwargs)


class CarView(NgCRUDView):
    model = Cars


class CarInline(admin.TabularInline):
    model = Cars


class CarAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'admin_thumbnail','title', 'description','price', 'minorder', 'addtime', 'mkad', 'photo', 'visible')
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
