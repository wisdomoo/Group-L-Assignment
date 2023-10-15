// Get references to the input field and the provider logo element
const phoneInput = document.getElementById('phone');
const providerLogo = document.querySelector('.provider-logo');

// Function to detect and set the provider logo
function detectProvider(phoneNumber) {
  const mtnPattern = /^(0703|0803|081|0903|0806|0706|\+234703|\+234803)/;
  const gloPattern = /^(0705|0805|0807|0815|0905|\+234705|\+234805|\+234807|\+234815|\+234905)/;
  const airtelPattern = /^(0701|0802|0808|0812|0901|\+234701|\+234802|\+234808|\+234812|\+234901)/;
  const nineMobilePattern = /^(0809|0817|0818|0909)/;

  providerLogo.classList.remove('mtn', 'glo', 'airtel', 'nineMobile');

  if (mtnPattern.test(phoneNumber)) {
    providerLogo.classList.add('mtn');
  } else if (gloPattern.test(phoneNumber)) {
    providerLogo.classList.add('glo');
  } else if (airtelPattern.test(phoneNumber)) {
    providerLogo.classList.add('airtel');
  } else if (nineMobilePattern.test(phoneNumber)) {
    providerLogo.classList.add('nineMobile');
  }
}

// Event listener to detect changes in the input field
phoneInput.addEventListener('input', function() {
  const phoneNumber = this.value;
  detectProvider(phoneNumber);
});
