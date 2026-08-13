<!-- Composes the complete Snapbuild landing while keeping section responsibilities isolated. -->
<script setup lang="ts">
const landingRoot = useTemplateRef<HTMLElement>('landing-root')

useOriginalReveals(landingRoot)
</script>

<template>
  <main ref="landing-root" class="landing-page">
    <a class="skip-link" href="#hero">Перейти к содержанию</a>
    <LandingHeader />
    <LandingHero />
    <LandingLogos />
    <LandingProcess />
    <LandingUseCases />
    <LandingRoleScenarios />
    <LandingImplementation />
    <LandingMeasurableEffect />
    <LandingComparison />
    <LandingSecurity />
    <LandingRoadmap />
    <LandingFaq />
    <LandingCustomerStories />
    <LandingDemoRequest />
    <LandingCta />
    <LandingFooter />
  </main>
</template>

<style scoped>
.skip-link { position: fixed; z-index: 1000; top: 8px; left: 8px; padding: 10px 14px; border-radius: 8px; color: #fff; background: #111; transform: translateY(-150%); }
.skip-link:focus { transform: translateY(0); }
</style>
