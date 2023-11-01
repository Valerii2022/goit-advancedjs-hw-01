import throttle from 'lodash.throttle';

const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');
const formRef = document.querySelector('.feedback-form');

const currentUserInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
const userInfo = currentUserInfo || { name: '', message: '' };

emailRef.value = userInfo.name;
messageRef.value = userInfo.message;

const handleEmailInputChange = e => {
  userInfo.name = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
};

const handleMessagelInputChange = e => {
  userInfo.message = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
};

const handleSubmitForm = e => {
  e.preventDefault();
  console.log(userInfo);
  localStorage.removeItem('feedback-form-state');
  formRef.reset();
};

emailRef.addEventListener('input', throttle(handleEmailInputChange, 500));
messageRef.addEventListener('input', throttle(handleMessagelInputChange, 500));
formRef.addEventListener('submit', handleSubmitForm);
