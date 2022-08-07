<template>
  <div class="main_outter">
    <main>
      <navbar />
      <mainUtil />
      <footerPage />
    </main>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import footerPage from '@/components/footerPage.vue'
import mainUtil from '@/components/main/mainUtil.vue'


export default {
  components: { navbar, mainUtil, footerPage },

}
</script>

<style>

</style>