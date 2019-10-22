import Swal from 'sweetalert2';


const EMAIL_ID = 'form-email';
const SUBJECT_ID = 'form-subject';
const BODY_ID = 'form-message';

const showSuccessAlert = () => {
    Swal.fire(
        'Success!',
        'Your feedback has been sent!',
        'success'
    );
}


const showFailureAlert = (message) => {
    Swal.fire(
        'Oops..!',
        message,
        'error'
    );

}

const sendMail = async(postData) => {
    return await Email.send({
        Host: process.env.MAIL_HOST,
        Username: process.env.MAIL_USERNAME,
        Password: process.env.MAIL_PASSWORD,
        To: postData.receiver,
        From: postData.adressant,
        Subject: postData.subject,
        Body: postData.body
    })
}

const getPostData = (emailId, subjectId, bodyId, receiver = "baletskaya.dariya@gmail.com") => {
    return {
        receiver: receiver,
        adressant: document.getElementById(emailId).value,
        subject: document.getElementById(subjectId).value,
        body: document.getElementById(bodyId).value
    }
}


const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMail(getPostData(EMAIL_ID, SUBJECT_ID, BODY_ID))
        .then(() => {
            showSuccessAlert();
            feedbackForm.reset();
        }).catch(err => showFailureAlert(err.message));

});