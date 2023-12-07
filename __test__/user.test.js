jest.mock('../request.js');

import * as user from '../user'

it('work with promises', () => {
  expect.assertion(1);
  return user.getUserName(4).then(data => expect(data).toBe('Mark'))
})

// Async/await 
it('work with async/await', async () => {
  expect.assertion(1);
  const data = await user.getUserName(4);
  expect(data).toBe('Mark')
})

// Async/await with resolve 
it('work with async/await and resolves', async () => {
  expect.assertion(1);
  await expect(user.getUserName(5)).resolves.toBe('Paul')
})

// using async/await Error handling
it('test error with aysnc/await', async () => {
  expect.assertion(1);
  try {
    await user.getUserName(1);
  } catch (error) {
    expect(error).toBeEqual({
      error: 'User with 1 not found'
    })
  }
})
