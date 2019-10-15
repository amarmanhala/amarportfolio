<template>
      <main>
            <Bio />
            <Work />
      </main>
</template>

<script>
import Bio from '~/components/Bio.vue'
import Work from '~/components/Work.vue'

export default {
  components: {
    Bio,
    Work
  }
}
</script>

<style>
main {

  padding-top: 2rem;
    margin-top: 60px;
}
</style>
