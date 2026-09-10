(function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    var canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '12';
    canvas.style.opacity = '0.85';
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var flakes = [];
    var lastTime = 0;
    var frameInterval = 33;

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createFlakes() {
        var count = Math.round(window.innerWidth / 45);
        if (count > 45) {
            count = 45;
        }
        if (count < 18) {
            count = 18;
        }
        flakes = [];
        for (var i = 0; i < count; i++) {
            flakes.push({
                x: rand(0, canvas.width),
                y: rand(0, canvas.height),
                r: rand(1.6, 3.8),
                speed: rand(0.35, 1.1),
                sway: rand(0.4, 1.4),
                phase: rand(0, Math.PI * 2),
                alpha: rand(0.3, 0.8)
            });
        }
    }

    function draw(ts) {
        window.requestAnimationFrame(draw);

        if (ts - lastTime < frameInterval) {
            return;
        }
        lastTime = ts;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        for (var i = 0; i < flakes.length; i++) {
            var f = flakes[i];
            ctx.globalAlpha = f.alpha;
            ctx.beginPath();
            ctx.arc(f.x + Math.sin(f.phase) * 10, f.y, f.r, 0, Math.PI * 2);
            ctx.fill();

            f.y += f.speed * 1.7;
            f.phase += 0.02 * f.sway;
            if (f.y > canvas.height + 6) {
                f.y = -6;
                f.x = rand(0, canvas.width);
            }
        }
        ctx.globalAlpha = 1;
    }

    resize();
    createFlakes();
    window.addEventListener('resize', function () {
        resize();
        createFlakes();
    });
    window.requestAnimationFrame(draw);
})();
