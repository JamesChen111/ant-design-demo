<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-fixed-sider">
      <a-layout-sider
        v-if="navLayout === 'left'"
        :trigger="null"
        :theme="navTheme"
        collapsible
        v-model="collapsed"
        width="256px"
        :style="{ overflow: 'auto', height: '100vh' }"
      >
        <div class="logo">
          <!-- <logo></logo> -->
          <h1>Ant Design Demo</h1>
        </div>

        <sider-menu :navTheme="navTheme" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <Header />
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px 0', overflow: 'initial' }"
        >
          <div :style="{ padding: '24px', background: '#fff' }">
            <Setting />
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Footer from "./Footer";
import Header from "./Header";
import Setting from "../components/SettingDrawer";
import SiderMenu from "./SiderMenu";
export default {
  components: {
    Footer,
    Header,
    Setting,
    "sider-menu": SiderMenu
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  }
};
</script>
<style lang="less">
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.trigger {
  font-size: 20px;
  padding-left: 16px;
  &:hover {
    color: #1890ff;
  }
}
.logo {
  overflow: hidden;
}
h1 {
  display: inline-block;
  font-size: 20px;
  vertical-align: middle;
}
.nav-theme-dark {
  .logo {
    h1 {
      color: #fff;
    }
  }
}
</style>
