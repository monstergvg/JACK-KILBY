function sendForm(dataObj){
  console.log('Форма отправлена', dataObj);
  alert('Спасибо! Мы получили вашу заявку. Ожидайте звонка.');
}

function isValidPhone(phone) {
  return /^\d+$/.test(phone); 
}

document.getElementById('quickForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('qname').value.trim();
  const phone = document.getElementById('qphone').value.trim();
  const time = document.getElementById('qtime').value;

  if (!phone) {
    alert('Укажите телефон');
    return;
  }
  if (!isValidPhone(phone)) {
    alert('Телефон должен содержать только цифры');
    return;
  }

  sendForm({name, phone, time, from: 'quickForm'});
  this.reset();
});

document.getElementById('mainForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const device = document.getElementById('device').value.trim();
  const note = document.getElementById('note').value.trim();

  if (!name || !phone) {
    alert('Пожалуйста, укажите имя и телефон');
    return;
  }
  if (!isValidPhone(phone)) {
    alert('Телефон должен содержать только цифры');
    return;
  }

  sendForm({name, phone, device, note, from: 'mainForm'});
  this.reset();
});

document.getElementById('callMeBtn').addEventListener('click', function(){
  const phone = prompt('Введите номер телефона для обратного звонка:');
  if (phone) {
    if (!isValidPhone(phone)) {
      alert('Телефон должен содержать только цифры');
      return;
    }
    alert('Спасибо! Мы перезвоним по номеру: ' + phone);
  }
});