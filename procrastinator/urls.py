from django.conf.urls import patterns, include, url
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'django.views.generic.simple.direct_to_template',
        {'template': 'game/main.html'}, name='main'),
    url(r'^game/$', 'game.views.game', name="game"),
)
