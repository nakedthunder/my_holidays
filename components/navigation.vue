<template>
    <div class="navbar_box">
        <nav class="navbar">
            <div class="navbar_logo">
            </div>
            <ul class="navbar_menu">
                <li><a href="">Gallery</a></li>
                <li><a href="">Event</a></li>
                <li><a href="">My Page</a></li>
            </ul>
            <ul class="navbar_icons">
                <li><a href="">로그인</a></li>
                <li><a href="">회원가입</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
a {text-decoration: none; color: white;}
.navbar{display: flex; justify-content: space-between; background: black; text-align: center; padding: 8px 16px;}
.navbar_menu {display: flex; justify-content: space-between; list-style: none;}
.navbar_icons {display: flex; justify-content: space-between; list-style: none;}
li {padding: 8px 12px;}

</style>