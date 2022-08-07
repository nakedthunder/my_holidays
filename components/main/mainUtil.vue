<template>
  <div class="main_page_outter">
    <div class="img_box">
      <img class="main_img" :src="mainImg" alt="">
    </div>
    <div class="mystroy_box">
      <img class="my_profile" :src="myProfile" alt="">
      <button class="profile_btn">who am i</button>
      <span class="short_content">my story 보러가기</span>
    </div>
    <div class="my_essentials_box">
      <div class="essentials_elements">
        <ul>
          <li class="img_elemets" v-for="(img, idx) in essentails" :key="idx">
          <img :src="img.url" :alt="img">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainImg: require("../../assets/image/mainPageImg.jpeg"),
      myProfile: require("../../assets/image/myImgs.jpeg"),
      essentails:[
        { url: require("../../assets/image/experience.jpeg"), name:"experience"},
        { url: require("../../assets/image/food.jpeg"), name:"food"},
        { url: require("../../assets/image/relationship.jpeg"), name:"relationship"}
      ]
    }
  }
}
</script>

<style>
.main_img {
  width: 100%;
}
.mystroy_box {
  text-align: center;
  padding: 100px;
}
.mystroy_box button {
  display: block;
  margin: auto;
}
.profile_btn {
  border: none;
  background: none;
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
}
.essentials_elements img{
  width: 30%;
  
}
.essentials_elements li {
  display: contents;
}
.essentials_elements {
  text-align: center;
}
.my_essentials_box {
  padding-bottom: 50px;
}
</style>