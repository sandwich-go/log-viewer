import ansiParse from './ansi-parse'
import {eventInfoSp, eventSuffix, placeholder, preLine} from './highlight'

const ENCODED_NEWLINE = /\r{0,1}\n(?!\u0008)/

// RegExp reference:
// http://jafrog.com/2013/11/23/colors-in-terminal.html
// https://en.wikipedia.org/wiki/ANSI_escape_code

export const split2Lines = str => str.split(ENCODED_NEWLINE)

function findUrlsWithFlag(text) {
  const urlRegex = /((http|https):\/\/[^\s]+)/g
  const matches = []
  let match,
    lastIndex = 0

  while ((match = urlRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      matches.push({
        text: text.substring(lastIndex, match.index),
        isUrl: false
      })
    }

    matches.push({
      text: match[0],
      isUrl: true
    })

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    matches.push({
      text: text.substring(lastIndex),
      isUrl: false
    })
  }

  return matches
}

function logParser(log, lineStyleFunc, eventMapping = {}) {
  eventMapping = eventMapping || {}
  const stringLines = split2Lines(log)
  const stringLinesText = []
  stringLines.forEach(line => {
    if (!line) {
      return
    }
    const oneLinePart = ansiParse(preLine(line, eventMapping))
    const lineStyle = lineStyleFunc ? lineStyleFunc({line: line}) : {}
    let oneLinePartNew = {items: [], lineStyle: lineStyle}
    oneLinePart.forEach(item => {
      findUrlsWithFlag(item.text).forEach(v => {
        let subItem = {
          text: v.text,
          background: item.background,
          foreground: item.foreground,
          bold: item.bold,
          italic: item.italic,
          isUrl: v.isUrl
        }
        subItem.isEvent = subItem.text.endsWith(eventSuffix)
        if (subItem.isEvent) {
          subItem.isUrl = false
          const eventParts = subItem.text.split(eventInfoSp)
          subItem.text = eventParts[1].replaceAll(placeholder, ' ')
          subItem.event = eventParts[2]
          subItem.underline = true
        }
        if (subItem.text === 'WRN' || subItem.text === 'ERR') {
          subItem.underline = true
          subItem.background = 'white'
          oneLinePartNew.lineStyle.background =
            subItem.text === 'WRN' ? '#955d46' : '#cc3300'
          oneLinePartNew.lineStyle['font-weight'] = 'bold'
        }
        oneLinePartNew.items.push(subItem)
      })
    })
    stringLinesText.push(oneLinePartNew)
  })
  return stringLinesText
}

export default logParser
