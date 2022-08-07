<template>
  <div class="main_outter">
      <main>
          <navbar />
          <div class="main_page_box">
              <mainUtil />
          </div>
      </main>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import mainUtil from '@/components/main/mainUtil.vue'

export default {
  components: { navbar, mainUtil },

}
</script>

<style>

</style>