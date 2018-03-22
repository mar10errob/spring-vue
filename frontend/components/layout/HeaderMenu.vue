<template>
    <nav class="navbar navbar-default navbar-fixed">
        <div class="container-fluid">
            <div class="navbar-minimize">
                <button id="minimizeSidebar" class="btn btn-fill btn-round btn-icon">
                    <!--<i class="fa fa-ellipsis-v visible-on-sidebar-regular"></i>-->
                    <i class="fa fa-ellipsis-v visible-on-sidebar-regular" aria-hidden="true"></i>
                    <i class="fa fa-bars visible-on-sidebar-mini"></i>
                </button>
            </div>
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse">

                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a id="logout" href="#">
                            <i class="fa fa-sign-out"></i>
                            Cerrar sesión
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "header-menu"
    }
</script>

<style scoped>

</style>