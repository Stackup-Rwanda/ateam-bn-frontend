export const resetPassword = {
  password: '123456789',
  confirmPassword: '123456789'
};

export const mismatchedResetPassword = {
  password: '123456789',
  confirmPassword: '1234NotMatch'
};

export const matchedResetPassword = {
  passwordOne: 'brarefootPassword123',
  passwordTwo: 'brarefootPassword123'
};

export const sendEmail = { email: 'jajajaden01@gmail.com' };
export const fakeEmail = { email: 'fsdfsdfsdfdsf--gmail.com' };
export const loginUser = {
  ...Object.user,
  email: 'manziguevara@gmail.com',
  password: 'manzi123'
};
export const userToRegister = {
  name: 'kkkkk',
  email: 'aaa@gmail.com',
  username: 'gggg',
  department: 'it',
  password: '123456789',
  passportId: '1234567',
  prefferedLanguage: 'English',
  prefferedCurrency: 'RWF',
  birthdate: '2001-03-20',
  gender: 'female'
};

export default (Object.user = {
  id: 1,
  Name: 'John, Smith',
  username: 'josmi',
  email: 'josmi@email.com',
  lineManager: 3,
  role: 'REQUESTER',

});

export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoibWFuemkiLCJlbWFpbCI6ImJ1dGlyaWdpbWFuemlAZ21haWwuY29tIiwicm9sZSI6IlJFUVVFU1RFUiIsImlzVmVyaWZpZWQiOnRydWUsImlhdCI6MTU4NTA3Mjk4NX0.ugOs3iZMcGU54EfNInopJ6TuDeNOcBXoNPpgKKomnbw';
