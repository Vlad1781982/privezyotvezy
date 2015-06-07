from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from cars.models import CarView,GroupView
from django.views.generic import TemplateView

"""sitetransport URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^admin_tools/', include('admin_tools.urls')),
    url(r'^$', 'mainpage.views.index'),
    url(r'^test1/', 'mainpage.views.test1'),
    url(r'^test2/#tabs1-html', 'mainpage.views.test1html'),
    url(r'^test2/', 'mainpage.views.test2'),
    url(r'^crud/cars/?$', CarView.as_view(), name='my_car_view'),
    url(r'^crud/groups/?$', GroupView.as_view(), name='my_group_view'),
    url(r'^gruzoperevozki/', 'gruzoperevozki.views.gruzoperevozki'),
    url(r'^flat/', 'flat.views.flat'),
    url(r'^cottage/', 'cottage.views.cottage'),
    url(r'^office/', 'office.views.office'),
    url(r'^questions/(?P<slug>\w+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*))/$', 'questions.views.question'),
    url(r'^callbacks/(?P<slug>\w+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*))/$', 'callback.views.callback'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()