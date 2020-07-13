const button = document.querySelector('.button');
document.querySelector('input[type=checkbox]').addEventListener('change', function () {
  if ( this.checked ) {
    button.style.background = '#EA137A';
    button.disabled = false;
  } else {
    button.style.background = '#DEDFE0';
    button.disabled = true;
  }
});
$('form').validate();
$('#phone').mask("+7(999)999-99-99", {autoclear: false});