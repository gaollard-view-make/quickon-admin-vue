<template>
  <el-dialog title="当前页面配置数据" :visible.sync="centerDialogVisible" width="1200px">
    <div class="wrapper">
      <pre>{{ valueString }}</pre>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'raw-display',
  props: {
    code: {
      required: true
    },
    value: Boolean
  },
  data() {
    return {
      centerDialogVisible: this.value
    };
  },
  watch: {
    value(val) {
      this.centerDialogVisible = val;
    },
    centerDialogVisible(val) {
      this.$emit('input', val);
    }
  },
  computed: {
    valueString() {
      return JSON.stringify(this.code, null, 2);
    }
  }
};
</script>
<style scoped>
.wrapper {
  overflow: scroll;
  max-height: 600px;
}

pre {
  text-align: start;
}
</style>
