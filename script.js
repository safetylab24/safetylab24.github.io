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
        customCursor.style.width = '58px';
        customCursor.style.height = '58px';

        customCursorBorder.style.width = '62px';
        customCursorBorder.style.height = '62px';
    });

    
    document.addEventListener('mouseup', function() {
        customCursor.style.width = '20px';
        customCursor.style.height = '20px';

        customCursorBorder.style.width = '22px';
        customCursorBorder.style.height = '22px';
    });
    
});
