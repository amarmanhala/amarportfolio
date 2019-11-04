<template>
<div class="xl:px-32 lg:px-32 sm:px-16 px-8 mt-32">
<div class="flex">
      <div class="flex-1 h-12">
      <h3 class="font-display lg:text-xl md:text-xl text-xl pb-6">Recent Work</h3>
      </div>
</div>
<div class="flex flex-wrap">
      <div class="w-full xl:pr-6 lg:pr-6 xl:w-1/3 lg:w-1/2 md:w-1/2 pb-6">
        <a href="https://github.com/amarmanhala/raptor" target="_blank">
          <div class="max-w-sm rounded overflow-hidden rounded raptor">
            <div class="px-6 py-4">
              <div
                class="font-body font-bold text-xl xl:text-3xl lg:text-3xl md:text-3xl mb-2"
              >Raptor</div>
              <p class="font-body text-lg">CRM web application for australian real estate company.</p>
            </div>
            <img
              class="w-9/12 mx-auto py-4"
              src="~/assets/crm.svg"
              alt="Raptor - CRM web application for australian real estate company."
            />
          </div>
        </a>
      </div>
      
      <div class="w-full xl:pr-6 lg:pr-6 xl:w-1/3 lg:w-1/2">
        <a href="https://github.com/amarmanhala/weatherapp" target="_blank">
          <div class="max-w-sm rounded overflow-hidden rounded weather">
            <div class="px-6 py-4">
              <div
                class="font-body font-bold text-xl xl:text-3xl lg:text-3xl md:text-3xl mb-2"
              >Toronto Weather</div>
              <p class="font-body text-lg">A web application suggest you what to wear according to weather conditions in Toronto Canada.</p>
            </div>
            <img
              class="w-2/5 mx-auto py-3"
              src="~/assets/cloud.png"
              alt="Raptor - CRM web application for australian real estate company."
            />
          </div>
        </a>
      </div>
    </div>
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
.weather {
  background-color: #5ca0e6;
}
</style>
