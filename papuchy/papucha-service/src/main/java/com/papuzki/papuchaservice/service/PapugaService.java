package com.papuzki.papuchaservice.service;

import com.papuzki.papuchaservice.model.Papuga;
import com.papuzki.papuchaservice.repository.PapugaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PapugaService {

    @Autowired
    PapugaRepository repository;

    public void saveOrUpdate(Papuga papuga) {
        repository.save(papuga);
    }

    public Papuga getPapugaById(Long id) {
        return repository.findById(id).get();
    }

    public List<Papuga> getAllPapugi() {
        List<Papuga> papugi = new ArrayList<Papuga>();
        repository.findAll().forEach(employee -> papugi.add(employee));
        return papugi;
    }

    public void deletePapugaById(Long id) {
        repository.deleteById(id);
    }
}
