package com.proyecto.biblioteca.ControllerVista;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeView {

    @GetMapping("principal")
    public String principal() {
        return "Home";
    }

}
