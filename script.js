document.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(51, 51, 51, 0.8)"; /* Change to your desired background color and opacity */
      navbar.style.borderRadius = "8px";
    } else {
      navbar.style.backgroundColor = "rgba(51, 51, 51, 0)";
    }
  });


  function openWhatsApp(option) {
    // Replace '123456789' with the actual phone number
    // and 'Здравствуйте, я хочу купить ваш товар' with your desired message
    var phoneNumber = '+77054278406';

    var message = encodeURIComponent('Здравствуйте, я хочу приобрести Data Science Roadmap. Меня интересует пакет ' + option + '.');
    
    // Construct the WhatsApp URL
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + message;

    // Open the WhatsApp chat in a new tab or window
    window.open(whatsappURL, '_blank');
}

function scrollToOptions() {
  var optionsSection = document.getElementById("options");
  optionsSection.scrollIntoView({ behavior: 'smooth' });
}