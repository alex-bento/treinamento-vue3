import mockAxios from 'axios'
import AuthServe from './auth'

jest.mock('axios')

describe('AuthServe', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should return a token when user login', async () => {
    const token = '123.123.123.123'
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { token } })
    })

    const response = await AuthServe(mockAxios).login({ email: 'alex@alex.com', password: 1234 })
    expect(response.data).toHaveProperty('token')
    expect(response).toMatchSnapshot()
  })

  it('should return an user when user  register', async () => {
    const user = {
      name: 'Alex',
      password: '1234',
      email: 'alex@alex.com'
    }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const response = await AuthServe(mockAxios).register(user)
    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('password')
    expect(response.data).toHaveProperty('email')
    expect(response.data).toMatchSnapshot()
  })

  it('shoul throw an error when not found', async () => {
    const errors = { status: 404, statusText: 'Not Found' }
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ request: errors })
    })

    const response = await AuthServe(mockAxios).login({ email: 'alex@alex.com', password: 1234 })
    expect(response.errors).toHaveProperty('status')
    expect(response.errors).toHaveProperty('statusText')
  })
})
