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
          <logo></logo>
          <h1>Ant Design Demo</h1>
        </div>
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
          <a-menu-item key="1">
            <a-icon type="user" />
            <span class="nav-text">nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera" />
            <span class="nav-text">nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <span class="nav-text">nav 3</span>
          </a-menu-item>
          <a-menu-item key="4">
            <a-icon type="bar-chart" />
            <span class="nav-text">nav 4</span>
          </a-menu-item>
          <a-menu-item key="5">
            <a-icon type="cloud-o" />
            <span class="nav-text">nav 5</span>
          </a-menu-item>
          <a-menu-item key="6">
            <a-icon type="appstore-o" />
            <span class="nav-text">nav 6</span>
          </a-menu-item>
          <a-menu-item key="7">
            <a-icon type="team" />
            <span class="nav-text">nav 7</span>
          </a-menu-item>
          <a-menu-item key="8">
            <a-icon type="shop" />
            <span class="nav-text">nav 8</span>
          </a-menu-item>
        </a-menu>
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
export default {
  components: {
    Footer,
    Header,
    Setting
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
