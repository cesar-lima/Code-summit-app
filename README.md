## Instalação e Execução do Devstage com Next.js e Docker

### Requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados:

- Node.js (versão recomendada: LTS)
- Docker
- Docker Compose

### Passos para Instalação

1. **Clone o repositório**

```bash
git clone [https://github.com/cesar-lima/Devstage.git](https://github.com/cesar-lima/Devstage.git)
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

Agora a aplicação estará rodando localmente. Normalmente, estará disponível em http://localhost:3000/.

# Considerações
Para verificar se o banco de dados está rodando corretamente, você pode usar
```bash
docker ps
```

- A documentação da API pode ser acessada em: http://localhost:3333/docs

**Agora você está pronto para desenvolver e testar sua aplicação Next.js localmente!**