let prdotudos = Array()

function criar_produto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        quantidade: qtd
    }

    return p
}

function adicionar_produto(p) {
    produtos.push(p)
}

function listar_produtos() {
    return produtos
}

function editar_produto(id, qtdAtual) {
    let pRetorno = {}
    produtos.array.forEach(p => {
        if(p.id == id){
            p.quantidade = qtdAtual
        }
    });
    return pRetorno
}

module.exports = {
    criar_produto,
    adicionar_produto,
    listar_produtos,
    editar_produto
}