// Portable useOnBack hook
export const useOnBack = (): (() => void) => {
  return () => window.history.back()
}
