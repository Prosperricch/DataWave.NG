// Function to show a specific service and hide others
function showService(serviceId) {
  // Hide all services first
  const services = document.querySelectorAll('.service');
  services.forEach(service => {
    service.classList.remove('active');
  });

  // Show the selected service
  const selectedService = document.getElementById(serviceId);
  selectedService.classList.add('active');
}

// Data Top Up - Populating Data Plans based on Network
const dataNetworkSelect = document.getElementById('data-network');
const dataPlanSelect = document.getElementById('data-plan');

dataNetworkSelect.addEventListener('change', () => {
  dataPlanSelect.innerHTML = ''; // Clear previous options

  const selectedNetwork = dataNetworkSelect.value;

  let dataPlans = [];

  switch (selectedNetwork) {
    case 'mtn':
      dataPlans = [
        { value: '50mb', text: '50MB - 50 Naira' },
        { value: '100mb', text: '100MB (1 Day) - 150 Naira' },
        { value: '500mb', text: '500MB - 200 Naira' },
        { value: '1gb', text: '1GB - 300 Naira' },
        { value: '2gb', text: '2GB - 585 Naira' },
        { value: '3gb', text: '3GB - 875 Naira' },
        { value: '5gb', text: '5GB - 1500 Naira' },
        { value: '10gb', text: '10GB - 3050 Naira' },
        { value: '15gb', text: '15GB - 4400 Naira' },
        { value: '20gb', text: '20GB - 6000 Naira' },
        { value: '40gb', text: '40GB - 11300 Naira' },
      ];
      break;
    case 'airtel':
      dataPlans = [
        { value: '500mb', text: '500MB - 170 Naira' },
        { value: '1gb', text: '1GB - 300 Naira' },
        { value: '2gb', text: '2GB - 600 Naira' },
        { value: '5gb', text: '5GB - 2450 Naira' },
        { value: '10gb', text: '10GB - 2900 Naira' },
        { value: '20gb', text: '20GB - 6800 Naira' },
      ];
      break;
    case 'glo':
      dataPlans = [
        { value: '500mb', text: '500MB - 170 Naira' },
        { value: '1gb', text: '1GB - 300 Naira' },
        { value: '2gb', text: '2GB - 600 Naira' },
        { value: '3gb', text: '3GB - 890 Naira' },
        { value: '5gb', text: '5GB - 1450 Naira' },
        { value: '10gb', text: '10GB - 2950 Naira' },
      ];
      break;
    case '9mobile':
      dataPlans = [
        { value: '500mb', text: '500MB - 170 Naira' },
        { value: '1gb', text: '1GB - 300 Naira' },
        { value: '1.5gb', text: '1.5GB - 350 Naira' },
        { value: '2gb', text: '2GB - 600 Naira' },
        { value: '3gb', text: '3GB - 750 Naira' },
        { value: '5gb', text: '5GB - 2000 Naira' },
        { value: '10gb', text: '10GB - 3050 Naira' },
        { value: '20gb', text: '20GB - 5300 Naira' },
        { value: '30gb', text: '30GB - 7300 Naira' },
        { value: '40gb', text: '40GB - 11000 Naira' },
      ];
      break;
  }

  dataPlans.forEach(plan => {
    const option = document.createElement('option');
    option.value = plan.value;
    option.text = plan.text;
    dataPlanSelect.add(option);
  });
});

// Cable Subscription - Populating Cable Plans based on Cable Name
const cableNameSelect = document.getElementById('cable-name');
const cablePlanSelect = document.getElementById('cable-plan');

cableNameSelect.addEventListener('change', () => {
  cablePlanSelect.innerHTML = ''; // Clear previous options

  const selectedCableName = cableNameSelect.value;

  let cablePlans = [];

  switch (selectedCableName) {
    case 'gotv':
      cablePlans = [
        { value: 'gotv-smallie', text: 'GOTV Smallie - 1700 Naira' },
        { value: 'gotv-jinja', text: 'GOTV Jinja - 3400 Naira' },
        { value: 'gotv-jolli', text: 'GOTV Jolli - 4950 Naira' },
        { value: 'gotv-max', text: 'GOTV Max - 7300 Naira' },
        { value: 'gotv-supermax', text: 'GOTV Supermax - 9700 Naira' },
      ];
      break;
    case 'dstv':
      cablePlans = [
        { value: 'dstv-padi', text: 'DSTV Padi - 3700 Naira' },
        { value: 'dstv-yanga', text: 'DSTV Yanga - 5200 Naira' },
        { value: 'dstv-confam', text: 'DSTV Confam - 9500 Naira' },
        { value: 'dstv-compact', text: 'DSTV Compact - 25700 Naira' },
        { value: 'dstv-compactplus', text: 'DSTV Compact Plus - 35000 Naira' },
        { value: 'dstv-premium', text: 'DSTV Premium - 47000 Naira' },
      ];
      break;
    case 'startime':
      cablePlans = [
        { value: 'startime-nova', text: 'Startime Nova - 2700 Naira' },
        { value: 'startime-basic', text: 'Startime Basic - 4400 Naira' },
        { value: 'startime-smart', text: 'Startime Smart - 5300 Naira' },
        { value: 'startime-classic', text: 'Startime Classic - 6000 Naira' },
        { value: 'startime-super', text: 'Startime Super - 9000 Naira' },
      ];
      break;
  }

  cablePlans.forEach(plan => {
    const option = document.createElement('option');
    option.value = plan.value;
    option.text = plan.text;
    cablePlanSelect.add(option);
  });
});

// Purchase Functions
function purchaseData() {
  const network = document.getElementById('data-network').value;
  const dataPlan = document.getElementById('data-plan').value;
  const mobileNumber = document.getElementById('data-mobile-number').value;

  const message = `Data Purchase: Network - ${network}, Plan - ${dataPlan}, Mobile Number - ${mobileNumber}`;
  sendWhatsAppMessage(message);
}

function purchaseCable() {
  const cableName = document.getElementById('cable-name').value;
  const iucNumber = document.getElementById('iuc-number').value;
  const cablePlan = document.getElementById('cable-plan').value;

  const message = `Cable Purchase: Cable Name - ${cableName}, IUC Number - ${iucNumber}, Plan - ${cablePlan}`;
  sendWhatsAppMessage(message);
}

function purchaseResult() {
  const examType = document.getElementById('exam-type').value;
  const quantity = document.getElementById('quantity').value;

  const message = `Result Purchase: Exam Type - ${examType}, Quantity - ${quantity}`;
  sendWhatsAppMessage(message);
}

function purchaseAirtime() {
  const mobileNumber = document.getElementById('airtime-mobile-number').value;
  const airtimeAmount = document.getElementById('airtime-amount').value;

  const message = `Airtime Purchase: Mobile Number - ${mobileNumber}, Amount - ${airtimeAmount}`;
  sendWhatsAppMessage(message);
}

// Function to send WhatsApp messages
function sendWhatsAppMessage(message) {
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = '23407067479043'; // Replace with your WhatsApp phone number
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, '_blank');
}
