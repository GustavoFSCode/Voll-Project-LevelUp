import IEndereco from "./IEndereco";

export default interface IClinica {
    email: string,
    senha: string,
    nome: string,
    endereco: IEndereco;
}