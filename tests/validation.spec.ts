import { describe, expect, it } from 'vitest'
import { isWorkEmail, validateDemoRequest } from '../app/utils/validation'

describe('isWorkEmail', () => {
  it.each(['hello@snapbuild.ru', 'team+demo@company.io'])('accepts %s', (email) => {
    expect(isWorkEmail(email)).toBe(true)
  })

  it.each(['', 'hello@', '@company.ru'])('rejects %s', (email) => {
    expect(isWorkEmail(email)).toBe(false)
  })
})

describe('validateDemoRequest', () => {
  it('returns field-specific errors for invalid required values', () => {
    expect(validateDemoRequest({ name: '', email: 'wrong', company: '', comment: 'a'.repeat(501) })).toEqual({
      name: 'Укажите имя — минимум 2 символа.',
      email: 'Введите рабочий email в формате name@company.ru.',
      company: 'Укажите название компании.',
      comment: 'Сократите комментарий до 500 символов.',
    })
  })

  it('accepts a complete request and an empty optional comment', () => {
    expect(validateDemoRequest({ name: 'Игорь', email: 'igor@company.ru', company: 'Компания', comment: '' })).toEqual({})
  })
})
