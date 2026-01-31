/**
 * Linguagem Ubíqua: Delegação
 * Reflete o ato do paciente conceder acesso temporário ao prontuário.
 */
export interface Delegacao {
  idIpfs: string;           // O endereço (CID) do arquivo cifrado no Pinata [cite: 140, 152]
  chaveSimetrica: string;   // A chave gerada no navegador (Cifragem na Origem) [cite: 150]
  dataExpiracao: string;    // O limite temporal do acesso (ISO 8601) [cite: 159]
  clinicaId: string;        // Identificador de quem recebeu a permissão [cite: 157]
}