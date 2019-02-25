(function() {
    var __KEYCODE_S = 83;
    var __KEYCODE_C = 67;
    var __KEYCODE_V = 86;

    window.__S = window.__C = window.__V = false;

    var __handleKey = function(event) {
        var isKeyDown = event.type === 'keydown';
        switch (event.keyCode) {
            case __KEYCODE_S:
                window.__S = isKeyDown;
                break;
            case __KEYCODE_C:
                window.__C = isKeyDown;
                break;
            case __KEYCODE_V:
                window.__V = isKeyDown;
                break;
            default:
                break;
        }

        var element = jQuery('#easter-egg');
        var videoElement = jQuery('#easter-egg > video')[0];

        if ('jQuery' in window && window.__S && window.__C && window.__V) {
            videoElement.play();
            element.show();
        } else {
            videoElement.pause();
            element.hide();
        }
    };

    window.addEventListener('keydown', __handleKey);
    window.addEventListener('keyup', __handleKey);
})();