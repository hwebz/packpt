<template>
    <div class="card card-inverse">
        <div class="card-block text-center">
            <img :src="catImageSrc">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return  {
                catImageSrc: "http://thecatapi.com/api/images/get?size=med"
            }
        }
    }
</script>