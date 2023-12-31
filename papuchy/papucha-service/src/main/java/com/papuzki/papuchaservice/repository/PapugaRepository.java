package com.papuzki.papuchaservice.repository;

import com.papuzki.papuchaservice.model.Papuga;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PapugaRepository extends JpaRepository<Papuga, Long> {

    List<Papuga> findByWeight(int weight);


    //todo read how to make it with enum https://www.youtube.com/watch?v=z__lSUG-x_0
}