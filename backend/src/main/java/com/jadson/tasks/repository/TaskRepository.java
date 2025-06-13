package com.jadson.tasks.repository;

import com.jadson.tasks.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
    // This interface will automatically provide CRUD operations for Task entities
    // No additional methods are needed unless custom queries are required

}
