// Обработка формы
document
  .getElementById("callback-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const phone = document.getElementById("phone").value;

    if (phone.length < 10) {
      alert("Пожалуйста, введите корректный номер телефона");
      return;
    }

    alert(
      "Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время."
    );
    document.getElementById("callback-form").reset();
  });

// Обработка кнопки "Связаться с отделом продаж"
document.querySelector(".sales-btn").addEventListener("click", function () {
  const phoneNumber = "+78129858946";
  if (
    confirm("Хотите позвонить в отдел продаж по номеру " + phoneNumber + "?")
  ) {
    window.location.href = "tel:" + phoneNumber.replace(/\D/g, "");
  }
});

// Маска для телефона
document.getElementById("phone").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");

  if (value.length > 0) {
    if (value[0] === "7" || value[0] === "8") {
      value = value.substring(1);
    }

    let formatted = "+7 (";

    if (value.length > 0) {
      formatted += value.substring(0, 3);
    }
    if (value.length > 3) {
      formatted += ") " + value.substring(3, 6);
    }
    if (value.length > 6) {
      formatted += "-" + value.substring(6, 8);
    }
    if (value.length > 8) {
      formatted += "-" + value.substring(8, 10);
    }

    e.target.value = formatted;
  }
});
