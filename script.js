document.getElementById('bannerInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const bannerPreview = document.getElementById('bannerPreview');
            bannerPreview.style.backgroundImage = `url(${e.target.result})`;
            bannerPreview.style.backgroundColor = 'transparent'; // Remove grey background when image is loaded
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('pfpInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const pfpPreview = document.getElementById('pfpPreview');
            pfpPreview.style.backgroundImage = `url(${e.target.result})`;
        }
        reader.readAsDataURL(file);
    }
});