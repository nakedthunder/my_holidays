<template>
    <div>
        <h1>메인페이지s</h1>
        <h1>
            {{products}}
        </h1>
    </div>
</template>

<script>
export default {
    created (){
        const products = await axios.get('http://localhost:3000/products')
        return products
    }
}
</script>

<style>

</style>