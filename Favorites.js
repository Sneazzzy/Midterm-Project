
let currentImage = null;
const comments = {};

function openModal(imageSrc) {
    currentImage = imageSrc;
    document.getElementById('commentModal').style.display = 'block';
    document.getElementById('commentInput').value = comments[imageSrc] || '';
}


function closeModal() {
    document.getElementById('commentModal').style.display = 'none';
    currentImage = null;
}

function sendComment() {
    if (currentImage) {
        comments[currentImage] = document.getElementById('commentInput').value;
        alert('Comment: ' + comments[currentImage]);
        closeModal();
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('commentModal');
    if (event.target === modal) {
        closeModal();
    }
}
