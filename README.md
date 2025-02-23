# Instalação e Execução do Devstage

### Requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados:

- Node.js
- Docker

### Passos para Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/cesar-lima/Devstage.git
cd Devstage
```

2. **Navegue para o diretório web e instale as dependências**

```bash
cd web
npm install
```

3. **Navegue para o diretório api para rodar os comandos em Docker**

```bash
cd ../api
```

4. **Suba o banco de dados com Docker Compose**

```bash
docker compose up -d
```

5. **Execute as migrações do banco**

```bash
npm run db:migrate
```

6. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

Agora a aplicação estará sendo executada localmente. Normalmente, estará disponível em  ```http://localhost:3000/```.

### Considerações
- Para verificar se o banco de dados está rodando corretamente, você pode usar  ```docker ps```
- A documentação da API pode ser acessada em  ```http://localhost:3333/docs```.

**Agora você está pronto para testar a aplicação localmente!**
