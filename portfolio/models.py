from django.db import models
from django.utils.text import slugify


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ایجاد")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="آخرین بروزرسانی")

    class Meta:
        abstract = True


class OrderedModel(BaseModel):
    order = models.PositiveIntegerField(default=0, verbose_name="ترتیب نمایش")
    is_active = models.BooleanField(default=True, verbose_name="فعال")

    class Meta:
        abstract = True
        ordering = ["order", "-created_at"]
        
   

class Profile(BaseModel):
    full_name_fa = models.CharField(max_length=100, verbose_name="نام کامل (فارسی)")
    full_name_en = models.CharField(max_length=100, verbose_name="نام کامل (انگلیسی)")

    title = models.CharField(max_length=200, verbose_name="عنوان تخصص اصلی (مثل Backend Developer)")
    
    # --- فیلدهای اضافه شده برای پورتفولیو شخصی و آکادمیک ---
    short_description = models.CharField(
        max_length=300, 
        blank=True, 
        verbose_name="توضیح کوتاه (مناسب زیرعنوان در بخش Hero)"
    )
    current_position = models.CharField(
        max_length=200, 
        blank=True, 
        verbose_name="سمت یا دانشگاه فعلی (مثل MSc Student at ...)"
    )
    education_level = models.CharField(
        max_length=100, 
        blank=True, 
        verbose_name="مدرک تحصیلی (مثل Master of Computer Science)"
    )
    research_interests = models.CharField(
        max_length=300, 
        blank=True, 
        verbose_name="علایق پژوهشی و تخصصی (با کاما جدا شوند)"
    )
    availability_status = models.CharField(
        max_length=100, 
        blank=True, 
        verbose_name="وضعیت در دسترس بودن (مثل Open to Remote Work یا Seeking PhD)"
    )
    # --------------------------------------------------------

    avatar = models.ImageField(upload_to="profile/", verbose_name="آواتار")
    cover = models.ImageField(upload_to="profile/", blank=True, verbose_name="کاور")

    bio = models.TextField(verbose_name="متن کامل بیوگرافی (About Me)")

    birthday = models.DateField(blank=True, null=True, verbose_name="تاریخ تولد")

    email = models.EmailField(verbose_name="ایمیل")
    phone = models.CharField(max_length=30, verbose_name="شماره تماس")
    address = models.CharField(max_length=300, blank=True, verbose_name="آدرس/لوکیشن")

    resume = models.FileField(upload_to="resume/", blank=True, verbose_name="فایل رزومه (CV)")

    class Meta:
        verbose_name = "پروفایل"
        verbose_name_plural = "پروفایل"

    def __str__(self):
        return self.full_name_en

class AboutImage(OrderedModel):
    profile = models.ForeignKey(
        Profile, 
        on_delete=models.CASCADE, 
        related_name="about_images",
        verbose_name="پروفایل"
    )
    image = models.ImageField(upload_to="about/", verbose_name="تصویر")

    class Meta:
        verbose_name = "تصویر درباره من"
        verbose_name_plural = "تصاویر درباره من"

    def __str__(self):
        return f"تصویر {self.order} - {self.profile.full_name_en}"
    
class SocialNetwork(OrderedModel):
    fa_name = models.CharField(max_length=100)

    en_name = models.CharField(max_length=100)

    slug = models.SlugField(unique=True, blank=True)
    
    color = models.CharField(max_length=20, default="#7C3AED")
    
    icon_image = models.FileField(
        upload_to="social_icons/",
        blank=True,
        null=True,
        help_text="تصویر آیکون (پیشنهاد می‌شود از فرمت SVG یا PNG شفاف استفاده کنید)"
        # validators=[FileExtensionValidator(['svg', 'png'])]
    )
    icon = models.CharField(
        max_length=100,
        help_text="نام آیکون Lucide یا FontAwesome"
    )

    url = models.URLField()

    class Meta:
        verbose_name = "شبکه اجتماعی"
        verbose_name_plural = "شبکه‌های اجتماعی"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.en_name)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.en_name


class Skill(OrderedModel):
    title = models.CharField(max_length=100)

    percent = models.PositiveSmallIntegerField(default=100)

    icon_image = models.FileField(
        upload_to="skill_icons/",
        blank=True,
        null=True,
        help_text="آیکون مهارت (SVG یا PNG)"
    )
    
    icon = models.CharField(max_length=100, blank=True)

    color = models.CharField(max_length=20, default="#7C3AED")

    class Meta:
        verbose_name = "مهارت"
        verbose_name_plural = "مهارت‌ها"

    def __str__(self):
        return self.title
        
        
class Technology(OrderedModel):
    title = models.CharField(max_length=100)

    icon = models.CharField(max_length=100, blank=True)
    color = models.CharField(max_length=20, default="#7C3AED")

    image = models.ImageField(
        upload_to="technologies/",
        blank=True
    )

    class Meta:
        verbose_name = "تکنولوژی"
        verbose_name_plural = "تکنولوژی‌ها"

    def __str__(self):
        return self.title
        
      


class Project(OrderedModel):
    title = models.CharField(max_length=200)

    slug = models.SlugField(unique=True, blank=True)

    short_description = models.CharField(
        max_length=300,
        blank=True
    )

    description = models.TextField(blank=True)

    cover = models.ImageField(
        upload_to="projects/covers/",
        blank=True,
        null=True
    )

    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)

    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)

    is_featured = models.BooleanField(default=False)

    # Relations
    skills = models.ManyToManyField(
        "Skill",
        blank=True,
        related_name="projects"
    )

    technologies = models.ManyToManyField(
        "Technology",
        blank=True,
        related_name="projects"
    )

    class Meta:
        verbose_name = "پروژه"
        verbose_name_plural = "پروژه‌ها"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class Experience(OrderedModel):
    EMPLOYMENT_TYPES = (
        ("full_time", "Full Time"),
        ("part_time", "Part Time"),
        ("freelance", "Freelance"),
        ("contract", "Contract"),
        ("internship", "Internship"),
    )

    title = models.CharField(max_length=200)

    company = models.CharField(max_length=200)

    employment_type = models.CharField(
        max_length=20,
        choices=EMPLOYMENT_TYPES,
        default="full_time"
    )

    location = models.CharField(
        max_length=200,
        blank=True
    )

    short_description = models.CharField(
        max_length=300,
        blank=True
    )

    description = models.TextField(blank=True)

    start_date = models.DateField()

    end_date = models.DateField(
        blank=True,
        null=True
    )

    is_current = models.BooleanField(default=False)

    company_logo = models.ImageField(
        upload_to="experience/",
        blank=True,
        null=True
    )

    # Relations
    skills = models.ManyToManyField(
        "Skill",
        blank=True,
        related_name="experiences"
    )

    technologies = models.ManyToManyField(
        "Technology",
        blank=True,
        related_name="experiences"
    )

    class Meta:
        verbose_name = "تجربه کاری"
        verbose_name_plural = "تجربیات کاری"

    def __str__(self):
        return f"{self.title} @ {self.company}"


class Education(OrderedModel):
    
    degree = models.CharField(max_length=200)
    
    education_type = models.CharField(
        max_length=20,
        choices=(
            ("university", "University"),
            ("course", "Course"),
            ("bootcamp", "Bootcamp"),
            ("certificate", "Certificate"),
        ),
        default='university'
    )

    field_of_study = models.CharField(
        max_length=200,
        blank=True
    )

    institution = models.CharField(max_length=200)

    start_date = models.DateField()

    end_date = models.DateField(
        blank=True,
        null=True
    )

    description = models.TextField(blank=True)

    logo = models.ImageField(
        upload_to="education/",
        blank=True,
        null=True
    )

    class Meta:
        verbose_name = "تحصیلات"
        verbose_name_plural = "تحصیلات"

    def __str__(self):
        return f"{self.degree} - {self.institution}"


from django.db import models


from django.db import models


class InquiryStatus(models.TextChoices):
    UNSEEN = "unseen", "دیده نشده"
    REVIEWING = "reviewing", "در حال بررسی"
    ANSWERED = "answered", "بررسی شده و پاسخ داده شده"
    REVIEWED_NO_RESPONSE = "reviewed_no_response", "بررسی شده و پاسخ نداده شده"


class CollaborationInquiry(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    message = models.TextField()

    status = models.CharField(
        max_length=30,
        choices=InquiryStatus.choices,
        default=InquiryStatus.UNSEEN
    )

    response = models.TextField(
        blank=True,
        help_text="پاسخی که برای این درخواست ارسال شده یا قرار است ارسال شود"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "دعوت به همکاری"
        verbose_name_plural = "دعوت به همکاری ها"

    def __str__(self):
        return f"{self.name} - {self.email}"


class Feedback(models.Model):
    name = models.CharField(max_length=120, blank=True)
    message = models.TextField()

    status = models.CharField(
        max_length=30,
        choices=InquiryStatus.choices,
        default=InquiryStatus.UNSEEN
    )

    response = models.TextField(
        blank=True,
        help_text="پاسخی که برای این فیدبک ثبت شده"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "فیدبک"
        verbose_name_plural = "فیدبک ها"

    def __str__(self):
        return self.name or "Anonymous"
