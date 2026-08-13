<!-- Renders one independently toggleable FAQ disclosure. -->
<script setup lang="ts">
defineProps<{ id: string; question: string; answer: string }>()

/** Converts the content-data paragraph marker to plain text line breaks.
 * @param answer Trusted static FAQ copy.
 * @returns Text safe for interpolation in the template.
 */
function formatAnswer(answer: string): string {
  return answer.replaceAll('<br><br>', '\n\n')
}
</script>

<template>
  <div class="dds-accordion-item">
    <input :id="`dds-faq-${id}`" type="checkbox" class="dds-accordion-state">
    <label class="dds-accordion-head" :for="`dds-faq-${id}`">
      <span class="dds-accordion-question">{{ question }}</span>
      <span class="dds-accordion-icon" aria-hidden="true">
        <img class="ui-disclosure-item__icon" :src="useAssetUrl('assets/images/c2663c497fb468e1.webp')" width="100%" height="100%" alt="">
      </span>
    </label>
    <div class="dds-accordion-panel">
      <p class="dds-accordion-answer ui-disclosure-item__answer">{{ formatAnswer(answer) }}</p>
    </div>
  </div>
</template>
