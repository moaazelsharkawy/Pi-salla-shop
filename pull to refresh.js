<script>
var bodyElement = document.querySelector('body');

var startY = 0;
var threshold = 100; 

function onPullToRefresh() {
    location.reload();
}

bodyElement.addEventListener('touchstart', function(e) {
    startY = e.touches[0].clientY;
});

bodyElement.addEventListener('touchmove', function(e) {
    var currentY = e.touches[0].clientY;
    var distance = currentY - startY;

    if (distance > threshold && window.scrollY === 0) {
        var touchendY = e.changedTouches[0].clientY;
        var refreshThreshold = 200; 

        if (touchendY - startY > refreshThreshold) {
            onPullToRefresh();
            startY = touchendY; 
        }
    }
});


</script>
