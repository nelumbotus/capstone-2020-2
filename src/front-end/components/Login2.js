import React, { Component } from 'react';
import Webcam from 'react-webcam';
import '../App.css';
import { Spinner, Button} from 'reactstrap';
import { withRouter,Link ,BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class Login2 extends Component {


  setRef = webcam => {
    this.webcam =webcam;
  };

  capture = () => {
  console.log("캡처되고있음");
   
  const captureImg = setTimeout(() =>{
    this.webcam.getScreenshot();
    console.log("캡처됨");
    this.loginNext();
   },5000);
  };
  

  loginNext = ()=> {
    
    this.props.history.push("/Login3");
    console.log("페이지넘어감");
  }



   



componentDidMount(Webcam){
  this.capture();
  
}
    
   
    
 render() {
     return (

      <div class = "container-fluid" >
      <div class = "row">
     
        
         <div class ="col-4" id="login" >
        
      
     
      <Webcam class = "webcam" id= "blink"
        audio={false}
        facingmode ="user"
        ref={this.setRef}
        screenshotFormat = "image/jpeg"
       /> 
    
   <Spinner onLoad ={this.capture} color="secondary" id ="spinner"/>
      <div class="alert alert-secondary border-0 " id= "text" role="alert" >
        <strong>[안내]</strong> 5초 후 화면이 캡처됩니다.
      </div>
        </div>
   
     
 
   
         
    <div class = "col-8" id ="explain">
    <div id="carouselNext" class="carousel slide h-100" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#carouselNext" data-slide-to="0" class="active"></li>
  <li data-target="#carouselNext" data-slide-to="1"></li>
  <li data-target="#carouselNext" data-slide-to="2"></li>
</ol>
<div class="carousel-inner h-100" role="listbox"  >
<div class="carousel-item  h-100 active">
<div class="carousel-caption d-none d-md-block  ">
  <h5>Slide1_LoginExplain</h5>
  <p>사용자 얼굴인식으로 로그인/등록이 진행된다.감정인식분석 하자.</p>
</div>
</div>
<div class="carousel-item h-100">
<div class="carousel-caption d-none d-md-block ">
  <h5>slide2_experince function</h5>
  <p>감정인식 체험기능 설명~!@#$$%</p>
</div>
</div>
<div class="carousel-item  h-100">
<div class="carousel-caption d-none d-md-block ">
  <h5>slide3_추천 function</h5>
  <p>감정인식 추천기능 설명~!@#$$%</p>
</div>
</div>
</div>
<a class="carousel-control-prev" href="#carouselNext" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselNext" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>
       </div>
   </div>
   </div>
       
     );
 }
}


export default withRouter(Login2);