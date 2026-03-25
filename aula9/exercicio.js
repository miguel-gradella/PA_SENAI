class User {
  #id;
  #name;
  #email;
  #password;
  #active;

  constructor(id, name, email, password) {
    if (new.target === User) {
      throw new Error("User não pode ser instanciada diretamente");
    }
    this.#id = id;
    this.setName(name);
    this.setEmail(email);
    this.setPassword(password);
    this.#active = true;
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    if (!name) throw new Error("Nome inválido");
    this.#name = name;
  }

  getEmail() {
    return this.#email;
  }

  setEmail(email) {
    if (!email.includes("@")) throw new Error("Email inválido");
    this.#email = email;
  }

  setPassword(password) {
    if (password.length < 6) throw new Error("Senha inválida");
    this.#password = password;
  }

  checkPassword(password) {
    return this.#password === password;
  }

  deactivate() {
    this.#active = false;
  }

  activate() {
    this.#active = true;
  }

  isActive() {
    return this.#active;
  }

  getData() {
    return {
      id: this.#id,
      name: this.#name,
      email: this.#email,
      active: this.#active
    };
  }
}

class Admin extends User {
  static users = [];

  constructor(id, name, email, password) {
    super(id, name, email, password);
    Admin.users.push(this);
  }

  static registerUser(user) {
    Admin.users.push(user);
  }

  listUsers() {
    return Admin.users.map(u => u.getData());
  }

  deactivateUser(user) {
    user.deactivate();
  }

  activateUser(user) {
    user.activate();
  }
}

class Client extends User {
  constructor(id, name, email, password) {
    super(id, name, email, password);
  }

  viewMyData() {
    return this.getData();
  }

  updateMyName(name) {
    this.setName(name);
  }

  updateMyEmail(email) {
    this.setEmail(email);
  }

  updateMyPassword(password) {
    this.setPassword(password);
  }
}