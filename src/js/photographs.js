const likeBtns = document.querySelectorAll('.photographs__likes-btn');

if (likeBtns) {
  likeBtns.forEach(likeBtn => {
    const likeIcon = likeBtn.querySelector('.photographs__likes-icon');
    const likesNumber = likeBtn.querySelector('.photographs__likes-number');

    likeBtn.onclick = function () {
      if (likeIcon.classList.contains('photographs__likes-icon--active')) {
        likeIcon.classList.remove('photographs__likes-icon--active');
        likesNumber.textContent--;
      } else {
        likeIcon.classList.add('photographs__likes-icon--active');
        likesNumber.textContent++;
      }
    }
  });
}

