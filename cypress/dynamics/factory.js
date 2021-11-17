import faker from "faker"
import fakerbr from "faker-br"

export default class Factory {
    static geradorDeUsuariosCPF() {
        return {
            "nome": `${fakerbr.name.firstName()} ${fakerbr.name.lastName()}`,
            "email": `${faker.internet.email()}`,
            "cpf": `${fakerbr.br.cpf()}`,
            "senha": `${faker.internet.password()}`,
            "administrador": `${faker.datatype.boolean()}`
        }
    }
}
