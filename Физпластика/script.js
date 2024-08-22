var div = document.querySelector(".for_modal_content");
var popup = document.querySelector(".modal_content");
var storage = localStorage.getItem("[name=person]");
var storage_child = localStorage.getItem("[name=children]");

div.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal_content_show");    
  div.classList.add("active");    
if (storage) {
  person.value = storage;    
}
if (storage_child) {
  children.value = storage;    
}
});

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Отменяем стандартное поведение формы

  const phoneNumber = document.querySelector('input[name="phone_number"]').value;
  const name = document.querySelector('input[name="name"]').value;

  // Простейшая валидация
  if (phoneNumber.length < 10) {
      alert('Введите корректный номер телефона');
      return;
  }

  if (name.trim() === '') {
      alert('Введите ваше имя');
      return;
  }

  // Если всё в порядке, можно отправить форму
  this.submit(); // Теперь отправляем форму
});

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.3
  });

  images.forEach(image => {
    observer.observe(image);
  });
});