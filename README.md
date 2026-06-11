# 🚀 مشروع الواجهة الأمامية — 5 صفحات تفاعلية

> وظيفة تدريبية: بناء 5 صفحات ويب تفاعلية متجاوبة باستخدام HTML5 + CSS3 + Bootstrap 5 + JavaScript

## 🔗 الصفحات

| # | الصفحة | الوصف | التفاعل JS |
|---|--------|-------|-----------|
| 1 | [البورتفوليو](page1-portfolio.html) | سيرة ذاتية تفاعلية | وضع داكن/فاتح + أشرطة مهارات متحركة |
| 2 | [المدونة](page2-blog.html) | مدونة بسيطة | فلترة المقالات + "قراءة المزيد" |
| 3 | [المتجر](page3-store.html) | متجر إلكتروني | سلة تسوق تفاعلية + فلترة + فرز |
| 4 | [الحاسبة](page4-calculator.html) | حاسبة ذكية | عمليات رياضية + سجل + وضع علمي + لوحة مفاتيح |
| 5 | [التسجيل](page5-form.html) | نموذج متعدد الخطوات | تحقق من جميع الحقول + عداد أحرف + قوة كلمة المرور |

## 📁 هيكل المشروع

```
project/
│
├── index.html              ← الصفحة الرئيسية (روابط للكل)
├── page1-portfolio.html    ← البورتفوليو
├── page2-blog.html         ← المدونة
├── page3-store.html        ← المتجر
├── page4-calculator.html   ← الحاسبة
├── page5-form.html         ← نموذج التسجيل
│
├── css/
│   └── style.css          ← ملف CSS مشترك (Bootstrap override + custom)
│
└── js/
    └── shared.js          ← JS مشترك (Dark Mode + Toast)
```

## 🛠️ التقنيات المستخدمة

- **HTML5** — `header`, `main`, `section`, `footer`, `meta viewport`
- **CSS3** — متغيرات CSS، انتقالات، تصميم متجاوب، Google Fonts (Cairo)
- **Bootstrap 5** — Grid، Navbar، Cards، Buttons، Forms
- **JavaScript** — DOM Manipulation، Events، LocalStorage، Intersection Observer

## ✅ معايير النجاح

- [x] 5 صفحات تعمل بدون أخطاء في الكونسول
- [x] Bootstrap مع تجاوب كامل (موبايل / تابلت / ديسكتوب)
- [x] ملف CSS خارجي مخصص (`css/style.css`)
- [x] تفاعل JavaScript لكل صفحة
- [x] `index.html` يحتوي روابط لجميع الصفحات
- [ ] رفع على GitHub وتفعيل GitHub Pages

## 🚀 رفع المشروع على GitHub Pages

1. أنشئ repository جديداً على GitHub
2. ارفع جميع الملفات
3. اذهب إلى **Settings → Pages**
4. اختر **Source: Deploy from a branch** → `main` → `/ (root)`
5. انسخ الرابط وأرسله للتقييم ✓

---

*مشروع تدريبي — Front-End Development*
