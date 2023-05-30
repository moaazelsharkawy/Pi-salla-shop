<script>
// احضر عنصر الجسم (أو العنصر الذي ترغب في إعادة تحميله)
var bodyElement = document.querySelector('body');

// تعيين المتغيرات اللازمة لتنفيذ عملية السحب لأسفل
var startY = 0;
var threshold = 100; // حد السحب المطلوب لتنفيذ إعادة التحميل

// تعيين الدالة التي ستتم استدعاؤها عند الانتهاء من عملية السحب لأسفل
function onPullToRefresh() {
    // قم بتنفيذ إجراءات إعادة التحميل هنا
    location.reload();
}

// تعيين الأحداث لعملية السحب لأسفل
bodyElement.addEventListener('touchstart', function(e) {
    startY = e.touches[0].clientY;
});

bodyElement.addEventListener('touchmove', function(e) {
    var currentY = e.touches[0].clientY;
    var distance = currentY - startY;

    if (distance > threshold && window.scrollY === 0) {
        var touchendY = e.changedTouches[0].clientY;
        var refreshThreshold = 200; // حد السحب المطلوب لتنفيذ إعادة التحميل

        if (touchendY - startY > refreshThreshold) {
            onPullToRefresh();
            startY = touchendY; // إعادة تعيين نقطة البداية لتمكين السحب المستمر
        }
    }
});


</script>
