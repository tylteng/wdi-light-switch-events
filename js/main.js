document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.switch');
  var message = document.querySelector('.status');

  button.addEventListener('click', function() {
    if (button.classList.contains('on')) {
      button.classList.remove('on')
      button.classList.add('off')
      document.body.classList.remove('light')
      document.body.classList.add('dark')
      message.textContent = "Who turned the lights off?"
    } else {
      button.classList.remove('off')
      button.classList.add('on')
      document.body.classList.remove('dark')
      document.body.classList.add('light')
      message.textContent = "It's so bright in here!"
    }
  });

});
