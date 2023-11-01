import throttle from 'lodash.throttle';

const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');
const formRef = document.querySelector('.feedback-form');

const LOCALSTORAGE_FORM_KEY = 'feedback-form-state';

const currentUserInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_FORM_KEY));
const userInfo = currentUserInfo || { name: '', message: '' };

emailRef.value = userInfo.name;
messageRef.value = userInfo.message;

emailRef.required = true;
messageRef.required = true;

const handleEmailInputChange = e => {
  userInfo.name = e.target.value;
  localStorage.setItem(LOCALSTORAGE_FORM_KEY, JSON.stringify(userInfo));
};

const handleMessagelInputChange = e => {
  userInfo.message = e.target.value;
  localStorage.setItem(LOCALSTORAGE_FORM_KEY, JSON.stringify(userInfo));
};

const handleSubmitForm = e => {
  e.preventDefault();
  console.log(userInfo);
  localStorage.removeItem(LOCALSTORAGE_FORM_KEY);
  formRef.reset();
};

emailRef.addEventListener('input', throttle(handleEmailInputChange, 500));
messageRef.addEventListener('input', throttle(handleMessagelInputChange, 500));
formRef.addEventListener('submit', handleSubmitForm);
