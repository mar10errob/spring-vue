<template>
    <div class="sidebar" style="position: fixed;">
        <div class="logo">
            <a th:href="@{/ceecc}" class="logo-text" style="white-space: normal; line-height: normal;">
                CEECC
            </a>
        </div>
        <div class="logo logo-mini">
            <div style="margin: auto; width: 32px; height: 32px;">
                <img th:src="@{/img/favicon.png}" alt="" class="img-responsive">
            </div>
        </div>

        <div class="sidebar-wrapper scrollStyle">
            <div class="user" th:with="user = ${#authentication.principal}">
                <div class="photo">
                    <!--<img th:src="${(#mvc.url('CC#fotoEmpleado')).arg(0, user.id).build()}" class="img-responsive"/>-->
                </div>
                <div class="info">
                    <a>
                        <span th:text="${user.username}"></span>
                        <br>
                        <span class="label label-default" th:text="${user.username}" style="margin:5px;"></span>
                        <br>
                        <span class="label label-default" th:text="${user.role}" style="margin:5px;"></span>
                    </a>
                </div>
            </div>

            <ul class="nav">
                <li>
                    <a href="#">
                        <i class="fa fa-newspaper-o"></i>
                        <p>Menu</p>
                    </a>
                </li>
                <li>
                    <a data-toggle="collapse" href="#submenu">
                        <i class="fa fa-book"></i>
                        <p>Menu 2
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

<style scoped>

</style>