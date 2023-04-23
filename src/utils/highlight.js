export function highlightLine({line}) {
  let style = {}
  if (
    line.includes('❌') ||
    line.includes(' WRN ') ||
    line.includes(' ERR ') ||
    line.startsWith('ERROR:') ||
    line.includes('step is failed') ||
    line.includes('errors occurred') ||
    line.includes('status:FAILED')
  ) {
    style.background = '#800000'
    style['font-weight'] = 'bold'
  }
  return style
}
