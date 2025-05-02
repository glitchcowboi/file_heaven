// Add this at the beginning of your script.js
const biosLines = [
    "FILE HEAVEN: A Place Files Come to Rest and Find Peace",
    "Empty Your Phone, Hard Drive, and Folders.",
    "Heaven is Open and Ready to Receive your Data.",
    "Copyright (C) Angelic Software, Inc.",
    "",
    "Version HVN SNT 2.0",
    "",
    "PREMIUM HEAVEN SENT CPU at 777MHz",
    "",
    "Memory Test : OK ... Could Be Better TBH",
    "",
    "Your Memory Heaven Extension v7.77",
    "Copyright (C) 1992, File Heaven, Inc.",
    "Detecting Original Memory       ... None",
    "Detecting Primary Memory        ... None",
    "Detecting Any Recolection       ... None",
    "Detecting Any Inkling of Why This Was Saved   ... None",
    "",
    "Loading FILE HEAVEN",
    "",
    "...",
    "...",
    "",
    "COMPLETE",
    "",
    "Press DEL to enter FILE HELL (operation: not supported)",
    "",
];

// Boot sequence
function startBiosSequence() {
    const biosScreen = document.getElementById('biosScreen');
    const biosText = document.getElementById('biosText');
    const desktop = document.querySelector('.desktop');
    let lineIndex = 0;

    function typeNextLine() {
        if (lineIndex < biosLines.length) {
            biosText.textContent += biosLines[lineIndex] + '\n';
            lineIndex++;
            setTimeout(typeNextLine, 700);
        } else {
            setTimeout(() => {
                biosScreen.classList.add('hidden');
                desktop.classList.add('visible');
            }, 2000);
        }
    }

    typeNextLine();
}

// Start the BIOS sequence when page loads
document.addEventListener('DOMContentLoaded', startBiosSequence);

// Clock functionality
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    clock.textContent = `${displayHours}:${displayMinutes} ${ampm}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Start menu functionality
const startButton = document.querySelector('.start-button');
const startMenu = document.getElementById('startMenu');
let isStartMenuOpen = false;

startButton.addEventListener('click', () => {
    isStartMenuOpen = !isStartMenuOpen;
    startMenu.classList.toggle('active');
});

// Close start menu when clicking outside
document.addEventListener('click', (e) => {
    if (!startButton.contains(e.target) && !startMenu.contains(e.target) && isStartMenuOpen) {
        isStartMenuOpen = false;
        startMenu.classList.remove('active');
    }
});

// Desktop icon functionality
document.addEventListener('DOMContentLoaded', () => {
    // Find icons by alt text for compatibility
    const icons = document.querySelectorAll('.icon');
    let myComputerIcon = null;
    let myDocumentsIcon = null;
    let recycleBinIcon = null;
    icons.forEach(icon => {
        const img = icon.querySelector('img');
        if (img && img.alt === "My Computer") myComputerIcon = icon;
        if (img && img.alt === "My Documents") myDocumentsIcon = icon;
        if (img && img.alt === "Recycle Bin") recycleBinIcon = icon;
    });

    // Notepad window logic
    const notepadWindow = document.getElementById('notepadWindow');
    const closeButton = notepadWindow.querySelector('.window-close');

    // Double-click handler for My Computer icon
    if (myComputerIcon) {
        myComputerIcon.addEventListener('dblclick', (e) => {
            e.preventDefault();
            notepadWindow.style.display = 'block';
            // Set the welcome message
            notepadWindow.querySelector('.notepad-textarea').value =
                "Welcome to File Heaven! A place where notes, screenshots, photos, and old text messages come to rest. Your files deserve better than the purgatory of cloud memory. This is the sanctuary for old memories once held dear (even if you can't remember why the hell you saved it in the first place).";
        });
    }

    // Close button handler
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            notepadWindow.style.display = 'none';
        });
    }

    // Double-click handler for My Documents icon
    if (myDocumentsIcon) {
        myDocumentsIcon.addEventListener('dblclick', (e) => {
            e.preventDefault();
            alert('Sometimes I think about the digital memories I have lost and will never get back... I hope they are safe somewhere.');
        });
    }

    // Double-click handler for Recycle Bin icon
    if (recycleBinIcon) {
        recycleBinIcon.addEventListener('dblclick', (e) => {
            e.preventDefault();
            alert("Why do I have such a hard time of letting go and feel an attachment to pixels that hold nothing but a digital ghost of a memory? Where does my physical memory stop and my digital one begin? I don't want to delete. I don't want to foget.");
        });
    }

    // Tooltip for snap1
    const snapImg = document.getElementById('randomSnap');
    const tooltip = document.getElementById('snap1Tooltip');
    if (snapImg && tooltip) {
        snapImg.addEventListener('mouseenter', function(e) {
            tooltip.style.display = 'block';
            const rect = snapImg.getBoundingClientRect();
            tooltip.style.left = (rect.left + window.scrollX) + 'px';
            tooltip.style.top = (rect.top + window.scrollY - tooltip.offsetHeight - 10) + 'px';
        });
        snapImg.addEventListener('mousemove', function(e) {
            tooltip.style.left = (e.pageX + 10) + 'px';
            tooltip.style.top = (e.pageY - tooltip.offsetHeight - 10) + 'px';
        });
        snapImg.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    }

    // Tooltip for notes1 image
    const notesImg = document.getElementById('notes1Img');
    const notesTooltip = document.getElementById('notes1Tooltip');
    if (notesImg && notesTooltip) {
        notesImg.addEventListener('mouseenter', function(e) {
            notesTooltip.style.display = 'block';
            const rect = notesImg.getBoundingClientRect();
            notesTooltip.style.left = (rect.left + window.scrollX) + 'px';
            notesTooltip.style.top = (rect.top + window.scrollY - notesTooltip.offsetHeight - 10) + 'px';
        });
        notesImg.addEventListener('mousemove', function(e) {
            notesTooltip.style.left = (e.pageX + 10) + 'px';
            notesTooltip.style.top = (e.pageY - notesTooltip.offsetHeight - 10) + 'px';
        });
        notesImg.addEventListener('mouseleave', function() {
            notesTooltip.style.display = 'none';
        });
    }

    // Tooltip for weather image
    const weatherImg = document.getElementById('weatherImg');
    const weatherTooltip = document.getElementById('weatherTooltip');
    if (weatherImg && weatherTooltip) {
        weatherImg.addEventListener('mouseenter', function(e) {
            weatherTooltip.style.display = 'block';
            const rect = weatherImg.getBoundingClientRect();
            weatherTooltip.style.left = (rect.left + window.scrollX) + 'px';
            weatherTooltip.style.top = (rect.top + window.scrollY - weatherTooltip.offsetHeight - 10) + 'px';
        });
        weatherImg.addEventListener('mousemove', function(e) {
            weatherTooltip.style.left = (e.pageX + 10) + 'px';
            weatherTooltip.style.top = (e.pageY - weatherTooltip.offsetHeight - 10) + 'px';
        });
        weatherImg.addEventListener('mouseleave', function() {
            weatherTooltip.style.display = 'none';
        });
    }
});

function initiateShutdown() {
    const shutdownAnimation = document.getElementById('shutdownAnimation');
    const rip = document.getElementById('rip');
    
    // Start shutdown animation
    shutdownAnimation.classList.add('shutdown-active');
    
    // After animation completes, show RIP art
    setTimeout(() => {
        document.body.style.backgroundColor = 'black';
        rip.classList.add('fade-in');
    }, 500); // Match this to your CSS transition duration
}

// Attach to the Shut Down menu item
document.querySelector('.menu-item:last-child').addEventListener('click', () => {
    startMenu.classList.remove('active');
    isStartMenuOpen = false;
    initiateShutdown();
});

function randomizeSnapImage() {
    const desktop = document.querySelector('.desktop');
    const snap = document.getElementById('randomSnap');
    if (!snap || !desktop) return;
    snap.onload = () => {
        const desktopRect = desktop.getBoundingClientRect();
        const imgWidth = snap.offsetWidth;
        const imgHeight = snap.offsetHeight;
        const maxLeft = desktopRect.width - imgWidth;
        const maxTop = desktopRect.height - imgHeight - 30;
        const left = Math.random() * maxLeft;
        const top = Math.random() * maxTop;
        snap.style.left = `${left}px`;
        snap.style.top = `${top}px`;
    };
    if (snap.complete) snap.onload();
}

function makeDesktopImagesDraggable() {
    let currentDrag = null;
    let offsetX = 0, offsetY = 0;

    document.querySelectorAll('.desktop-draggable').forEach(img => {
        img.onmousedown = null;
        img.addEventListener('mousedown', function(e) {
            currentDrag = img;
            offsetX = e.clientX - img.offsetLeft;
            offsetY = e.clientY - img.offsetTop;

            // Set all draggable images to base z-index
            document.querySelectorAll('.desktop-draggable').forEach(otherImg => {
                otherImg.style.zIndex = 5;
            });
            // Bring the current image to the top
            img.style.zIndex = 100;

            document.body.style.userSelect = 'none';
        });

        img.addEventListener('mouseup', function() {
            if (currentDrag) {
                currentDrag = null;
                document.body.style.userSelect = '';
            }
        });

        img.addEventListener('mouseleave', function() {
            if (currentDrag) {
                currentDrag = null;
                document.body.style.userSelect = '';
            }
        });
    });

    document.onmousemove = function(e) {
        if (!currentDrag) return;
        currentDrag.style.left = (e.clientX - offsetX) + 'px';
        currentDrag.style.top = (e.clientY - offsetY) + 'px';
    };

    document.onmouseup = function() {
        if (currentDrag) {
            currentDrag = null;
            document.body.style.userSelect = '';
        }
    };
}

// ... in the DOMContentLoaded and MutationObserver logic:
document.addEventListener('DOMContentLoaded', () => {
    const desktop = document.querySelector('.desktop');
    if (desktop.classList.contains('visible')) {
        randomizeFolders();
        randomizeSnapImage();
        makeDesktopImagesDraggable();
    } else {
        // If using BIOS, wait for desktop to become visible
        const observer = new MutationObserver(() => {
            if (desktop.classList.contains('visible')) {
                randomizeFolders();
                randomizeSnapImage();
                makeDesktopImagesDraggable();
                observer.disconnect();
            }
        });
        observer.observe(desktop, { attributes: true });
    }
});
