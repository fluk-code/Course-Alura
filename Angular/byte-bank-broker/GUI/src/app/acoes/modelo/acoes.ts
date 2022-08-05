
export interface IAcao {
  id: number,
  codigo: string,
  descricao: string,
  preco: number
};

export interface IAcoes extends Array<IAcao> {};

export interface IAcoesAPI {
  payload: IAcoes
};