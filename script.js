document.addEventListener('DOMContentLoaded', function() {
    const customCursorBorder = document.querySelector('.custom-cursor-border');
    customCursorBorder.style.width = '22px';
    customCursorBorder.style.height = '22px';

    const customCursor = document.querySelector('.custom-cursor');
    customCursor.style.width = '20px';
    customCursor.style.height = '20px';

    
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

        customCursor.style.opacity = '0.3';
        customCursorBorder.style.opacity = '0.3';
    });

    
    document.addEventListener('mouseup', function() {
        customCursor.style.width = '20px';
        customCursor.style.height = '20px';

        customCursorBorder.style.width = '22px';
        customCursorBorder.style.height = '22px';

        customCursor.style.opacity = '1';
        customCursorBorder.style.opacity = '1';
    });
    
});
