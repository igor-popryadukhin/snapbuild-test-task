<!-- Provides an accessible client-only demo request flow without transmitting personal data. -->
<script setup lang="ts">
const { values, errors, status, clearError, submit, reset } = useDemoRequestForm()

/** Handles native form submission through the local demo state machine. */
async function handleSubmit(): Promise<void> {
  await submit()
}
</script>

<template>
  <section id="demo-request" class="demo-request" aria-labelledby="demo-request-title">
    <div class="demo-request__inner">
      <header class="demo-request__intro">
        <p class="demo-request__eyebrow">Запросить демо</p>
        <h2 id="demo-request-title">Покажем, как собрать материалы в вашем стиле</h2>
        <p>Оставьте контакты — это демонстрационная форма: данные никуда не отправляются и не сохраняются.</p>
      </header>

      <div class="demo-request__card">
        <div v-if="status === 'success'" class="demo-request__success" role="status" tabindex="-1">
          <span aria-hidden="true">✓</span>
          <h3>Заявка готова</h3>
          <p>В реальном продукте команда получила бы её сейчас. В этой демоверсии данные не передавались.</p>
          <button type="button" @click="reset">Заполнить ещё раз</button>
        </div>

        <form v-else novalidate aria-describedby="demo-request-privacy" @submit.prevent="handleSubmit">
          <div class="demo-request__fields">
            <div class="demo-request__field">
              <label for="demo-name">Имя</label>
              <input id="demo-name" v-model="values.name" name="name" autocomplete="name" :aria-invalid="Boolean(errors.name)" :aria-describedby="errors.name ? 'demo-name-error' : undefined" @input="clearError('name')">
              <p v-if="errors.name" id="demo-name-error" class="demo-request__error">{{ errors.name }}</p>
            </div>
            <div class="demo-request__field">
              <label for="demo-email">Рабочий email</label>
              <input id="demo-email" v-model="values.email" name="email" type="email" inputmode="email" autocomplete="email" :aria-invalid="Boolean(errors.email)" :aria-describedby="errors.email ? 'demo-email-error' : undefined" @input="clearError('email')">
              <p v-if="errors.email" id="demo-email-error" class="demo-request__error">{{ errors.email }}</p>
            </div>
            <div class="demo-request__field demo-request__field--wide">
              <label for="demo-company">Компания</label>
              <input id="demo-company" v-model="values.company" name="company" autocomplete="organization" :aria-invalid="Boolean(errors.company)" :aria-describedby="errors.company ? 'demo-company-error' : undefined" @input="clearError('company')">
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
            <p id="demo-request-privacy">Нажимая кнопку, вы проверяете только интерфейс — сетевой запрос не выполняется.</p>
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

<style scoped lang="scss">
.demo-request { padding: clamp(64px, 8vw, 116px) max(16px, 2.78vw); color: #fff; font-family: var(--font-primary, "TT Commons Pro", sans-serif); background: #111; }
.demo-request__inner { display: grid; grid-template-columns: minmax(280px, .8fr) minmax(0, 1.2fr); gap: clamp(40px, 8vw, 120px); width: min(100%, 1360px); margin: 0 auto; }
.demo-request__intro p, .demo-request__intro h2, .demo-request__card p, .demo-request__card h3 { margin: 0; }
.demo-request__eyebrow { margin-bottom: 24px !important; color: #ff9a76; font-size: 14px; line-height: 1.4; text-transform: uppercase; letter-spacing: .08em; }
.demo-request__intro h2 { max-width: 610px; color: #fff; font-size: clamp(42px, 5vw, 70px); font-weight: 500; line-height: .98; letter-spacing: -.045em; }
.demo-request__intro > p:last-child { max-width: 500px; margin-top: 28px; color: #aaa; font-size: 18px; line-height: 1.45; }
.demo-request__card { align-self: start; padding: clamp(24px, 3vw, 44px); border: 1px solid #3a3a3a; border-radius: 20px; background: #1b1b1b; }
.demo-request__fields { display: grid; grid-template-columns: 1fr 1fr; gap: 24px 18px; }
.demo-request__field { min-width: 0; }
.demo-request__field--wide { grid-column: 1 / -1; }
.demo-request label { display: block; margin-bottom: 8px; color: #d8d8d8; font-size: 15px; }
.demo-request label span { color: #858585; }
.demo-request input, .demo-request textarea { box-sizing: border-box; width: 100%; border: 1px solid #494949; border-radius: 12px; color: #fff; font: inherit; font-size: 17px; background: #111; transition: border-color 180ms ease, box-shadow 180ms ease; }
.demo-request input { height: 52px; padding: 0 15px; }
.demo-request textarea { min-height: 116px; padding: 14px 15px; resize: vertical; }
.demo-request input:hover, .demo-request textarea:hover { border-color: #777; }
.demo-request input:focus-visible, .demo-request textarea:focus-visible { border-color: #ff8c64; outline: 0; box-shadow: 0 0 0 3px rgba(255, 109, 60, .22); }
.demo-request input[aria-invalid="true"], .demo-request textarea[aria-invalid="true"] { border-color: #ff806f; }
.demo-request__error { color: #ff9c8d !important; }
.demo-request__field > .demo-request__error { margin-top: 7px; font-size: 14px; line-height: 1.3; }
.demo-request__field-meta { display: flex; justify-content: space-between; gap: 16px; margin-top: 7px; color: #858585; font-size: 13px; }
.demo-request__actions { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-top: 32px; }
.demo-request__actions p { max-width: 330px; color: #858585; font-size: 13px; line-height: 1.35; }
.demo-request button { flex: 0 0 auto; min-height: 52px; padding: 0 24px; border: 1px solid #ff8c64; border-radius: 12px; color: #111; font: inherit; font-size: 17px; font-weight: 500; background: #ff8c64; cursor: pointer; transition: transform 180ms ease, background-color 180ms ease; }
.demo-request button:hover:not(:disabled) { background: #ffa07f; transform: translateY(-1px); }
.demo-request button:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
.demo-request button:disabled { cursor: wait; opacity: .65; }
.demo-request__success { display: grid; min-height: 410px; align-content: center; justify-items: start; }
.demo-request__success > span { display: grid; width: 58px; height: 58px; margin-bottom: 28px; place-items: center; border-radius: 50%; color: #111; font-size: 28px; background: #ff8c64; }
.demo-request__success h3 { font-size: clamp(34px, 4vw, 52px); font-weight: 500; line-height: 1; letter-spacing: -.035em; }
.demo-request__success p { max-width: 520px; margin: 18px 0 32px; color: #aaa; font-size: 17px; line-height: 1.45; }
@media (max-width: 1023px) { .demo-request__inner { grid-template-columns: 1fr; } .demo-request__intro h2 { max-width: 760px; } }
@media (max-width: 767px) { .demo-request__intro h2 { font-size: 42px; } .demo-request__intro > p:last-child { font-size: 16px; } .demo-request__card { padding: 24px 18px; border-radius: 16px; } .demo-request__fields { grid-template-columns: 1fr; } .demo-request__field--wide { grid-column: auto; } .demo-request__actions { align-items: stretch; flex-direction: column; } .demo-request__actions button { width: 100%; } }
@media (prefers-reduced-motion: reduce) { .demo-request input, .demo-request textarea, .demo-request button { transition: none; } .demo-request button:hover:not(:disabled) { transform: none; } }
</style>
