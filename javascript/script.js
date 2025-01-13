/*document.getElementById('rsvpButton').addEventListener('click', function() {
    alert('Thank you for your RSVP!');
});*/

document.getElementById('showPanelButton').addEventListener('click', function() {
    var panel = document.getElementById('myPanel');
    var btn = document.getElementById('showPanelButton');
    var audio = document.getElementById('backgroundMusic');
    if (panel.style.display === 'none' || panel.style.display === '') {
      panel.style.display = 'block';
      btn.style.display = 'none';
      audio.play(); // Play the music
    } else {
      panel.style.display = 'none';
    }
});

document.getElementById('btnClose').addEventListener('click', function() {
    var panel = document.getElementById('myPanel');
    var btn = document.getElementById('showPanelButton');
    panel.style.display = 'none';
    btn.style.display = 'block';
    location.reload();
});

const popup = document.querySelector('.panel');
const togglePopupButton = document.querySelector('#showPanelButton');

togglePopupButton.addEventListener('click', () => {
  popup.classList.toggle('show');
});


