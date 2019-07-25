(function() {
    var __KEYCODE_S = 83;
    var __KEYCODE_C = 67;
    var __KEYCODE_V = 86;

    var __KEYCODE_R = 82;
    var __KEYCODE_G = 71;
    var __KEYCODE_B = 66;

    var easterEggs = [
        { keys: [__KEYCODE_S, __KEYCODE_C, __KEYCODE_V], video: '/img/sensei.mp4' },
        { keys: [__KEYCODE_R, __KEYCODE_G, __KEYCODE_B], video: '/img/monitor.mp4' },
    ];

    window.__pressedKeys = new Set();

    var __handleKey = function(event) {
        var element = jQuery('#easter-egg');
        var videoElement = jQuery('#easter-egg > video')[0];

        if (event.type === 'keydown') {
            window.__pressedKeys.add(event.keyCode);
        } else if (event.type === 'keyup') {
            if (window.__pressedKeys.has(event.keyCode)) {
                window.__pressedKeys.delete(event.keyCode);
            }

            videoElement.pause();
            element.hide();
        }



        easterEggs.forEach(e => {
            for (var k of e.keys) {
                if (!window.__pressedKeys.has(k)) {
                    return;
                }
            };

            if (videoElement.paused) {
                videoElement.src = e.video;
                videoElement.play();
                element.show();
            }
        });

    };

    window.addEventListener('keydown', __handleKey);
    window.addEventListener('keyup', __handleKey);
})();
