<template>
  <div>
    <a-select
      :value="currency"
      style="width: 132px"
      @change="handleCurrencyChange"
    >
      <a-select-option value="zhifubao">微信</a-select-option>
      <a-select-option value="backcard">银行卡</a-select-option>
    </a-select>
    <a-input
      type="text"
      :value="number"
      @change="handleNumberChange"
      style="width: calc(100% - 132px)"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
