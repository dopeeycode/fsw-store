export function formatName(name: string) {
  return name.toLowerCase().replace(/(?:^|\s)\S/g, (a) => {
    return a.toUpperCase();
  })

} 