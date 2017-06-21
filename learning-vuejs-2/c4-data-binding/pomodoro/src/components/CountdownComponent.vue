<template>
    <div class="card card-inverse card-info">
        <div class="card-block pomodoro-timer">
            <span>{{ min | leftpad }}</span> : <span>{{ sec | leftpad }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                min: 2,
                sec: 34
            }
        }
    }
</script>