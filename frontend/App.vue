<template>
    <div class="wrapper">
        <header-menu></header-menu>
        <side-menu></side-menu>
        <div class="main-panel scrollStyle">
            <div class="content">
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SideMenu from "@/components/layout/SideMenu";
    import HeaderMenu from "@/components/layout/HeaderMenu";

    export default {
        components: {
            HeaderMenu,
            SideMenu},
        name: "app",
        comonents: { HeaderMenu, SideMenu }
    }
</script>

<style lang="scss">
</style>