/* Включение/отключение кнопки отправки формы при определенном состоянии чекбокса */
const button = document.querySelector('.button');
document.querySelector('input[type=checkbox]').addEventListener('change', function () {
  if ( this.checked ) {
    button.disabled = false;
    button.style.background = '#EA137A';
    button.classList.toggle('button-active');
  } else {
    button.disabled = true;
    button.style.background = '#DEDFE0';
    button.classList.toggle('button-active');
  }
});
/* Валидация формы */
$('form').validate();
$('#phone').mask("+7(999)999-99-99", {autoclear: false});