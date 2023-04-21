import ansiParse from './ansi-parse'

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
export default log => {
  const stringLines = split2Lines(log)
  const stringLinesText = []
  stringLines.forEach(line => {
    if (!line) {
      return
    }
    const oneLinePart = ansiParse(line)
    let oneLinePartNew = []
    oneLinePart.forEach(item => {
      findUrlsWithFlag(item.text).forEach(v => {
        oneLinePartNew.push({
          text: v.text,
          background: item.background,
          foreground: item.foreground,
          bold: item.bold,
          italic: item.italic,
          underline: item.underline,
          isUrl: v.isUrl
        })
      })
    })
    stringLinesText.push(oneLinePartNew)
  })
  return stringLinesText
}
