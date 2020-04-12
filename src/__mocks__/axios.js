const mockAxios = jest.genMockFromModule('axios');

export const resolvedRequest = {
  data: {},
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {}
};
export const resolvedLoginRequest = {
  data: { token: 'generatedToken' },
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {}
};

export const resolvedSignUpRequest = {
  data: { message: 'User was created successfully, Verify your email to confirm registration' },
  status: 201,
  statusText: 'Created',
  headers: {},
  config: {}
};

export const rejectedRequest = {
  response: {
    data: { errors: { message: 'errors' } },
    status: 500,
    statusText: 'ERROR',
    headers: {},
    config: {}
  }
};
export const rejectedLoginRequest = {
  response: {
    data: { error: 'password or email is incorrect' },
    status: 401,
    statusText: 'ERROR',
  }
};

export const badRequest = {
  response: {
    data: {
      status: 400,
      error: {
        name: 'Please enter your name',
        username: 'Please enter your username',
        email: 'Please enter your email',
        password: 'Please enter your password',
        passportId: 'Please enter your passportId'
      }
    },
    statusText: 'BAD REQUEST',
    headers: {},
    config: {}
  }
};

export const conflict = {
  response: {
    data: {
      status: 409,
      error: 'This user already exists, use another email or username'
    },
    statusText: 'Conflict',
    headers: {},
    config: {}
  }
};

export const resolvedTripsRequest = {
  response: {
    data: {
      status: 200,
      message: 'manzi Those are data from this page 1',
      data: {
        paginate: [],
        Next: {}
      }
    }
  }
};


export default {
  get: jest.fn(() => Promise.resolve({ ...resolvedRequest })),
  post: jest.fn(() => Promise.resolve(
    { ...resolvedRequest, status: 201 },
    { ...resolvedRequest, status: 200 }
  )),
  put: jest.fn(() => Promise.resolve({ ...resolvedRequest })),
  delete: jest.fn(() => Promise.resolve({ ...resolvedRequest })),
  patch: jest.fn(() => Promise.resolve({ ...resolvedRequest })),
  create: jest.fn(() => mockAxios),
  gets: jest.fn(() => Promise.resolve({ ...resolvedTripsRequest }))
};
