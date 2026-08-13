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
