package com.tempodado.infraestrutura;

import com.tempodado.casosdeuso.PermissaoAcessoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/delegacoes")
@CrossOrigin(origins = "*") 
public class DelegacaoController {

    private final PermissaoAcessoService service;

    public DelegacaoController(PermissaoAcessoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> criar(@RequestBody DelegacaoDTO dto) {
        service.salvar(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Delegação salva com sucesso!");
    }
}