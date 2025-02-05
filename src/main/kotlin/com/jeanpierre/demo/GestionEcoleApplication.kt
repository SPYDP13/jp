package com.jeanpierre.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
import org.springframework.boot.runApplication

@SpringBootApplication(exclude = [SecurityAutoConfiguration::class])
class GestionEcoleApplication

fun main(args: Array<String>) {
	runApplication<GestionEcoleApplication>(*args)
}
