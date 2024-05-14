import React from "react";
import './home.css'
import CustomCarousel from "./customcarousel";
// import Imageslider from "./slider";
// import './slider.css'
const Home = ({ }) => {
    return (<div>
        <div id="parent">
            <div id="child1">
                <div class="nav">Home</div>
                <div class="nav" >About us</div>

                <div class="nav">Contact</div>
                <div class="nav">Goto</div>
            </div>
            <div id="child2">
                <input type="text" placeholder="search..." />
            </div>
        </div>

        <div id="screen"> 
            {/* <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1"></input>
                    <input type="radio" name="radio-btn" id="radio2"></input>
                    <input type="radio" name="radio-btn" id="radio3"></input>
                    <input type="radio" name="radio-btn" id="radio4"></input>
                    <div className="slide1">
                        <img src="https://i.pinimg.com/736x/d2/c1/ae/d2c1ae2ac932a571812e2ba7c133fee8.jpg" alt=""></img>
                    </div>
                    <div className="slide2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZYSPv0D-S1NVaI3oojmClC-AsZynrMBspg&usqp=CAU" alt=""></img>
                    </div>
                    <div className="slide3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6NfMlC1MhnnjFLmFqMeWEWZigDsmX6iBsA&usqp=CAU" alt=""></img>
                    </div>
                    <div className="slide4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROn_M7rfD24VaHFR7ad-DD7PEwMqZZ5OrXIQ&usqp=CAU" alt=""></img>
                    </div>
                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                        
                    </div>
                    </div>
                    <div className="navigation-manual">
                        <label for="radio1" className="manual-btn"></label>
                        <label for="radio2" className="manual-btn"></label>
                        <label for="radio3" className="manual-btn"></label>
                        <label for="radio4" className="manual-btn"></label>
                    </div>
                    <Imageslider></Imageslider>
            </div> 
             <div id="container">
                <img src="https://i.pinimg.com/736x/d2/c1/ae/d2c1ae2ac932a571812e2ba7c133fee8.jpg"></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZYSPv0D-S1NVaI3oojmClC-AsZynrMBspg&usqp=CAU"></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6NfMlC1MhnnjFLmFqMeWEWZigDsmX6iBsA&usqp=CAU"></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROn_M7rfD24VaHFR7ad-DD7PEwMqZZ5OrXIQ&usqp=CAU"></img>
            </div>  */}
            <h1>KK</h1>
            {/* <div id="image"></div>
            <div id="image2"></div> */}
             <CustomCarousel />
             <br></br>
             <br></br>
             <br></br>
            <div className="grid-container">
      <div className="grid-item">Item 1</div>
      <div className="grid-item">Item 2</div>
      <div className="grid-item">Item 3</div>
      <div className="grid-item">Item 4</div>
      <div className="grid-item">Item 5</div>
      <div className="grid-item">Item 6</div>
      {/* Add more grid items as needed */}
    </div>
    {/* <div id="list">
                <ol>
                    <h1>TOP 10 ANIME</h1>
                    <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZYSPv0D-S1NVaI3oojmClC-AsZynrMBspg&usqp=CAU"></img>One piece</li>
                    <li></li>

                </ol>
            </div>
            <button>Save</button> */}
            
        </div>
    </div>

    )
}
export default Home
