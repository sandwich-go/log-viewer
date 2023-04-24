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
  'build error',
  'job cancelled'
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
export const placeholder = '^^^^^' // ZERO WIDTH NO-BREAK SPACE
export const eventInfoSp = '###'
export const eventSuffix = `${eventInfoSp}event`
export function preLine(line, mapping) {
  for (const key in mapping) {
    let eventName
    let keyShow = key
    const val = mapping[key]
    if (typeof val === 'string') {
      eventName = val
    } else {
      eventName = val['event'] || key
      const textShow = val['textShow']
      if (textShow) {
        if (typeof val === 'string') {
          keyShow = textShow
        } else {
          keyShow = textShow(key)
        }
      }
    }
    // keyShow 中可能存在空格，做一轮替换
    keyShow = keyShow.replace(/ /g, placeholder)
    line = line.replace(
      key,
      `http://${eventInfoSp}${keyShow}${eventInfoSp}${eventName}${eventSuffix}`
    )
  }
  return line
}
