from django.urls import path
from .views import *



urlpatterns = [
    path('', index, name="index"),
    path('vocalizacion/', vocalizacion, name="vocalizacion"),
    path('save_audio/', save_audio, name="save_audio"),
    path('intensidad/', intensidad, name="intensidad"),
    path('login/', LoginView.as_view(), name="login"),
    path('registro/', registro, name="registro"),
    path('preregistro/', preregistro, name="preregistro"),
    path('preregistrados/', preregistrados, name="preregistrados"),
    path('buscar_rut/', buscar_rut, name="buscar_rut"),
    path('grbas/', grbas, name="grbas"),
    path('rasati/', rasati, name="rasati"),
    path('ESV/', esv, name="esv"),
    path('audios_pacientes/',audios_pacientes,name="audios_pacientes"),
    path('lista_pacientes/',lista_pacientes,name="lista_pacientes"),
    path('coeficientes_audio/',form_coeficientes,name="coeficientes_audio")
]
