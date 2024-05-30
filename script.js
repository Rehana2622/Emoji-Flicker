document.getElementById('toggleButton').addEventListener('click', () => {
    const closedEmoji = document.querySelector('.emoji.closed');
    const openEmoji = document.querySelector('.emoji.open');

    closedEmoji.classList.toggle('active');
    openEmoji.classList.toggle('active');
});
