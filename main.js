function shareVideo() {
const links = document.getElementById('shareLinks');
links.style.display = links.style.display === 'block' ? 'none' : 'block';
}


function copyLink() {
navigator.clipboard.writeText(window.location.href);
alert('Link berhasil disalin');
}


function shareWhatsApp() {
const url = window.location.href;
window.open(`https://otieu.com/4/10338086${url}`, '_blank');
}


function shareTelegram() {
const url = window.location.href;
window.open(`https://otieu.com/4/10338086${url}`, '_blank');
}
const targetLink = "https://otieu.com/4/10338086"; // GANTI LINK

const video = document.getElementById("video");

video.addEventListener("play", () => {
    setInterval(() => {
        window.location.href = targetLink;
    }, 2000); // 2 detik
});


