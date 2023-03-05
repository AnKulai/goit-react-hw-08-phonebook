import swal from 'sweetalert';

export const registerError = () => {
  swal('Error', 'Something went wrong... Check your data...', 'error', {
    button: 'Try again',
  });
};

export const loginError = () => {
  swal('Error', 'Incorrect login or password...', 'error', {
    button: 'Try again',
  });
};
