import { describe, expect, it } from 'vitest'
import { isWorkEmail } from '../app/utils/validation'

describe('isWorkEmail', () => {
  it.each(['hello@snapbuild.ru', 'team+demo@company.io'])('accepts %s', (email) => {
    expect(isWorkEmail(email)).toBe(true)
  })

  it.each(['', 'hello@', '@company.ru'])('rejects %s', (email) => {
    expect(isWorkEmail(email)).toBe(false)
  })
})
