<template>
    <div class="card">
        <div class="header">
            <h4 class="title">Acerca de nosotros</h4>
        </div>
        <div class="content">
            <router-link :to="{ name: 'index' }">inicio</router-link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci amet cumque ea exercitationem ipsa laboriosam magni nam officiis provident quaerat quo, rerum saepe sed tempora temporibus vitae? Similique, voluptates?</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about-app"
    }
</script>