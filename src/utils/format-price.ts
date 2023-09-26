export function formatPrice(price: number) {
  const priceFormatted = new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  const priceFormattedWithCurrency = priceFormatted.replace('R$', '')
  return priceFormattedWithCurrency
}
