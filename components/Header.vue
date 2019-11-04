<template>
  <div>

<nav class="flex items-center flex-wrap xl:mx-32 lg:mx-32 sm:mx-16 mx-8 pt-12">
  <div class="flex items-center flex-shrink-0 text-white mr-12">
   <nuxt-link to="/">
              <h1 class="font-display lg:text-4xl md:text-3xl text-3xl">
                Amarpreet
                <br />Singh
              </h1>
            </nuxt-link>
          
  </div>
<ul class="flex font-body lg:text-xl md:text-xl xl:text-xl lg:font-bold md:font-bold font-bold xl-pt-0 lg-pt-0 md-pt-0 pt-3">
  <li class="lg:mr-6 md:mr-6 xl:mr-6 mr-4">
    <nuxt-link to="/about">About</nuxt-link>
  </li>
  <li class="lg:mr-6 md:mr-6 xl:mr-6 mr-4">
    <a href="https://www.dropbox.com/s/g2bu7rtvmxzw15d/amarpreet-full-stack-web-developer.pdf?dl=0" target="__blank">Resume</a>
  </li>
  <li class="lg:mr-6 md:mr-6 xl:mr-6 mr-4">
    <nuxt-link to="/reading">Reading</nuxt-link>
  </li>
  <li>
    <nuxt-link to="/contact">Contact</nuxt-link>
  </li>
</ul>
 
</nav>
  </div>
</template>

<style lang="scss">

</style>

<script>
export default {
  components: {
  }
};
</script>
