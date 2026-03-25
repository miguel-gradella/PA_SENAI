class Automovel{
    modelo
    marca
    cor 
    ano 
    motor

    constructor(modelo, marca, cor, ano, motor){
        this.modelo = modelo
        this.marca =marca
        this.cor = cor
        this.ano = ano
        this.motor = motor

    }
    acelerar(){
        return `o Veículo ${this.marca} ${this.modelo} está acelerando`

    }
    frear(){
        return `O Veículo ${this.marca} ${this.modelo} está freando`

    }

    estercar(){
        return `O veículo ${this.marca} ${this.modelo} está virando`

    }

}
const veiculo1 = new Automovel('Fiesta' , 'Ford', 'Branco', 2015 , '1.5L')
console.log(veiculo.acelerar())
