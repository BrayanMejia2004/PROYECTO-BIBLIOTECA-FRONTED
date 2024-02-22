package com.proyecto.biblioteca.ControllerVista;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class BookView {

    @GetMapping("ViewBook")
    public String ViewBook() {
        return "Book";
    }

    @GetMapping("ViewRegisterBook")
    public String ViewRegisterBook() {
        return "RegisterBook";
    }

    @GetMapping("ViewUpdateBook")
    public String ViewUpdateBook() {
        return "UpdateBook";
    }

}
