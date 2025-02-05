package com.jeanpierre.demo.Repository.Note

import com.jeanpierre.demo.Model.Note.Note
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.stereotype.Repository


@Repository
@EnableJpaRepositories
interface NoteRepository: JpaRepository<Note, Int> {
}