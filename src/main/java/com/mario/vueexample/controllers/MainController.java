package com.mario.vueexample.controllers;

import com.mario.vueexample.dtos.UsuarioDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:9000")
@RestController
@RequestMapping("/api")
public class MainController {

    @GetMapping("/usuario/{id}")
    public ResponseEntity prueba(@PathVariable(name = "id") int id) {
        Map<String, Object> response = new HashMap<>();

        UsuarioDto usuario = new UsuarioDto(4,"Mario Alberto", "Villagrana", new Date());

        response.put("usuario", usuario);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
