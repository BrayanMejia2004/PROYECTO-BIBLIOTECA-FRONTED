package com.proyecto.biblioteca;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class BibliotecaApplication {

	public static void main(String[] args) {
		SpringApplication.run(BibliotecaApplication.class, args);
	}

	@Component
	public class AppStartupRunner implements CommandLineRunner {

		@Override
		public void run(String... args) throws Exception {
			Runtime.getRuntime().exec("cmd /c start http://localhost:8080/principal");
		}
	}
}
