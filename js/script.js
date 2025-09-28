document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle the 'active' class on the clicked card
            card.classList.toggle('active');

            // Optional: Close other open cards when one is clicked
            cards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                }
            });
        });
    });
});
