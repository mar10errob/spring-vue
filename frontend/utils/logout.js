import axios from 'axios'
import page from 'page'
import configuration from '@/config/server'

document.addEventListener('DOMContentLoaded', function(){

    document.getElementById("logout").addEventListener("click", function(event){

        event.preventDefault();

        swal({
            title: 'Cerrar Sesión',
            text: '¿Estás seguro que quieres cerrar sesión?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            allowOutsideClick: false
        })
            .then(response => {
                if (response.value) {
                    axios.post(configuration.urlServer + "/hsc/logout")
                        .then(response => {
                            localStorage.clear();
                            page(configuration.urlServer + "/?logout");
                        })
                        .catch(err => {
                            console.log(err);
                            page(configuration.urlServer + "/?expire");
                        });
                }
            })
    });
});