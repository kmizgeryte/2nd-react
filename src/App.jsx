
import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'
import Hero from './component/Kitas.jsx'


const Head = () => {
  return (
    <>
    <div className="head-container">
     <h1>Title</h1>
      <p>Some about text</p>
      <p>in two lines</p>
      <button>Button</button> 
    </div>
      
    </>
  );
};


const rootHead = createRoot(document.getElementById("head")).render(<Head/>);

// const Image =() => {
//   return(
//     <>
//     <img src="src/Img/m2.jpg" alt="" width={100}/>
//     <p>Ipsum Feugiat</p>
//     </>
//   )
// }
// const rootImage = createRoot(document.getElementById("image")).render(<Image/>);


function App() {
  return (
    <>
      <div>
        <Hero title="Portfolio" subtitle="W celu świadczenia usług na najwyższym poziomie w ramach naszej strony internetowej korzystamy z plików cookies. Pliki cookies umożliwiają nam zapewnienie prawidłowego działania naszej strony internetowej oraz " color="blue"/>
      </div>
    </>
  )
}
export default App

const Image = ({ img, title }) => {
  return (
    <>
      <img src={img} alt="" width={100} />
      <p>{title}</p>
    </>
  );
};

const imagesData = [
  { img: 'src/Img/m1.jpg', title: 'Ipsum Feugiat' },
  { img: 'src/Img/m2.jpg', title: 'Ipsum Feugiat' },
  { img: 'src/Img/m3.jpg', title: 'Ipsum Feugiat' },
  { img: 'src/Img/m1.jpg', title: 'Ipsum Feugiat' },
  { img: 'src/Img/m2.jpg', title: 'Ipsum Feugiat' },
  { img: 'src/Img/m3.jpg', title: 'Ipsum Feugiat' },
];

const imageComponents = imagesData.map((data, index) => (
  <Image key={index} img={data.img} title={data.title} />
));

const rootImage = createRoot(document.getElementById("image")).render(<>{imageComponents}</>);
