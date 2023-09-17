package com.papuzki.papuchaservice.controller;

import static javax.servlet.http.HttpServletResponse.SC_BAD_REQUEST;
import static org.apache.http.HttpStatus.SC_OK;

import com.papuzki.papuchaservice.model.Papuga;
import com.papuzki.papuchaservice.service.PapugaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import java.util.List;


@RestController
@RequestMapping(path = "/papuchaserwis")
public class PapugaController {

    @Autowired
    PapugaService papugaService;

    @ApiOperation("get all papugas")
    @ApiResponses(value = {@ApiResponse(code = SC_OK, message = "ok"),
            @ApiResponse(code = SC_BAD_REQUEST, message = "An unexpected error occurred")})
    @ApiResponse(code = 200,
            message = "got all papugas")
    @GetMapping("/papugi")
    public List<Papuga> getAllPapuga() {
        return papugaService.getAllPapugi();
    }

    @ApiOperation("get papuga by id")
    @ApiResponses(value = {@ApiResponse(code = SC_OK, message = "ok"),
            @ApiResponse(code = SC_BAD_REQUEST, message = "An unexpected error occurred")})
    @ApiResponse(code = 200,
            message = "got papuga by id")
    @GetMapping("/papuga/{id}")
    public Papuga getPapuga(@PathVariable("id") Long id) {
        return papugaService.getPapugaById(id);
    }

    @ApiOperation("remove papuga by id")
    @ApiResponses(value = {@ApiResponse(code = SC_OK, message = "ok"),
            @ApiResponse(code = SC_BAD_REQUEST, message = "An unexpected error occurred")})

    @ApiResponse(code = 200,
            message = "removed papuga by id")
    @DeleteMapping("/papuga/{id}")
    public void deletePapuga(@PathVariable("id") Long id) {
        papugaService.deletePapugaById(id);
    }

    @ApiOperation("update papuga")
    @ApiResponses(value = {@ApiResponse(code = SC_OK, message = "ok"),
            @ApiResponse(code = SC_BAD_REQUEST, message = "An unexpected error occurred")})
    @ApiResponse(code = 200,
            message = "updated papuga",
            response = Papuga.class)
    @PutMapping("/papuga")
    public Papuga updatePapuga(@RequestBody Papuga papuga) {
        papugaService.saveOrUpdate(papuga);
        return papuga;
    }


    @ApiOperation("post papuga")
    @ApiResponses(value = {@ApiResponse(code = SC_OK, message = "ok"),
            @ApiResponse(code = SC_BAD_REQUEST, message = "An unexpected error occurred")})
    @PostMapping(value = "/add")
    @ApiResponse(code = 200,
            message = "added papuga",
            response = Papuga.class)
    public Papuga addPapuga(@RequestBody Papuga papuga) {
        papugaService.saveOrUpdate(papuga);
        return papuga;
    }

}
