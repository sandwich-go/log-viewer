export const highlightKeys = [
  '❌',
  ' WRN ',
  ' ERR ',
  'ERROR:',
  'step is failed',
  'errors occurred',
  'error occurred',
  'status:FAILED',
  'build failed',
  'build error'
]
const highlightKeysRegex = new RegExp(highlightKeys.join('|'))
export function highlightLine({line}) {
  let style = {}
  if (
    highlightKeysRegex.test(line) ||
    /script returned exit code [1-9]\d*/.test(line)
  ) {
    style.background = '#800000'
    style['font-weight'] = 'bold'
  }
  return style
}
