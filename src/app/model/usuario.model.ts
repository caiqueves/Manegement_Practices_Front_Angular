export interface Usuario {
     id : Number, 
     nome: string,
     email: string,
     cpfOuCnpj: string,
     tipoFuncao: Int16Array,
     listaTipoMetodologia: Number[]
     senha: string,
     perfis: string[],
     token: string
}

export interface TipoMetodologia {
     id : Number, 
     descricao: string, 
}