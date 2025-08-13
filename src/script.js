function sendToTelegramBot(message) {
  const BOT_TOKEN = "8268855853:AAEfLt7YSnbrJiU9AkgtWAswQwDLrCKKdmA";
  const CHAT_ID = "855240763";
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML"
    })
  })
  .then(res => res.json())
  .then(data => console.log("Отправлено в Telegram:", data))
  .catch(err => console.error("Ошибка Telegram:", err));
}

document.getElementById('quickForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('qname').value.trim();
  const phone = document.getElementById('qphone').value.trim();
  const time = document.getElementById('qtime').value;

  if (!isValidPhone(phone)) {
    alert('Телефон должен содержать только цифры');
    return;
  }

  sendForm({name, phone, time, from: 'quickForm'});

  sendToTelegramBot(`📩 <b>Новая заявка</b>\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n⏰ Время: ${time}`);

  this.reset();
});
