import { Delegacao } from '../dominio/Delegacao';

/**
 * Infraestrutura: Serviço de Delegação
 * Responsável por comunicar os metadados cifrados ao Mediador Ético (Java).
 */
export class ServicoDelegacao {
  // O nome 'mediador-etico' é resolvido pela Docker Network tempodado-net
  private static API_URL = 'http://mediador-etico:8080/api/delegacoes';

  static async enviar(delegacao: Delegacao): Promise<void> {
    const resposta = await fetch(this.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(delegacao),
    });

    if (!resposta.ok) {
      throw new Error('Falha ao registrar delegação no Mediador Ético');
    }

    console.log('Soberania Garantida: Metadados enviados com sucesso!');
  }
}