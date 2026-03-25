class user{
    #id
    #name
    #email
    #password
    #active

    constructor(id,name,email,password){
        if(!name || !email.includes('@') || password.lenght < 6 ){
            return console.error("Ocorreu um erro, Confira novamente os dados")
        }
        this.#id = id
        this.#name =name
        this.#email = email
        this.#password = password
        this.#active = true
    }

    getId(){
        return this.#id
    }
    getName(){
        return this.#name
    }
    setName(name){
        return !name ? console.error('Ero ao setar nome') : this.#name =name


    }

    getEmail(){
        return this.#email
    }

    setEmail(email) {
        return !email.includes('@') ? console.error('Erro ao setar nome') : this.#email = this.#email
    }

    setSenha(senha){
        return senha.lenght < 6 ? console.error(' Erro ao definir a senha') : this.#password = senha
    }

    verifyPassword(password){
        return password !==this.#password ? false : true
    }

    changeUseractivity(){
        return this.#active === true ? this.#active = false : this.#active = true
    }

    verifyUserActivity(){
        return this.#active === true ? true : false
    }
}

class Clients extends User{
    constructor(id,name,email,password){
        
        super(id, name , email, password)
    }

    showData(){
        return{
            id: this.getId(),
            name : this.getName(),
            email : this.getEmail(),
            active: this.verifyUserActivity()
        }
    }
}

const c1 = new Client(1, 'Miguel' , 'Miguel@gmail.com', '123456')
const user = new User(1,'Nicolas' , 'ni@gmail', '123456')



