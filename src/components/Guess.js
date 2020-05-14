import React, { useState, useEffect } from "react"

// 1×× Informational - not used, need at least
// 100 Continue
// 101 Switching Protocols
// 102 Processing

//2×× Success
//3×× Redirection
//4×× Client Error
//5×× Server Error

const codes = {
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'Non-authoritative Information',
  204: 'No Content',
  205: 'Reset Content',
  206: 'Partial Content',
  207: 'Multi-Status',
  208: 'Already Reported',
  226: 'IM Used',
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified',
  305: 'Use Proxy',
  307: 'Temporary Redirect',
  308: 'Permanent Redirect',
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Payload Too Large',
  414: 'Request-URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Requested Range Not Satisfiable',
  417: 'Expectation Failed',
  418: 'I\'m a teapot',
  421: 'Misdirected Request',
  422: 'Unprocessable Entity',
  423: 'Locked',
  424: 'Failed Dependency',
  426: 'Upgrade Required',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  444: 'Connection Closed Without Response',
  451: 'Unavailable For Legal Reasons',
  499: 'Client Closed Request',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates',
  507: 'Insufficient Storage',
  508: 'Loop Detected',
  510: 'Not Extended',
  511: 'Network Authentication Required',
  599: 'Network Connect Timeout Error'
}

const Guess = () => {
  const [ answers, setAnswers ] = useState ([])
  const [ correct, setCorrect ] = useState (null)
  const [ selected, setSelected ] = useState (null)
  const [ show, setShow ] = useState(true)

  const checkResult = selected => {
    setSelected(selected)
    setShow(true)
  }

  const start = () => {
    let rand = Object.keys(codes)[~~(Math.random() * Object.keys(codes).length)]
    let ans = Object.keys(codes)
    .filter(el => Number(el[0]) === Number(rand.toString()[0]))
    .filter(el => el !== rand)
    .sort(() => 0.5 - Math.random())
    .slice(0,3)

    let newAns = [...ans, rand].sort((a, b) => a - b)

    setAnswers(newAns)
    setCorrect(rand)
    setShow(false)
  }

  useEffect(() => start(), [])

  return(
    <div 
      style={{ 
        background: show ? 'thistle' : 'palevioletred',
        color: '#282828',
        border: '1px solid olive',
        padding: 60,
        marign: 40
      }}
      onClick={e => {
        e.target.tagName === 'BUTTON' || start()
      }}
    >
    <h3>Guess HTTP Status Code</h3>
    <h1 style={{color: '#33ff00'}}>{ codes[correct] }</h1>

    {answers.map((el, i) => (
      <button 
        key={i}
        style={{
          padding: 25, 
          margin: 5,
          borderRadius: 20,
          border: '2px solid magenta',
          cursor: 'pointer',
          outline: 'none'
        }} 
        onClick={() => show ? start() : checkResult(el)}>
          {el}
      </button>
    ))}

    <h3 
      style={{
        paddingTop: 25, 
        cursor: 'pointer',
      }}>
        { !show
          ? 'What is the right code?'
          : `Your answer is ${selected === correct 
            ? `correct. Well Done!` 
            : `wrong. It's ${correct}.`}`
        }
    </h3>
  </div>
  )
}

export default Guess;
