import { toast } from 'react-toastify';

export const notifyError = (error) =>
  toast.error('Error! ' + error, {
    className: 'toast-message',
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

export const notifySuccess = (message) =>
  toast.success('Success! ' + message, {
    className: 'toast-message',
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
