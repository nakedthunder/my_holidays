<template>
    <div class="nav_outter">
        <nav id="navbar">
            <div class="navbar_logo">
                <a href="#">my holidays</a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#navbar {
    display: flex;
    justify-content: space-between;
    background: white;
    width: 100%;
    height: 80px;
    padding: 40px 80px 0 80px;
}

.navbar_logo a,
.navbar_menu {
    color: #00008B;
    line-height: 40px;
    font-size: 30px;
    font-weight: normal;
}
</style>