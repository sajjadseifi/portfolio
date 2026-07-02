from django.urls import path
from .views import index,send_collaboration,send_feedback

urlpatterns = [
    path("", index, name="home"),
    path("send-collaboration/", send_collaboration, name="send_collaboration"),
    path("send-feedback/", send_feedback, name="send_feedback"),
]