document.addEventListener('DOMContentLoaded', function () {
  const shareBtn = document.getElementById('shareBtn');
  const sharePopup = document.getElementById('sharePopup');

  shareBtn.addEventListener('click', function (e) {
    e.stopPropagation(); 
    shareBtn.classList.toggle('active');
    sharePopup.classList.toggle('active');
  });

  document.addEventListener('click', function (e) {
    if (!sharePopup.contains(e.target) && e.target !== shareBtn) {
      shareBtn.classList.remove('active');
      sharePopup.classList.remove('active');
    }
  });
});