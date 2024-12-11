const CheckCEP = (cep, setFormData, setErrors) => {
    const cepformatado = cep.replace(/\D/g, ""); // Remove caracteres não numéricos
  
    // Limpa o erro de CEP antes de começar a validação
    setErrors((prevState) => ({
      ...prevState,
      cep: "",
    }));
  
    // Verifica se o CEP tem 8 caracteres
    if (cepformatado.length !== 8) {
      setErrors((prevState) => ({
        ...prevState,
        cep: "CEP inválido. Certifique-se de que o CEP tenha 8 dígitos.",
      }));
      return;
    }
  
    // Faz a requisição para o ViaCEP
    fetch(`https://viacep.com.br/ws/${cepformatado}/json/`)
      .then((res) => res.json())
      .then((data) => {
        

        if (data.erro) {
          setErrors((prevState) => ({
            ...prevState,
            cep: "CEP não encontrado.",
          }));
        } else {
        setFormData(data)
          
        }
      })
      .catch(() => {
        setErrors((prevState) => ({
          ...prevState,
          cep: "Erro ao buscar o CEP. Tente novamente.",
        }));
      });
  };
  
  export default CheckCEP;
  