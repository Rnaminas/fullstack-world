
document.addEventListener('mousemove', function () {
    let square = document.querySelectorAll('.square');
    square.forEach(function (item) {
        item.addEventListener('click', function (e) {
            if (item.classList.contains('drag')) {
                item.classList.remove('drag');
            } else {
                item.classList.add('drag');
            }
        });
    });

    let dragSquare = document.querySelectorAll('.drag');
    dragSquare.forEach(function (item) {
        item.onmousedown = function (e) {
            if (e.button === 0) {
                console.log(e)
            }
            item.style.position = 'absolute';
            moveAt(e);
            document.body.appendChild(item);
            item.style.zIndex = 1000;

            function moveAt(e) {
                item.style.left = e.pageX - item.offsetWidth / 2 + 'px';
                item.style.top = e.pageY - item.offsetHeight / 2 + 'px';
            }

            document.onmousemove = function (e) {
                moveAt(e);
            }
            item.onmouseup = function () {
                document.onmousemove = null;
                item.onmouseup = null;
                item.classList.add('drag');
            }
            item.onclick = function () {
                document.onmousedown = null;
                item.onmousedown = null;
                item.classList.remove('drag');
            }
        }
    });
})

