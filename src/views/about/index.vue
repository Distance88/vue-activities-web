<template>
  <div class="my-synopsis">
    <div class="ui container animated bounceInDown">
      <h3 class="ui header my-header">社团简介</h3>
      <p>
        我们南工社团成立于2004年，是学院首批成立的工作室，社团主攻移动应用方向、web开发等方向。社团发展宗旨为:“勤学、合作、拓新、自主、敏行”。
      </p>
      <p>
        我们社团是一个学风严谨，学习氛围浓郁的大家庭，社团成员均积极思考、勤学苦练。社团往届成员已经在相关行业取得一定的成绩。
      </p>
      <p>
        学习方向:定位于小组学习模式，以小组为单位带动成员学习，保证每个社团成员都可以主动学习，提前适应.南工社团是一个不求数量但求质量的学习型社团
      </p>
      <p>
        我们立志将南工社团打造成一个专注于学习，能够提高成员学习积极性及自律性，激发其创造能力，使其更加优秀的社团，并希望每个加入我们的人最终都能够取得卓越的成就。
      </p>
      <p>我们也将会为这个目标而不断努力。</p>
    </div>
    <div class="ui container animated bounceInDown">
      <h3 class="ui header my-header">社团风采</h3>
       <div class="recommendPage">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide>
                  <img class="ui image rounded" src="@images/computer1.jpg"/>
                </swiper-slide>
              <swiper-slide><img class="ui image rounded" src="@images/computer2.jpg"/></swiper-slide>
              <swiper-slide><img class="ui image rounded" src="@images/computer3.jpg"/></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
             <div class="swiper-button-prev" slot="button-prev"></div>
             <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </div>
  </div>
</template>
<style scoped>
.my-synopsis {
  width: 100%;
  height: 100%;
  background-color: #fff !important;
}
.ui.container {
  margin: 0 auto !important;
  width: 80%;
  padding-top: 5em !important;
  padding-bottom: 5em !important;
}
.my-header {
  padding: 20px 0;
  width: 125px;
  border-bottom: 2px #f2711c solid;
}
.recommendPage .swiper-container {
  position: relative;
  width: 100%;
  height: 500px;
  background: pink;
}
.recommendPage .swiper-container .swiper-slide {
  width: 100%;
  line-height: 200px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
.swiper-button-next {

    background: url('../../static/images/arrows.png') no-repeat left bottom;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -15px;
    width: 17px;
    height: 30px;
}
.swiper-button-prev {
    background: url('../../static/images/arrows.png') no-repeat left top;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -15px;
    width: 20px;
    height: 30px;
}
</style>
<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    };
  },
  methods:{
    start(){
      window.open("http://121.196.145.132:8080/", "_blank");
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
};
</script>