<!-- Renders an SSR-safe number that counts up once when scrolled into view. -->
<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{ value: string; duration?: number }>(), { duration: 1600 })

const root = ref<HTMLElement | null>(null)
const match = props.value.match(/^(\d+(?:\.\d+)?)(.*)$/)
const end = match ? Number(match[1]) : NaN
const suffix = match ? match[2] : ''

const { display } = useCountUp(root, { end, suffix, duration: props.duration })
</script>

<template>
  <strong ref="root" class="ui-count-up-value">{{ Number.isFinite(end) ? display : value }}</strong>
</template>
