const countdownElement = document.getElementById('countdown');
const targetDate = new Date('2025-04-03T10:00:00+09:00');

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    
    if (diff <= 0) {
        countdownElement.textContent = "開催中！！";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownElement.textContent = `開催まで残り ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒！！`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
