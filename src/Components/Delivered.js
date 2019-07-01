import React from 'react';
import '../App.css'



// import {GetOrder} from '../config/firebase'




class Delivered extends React.Component {

  

    
  constructor(){
    super();
    this.state = {
      selectedPolice : "",
        data : [],
        limit : 1,
     

    }

    this.DisplayData.bind();
// this.Screen= this.Screen.bind(this)
 
  }

 
  
  DisplayData(OrderAgya) {
        
    const { selectedPolice } = this.state;
    
   
    
    
    console.log(",,,,,,,,,,",selectedPolice);
}

componentDidMount() {
  
  
 
    var orderAya = localStorage.getItem("OrderAgya");
    console.log(orderAya)
    var convertuserData= JSON.parse(orderAya);
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


  
  loadMore(){
    console.log("succeeded");
    this.setState({limit : this.state.limit + 6 })
  }


  
 

      
    render() {

      

      const{data} = this.state
      console.log("succeeded",data);
      var temp = [...data]
      temp.length = this.state.limit;
  



      const showOrder = data.map((value,index) => {
          return   (


          <div class="row1">

  <div class="div1">
<h1 className="h2"><strong className="">Your Request is here just wait a while we Deliver </strong></h1>
  </div>
<hr></hr>
 
<div class="div2">
  

<h3 className=""><strong className="bbq"><b>Food Item</b> : {value.foodItem}</strong></h3>
<h3 className=""><strong><b>Food Quantity</b> : {value.foodQuantity}</strong></h3>
<h3 className=""><strong><b>Delivery Area</b> : {value.deliveryArea }</strong></h3>

  </div>

  <hr></hr>
  
<div class="div3">
  
<button className="ResButton" onClick={''}><h2 className="h2">Delivered</h2></button>
</div>


</div>
            
          )
    
                 
      });   
  
      return (


        <div className="Res1">
         

        

     
<br/>
<br/>


{showOrder} 



<div class="row1">

<div class="div1">
<img src="https://cdn.pixabay.com/photo/2015/09/30/02/54/food-964862_960_720.jpg" class="Resimage" alt="logo"/>
</div>
<hr></hr>

<div class="div2"><blockquote class="blockquote bq-primary">
<h2 >BBQ Restaurant</h2 ><strong class="bbq">Sweet &amp; Sticky BBQ Turkey Legs</strong><br/><br/><b>Rs: 100/-</b></blockquote>
</div>

<hr></hr>

<div class="div3"><button className="ResButton"><h2 className="h2">Delivered</h2></button>
</div>

</div>




<div class="row1">

<div class="div1">
<img src="http://aroundmangalore.com/wp-content/uploads/2016/12/Koddai-Tawa-Surmaai-%E2%80%93-Sea-Food-Restaurant-Hosabettu-Surathkal-Mangalore.jpg" class="Resimage"  alt="logo"/>
</div>
<hr></hr>

<div class="div2"><blockquote class="blockquote bq-primary">
<h2>Pizaa Restaurant</h2><strong className="bbq">Tikka &amp; Pizza </strong><br/><br/><b>Rs: 100/-</b></blockquote>
</div>

<hr></hr>

<div class="div3"><button className="ResButton"><h2 className="h2">Delivered</h2></button>
</div>
</div> 
<div/>
<div/>
{/* khatam */}



 

<br/>
<br/>
<hr></hr>

<div id="footerdiv">


<footer class="footer">

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
export default Delivered ;
