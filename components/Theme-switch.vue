<template>
  <div class="theme-switch-wrapper toggle-box">
    <div class="theme-switch switch">
      <input type="checkbox" id="checkbox" class="switch__input" checked />
      <label for="checkbox" class="switch__label"></label>
    </div>
  </div>
</template>

<style lang="scss">
.theme-switch-wrapper {
  display: flex;
  justify-content: flex-end;
}
.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
}
input:checked + .slider {
  background-color: #ffb200;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .toggle-box {
    position: absolute;
    top: -59px;
    right: 10px;
  }
}

// Variables
$bg-disabled-color: #ffb20066;
$bg-enabled-color: rgba(63, 81, 181, 0.5);
$lever-disabled-color: #ffb200;
$lever-enabled-color: #3f51b5;

// Switch
.switch {
  display: inline-block;
  position: relative;
  font-size: 16px;
  line-height: 24px;

  &__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 36px;
    height: 20px;
    opacity: 0;
    z-index: 0;
  }

  // Unchecked
  &__label {
    display: block;
    padding: 0 0 0 44px;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      top: 5px;
      left: 0;
      width: 36px;
      height: 14px;
      background-color: $bg-disabled-color;
      border-radius: 14px;
      z-index: 1;
      transition: background-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:after {
      content: "";
      position: absolute;
      top: 2px;
      left: 0;
      width: 20px;
      height: 20px;
      background-color: $lever-disabled-color;
      border-radius: 14px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      z-index: 2;
      transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: left, background-color;
    }
  }

  // Checked
  &__input:checked + &__label {
    &:before {
      background-color: $bg-enabled-color;
    }

    &:after {
      left: 16px;
      background-color: $lever-enabled-color;
    }
  }
}
</style>

<script>
if (process.client) {
  require("assets/js/darkmode.js");
}
</script>
