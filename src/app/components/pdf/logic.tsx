export const formatarValorParaReal = (valor: any) => {
    const numeroFormatado = parseFloat(valor).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
    return numeroFormatado;
  };
  
  export const calculatePercentage35 = (valor: any) => {
    const porcentagem = 35;
    return (porcentagem / 100) * valor;
  };
  
  export const calculatePercentage5 = (valor: any) => {
    const porcentagem = 5;
    return (porcentagem / 100) * valor;
  };
  
  export const calculateUsedMargin = (base: any, available: any) => {
    const consignable = calculatePercentage35(base);
    const usedMargin = consignable - available;
    return usedMargin;
  };
  
  export const calculateUsedMarginCard = (base: any, available: any) => {
    const consignable = calculatePercentage5(base);
    const usedMargin = consignable - available;
    return usedMargin;
  };
  
  export const calculateExtrapoledMargin = (base: any, available: any) => {
    const consignable = calculatePercentage35(base);
    const usedMargin = calculateUsedMargin(base, available);
    if (usedMargin < consignable) return formatarValorParaReal(0);
  
    const extrapoleMargin = usedMargin - consignable;
  
    return formatarValorParaReal(extrapoleMargin);
  };
  
  export const calculateExtrapoledMarginCard = (base: any, available: any) => {
    const consignable = calculatePercentage5(base);
    const usedMargin = calculateUsedMargin(consignable, available);
    if (usedMargin < consignable) return "---";
  
    const extrapoleMargin = usedMargin - consignable;
  
    return formatarValorParaReal(extrapoleMargin);
  };