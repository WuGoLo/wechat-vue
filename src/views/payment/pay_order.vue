<template>
  <div class="home">
    <div class="header">
      <van-icon name="arrow-left" class="icon-left"/>
    </div>
    <div class="address">
      <van-cell-group>
        <van-field
          v-model="username"
          clearable
          label="收货人"
          placeholder="收货人姓名"
          :error-message="messageError"
        />
        <van-field
          v-model="phone"
          clearable
          type="number"
          label="手机号"
          placeholder="收货人手机号"
        />
        <van-field
          v-model="carmodel"
          clearable
          label="地区"
          placeholder="请选择"
          @click="show = true"
        />
        <van-popup v-model="show" position="bottom">
              <van-area
                ref="area"
                value="110000"
                :area-list="areaList"
                @change="onChange"
                @confirm="show = false"
                @cancel="show = false"
              />
            </van-popup>
        <van-field
          v-model="detailedAddress"
          clearable
          label="详细地址"
          type="textarea"
          placeholder="如街道、小区、门牌号等"
          autosize
          border
        />
      </van-cell-group>
    </div>
    <div class="product">
      <p class="title"><span>Raxwell 一次性防护口罩</span></p>
      <div class="container">
        <div class="box">
          <div class="img-box"></div>
          <div class="info-box">
            <p>Raxwell 一次性呼吸过滤口罩医用级熔喷布材料</p>
            <p>数量：50只/盒</p>
            <p>￥249/盒</p>
          </div>
        </div>
      </div>
      <div class="buy-box">
        <div class="bug">购买数量</div>
        <div class="count">
          <span>+</span>
          <span>1</span>
          <span>-</span>
        </div>
      </div>
    </div>
    <div class="pay">
      <div>微信支付</div>
      <van-icon name="success" class="icon-success"/>
    </div>
    <div class="footer">
      <div>实付款:<span>￥249</span></div>
      <van-button type="primary">立即支付</van-button>
    </div>
  </div>
</template>

<script>
import { Icon, cellGroup, Field, Popup, Area, Button} from 'vant';

    export default {
      components: { 
        [Icon.name]: Icon,
        [cellGroup.name]:cellGroup,
        [Field.name]:Field,
        [Popup.name]:Popup,
        [Area.name]:Area,
        [Button.name]:Button
      },
    data() {
      return {
        username: '',
        phone: "",
        carmodel: "",
        detailedAddress:'',
        messageError:'',
        show: false,
        areaList: {
            province_list: {
                110000: '北京市',
                120000: '天津市'
            },
            city_list: {
                110100: '北京市',
                120100: '天津市',
            },
            county_list: {
                110101: '东城区',
                110102: '西城区',
                110105: '朝阳区',
                110106: '丰台区',
                120101: '和平区',
                120102: '河东区',
                120103: '河西区',
                120104: '南开区',
                120105: '河北区'
            }
        }
      }
    },
    watch: {
      $route: {
        handler: function(route) {

        },
        immediate: true
      }

    },
    created() {

    },
    destroyed() {

    },
    methods: {
         onChange (picker, value, index) {
            console.log('当前值：' + value + '当前索引：' + index)
            let areaName = ''
            for (var i = 0; i < value.length; i++) {
            areaName = areaName + value[i].name + ' '
            }
            this.carmodel = areaName
        }
    }
  }
</script>
<style lang="scss">
.header{
    width: 100%;
    height: 0.45rem;
    line-height: 0.45rem;
  }
  .address{
    width: 100%;
    margin-bottom: 0.1rem; 
  }
  .icon-left{
    font-size: 0.24rem;
    line-height: 0.45rem;
  }
  .van-cell {
    line-height: 0.17rem;
  }
  .product{
    width: 100%;
    height: 1.98rem;
    margin-bottom: 0.1rem; 
      .title{
        width: 100%;
        height: 0.4rem;
        background: $white;
        line-height: 0.4rem;
        span{
          padding-left: 4%;
        }
      }
      .container{
        width: 92%;
        overflow: hidden;
        margin: 0 auto;
        .box{
          width: 100%;
          height: 0.9rem;
          margin: 0.1rem 0;
          display: flex;
          justify-content:space-between;
          .img-box{
            width: 0.9rem;
            background: $white;
          }
          .info-box{
            flex:1;
            position: relative;
            padding-left: 0.12rem;
            p:nth-child(2){
              font-size: 0.14rem;
              color: $gray-6;
              padding-top: 0.04rem;
            }
            p:nth-child(3){
              position: absolute;
              bottom: 0;
              left: 0.09rem;
            }
          }
        }
      }
      .buy-box{
        width: 100%;
        height: 0.48rem;
        background: $white;
        line-height: 0.48rem;
        display: flex;
        justify-content: space-between;
        .bug{
          padding-left: 4%;
        }
        .count{
          padding-right: 4%;
          display: flex;
          flex-direction:row-reverse;
          align-items:center;
          span{
            text-align: center;
            display: inline-block;
            width: 0.33rem;
            height: 0.25rem;
          }
          span:nth-child(3){
            line-height: 0.22rem;
            background: $gray-2;
            font-size: $font-body-large;
            color: $gray-5;
          }
          span:nth-child(2){
            line-height: 0.25rem;
          }
          span:nth-child(1){
            line-height: 0.22rem;
            background: $gray-4;
            font-size: 0.24rem;
            color: $gray-7;
          }
        }
      }
  }
  .pay{
    width: 100%;
    height: 0.47rem;
    margin-bottom: 0.1rem; 
    background: $white;
    display: flex;
    justify-content: space-between;
    div{
      flex: 1;
      line-height: 0.47rem;
      text-align: left;
      padding-left: 4%;
    }
    .icon-success{
      flex: 1;
      font-size: 0.2rem;
      line-height: 0.47rem;
      text-align: right;
      padding-right: 4%;
    }
  }
  .footer{
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    width: 100%;
    height: 0.54rem; 
    background: $white;
    border-top:0.01rem solid $gray-4;
    div{
      flex: 1;
      line-height: 0.54rem;
      text-align: right;
      span{
        font-size: 0.18rem;
        color: $red;
        padding-right: 0.1rem;
      }
    }
  }
    .van-button {
      height: 0.54rem;
      border-radius: 0;
    }
    .van-button--normal {
      padding: 0 0.28rem;
      font-size: 0.16rem;
    }

</style>
