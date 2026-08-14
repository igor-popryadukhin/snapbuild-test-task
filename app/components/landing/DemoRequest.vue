<!-- Provides an accessible client-only demo request flow without transmitting personal data. -->
<script setup lang="ts">
const { values, errors, status, clearError, submit, reset } = useDemoRequestForm()
const form = useTemplateRef<HTMLFormElement>('form')
const successMessage = useTemplateRef<HTMLElement>('success-message')
const hasErrors = computed(() => Object.values(errors.value).some(Boolean))

/** Handles native form submission through the local demo state machine. */
async function handleSubmit(): Promise<void> {
  const isSuccessful = await submit()
  await nextTick()

  if (isSuccessful) {
    successMessage.value?.focus()
    return
  }

  form.value?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
}

/** Resets the form and returns keyboard focus to its first field. */
async function handleReset(): Promise<void> {
  reset()
  await nextTick()
  form.value?.querySelector<HTMLElement>('input')?.focus()
}
</script>

<template>
  <section id="demo-request" class="demo-request" aria-labelledby="demo-request-title">
    <div class="demo-request__inner">
      <UiSectionHeader
        eyebrow="Запросить демо"
        title="Покажем, как собрать материалы в вашем стиле"
        description="Оставьте контакты — обсудим задачи вашей команды и покажем подходящий сценарий."
        title-id="demo-request-title"
      />

      <div class="demo-request__card">
        <div v-if="status === 'success'" ref="success-message" class="demo-request__success" role="status" tabindex="-1">
          <span aria-hidden="true">✓</span>
          <h3>Заявка готова</h3>
          <p>Спасибо! Подготовим демонстрацию под задачи вашей команды.</p>
          <button type="button" @click="handleReset">Заполнить ещё раз</button>
        </div>

        <form v-else ref="form" novalidate @submit.prevent="handleSubmit">
          <p v-if="hasErrors" class="demo-request__error-summary" role="alert">
            Проверьте обязательные поля формы.
          </p>
          <div class="demo-request__fields">
            <div class="demo-request__field">
              <label for="demo-name">Имя</label>
              <input id="demo-name" v-model="values.name" name="name" autocomplete="name" required :aria-invalid="Boolean(errors.name)" :aria-describedby="errors.name ? 'demo-name-error' : undefined" @input="clearError('name')">
              <p v-if="errors.name" id="demo-name-error" class="demo-request__error">{{ errors.name }}</p>
            </div>
            <div class="demo-request__field">
              <label for="demo-email">Рабочий email</label>
              <input id="demo-email" v-model="values.email" name="email" type="email" inputmode="email" autocomplete="email" required :aria-invalid="Boolean(errors.email)" :aria-describedby="errors.email ? 'demo-email-error' : undefined" @input="clearError('email')">
              <p v-if="errors.email" id="demo-email-error" class="demo-request__error">{{ errors.email }}</p>
            </div>
            <div class="demo-request__field demo-request__field--wide">
              <label for="demo-company">Компания</label>
              <input id="demo-company" v-model="values.company" name="company" autocomplete="organization" required :aria-invalid="Boolean(errors.company)" :aria-describedby="errors.company ? 'demo-company-error' : undefined" @input="clearError('company')">
              <p v-if="errors.company" id="demo-company-error" class="demo-request__error">{{ errors.company }}</p>
            </div>
            <div class="demo-request__field demo-request__field--wide">
              <label for="demo-comment">Что хотите автоматизировать <span>(необязательно)</span></label>
              <textarea id="demo-comment" v-model="values.comment" name="comment" rows="4" maxlength="501" :aria-invalid="Boolean(errors.comment)" :aria-describedby="errors.comment ? 'demo-comment-error' : 'demo-comment-hint'" @input="clearError('comment')" />
              <div class="demo-request__field-meta">
                <p v-if="errors.comment" id="demo-comment-error" class="demo-request__error">{{ errors.comment }}</p>
                <p v-else id="demo-comment-hint">До 500 символов</p>
                <span>{{ values.comment.length }}/500</span>
              </div>
            </div>
          </div>

          <div class="demo-request__actions">
            <button type="submit" :disabled="status === 'submitting'">
              <span v-if="status === 'submitting'" aria-live="polite">Обрабатываем…</span>
              <span v-else>Запросить демо</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
