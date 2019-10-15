<template>

  <div class="container xl:px-32 lg:px-32 sm:px-16 px-8 mt-32">
    <h3 class="font-display lg:text-xl md:text-xl text-xl pb-6">
      Recent Work
    </h3>
  
<a href="https://github.com/amarmanhala/raptor" target="_blank">
<div class="max-w-sm rounded overflow-hidden rounded raptor">
  
  <div class="px-6 py-4">
    <div class="font-body font-bold text-xl xl:text-3xl lg:text-3xl md:text-3xl mb-2">Raptor</div>
    <p class="font-body text-lg">
       CRM web application for australian real estate company.
    </p>
  </div>
  <img class="w-9/12 mx-auto py-4" src="~/assets/crm.svg" alt="Raptor - CRM web application for australian real estate company.">
</div>
</a>


  </div>
</template>

<script>
import Cards from "~/components/Cards.vue";
export default {
  components: {
    Cards
  }
};
</script>

<style>
.raptor {
  background-color: rgba(94, 92, 230, 1) !important;
}
</style>
