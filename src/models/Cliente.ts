import { clientesService } from 'src/services/cliente.services';

export default class Cliente {
    id: number | null;
    nome: string;
    email: string;
    telefone: string;
    documento: string;

    constructor(data: Partial<Cliente> = {}) {
        this.id = data.id || null;
        this.nome = data.nome || '';
        this.email = data.email || '';
        this.telefone = data.telefone || '';
        this.documento = data.documento || '';
    }

    async save(): Promise<Cliente> {
        if (this.id) {
            const { data } = await clientesService.update(this.id, this);
            return new Cliente(data);
        } else {
            const { data } = await clientesService.create(this);
            this.id = data.id;
            return new Cliente(data);
        }
    }

    async destroy(): Promise<void> {
        if (!this.id) throw new Error('Cliente sem ID não pode ser excluído');
        await clientesService.destroy(this.id);
    }

    static async index(): Promise<Cliente[]> {
        const { data } = await clientesService.index();
        return data.map((item: Cliente) => new Cliente(item));
    }

    static async show(id: number): Promise<Cliente> {
        const { data } = await clientesService.show(id);
        return new Cliente(data);
    }
}