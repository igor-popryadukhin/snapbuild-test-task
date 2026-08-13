import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Russian marketing copy intentionally uses non-breaking spaces to preserve typography.
    'no-irregular-whitespace': 'off',
    'vue/multi-word-component-names': 'off',
  },
})
