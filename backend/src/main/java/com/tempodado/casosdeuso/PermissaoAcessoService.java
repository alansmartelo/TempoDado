package com.tempodado.casosdeuso;

import com.tempodado.dominio.PermissaoAcesso;
import com.tempodado.infraestrutura.DelegacaoDTO;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class PermissaoAcessoService {
    private final List<PermissaoAcesso> permissoes = new ArrayList<>();

    public void salvar(DelegacaoDTO dto) {
        PermissaoAcesso novaPermissao = new PermissaoAcesso(
            dto.idIpfs(),
            dto.chaveSimetrica(),
            dto.dataExpiracao(),
            dto.clinicaId()
        );
        permissoes.add(novaPermissao);
        System.out.println("Mediador Ético: Contrato de Soberania ativado para CID " + dto.idIpfs());
    }
}