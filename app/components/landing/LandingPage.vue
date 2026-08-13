<!-- Composes the complete Snapbuild landing while keeping section responsibilities isolated. -->
<script setup lang="ts">
const landingRoot = useTemplateRef<HTMLElement>('landing-root')

useOriginalReveals(landingRoot)
</script>

<template>
  <main ref="landing-root" class="landing-page">
    <LandingHeader />
    <LandingHero />
    <LandingLogos />
    <LandingProcess />
    <LandingUseCases />
    <LandingRoleScenarios />
    <LandingImplementation />
    <LandingComparison />
    <LandingSecurity />
    <LandingRoadmap />
    <LandingFaq />
    <LandingCta />
    <LandingFooter />
  </main>
</template>
