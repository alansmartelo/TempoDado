package com.tempodado.infraestrutura;

import java.time.LocalDateTime;

public record DelegacaoDTO(
    String idIpfs,
    String chaveSimetrica,
    LocalDateTime dataExpiracao,
    String clinicaId
) {}