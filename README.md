# Busca de CEP

Este projeto tem como objetivo implementar uma busca de CEP utilizando o serviço ViaCEP. Ele conta com dois componentes React:

1. **Componente de Entrada de CEP**: Um formulário para o usuário inserir o CEP e validar sua formatação.
2. **Função de Validação e Busca**: A função `CheckCEP` que valida o CEP e faz uma requisição ao serviço ViaCEP para retornar informações como bairro, município, estado e logradouro.

## Funcionalidade

- O componente de entrada de CEP utiliza a biblioteca `react-maskinput` para formatar a entrada no formato de um CEP brasileiro (XXXXX-XXX).
- Quando o usuário digita um CEP válido (com 8 dígitos), o sistema realiza uma busca na API do ViaCEP.
- Se o CEP for encontrado, o formulário é atualizado com os dados de bairro, município, estado e logradouro.
- Caso o CEP seja inválido ou não encontrado, o sistema exibe mensagens de erro.
