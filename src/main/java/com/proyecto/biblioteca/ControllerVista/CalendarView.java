package com.proyecto.biblioteca.ControllerVista;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class CalendarView {

    @GetMapping("ViewCalendar")
    public String ViewCalendar() {
        return "Calendar";
    }

}