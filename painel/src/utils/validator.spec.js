import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validator'

describe('Validator utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('Should give an error with less then 3 character payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('* Esse campo precisa de no minimo 3 caracteres')
  })

  it('should returns true when input pass a correct param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })

  it('Should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatorio')
  })

  it('Should give an error a with invalidade param', () => {
    expect(validateEmptyAndEmail('alex@')).toBe('* Este campo precisa de um e-mail')
  })

  it('Should return true when input be a correcr param', () => {
    expect(validateEmptyAndEmail('alex@alex.com')).toBe(true)
  })
})
