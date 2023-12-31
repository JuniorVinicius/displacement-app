type Displacements = {
  id: number;
  kmInicial: number;
  kmFinal: number;
  inicioDeslocamento: string;
  fimDeslocamento: string;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: number;
  idVeiculo: number;
  idCliente: number;
};


type DisplacementsEdit = {
  id: number;
  kmFinal: number;
  fimDeslocamento: string;
  observacao: string
  inicioDeslocamento?: string;
}