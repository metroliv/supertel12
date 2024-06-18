const bundles = document.querySelectorAll('.select-bundle');
bundles.forEach(bundle => {
    bundle.addEventListener('click', function() {
        const selectedBundle = this.parentElement.getAttribute('data-bundle');
        const amount = this.parentElement.getAttribute('data-amount');
        document.getElementById('payment-section').style.display = 'block';
        document.getElementById('payment-section').dataset.bundle = selectedBundle;
        document.getElementById('payment-section').dataset.amount = amount;
        document.getElementById('payment-method').focus();
    });
});

document.getElementById('payment-method').addEventListener('change', function() {
    const paymentMethod = document.getElementById('payment-method').value;
    const paymentDetails = document.getElementById('payment-details');
    paymentDetails.style.display = 'block';
    if (paymentMethod === "Mpesa") {
        document.getElementById('details').placeholder = "Phone number";
    } else if (paymentMethod === "PayPal") {
        document.getElementById('details').placeholder = "Email";
    } else {
        document.getElementById('details').placeholder = "Card number";
    }
});

document.getElementById('generateBtn').addEventListener('click', function() {
    const selectedBundle = document.getElementById('payment-section').dataset.bundle;
    const amount = document.getElementById('payment-section').dataset.amount;
    const paymentMethod = document.getElementById('payment-method').value;
    const details = document.getElementById('details').value;

    if (details === "") {
        alert("Please enter your details.");
        return;
    }

    let resultMessage = `
        Bundle: ${selectedBundle}\n
        Amount: $${amount}\n
        Payment Method: ${paymentMethod}\n
        Details: ${details}\n
    `;

    if (paymentMethod === "Mpesa") {
        resultMessage += "Waiting for verification...";
    }

    // Display the result with a fade-in effect
    const resultElement = document.getElementById('result');
    resultElement.style.opacity = 0;
    setTimeout(() => {
        resultElement.innerText = resultMessage;
        resultElement.style.opacity = 1;
    }, 300);
});
