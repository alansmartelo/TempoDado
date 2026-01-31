import { ProvedorCriptografia } from '../infraestrutura/ProvedorCriptografia';
import { ServicoDelegacao } from '../infraestrutura/ServicoDelegacao';

export async function executarCifragemEEnvio(
  arquivo: File, 
  clinicaId: string, 
  horasAcesso: number
) {
  // 1. Gerar a chave na origem (Ninguém mais verá esta chave)
  const chave = await ProvedorCriptografia.gerarChave();
  
  // 2. Cifrar o arquivo (Simulando o buffer que iria para o Pinata)
  const arquivoCifrado = await ProvedorCriptografia.cifrarArquivo(arquivo, chave);
  
  // 3. Preparar a Expiração (Soberania Temporal)
  const dataExpiracao = new Date();
  dataExpiracao.setHours(dataExpiracao.getHours() + horasAcesso);

  // 4. Montar o contrato para o Backend
  // Nota: Aqui o idIpfs viria do retorno do Pinata (faremos amanhã)
  const novaDelegacao = {
    idIpfs: "CID_TEMPORARIO_PINATA", 
    chaveSimetrica: "CHAVE_EXPORTADA_BASE64", // Converteremos amanhã
    dataExpiracao: dataExpiracao.toISOString(),
    clinicaId: clinicaId
  };

  // 5. Enviar ao Mediador Ético (Java)
  await ServicoDelegacao.enviar(novaDelegacao);
}