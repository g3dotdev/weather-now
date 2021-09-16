# <img src="./src/assets/images/logo.svg" width="400px" height="60" alt="Logo da aplicação">

[![Build](https://github.com/devguih/weather-now/actions/workflows/build.yml/badge.svg)](https://github.com/devguih/weather-now/actions/workflows/build.yml)
[![Test](https://github.com/devguih/weather-now/actions/workflows/test.yml/badge.svg)](https://github.com/devguih/weather-now/actions/workflows/test.yml)

Aplicação desenvolvida para exibir a previsão do tempo para as cidades de Nuuk, Urubici e Nairobi.

A aplicação está escrita em TypeScript e React.

Foi utilizado o [**Create React App**](https://github.com/facebook/create-react-app) para realizar o setup da aplicação.

## Pré configuração

A aplicação utiliza da API OpenWeather para consultar as informações de clima.

A API exige a informação de um token de autenticação para consulta de seus dados.

Utilize [esse link](https://home.openweathermap.org/api_keys) para realizar seu cadastro e obter um token de acesso.

> A API do OpenWeather leva alguns minutos para liberar a chave para uso após sua criação

Após obter seu token, você pode criar um arquivo `.env` na raiz do projeto e adicionar nele sua chave conforme exemplo abaixo:

```properties
REACT_APP_OPENWEATHER_API_KEY = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

Disponibilizei um arquivo de exemplo junto ao projeto.

Você pode encontrá-lo na raiz com o nome `.env.example`

## Configuração

A aplicação utiliza o [`Yarn`](https://yarnpkg.com/) para gerenciamento de suas dependências.

Você pode instalar o Yarn através do comando abaixo:

```bash
npm i -g yarn
```

> Necessário Node >= 10

Após a instalação e [configuração da API](#api-openweather), realize a instalação das dependências da aplicação.

Utilize o comando abaixo para realizar a instalação das dependências

```bash
yarn install
```

## Scripts disponíveis

### Executar a aplicação em modo de desenvolvimento

Uma janela do navegador se abrirá com a aplicação rodando no endereço [http://localhost:3000](http://localhost:3000).

Toda alteração executada no código resultará no recarregamento da página.

Qualquer erro disparado pelo `linter` será escrito no terminal.

```bash
yarn start
```

### Executar a suíte de testes

Executa a suíte de testes da aplicação em modo iterativo.

```bash
yarn test
```

### Build para produção

Gera um bundle otimizado e minifcado da aplicação para ser liberado em produção.

```bash
yarn build
```
