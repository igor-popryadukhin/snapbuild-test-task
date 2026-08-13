<!-- Reproduces the source site's cookie notice without loading analytics scripts. -->
<script setup lang="ts">
const storageKey = 'dds-cookie-consent'
const isVisible = ref(false)

onMounted(() => {
  isVisible.value = localStorage.getItem(storageKey) !== 'accepted'
})

/** Persists consent locally and closes the notice. */
function acceptCookies(): void {
  localStorage.setItem(storageKey, 'accepted')
  isVisible.value = false
}
</script>

<template>
  <Transition name="cookie">
    <aside v-if="isVisible" class="dds-cookie is-visible" role="dialog" aria-live="polite" aria-label="Уведомление об использовании файлов cookie">
      <p class="dds-cookie-text">Мы используем файлы cookie, чтобы сделать наш сайт лучше. Используя сайт, вы принимаете нашу <a class="dds-cookie-link" href="https://snapbuild.ru/privacy" target="_blank" rel="noopener noreferrer">политику конфиденциальности</a> и&nbsp;<a class="dds-cookie-link" href="https://snapbuild.ru/agreement" target="_blank" rel="noopener noreferrer">соглашение на&nbsp;обработку персональных данных</a>.</p>
      <div class="dds-cookie-actions">
        <button type="button" class="dds-btn dds-btn--secondary" @click="acceptCookies"><span>Принять</span></button>
      </div>
    </aside>
  </Transition>
</template>
