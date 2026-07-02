from django.shortcuts import render
from .models import *
from django.shortcuts import redirect
from django.contrib import messages


def index(request):
    profile = Profile.objects.first()

    about_images = profile.about_images.filter(is_active=True)[:6] if profile else []

    context = {
        "profile": profile,

        "social_networks": SocialNetwork.objects.filter(is_active=True),

        "skills": Skill.objects.filter(is_active=True),
        "technologies": Technology.objects.filter(is_active=True),

        "projects": Project.objects.filter(is_active=True).order_by("order"),
        "experiences": Experience.objects.filter(is_active=True).order_by("order"),
        "educations": Education.objects.filter(is_active=True).order_by("order"),

        "about_images": about_images,
    }

    return render(request, "portfolio/index.html", context)



def send_collaboration(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        CollaborationInquiry.objects.create(
            name=name,
            email=email,
            message=message
        )

        messages.success(request, "Your collaboration request was sent successfully.")
    
    return redirect("home")


def send_feedback(request):
    if request.method == "POST":
        name = request.POST.get("name")
        message = request.POST.get("message")

        Feedback.objects.create(
            name=name,
            message=message
        )

        messages.success(request, "Thanks for your feedback!")
    
    return redirect("home")
