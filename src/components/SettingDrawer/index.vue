<template>
  <div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      width="300px"
    >
    <template v-slot:handle>
      <div class="setting-drawer-handle" @click="visible = !visible">
        <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
      </div>
    </template>
    <div>
      <h2>整体风格定制</h2>
      <a-radio-group name="radioGroup" :defaultValue="dark">
        <a-radio value="dark">黑色</a-radio>
        <a-radio value="white">白色</a-radio>
      </a-radio-group>
    </div>
     <div>
      <h2>导航模式</h2>
      <a-radio-group name="radioGroup" :defaultValue="left">
        <a-radio value="left">左侧</a-radio>
        <a-radio value="top">顶部</a-radio>
      </a-radio-group>
    </div>
    </a-drawer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
    },
  };
</script>

<style lang="less" src="./index.less">
</style>

