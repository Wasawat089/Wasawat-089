import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/react.svg" />

        <Title title="Wasawat  Pinthong (Junior)">
          <h3>ตำแหน่ง : IT</h3>
        </Title>

        <Title title="Contact">
     
          
          <p>วันเกิด: {moment("2002/12/19").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66838354670
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202089@ssru.ac.th</p>
         
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>กระผมนาย วสวัตติ์ ปิ่นทอง ขณะนี้กำลังศึกษาอยู่ที่ มหาวิทยาลัยราชภัฏสวนสุนันทา 
ชั้นปีที่ 3 สาขา เทคโนโลยีสารสนเทศ ในขณะนี้ผมยังไม่เคยมีประสบการณ์ในการทำงานในด้านสาขาไอทีแต่ผมยินดีที่จะเรียนรู้และพัฒนาทักษะและเก็บเกี่ยวประสบการณ์ในอนาคตครับ</p>
        </Title>

        <Title title="Work Experience">
          <p>2562
ทำธุรกิจออนไลน์กับคนรู้จัก
เคยมีโอากาศได้ขายของออนไลน์ ทำผังข้อมูล Excel เกี่ยวกับข้อมูลสินค้า และทำหน้าที่เป็นแอดมินเพจ
</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS / JS</p>
          <p>React.js</p>
          <p>Next.js</p>
          <p>VS Code</p>
          <p>Git</p>
        </Title>
      </div>
    </main>
  )
}

export default App
