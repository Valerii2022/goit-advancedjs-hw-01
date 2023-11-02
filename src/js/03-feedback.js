import throttle from 'lodash.throttle';

const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');
const formRef = document.querySelector('.feedback-form');

const LOCALSTORAGE_FORM_KEY = 'feedback-form-state';

const userInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_FORM_KEY)) || {};

emailRef.value = userInfo.email || '';
messageRef.value = userInfo.message || '';

emailRef.required = true;
messageRef.required = true;

const handleFormChange = e => {
  userInfo[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_FORM_KEY, JSON.stringify(userInfo));
};

const handleSubmitForm = e => {
  e.preventDefault();
  console.log(userInfo);
  localStorage.removeItem(LOCALSTORAGE_FORM_KEY);
  formRef.reset();
  userInfo.email = '';
  userInfo.message = '';
};

formRef.addEventListener('input', throttle(handleFormChange, 500));
formRef.addEventListener('submit', handleSubmitForm);
