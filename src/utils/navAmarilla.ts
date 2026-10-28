// Controla la barra de navegación recreada de Amarilla Garden (NavAmarilla.astro).

export function controlarNav(raiz: HTMLElement) {
  const lista = raiz.querySelector<HTMLElement>('[data-nav-lista]')
  const indicador = raiz.querySelector<HTMLElement>('[data-nav-indicador]')
  const opciones = [...raiz.querySelectorAll<HTMLElement>('[data-nav-opcion]')]
  const cuenta = raiz.querySelector<HTMLElement>('[data-carrito-cuenta]')
  const carrito = raiz.querySelector<HTMLElement>('[data-carrito]')
  let total = 0

  const moverIndicador = () => {
    const activa = opciones.find(o => o.dataset.estado === 'activo')
    if (!lista || !indicador || !activa) return
    const base = lista.getBoundingClientRect()
    const caja = activa.getBoundingClientRect()
    indicador.style.width = `${caja.width}px`
    indicador.style.translate = `${caja.left - base.left}px 0`
  }

  const activar = (nombre: string) => {
    opciones.forEach(o => {
      const activa = o.dataset.navOpcion === nombre
      o.dataset.estado = activa ? 'activo' : 'reposo'
      if (o.tagName === 'BUTTON') o.setAttribute('aria-pressed', String(activa))
    })
    moverIndicador()
  }

  const resaltar = (nombre: string) => {
    opciones.forEach(o => {
      if (o.dataset.estado !== 'activo') o.dataset.estado = o.dataset.navOpcion === nombre ? 'hover' : 'reposo'
    })
  }

  const sumar = (cantidad: number) => {
    if (!cuenta) return
    total += cantidad
    cuenta.textContent = String(total)
    cuenta.dataset.estado = 'salto'
    carrito?.classList.add('scale-110')
    window.setTimeout(() => {
      cuenta.dataset.estado = total > 0 ? 'lleno' : 'vacio'
      carrito?.classList.remove('scale-110')
    }, 280)
  }

  const vaciar = () => {
    total = 0
    if (cuenta) {
      cuenta.textContent = '0'
      cuenta.dataset.estado = 'vacio'
    }
  }

  new ResizeObserver(moverIndicador).observe(raiz)
  moverIndicador()

  return { activar, resaltar, sumar, vaciar, opciones }
}
