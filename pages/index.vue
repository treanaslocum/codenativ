<template>
  <div>
    <BetaHeader/>
    <Header/>
    <HeroSection/>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>

<script>
  import BetaHeader from '~/components/BetaHeader.vue'
  import Header from '~/components/Header.vue'
  import HeroSection from '~/components/HeroSection.vue'

  export default {
  components: {
    BetaHeader,
    Header,
    HeroSection,
  },
  head () {
    return {
      title: "Home - Codenativ",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
