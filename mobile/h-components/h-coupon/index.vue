<template>
  <div class="h-coupon" :data-coupon="id">
    <img :src="url" @click="handleClick" alt />
  </div>
</template>

<script>
import { Toast } from 'vant';
import baseApi from '../../apis/base';
export default {
  name: 'h-coupon',
  props: {
    id: {
      type: [Number, String],
      default: '0'
    },
    url: {
      type: String,
      default: 'https://s1.huishoubao.com/web/hh5/static/img/8.4c8ea3b.png'
    }
  },
  methods: {
    handleClick() {
      baseApi.checkLoginStatus().then(res => {
        if (+res._errCode === 0) {
          if (res._data.status === 1) {
            this.doAddCoupon();
          } else {
            this.$store.commit('user/setShowLogin', true);
          }
        }
      });
    },
    doAddCoupon() {
      baseApi.addCoupon({ id: this.id }).then(res => {
        if (+res._errCode === 0) {
          Toast('领取成功');
        } else {
          Toast('领取失败: ' + res._errStr);
        }
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.h-coupon {
}

img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
