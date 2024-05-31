document.addEventListener('mousemove', function(event) {
    var noBtn = document.getElementById("noBtn");
    var containerRect = document.querySelector('.container').getBoundingClientRect();
    var noBtnRect = noBtn.getBoundingClientRect();
    var cursorX = event.clientX;
    var cursorY = event.clientY;

    // Check if cursor is over the "No" button
    if (
        cursorX >= noBtnRect.left &&
        cursorX <= noBtnRect.right &&
        cursorY >= noBtnRect.top &&
        cursorY <= noBtnRect.bottom
    ) {
        moveNoBtn();
    }
});

function moveNoBtn() {
    var noBtn = document.getElementById("noBtn");
    var containerWidth = document.querySelector('.container').offsetWidth;
    var containerHeight = document.querySelector('.container').offsetHeight;
    var maxX = containerWidth - noBtn.offsetWidth;
    var maxY = containerHeight - noBtn.offsetHeight;
    
    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);
    
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
}
function declareLove() {
    var title = document.getElementById("title");
    title.innerHTML = "I know, You Love Me <span class='love-sign'>❤️</span>";
    title.classList.add('loved'); // Add 'loved' class for text color change

    // Add particle effect
    var container = document.querySelector('.container');
    for (var i = 0; i < 50; i++) {
        var particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        container.appendChild(particle);
    }
}
