<template>
  <div class="container xl:w-9/12 lg:w-9/12 w-full xl:px-32 lg:px-32 sm:px-16 px-8 mt-32">
    <h3 class="font-display lg:text-xl md:text-xl text-xl pb-6">Library</h3>
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <img
        class="h-40 lg:h-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        src="~/assets/cleancode.jpg"
        title="Clean Code"
      />
      <div
        class="bg-white p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-8">
    
          <div class="text-gray-900 font-bold text-xl mb-2">Clean Code</div>
          <p
            class="text-gray-700 text-base"
          >Robert C. Martin</p>
        </div>
       
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  head() {
    return {
      title: "Reading | Amarpreet Singh, Full stack Developer Toronto"
    };
  }
};
</script>
