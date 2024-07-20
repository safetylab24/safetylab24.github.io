document.addEventListener('DOMContentLoaded', function() {
    const customCursorBorder = document.querySelector('.custom-cursor-border');
    customCursorBorder.style.width = '10px';
    customCursorBorder.style.height = '10px';

    const customCursor = document.querySelector('.custom-cursor');
    customCursor.style.width = '6px';
    customCursor.style.height = '6px';

    document.addEventListener('mousemove', function(e) {
      const cursorX = e.clientX;
      const cursorY = e.clientY;

      customCursor.style.left = cursorX + 'px';
      customCursor.style.top = cursorY + 'px';

      customCursorBorder.style.left = cursorX + 'px';
      customCursorBorder.style.top = cursorY + 'px';
    });

    document.addEventListener('mousedown', function() {
      customCursor.style.width = '40px';
      customCursor.style.height = '40px';

      customCursorBorder.style.width = '42px';
      customCursorBorder.style.height = '42px';
      
      customCursor.style.opacity = '0.25';
      customCursorBorder.style.opacity = '0.25';
    });

    document.addEventListener('mouseup', function() {
      customCursor.style.width = '6px';
      customCursor.style.height = '6px';

      customCursorBorder.style.width = '10px';
      customCursorBorder.style.height = '10px';

      customCursor.style.opacity = '1';
      customCursorBorder.style.opacity = '1';
    });

    const elements = document.querySelectorAll('.keypoint');
      elements.forEach(element => {
        element.addEventListener("mouseover", (event) => {
          event.target.style.width = '1.5vw';
          event.target.style.height = '1.5vw';

          event.target.style.translate = '-0.5vw -0.5vw';
        });

        element.addEventListener("mouseout", (event) => {
          event.target.style.width = '0.5vw';
          event.target.style.height = '0.5vw';

          event.target.style.translate = '0vw 0vw';
        });
    });
});

const span = document.querySelector("span");

span.onclick = function() {
  document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});