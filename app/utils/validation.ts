export interface DemoRequestValues {
  name: string
  email: string
  company: string
  comment: string
}

export type DemoRequestErrors = Partial<Record<keyof DemoRequestValues, string>>

/** Checks whether a value has the basic shape of an email address. */
export function isWorkEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

/**
 * Validates the client-only demo request without retaining or sending its values.
 *
 * @param values - Current form values.
 * @returns Field-specific messages for invalid values.
 */
export function validateDemoRequest(values: DemoRequestValues): DemoRequestErrors {
  const errors: DemoRequestErrors = {}

  if (values.name.trim().length < 2) errors.name = 'Укажите имя — минимум 2 символа.'
  if (!isWorkEmail(values.email)) errors.email = 'Введите рабочий email в формате name@company.ru.'
  if (values.company.trim().length < 2) errors.company = 'Укажите название компании.'
  if (values.comment.trim().length > 500) errors.comment = 'Сократите комментарий до 500 символов.'

  return errors
}
