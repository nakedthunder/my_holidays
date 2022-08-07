<template>
    <div class="nav_outter">
        <nav id="navbar">
            <div class="navbar_logo">
                <a href="#">my holidays</a>
            </div>

            <button class="navbar__toggle-btn">
                <i class="fas fa-bars"></i>
            </button>
        </nav>
    </div>
</template>

<script>
import '@fortawesome/fontawesome-free/js/all.js'

export default {

}
</script>

<style>
#navbar {
    display: flex;
        /* justify-content: space-between; */
        /* justify-content: center; */
    background: white;
    width: 100%;
    height: 80px;
    padding: 20px 20px 20px 19px;
}
.navbar_logo a,
.navbar_menu {
    color: black;
    line-height: 40px;
    font-size: 35px;
    font-weight: 700;
    font-family: Georgia, serif;
}
.navbar__toggle-btn {
    background: white;
    border: none;
    /* 하 myholidays center에 두고싶은데 display felx , justify-content:center인 경우에는 이상하게 css되서 일단 이걸로... */
    margin-left: auto;
    font-size: 19px;
}
</style>