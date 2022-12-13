class Venda{
    constructor(ID, item, quant, valor, T_Item){
        this.ID = ID;
        this.item = item;
        this.quant = quant;
        this.valor = valor;
        this.T_Item = T_Item;
    };
    getVenda(){       
        this.T_Item = this.quant * this.valor
       let  pedido = [this.ID,
                this.item,
                this.quant,
                this.valor,
                this.T_Item]
        return pedido
    };
};
