/**
 * Infraestrutura: Provedor de Criptografia
 * Implementa a Cifragem na Origem usando a Web Crypto API nativa.
 */
export class ProvedorCriptografia {
  
  // Gera uma chave simétrica AES-GCM (padrão ouro de segurança)
  static async gerarChave(): Promise<CryptoKey> {
    return await window.crypto.subtle.generateKey(
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );
  }

  // Cifra o arquivo para que nem o Java nem o Pinata consigam ler
  static async cifrarArquivo(arquivo: File, chave: CryptoKey): Promise<ArrayBuffer> {
    const conteudo = await arquivo.arrayBuffer();
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // Vetor de Inicialização
    
    return await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      chave,
      conteudo
    );
  }
}