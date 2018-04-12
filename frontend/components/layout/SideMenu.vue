<template>
    <div class="sidebar" style="position: fixed;">
        <div class="logo">
            <a href="#" class="logo-text" style="white-space: normal; line-height: normal;">
                Spring-vue
            </a>
        </div>
        <div class="logo logo-mini">
            <div style="margin: auto; width: 32px; height: 32px;">
                <img src="#" alt="" class="img-responsive">
            </div>
        </div>

        <div class="sidebar-wrapper scrollStyle">
            <div class="user">
                <div class="photo">
                    <!--<img th:src="${(#mvc.url('CC#fotoEmpleado')).arg(0, user.id).build()}" class="img-responsive"/>-->
                </div>
                <div class="info">
                    <a>
                        <span >Usuario de prueba</span>
                        <br>
                        <span class="label label-default" style="margin:5px;">User</span>
                        <br>
                        <span class="label label-default" style="margin:5px;">Prueba</span>
                    </a>
                </div>
            </div>

            <ul class="nav">
                <li>
                    <a href="#">
                        <i class="fa fa-newspaper-o"></i>
                        <p>Single Menu</p>
                    </a>
                </li>
                <li>
                    <a data-toggle="collapse" href="#submenu">
                        <i class="fa fa-book"></i>
                        <p>Dropdown menu
                            <b class="caret"></b>
                        </p>
                    </a>
                    <div class="collapse" id="submenu">
                        <ul class="nav">
                            <li>
                                <a href="#">Submenu 1</a>
                            </li>
                            <li>
                                <a href="#">Submenu 2</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "side-menu"
    }
</script>