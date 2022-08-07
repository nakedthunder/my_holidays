<template>
  <div class="main_page_outter">
    <div class="img_box">
      <img class="main_img" :src="mainImg" alt="">
    </div>
    <div class="mystroy_box">
      <img class="my_profile" :src="myProfile" alt="">
      <button class="profile_btn">hey i am Jess</button>
      <span class="short_content">안녕하세요 저는 박재서입니다</span>
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
      mainImg: require("../../assets/image/connection.jpeg"),
      myProfile: require("../../assets/image/jess.jpeg"),
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
  padding: 100px 0 75px 0;
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
  padding: 25px 0 10px 0;
}
.essentials_elements img{
  width: 33.3%; 
  padding: 0 3px;
}
.my_profile {
  width: 400px;
  height: 500px;
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
.mystroy_box *{
  font-family: Georgia, serif;
}
</style>