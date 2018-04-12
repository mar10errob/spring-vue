package com.mario.vueexample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class VueExampleApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(VueExampleApplication.class, args);
	}

	//============== Para Deploy ============//
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(VueExampleApplication.class);
	}
}
