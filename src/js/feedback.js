import Swal from 'sweetalert2';

const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('here');
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "dreaming1806@gmail.com",
        Password: "e0b80c60-9a3e-43f4-9ad8-461e21558bba",
        To: 'baletskaya.dariya@gmail.com',
        From: "dreaming1806@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        Swal.fire(
            'Success!',
            'Your feedback has been sent!',
            'success'
        )
    );
})