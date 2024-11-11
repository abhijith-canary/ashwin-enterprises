
    const service_id = "service_yiildzo";
    const template_id = "template_w5539cs";
    const public_key = "BKtb3JEM_RYUnCLDo"; // Add your EmailJS public key here


    function submitEmail(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const fileInput = document.getElementById('file').files[0];

        // Prepare the email parameters
        const emailParams = {
            name: name,
            phone: phone,
            email: email,
            message: message
        };

        // Check if a file is selected
        if (fileInput) {
            const reader = new FileReader();

            reader.onload = function(e) {
                // Convert the file to Base64
                const base64File = e.target.result.split(',')[1]; // Strip the "data:..." part

                // Add file details to emailParams
                emailParams.file_name = fileInput.name;
                emailParams.file_data = base64File;

                // Send the email via EmailJS
                emailjs.send(service_id, template_id, emailParams)
                    .then(response => {
                        console.log('SUCCESS!', response.status, response.text);
                        alert('Your message has been sent successfully!');
                        document.getElementById('contactForm').reset(); // Reset the form
                    })
                    .catch(error => {
                        console.error('FAILED...', error);
                        alert('Failed to send the message. Please try again.');
                    });
            };
            reader.readAsDataURL(fileInput); // Read the file as a Base64 encoded string
        } 
        else {
            // Send email without attachment
            emailjs.send(service_id, template_id, emailParams)
                .then(response => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Your message has been sent successfully!');
                    document.getElementById('contactForm').reset(); // Reset the form
                })
                .catch(error => {
                    console.error('FAILED...', error);
                    alert('Failed to send the message. Please try again.');
                });
        }
    }


   