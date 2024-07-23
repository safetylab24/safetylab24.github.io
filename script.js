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

            event.target.style.translate = '-0.25vw -0.25vw';
        });

        element.addEventListener("mouseout", (event) => {
            event.target.style.width = '1vw';
            event.target.style.height = '1vw';

            event.target.style.translate = '0vw 0vw';
        });
    });

    var keypoints = ["keypoint1", "keypoint2", "keypoint3", "keypoint4"];
    keypoints.forEach(keypoint => {
        const key = document.getElementById(String(keypoint));
        
        key.addEventListener("mouseover", (event) => {
            document.getElementById("back-left").src="images/" + String(keypoint) + "/back-left.png";
            document.getElementById("back-right").src="images/" + String(keypoint) + "/back-right.png";
            document.getElementById("front-left").src="images/" + String(keypoint) + "/front-left.png";
            document.getElementById("front-right").src="images/" + String(keypoint) + "/front-right.png";
            document.getElementById("front").src="images/" + String(keypoint) + "/front.png";
            document.getElementById("back").src="images/" + String(keypoint) + "/back.png";
        });

        key.addEventListener("mouseout", (event) => {
            document.getElementById("back-left").src="images/emptyView/back-left.png";
            document.getElementById("back-right").src="images/emptyView/back-right.png";
            document.getElementById("front-left").src="images/emptyView/front-left.png";
            document.getElementById("front-right").src="images/emptyView/front-right.png";
            document.getElementById("front").src="images/emptyView/front.png";
            document.getElementById("back").src="images/emptyView/back.png";
        });
    });

    const copyToClipboard = str => {
                if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
                    return navigator.clipboard.writeText(str);
                }
                return Promise.reject('The Clipboard API is not available.');
            };

            const copyTextElement = document.getElementById('copy-text');

            if (copyTextElement) {
                copyTextElement.addEventListener('click', () => {
                    const email = "safetylab24@gmail.com";
                    copyToClipboard(email).then(() => {
                        alert('Text copied to clipboard: ' + email);
                    }).catch(err => {
                        console.error('Failed to copy text to clipboard:', err);
                    });
                });
            } else {
                console.error('Element with id "copy-text" not found.');
            }
});
