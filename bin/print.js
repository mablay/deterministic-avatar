var crypto = require('crypto')
const { options } = require('../src/avatar.js')

function avatarHash (str) {
  const values = Object.keys(options).map(key => ({
    key,
    len: options[key].length,
    bytes: (options[key].length >> 8) + 1
  }))
  // console.log(values)
  // console.log(values.reduce((sum, cur) => sum + cur.bytes, 0))
  
  const hash = crypto.createHash('shake256').update(str).digest('hex')
  const buffer = Buffer.from(hash, 'hex')
  
  // console.log(buffer)
  
  let offset = 0
  const params = { isCircle: true }
  for (const { key, len, bytes } of values) {
    const buf = buffer.slice(offset, offset + bytes)
    const i = buf.readUIntBE(0, buf.byteLength) % len
    // console.log(key, ':', len, '<', bytes, buf, '=>', i, '=>', options[key][i])
    offset += bytes
    params[key] = options[key][i]
  }
  // console.log(params)
  return params
}

const p = avatarHash(new Date().toJSON())
console.log(p)
