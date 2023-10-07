function expandImage(image) {
    const modal = document.getElementById('modal');
    const expandedImage = document.getElementById('expandedImage');

    expandedImage.src = image.src;
    modal.style.display = 'block';
}

function closeImage() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
