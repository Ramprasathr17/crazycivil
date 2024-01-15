function switchLanguage(language) {
    const wishElement = document.getElementById('wish');
    const imageElement = document.getElementById('wish-image');
    const cane1Element = document.getElementById('cane1-image');
    const cane2Element = document.getElementById('cane2-image');
    const cane3Element = document.getElementById('cane3-image');
    const birdElement = document.getElementById('bird-image');
    const crowElement = document.getElementById('crow-image');
    const cowElement = document.getElementById('cow-image');
    const sunElement = document.getElementById('sun-image');
    const cloud1Element = document.getElementById('cloud1-image');
    const cloud2Element = document.getElementById('cloud2-image');
    const cloud3Element = document.getElementById('cloud3-image');

    if (language === 'tamil') {
        wishElement.innerText = 'இனிய பொங்கல் நல்வாழ்த்துக்கள்!';
        // You can update the image sources for the Tamil version if needed
    } else if (language === 'english') {
        wishElement.innerText = 'Happy Pongal!';
        // You can update the image sources for the English version if needed
    }
}
