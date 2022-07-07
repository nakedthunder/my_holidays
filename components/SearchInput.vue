<template>
    <div class="input-wrapper">
        <div class="search_inner">
            <input type="text" :value="value" class="search-input" @input="$emit('input', $event.target.value)"
                @keyup.enter="$emit('search')" :placeholder="placeholder" />
            <button id="cancel" class="btn" @click="$emit('cancel')">X</button>
            <button class="btn" type="button" @click="$emit('search')"></button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: () => '',
        },
        placeholder: {
            type: String,
            default: ' 원하시는 사진이름을 검색해주세요!'
        }
    },
}
</script>

<style scoped>
.input-wrapper {
    padding: 50px;
    /*margin : 1rem 0;*/
}

.search-input {
    width: 400px;
    font-size: 1.2rem;
    font-weight: 500;
}

.btn {
    /* background: url("../imgs/search.svg") no-repeat; */
    margin: 11px 0;
    width: 22px;
    height: 22px;
    background-size: 100% 100%;
    /*  text-indent: -9999px;*/
    cursor: pointer;
    border: none;
}

.search_inner {
    border: 3px solid #0000CD;
    border-radius: 1000px;
    max-width: 500px;
    height: 50px;
    margin: auto;
}

.search-input {
    border: none;
}

.search-input:focus {
    outline: none;
}
#cancel {
    border-radius: 50%;
    font-size: 14px;
    border: 0.5px solid #BEBEBE;
    background: white;

}
</style>