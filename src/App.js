/* eslint-disable jsx-a11y/alt-text */
import QRCode from 'qrcode';
import { useState } from 'react';
import './App.css';

function App() {

  const [url, setUrl] = useState('')
  const [color, setColor] = useState('#000000')
  const [qrcode, setQrCode] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url,{
      width: 500,
      margin: 1,
      color: {
        dark: color,
        light: "#ffffff00"
      }
    }, (err, url) => {
      if (err) return console.log(err)
      console.log(url)
      setQrCode(url)
    })
  }
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-section">
        <input className="input" onChange={(ev) => setUrl(ev.target.value)} value={url} type="text" placeholder='http://www.kiwip.eu' />
        <input className="input" onChange={(ev) => setColor(ev.target.value)} value={color} type="text" placeholder='#000000' />
        <button className="btn" onClick={GenerateQRCode} >Créer le QrCode</button>
      </div>
      {qrcode &&
        <div className="qrcode-section">
          <img src={qrcode} />
          <a className="btn" href={qrcode} download="qrcode.png"> Télécharger </a>
        </div>}

    </div>
  );
}

export default App;
