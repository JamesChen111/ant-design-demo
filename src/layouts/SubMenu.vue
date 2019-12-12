<template functional>
  <a-sub-menu :key="props.menuInfo.key">
    {{ menuInfo }}
    <!-- 主title -->
    <span slot="title">
      <a-icon
        v-if="props.menuInfo.meta.icon"
        :type="props.menuInfo.meta.icon"
      />
      <span>{{ props.menuInfo.meta.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <!-- 子title -->
      <a-menu-item
        v-if="!item.children"
        :key="item.path"
        @click="
          () =>
            parent.$router.push({ path: item.path, query: parent.$route.query })
        "
      >
        <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
      <!-- 组件的递归中，通过重新绑定属性来传值 -->
      <sub-menu v-else :key="item.path" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  // props: ["menuInfo"],
  props: {
    menuInfo: {
      type: Object
    }
  }
};
</script>
