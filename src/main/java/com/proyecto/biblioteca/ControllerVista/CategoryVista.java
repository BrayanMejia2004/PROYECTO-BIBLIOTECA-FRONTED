package com.proyecto.biblioteca.ControllerVista;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
@RequestMapping("/")
public class CategoryVista {

    @GetMapping("ViewCategory")
    public String categoryVista() {
        return "Category";
    }
    
}
