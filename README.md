
## Executando o Backend

### Pré-Requisitos

Antes de iniciar o backend, certifique-se de ter instalado:

- Docker
- Docker Compose

Essas ferramentas são necessárias para criar e gerenciar os containers da aplicação e do banco de dados.

### Instruções de Instalação e Execução

Siga as etapas abaixo para instalar e iniciar o backend da aplicação:

1. **Clone o Repositório**

   Primeiro, clone o repositório do projeto para o seu computador local usando o comando:

   ```
   git clone https://github.com/gabrieljsrm/api
   ```


2. **Navegue até a Pasta do Projeto**

   Após clonar, navegue até a pasta do projeto:

   ```
   cd api-main
   ```

3. **Construa e Inicie os Containers**

   Dentro da pasta do projeto, execute o seguinte comando para construir e iniciar os containers da aplicação e do banco de dados:

   ```
   docker-compose up --build
   ```

   Este comando construirá as imagens necessárias (se ainda não foram construídas) e iniciará os containers.

4. **Acessando a Aplicação**

   Com os containers em execução, a API estará disponível em `http://localhost:3000`. Você pode acessar as rotas definidas no backend através dessa URL.


### Parando a Aplicação

Para parar e remover os containers, use o seguinte comando na mesma pasta do projeto:

```
docker-compose down
```

## Endpoints da API

### GET /indicador/{id}

- **Descrição**: Este endpoint retorna os detalhes de um indicador específico com base no `id` fornecido.
- **Uso**: Para usar este endpoint, faça uma requisição GET para `http://localhost:3000/indicador/{id}`, substituindo `{id}` pelo identificador do indicador que você deseja consultar.
- **Imagem**: ![Mostrando o funcionamento da API](/imagens/indicadores.jpg)

### GET /objetivos

- **Descrição**: Este endpoint retorna uma lista de todos os Objetivos de Desenvolvimento Sustentável (ODS).
- **Uso**: Para acessar este endpoint, faça uma requisição GET para `http://localhost:3000/objetivos`.
- **Imagem**: ![Mostrando o funcionamento da API](/imagens/objetivos.jpg)

