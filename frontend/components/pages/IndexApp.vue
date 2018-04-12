<template>
    <div class="card">
        <div class="header">
            <h4 class="title">Inicio</h4>
        </div>
        <div class="content">
            <router-link :to="{ name: 'about' }">about</router-link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci amet cumque ea exercitationem ipsa laboriosam magni nam officiis provident quaerat quo, rerum saepe sed tempora temporibus vitae? Similique, voluptates?</p>
            <ul v-if="usuario.id">
                <li>{{ usuario.id }}</li>
                <li>{{ usuario.firstName }}</li>
                <li>{{ usuario.lastName }}</li>
                <li>{{ usuario.createdAt }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "IndexApp",
        data () {
            return {
                usuario: {}
            }
        },
        created() {
            axios.get("http://localhost:8080/api/usuario/3")
                .then(response => {
                    this.usuario = response.data.usuario
                })
        }
    }
</script>

<style scoped>

</style>