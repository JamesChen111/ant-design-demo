import { check } from "../utils/auth";

function install(Vue) {
  Vue.directive("auth", {
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
}

export default install;
