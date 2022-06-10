let activeRating = null;

const ratings = document.querySelectorAll('.rating');
ratings.forEach((rating) => {
    rating.addEventListener('click', () => {
        if (activeRating === rating) {
            return;
        }

        if (activeRating != null) {
            activeRating.classList.toggle('active');
        }
        rating.classList.toggle('active');
        activeRating = rating;
    })
});

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
    if (activeRating == null) {
        return;
    }
    document.querySelector('.score').innerHTML = activeRating.innerHTML;
    document.querySelector('.survey').style.display = 'none';
    document.querySelector('.thank-you').style.display = 'block';
});