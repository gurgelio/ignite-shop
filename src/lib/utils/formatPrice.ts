
export function formatPrice(price: number, currency = 'BRL') {
  return (price / 100).toLocaleString(navigator.language, {
    style: 'currency',
    currency
  })
}
