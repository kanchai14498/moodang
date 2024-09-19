import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(200)
  const imageSrc = count < 400 ? 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBpqgiLsh8iZREh2UsP5iLS3j3nr8i0U0a3jUb1Spi4ltheo6O.webp' : 'https://scontent.fcnx2-1.fna.fbcdn.net/v/t39.30808-6/394401530_2441361536069064_8091065708322390674_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHfL96OX-JO2vjhopyP8dEXSEWiJ0t93XNIRaInS33dc72ZTd8QIzGEubsiEAE2VTw9X3H0Nrxr-mWfIKDG6aD7&_nc_ohc=PwHoaeXG7UUQ7kNvgEn1v2K&_nc_ht=scontent.fcnx2-1.fna&_nc_gid=AMvycqXnfPgXE9cWY5x3Ffs&oh=00_AYD47sUYuAI9YfHnwBKqE0IiWbWVutmffKeT2SgOixZdQg&oe=66F0E498'
  const x = count <= 400 ? count : 400




  return (
    <>

      <div className='box-j' ><img className='j1' src={imageSrc} alt="" width={40 + x}   height={30 + x } /></div>
      <div>
          <img className='pppp' src="https://static.vecteezy.com/system/resources/previews/006/827/242/non_2x/down-arrow-icon-sign-symbol-logo-vector.jpg" alt="" />
      </div>
      <div className="card ">
      <h2>LEVEL {count - 20} </h2> 
      </div>
      <div>
        <a  target="_blank">
          <img src="https://www.foodgallery.co.th/wp-content/uploads/2018/06/Apple-gala.jpg"
 className="logo" onClick={() => setCount((count) => count + 10) }  />
        </a>
        

        <a>
          <img src="https://organic-village.co.th/wp-content/uploads/2021/11/1-Carrots-1.jpg"
 className="logo" onClick={() => setCount((count) => count + 50) }  />
        </a>

        <a  target="_blank">
          <img src="https://media.istockphoto.com/id/1412456086/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A-3-%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%82%E0%B8%AD%E0%B8%87-deschampsia-cespitosa-%E0%B8%AB%E0%B8%8D%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=2048x2048&w=is&k=20&c=L0giD0aT5hzN9elKAMk0Q-eH_g5s583SO0yfB3F6ulk="
 className="logo" onClick={() => setCount((count) => count + 100) }  />
        </a>

        <a  target="_blank">
          <img src="https://image.makewebcdn.com/makeweb/m_1920x0/tA55cdrj0/DefaultData/%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%80%E0%B8%94%E0%B9%89%E0%B8%87.png?v=202405291424"
 className="logo" onClick={() => setCount((count) => 20) }  />
        </a>
      </div>


     
    </>
  )
}

export default App
