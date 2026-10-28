/**
 * Bucle de las demos animadas de los casos de estudio.
 *
 * - Solo corre mientras la demo está a la vista.
 * - Se detiene mientras el cursor o el foco están dentro (para que la persona pueda usarla).
 * - Si la persona pidió reducir el movimiento, arranca en pausa.
 * - El botón [data-demo-pausa] la pausa o la reanuda (WCAG 2.2.2).
 */
export function crearBucle(raiz: HTMLElement, paso: () => void, ms = 2600) {
  const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const boton = raiz.querySelector<HTMLButtonElement>('[data-demo-pausa]')
  const textoBoton = boton?.querySelector<HTMLElement>('[data-demo-pausa-texto]')

  let reloj: number | undefined
  let visible = false
  let ocupado = false
  let pausado = reducir

  const detener = () => {
    if (reloj) window.clearInterval(reloj)
    reloj = undefined
  }
  const decidir = () => {
    detener()
    if (visible && !ocupado && !pausado) reloj = window.setInterval(paso, ms)
  }
  const pintar = () => {
    if (!boton) return
    boton.setAttribute('aria-label', pausado ? 'Reproducir la animación' : 'Pausar la animación')
    boton.dataset.estado = pausado ? 'pausado' : 'reproduciendo'
    if (textoBoton) textoBoton.textContent = pausado ? 'Reproducir' : 'Pausar'
  }

  new IntersectionObserver(
    ([entrada]) => {
      visible = entrada.isIntersecting
      decidir()
    },
    { threshold: 0.35 },
  ).observe(raiz)

  const escena = raiz.querySelector<HTMLElement>('[data-demo-escena]') ?? raiz
  escena.addEventListener('pointerenter', () => {
    ocupado = true
    decidir()
  })
  escena.addEventListener('pointerleave', () => {
    ocupado = false
    decidir()
  })
  escena.addEventListener('focusin', () => {
    ocupado = true
    decidir()
  })
  escena.addEventListener('focusout', () => {
    ocupado = false
    decidir()
  })

  boton?.addEventListener('click', () => {
    pausado = !pausado
    pintar()
    decidir()
  })
  pintar()

  return {
    /** Cuando la persona interactúa, la animación automática se detiene del todo. */
    soltar() {
      pausado = true
      pintar()
      decidir()
    },
  }
}
