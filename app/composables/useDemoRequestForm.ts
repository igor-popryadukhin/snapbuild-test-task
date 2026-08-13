import type { DemoRequestErrors, DemoRequestValues } from '~/utils/validation'
import { validateDemoRequest } from '~/utils/validation'

export type DemoRequestStatus = 'idle' | 'submitting' | 'success'

/** Returns a fresh set of empty form values. */
function createEmptyValues(): DemoRequestValues {
  return { name: '', email: '', company: '', comment: '' }
}

/**
 * Owns the state machine for the client-only demo request form.
 *
 * @returns Reactive values, errors, status and form actions.
 */
export function useDemoRequestForm() {
  const values = reactive<DemoRequestValues>(createEmptyValues())
  const errors = ref<DemoRequestErrors>({})
  const status = ref<DemoRequestStatus>('idle')

  /** Clears one field error when the visitor edits that field. */
  function clearError(field: keyof DemoRequestValues): void {
    if (!errors.value[field]) return
    errors.value = { ...errors.value, [field]: undefined }
  }

  /** Validates locally and simulates processing without making a network request. */
  async function submit(): Promise<void> {
    errors.value = validateDemoRequest(values)
    if (Object.keys(errors.value).length > 0) return

    status.value = 'submitting'
    await new Promise<void>(resolve => window.setTimeout(resolve, 450))
    status.value = 'success'
  }

  /** Restores an empty form for a new request. */
  function reset(): void {
    Object.assign(values, createEmptyValues())
    errors.value = {}
    status.value = 'idle'
  }

  return { values, errors, status, clearError, submit, reset }
}
