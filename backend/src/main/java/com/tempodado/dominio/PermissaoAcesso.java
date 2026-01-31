package com.tempodado.dominio;

import java.time.LocalDateTime;

public class PermissaoAcesso {
    private String idIpfs;
    private String chaveSimetrica;
    private LocalDateTime dataExpiracao;
    private String clinicaId;

    public PermissaoAcesso(String idIpfs, String chaveSimetrica, LocalDateTime dataExpiracao, String clinicaId) {
        this.idIpfs = idIpfs;
        this.chaveSimetrica = chaveSimetrica;
        this.dataExpiracao = dataExpiracao;
        this.clinicaId = clinicaId;
    }

    // A lógica que você escreveu no artigo:
    public boolean acessoEstaAutorizado() {
        return LocalDateTime.now().isBefore(this.dataExpiracao);
    }

    public String getChaveSimetrica() {
        return chaveSimetrica;
    }
}