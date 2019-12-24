<template>
  <a-form layout="horizontal" :form="form">
    <a-form-item
      label="付款账户"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      {{ step.payAccount }}
    </a-form-item>
    <a-form-item
      label="密码"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'password',
          {
            rules: [{ required: true, message: 'Please input your password' }]
          }
        ]"
        type="password"
        placeholder="请输入付款密码"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" @click="handleSubmit">
        提交
      </a-button>
      <a-button @click="preStep">
        上一步
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  computed: {
    step() {
      return this.$store.state.form.step;
    }
  },
  methods: {
    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch({
            type: "form/submitForm",
            payload: { ...this.step, ...values }
          });
        }
      });
    },
    preStep() {
      this.$router.push("/form/step-form/info");
    }
  }
};
</script>
