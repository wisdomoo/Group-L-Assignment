// Get references to the input field and the provider logo element
const phoneInput = document.querySelector('.phone');
const providerLogo = document.querySelector('.provider-logo');
const errormsg = document.querySelector('.error')

// Function to detect and set the provider logo
function detectProvider(phoneNumber) {
  const mtnPattern = /^(0703|0803|0813|0903|0806|0706|\+234703|\+234803|\+234813|\+234903|\+234806|\+234706)/;
  const gloPattern = /^(0705|0805|0807|0815|0905|\+234705|\+234805|\+234807|\+234815|\+234905)/;
  const airtelPattern = /^(0701|0802|0808|0812|0901|\+234701|\+234802|\+234808|\+234812|\+234901)/;
  const nineMobilePattern = /^(0809|0817|0818|0909|\+234809|\+234817|\+234909)/;

  providerLogo.classList.remove('mtn', 'glo', 'airtel', 'nineMobile');
  errormsg.classList.remove('errormsg')
  

  if (mtnPattern.test(phoneNumber)) {
    providerLogo.classList.add('mtn');
  } else if (gloPattern.test(phoneNumber)) {
    providerLogo.classList.add('glo');
  } else if (airtelPattern.test(phoneNumber)) {
    providerLogo.classList.add('airtel');
  } else if (nineMobilePattern.test(phoneNumber)) {
    providerLogo.classList.add('nineMobile');
  }
  else{
    errormsg.classList.add('errormsg')
  }
  
}

// Event listener to detect changes in the input field
phoneInput.addEventListener('input', function() {
  const phoneNumber = this.value;
  detectProvider(phoneNumber);
  if (phoneInput.value === ''){
    errormsg.classList.remove('errormsg')

  }
  
});