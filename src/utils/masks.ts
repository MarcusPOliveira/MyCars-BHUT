function maskPrice(value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  //colocando . para cada bloco de 3 números
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  return value;
}

export { maskPrice };
