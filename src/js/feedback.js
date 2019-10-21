import Swal from 'sweetalert2';


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

const getPostData = (emailId, subjectId, bodyId) => {
    return {
        receiver: "baletskaya.dariya@gmail.com",
        adressant: document.getElementById(emailId).value,
        subject: document.getElementById(subjectId).value,
        body: document.getElementById(bodyId).value
    }
}
const EMAIL_ID = 'form-email';
const SUBJECT_ID = 'form-subject';
const BODY_ID = 'form-message';

const feedbackForm = document.getElementById('feedback-form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        sendMail(getPostData(EMAIL_ID, SUBJECT_ID, BODY_ID))
            .then(() =>
                showSuccessAlert()

            ).catch(err => showFailureAlert(err.message));


    });