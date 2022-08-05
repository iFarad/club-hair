export class servico {
    id!: number;
    cnpj!: string
    nome!: string;
    valor!: string;
    funcionarios!: Array<string>;
}

export class funcionario {
    cnpj!: string;
    nome!: string;
    horarios!: Array<horario>;
}

export class horario {
    hora!: string;
    disponibilidade!: boolean;
}