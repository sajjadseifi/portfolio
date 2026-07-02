from django.contrib import admin
from .models import *


class BaseAdmin(admin.ModelAdmin):
    list_per_page = 20

    search_fields = ()

    list_filter = ("is_active",)

    ordering = ("order",)


# تعریف Inline برای تصاویر درباره من
class AboutImageInline(admin.TabularInline):
    model = AboutImage
    extra = 1        # تعداد ردیف‌های خالی پیش‌فرض برای اضافه کردن عکس جدید
    max_num = 6      # حداکثر تعداد عکسی که کاربر می‌تواند اضافه کند
    fields = ('image', 'order', 'is_active') # ستون‌هایی که در ادمین نمایش داده می‌شوند


@admin.register(SocialNetwork)
class SocialNetworkAdmin(BaseAdmin):
    list_display = (
        "fa_name",
        "en_name",
        "icon",
        "order",
        "is_active",
    )

    search_fields = (
        "fa_name",
        "en_name",
    )

    prepopulated_fields = {
        "slug": ("en_name",)
    }


@admin.register(Skill)
class SkillAdmin(BaseAdmin):
    list_display = (
        "title",
        "percent",
        "order",
        "is_active",
    )

    search_fields = (
        "title",
    )


@admin.register(Technology)
class TechnologyAdmin(BaseAdmin):
    list_display = (
        "title",
        "order",
        "is_active",
    )

    search_fields = (
        "title",
    )
    


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = (
        "full_name_fa",
        "title",
        "email",
    )
    # اضافه کردن Inline به پنل پروفایل
    inlines = [AboutImageInline]



@admin.register(Education)
class EducationAdmin(BaseAdmin):
    list_display = ("degree", "institution", "start_date", "order", "is_active")
    search_fields = ("degree", "institution")

@admin.register(Experience)
class ExperienceAdmin(BaseAdmin):
    list_display = ("title", "company", "employment_type", "is_current", "order")
    list_filter = ("is_active", "employment_type", "is_current")
    search_fields = ("title", "company")
    # اینجا از filter_horizontal استفاده کردیم که بهترین راه برای M2M است
    filter_horizontal = ("skills", "technologies")

@admin.register(Project)
class ProjectAdmin(BaseAdmin):
    list_display = ("title", "is_featured", "start_date", "order", "is_active")
    list_filter = ("is_active", "is_featured")
    search_fields = ("title", "short_description")
    prepopulated_fields = {"slug": ("title",)}
    

    # استفاده از filter_horizontal برای مدیریت تکنولوژی‌ها و مهارت‌ها
    filter_horizontal = ("skills", "technologies")
    


from django.contrib import admin
from .models import CollaborationInquiry, Feedback


@admin.register(CollaborationInquiry)
class CollaborationInquiryAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "status", "created_at")
    list_filter = ("status", "created_at")
    search_fields = ("name", "email", "message", "response")
    list_editable = ("status",)
    readonly_fields = ("created_at",)


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ("name", "status", "created_at")
    list_filter = ("status", "created_at")
    search_fields = ("name", "message", "response")
    list_editable = ("status",)
    readonly_fields = ("created_at",)
