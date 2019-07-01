import React from 'react';
import '../App.css'
import Mc from '../Mc.jpg'
import Chip from '@material-ui/core/Chip';
import { withRouter } from "react-router-dom";

// import {GetResturants} from '../config/firebase'




class Restaurants extends React.Component {

  

    
  constructor(){
    super();
    this.state = {
      selectedPolice : "",
        data : [],
        limit : 1,
        SortData:[]
       

    }


    this.DisplayData.bind();
// this.Screen= this.Screen.bind(this)
 
  }

 
  
  DisplayData(resturants) {
        
    const { selectedPolice } = this.state;
    
   
    
    
    console.log(",,,,,,,,,,",selectedPolice);
}

componentDidMount() {
  
  
   
    var Resturants = localStorage.getItem("Resturants");

    var convertuserData= JSON.parse(Resturants);
    console.log("Mount >>>>>>2",convertuserData);
    this.setState({
        
        data: convertuserData
    })

}

onScrolle(e){
    this.setState({limit : this.state.limit + 5 })
      
       if(e.target.scrollHeight === Math.ceil(e.target.scrollTop + e.target.clientHeight)  ){
        console.log(Math.ceil(e.target.scrollTop + e.target.clientHeight),"========================");
         this.loadMore();
       }
       
  }


  search(e) {
          
          
    const {data} = this.state;
    const text = e.target.value;
     //For Sorting Police data name
   
      //Filtering data from police
      
        let data1 = data.filter((elem) => {
            return elem.fullName.substr(0, text.length).toLowerCase().match(text.toLowerCase())
          })
          this.setState({SortData :data1});

          console.log(data)
       
}
 //If Bottom Then Load More data
  loadMore(){
    console.log("succeeded");
    this.setState({limit : this.state.limit + 6 })
  }


  Screen() {
    
    this.props.history.push('/detailedScreen');
          }
  
 

      
    render() {

      

      const{data,SortData} = this.state
      console.log("succeeded",data);
      var temp = [...data]
      temp.length = this.state.limit;
  

      const showData = (SortData.length > 0) ? SortData : data

      const display = showData.map((value,index) => {
          return   (


          <div className="row1">

  <div class="div1">
  <img src={value.img} class="Resimage" alt="logo"/>
  </div>
<hr></hr>
 
<div class="div2">
  
<h2 className=""><strong > {value.fullName}</strong></h2>
<h3 className=""><strong className="bbq"><b>Email Adress</b> : {value.email}</strong></h3>
<h3 className=""><strong><b>City</b> : {value.city}</strong></h3>
<h3 className=""><strong><b>Country</b> : {value.country }</strong></h3>

  </div>

  <hr></hr>
  
<div class="div3">
  
<button className="ResButton" onClick={this.Screen.bind(this)}><h2 className="h2">Order Now</h2></button>
</div>


</div>
            
          )
    
                 
      });   


        return (


          <div className="Res1">
           

          

       
        <img src={Mc} className="ResImg" alt="logo" /> 
        <br/> 
        
               
     <input className="form-control form-control-lg form-control-borderless" id = "search" 
     type="search" placeholder="Search topics or keywords"
     onChange = {this.search.bind(this)}/>

     <br/> 
     <br/> 
     <button className="btn" type="" > <h2 className="h2">Search</h2></button>
                      
     <button className="btn" type=""> <h2 className="h2">Rating</h2></button>
     <br/>
     <br/>
     <br/>

     <Chip variant="outlined" label="BBQ"  clickable color="primary" />&nbsp;
          <Chip variant="outlined" label="Tikka"  clickable color="primary" />&nbsp;
          <Chip variant="outlined" label="Zinger"  clickable color="secondary" />&nbsp;
          <Chip variant="outlined" label="Chicken Rool"  clickable color="primary" />&nbsp;
          <Chip variant="outlined" label="Karahi"  clickable color="secondary" />&nbsp;
          <Chip variant="outlined" label="Sweets"  clickable color="primary" />&nbsp;
          <Chip variant="outlined" label="Shakes"  clickable color="secondary" />

<br/>
<br/>


 {display} 



<div className="row1">

  <div className="div1">
  <img src="https://kfoods.com/images1/newrecipeicon/BarBQ-Seekh-Kabab_9963.jpg" className="Resimage" alt="logo"/>
  </div>
<hr></hr>
 
<div className="div2"><blockquote className="blockquote bq-primary">
  <h2 >BBQ Restaurant</h2 ><strong className="bbq">Sweet &amp; Sticky BBQ Turkey Legs</strong><br/><br/><b>Rs: 100/-</b></blockquote>
  </div>

  <hr></hr>
  
<div className="div3"><button className="ResButton"><h2 className="h2">Order Now</h2></button>
</div>

</div>




<div className="row1">

  <div className="div1">
  <img src="https://img1.wsimg.com/isteam/stock/2999" className="Resimage"  alt="logo"/>
  </div>
<hr></hr>
 
<div className="div2"><blockquote className="blockquote bq-primary">
  <h2>Pizaa Restaurant</h2><strong className="bbq">Tikka &amp; Pizza </strong><br/><br/><b>Rs: 100/-</b></blockquote>
  </div>

  <hr></hr>
  
<div className="div3"><button className="ResButton"><h2 className="h2">Order Now</h2></button>
</div>
</div> 
<div/>
<div/>


{/* khatam */}



   

<br/>
<br/>
<hr></hr>

<div id="footerdiv">

  
 <footer className="footer">
  
    <div class="row">
      <div class="footer1"><h1 className="h2"><strong>Food-Fella</strong></h1>
    <strong><p className="h2">There are plenty of restaurants available for you to order food online with home delivery.</p></strong></div>
    <hr></hr>
    <div class="footer2"><h5 class="title">Karachi</h5><ul><li class="list-unstyled"><a href="#!">Pakistani</a></li>
    <li class="list-unstyled"><a href="#!">American</a></li>
    <li class="list-unstyled"><a href="#!">Italian</a></li><li class="list-unstyled"><a href="#!">Pizza</a></li></ul></div>
    <hr></hr>
    <div class="footer3"><h5 class="title">Islamabad</h5><ul><li class="list-unstyled"><a href="#!">Burger</a></li>
    <li class="list-unstyled"><a href="#!">Pizza</a></li><li class="list-unstyled"><a href="#!">American</a></li>
    <li class="list-unstyled"><a href="#!">Pakistani</a></li></ul></div>
    <hr></hr>
    <div class="footer4"><h5 class="title">Lahore</h5>
    <ul><li class="list-unstyled"><a href="#!">Pizza</a></li><li class="list-unstyled"><a href="#!">Burger</a></li>
    <li class="list-unstyled"><a href="#!">American</a></li><li class="list-unstyled"><a href="#!">Fast Food</a></li></ul></div>
     
    </div>
  </footer> 

</div>




        </div>
                                     
                                 
        )
    }
}
export default withRouter(Restaurants);






