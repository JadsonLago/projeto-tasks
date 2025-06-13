# 📝 Aplicação CRUD de Tarefas (To-Do)

Este projeto é um sistema simples de gerenciamento de tarefas (To-Do), desenvolvido como exemplo de uma aplicação **CRUD** (Create, Read, Update, Delete), integrando as tecnologias **Java 21 com Spring Boot** no backend e **React.js** no frontend.

---

## ✨ Funcionalidades

- ✅ Adicionar novas tarefas  
- 📋 Listar todas as tarefas  
- ✏️ Editar tarefas existentes  
- 🗑️ Excluir tarefas  
- ✔️ Marcar tarefas como concluídas  

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Java 21  
- Spring Boot 3  
- Spring Data JPA  
- H2 Database (em memória)

### Frontend
- React.js  
- Axios (para comunicação com a API)  
- HTML5 / CSS3  

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- JDK 21 ou superior  
- Maven  
- Node.js (versão LTS recomendada)  
- NPM ou Yarn  

### Passo a passo

1. **Clone o repositório:**

```bash
git clone [URL_DO_REPOSITORIO]
cd nome-do-repositorio
```

2. **Execute o Backend:**

```bash
cd backend
mvn spring-boot:run
```

O backend estará disponível em: [http://localhost:8080](http://localhost:8080)

3. **Execute o Frontend (em outro terminal):**

```bash
cd frontend
npm install
npm start
```

O frontend abrirá automaticamente em: [http://localhost:3000](http://localhost:3000)

4. **Acesse o Banco de Dados H2 (opcional):**

- URL: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)  
- JDBC URL: `jdbc:h2:mem:tododb`  
- Usuário: `sa`  
- Senha: *(deixe em branco)*

---

## 🗂️ Estrutura do Projeto

```
.
├── backend/               # Código do backend (Spring Boot)
│   ├── src/main/java/     # Código-fonte Java
│   └── src/main/resources # Arquivos de configuração
│
└── frontend/              # Código do frontend (React)
    ├── public/            # Arquivos estáticos
    └── src/               # Código-fonte React
        ├── components/    # Componentes reutilizáveis
        └── services/      # Serviços de API (Axios)
```

---

## 📚 Aprendizados

Este projeto demonstra na prática:

- Criação de API RESTful com Spring Boot  
- Operações CRUD utilizando Spring Data JPA  
- Consumo de API com React.js  
- Gerenciamento de estado em componentes funcionais  
- Integração entre frontend e backend  

---

## 🤝 Como Contribuir

1. Faça um fork do projeto  
2. Crie uma nova branch: `git checkout -b feature/sua-feature`  
3. Commit suas alterações: `git commit -m 'Minha nova feature'`  
4. Faça push para a sua branch: `git push origin feature/sua-feature`  
5. Abra um Pull Request 🎉

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

## ✉️ Contato

Desenvolvido por **Jadson Lago**

- 📧 Email: [jadsonlago.consultoria@gmail.com](mailto:jadsonlago.consultoria@gmail.com)  
- 💼 LinkedIn: [linkedin.com/in/jadson-lago-6a8004122](https://www.linkedin.com/in/jadson-lago-6a8004122/)

---

> Obrigado por conferir este projeto! Sinta-se à vontade para testar, contribuir ou sugerir melhorias. 🚀