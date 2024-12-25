document.addEventListener('DOMContentLoaded', function() {
    const cialloCount = 20; // 飘动的Ciallo数量
    const colors = ['#ff69b4', '#ff00ff', '#00ff00', '#00ffff', '#ffff00']; // 颜色数组

    for (let i = 0; i < cialloCount; i++) {
        const ciallo = document.createElement('div');
        ciallo.textContent = 'Ciallo～(∠・ω< )⌒☆';
        ciallo.classList.add('ciallo');
        ciallo.style.left = `${Math.random() * (window.innerWidth - 100)}px`; // 随机位置
        ciallo.style.top = `${Math.random() * (window.innerHeight - 100)}px`; // 随机位置
        ciallo.style.color = colors[Math.floor(Math.random() * colors.length)]; // 随机颜色
        document.body.appendChild(ciallo);
    }

    window.addEventListener('resize', function() {
        document.querySelectorAll('.ciallo').forEach(ciallo => {
            ciallo.style.left = `${Math.random() * (window.innerWidth - 100)}px`; // 重新定位
            ciallo.style.top = `${Math.random() * (window.innerHeight - 100)}px`; // 重新定位
        });
    });
});