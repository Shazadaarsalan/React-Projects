
import React from 'react';

import '../App.css'


import swal from 'sweetalert';

import * as firebase from 'firebase';


class Details extends React.Component {

    
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




  
  DisplayData(resturants) {
        
    const { selectedPolice } = this.state;
    
   
    
    
    console.log(",,,,,,,,,,",selectedPolice);
}

componentDidMount() {
  
    this.fetchData();
    var Resturants = localStorage.getItem("Resturants");
    
    var convertuserData= JSON.parse(Resturants);
    
    this.setState({
        
        data: convertuserData
    })

}
async fetchData() {
    
    try {
       

        // var resturants = await GetResturants(); 
       
        // console.log("fetchData >>>>>>2",resturants);
        // this.DisplayData(resturants)
     
        

    } catch (error) {

    }
    finally {

        // this.setState({

        //     data: resturants
        // })

    }
}
onScrolle(e){
    this.setState({limit : this.state.limit + 5 })
      
       if(e.target.scrollHeight === Math.ceil(e.target.scrollTop + e.target.clientHeight)  ){
        console.log(Math.ceil(e.target.scrollTop + e.target.clientHeight),"========================");
         this.loadMore();
       }
       
  }
 //If Bottom Then Load More data
  loadMore(){
    console.log("succeeded");
    this.setState({limit : this.state.limit + 6 })
  }

   
  


     finalCost(){

    //   var foodItem = document.getElementById("food_item").value;
    //   var specialItemm = document.getElementById("special_item").value;
    //   var foodQuatity = document.getElementById("food_quantity").value;
    //   var deliveryType = document.getElementById("delivery_type").value;
    //   var deliveryArea = document.getElementById("delivery_area").value;
        
    //   var all_food = (parseInt(foodItem)*7) + (parseInt(specialItemm)*3) + ((foodQuatity)*2) + (parseInt(deliveryType)*4) + (parseInt(deliveryArea)*3)
      
    //   var i = 50;
    //   document.getElementById("result").innerHTML = i = i + 10;

     }

   ok_result(){
      document.getElementById("okResult").style.display="block";
      document.getElementById("okResult").style.backgroundColor="#DCE775";
      document.getElementById("input_box").style.display="none";
  }


  
   
 
  render() {

    const{data} = this.state
    var temp = [...data]
    temp.length = this.state.limit;

    const display = data.map((value,index) => {
        return   (


        <div class="row1">

<div class="detaildiv1">
<img src={value.img} class="Resimage" alt="logo"/>
</div>
<hr></hr>

<div class="detaildiv2">

<h2 className=""><strong > {value.fullName}</strong></h2>
<h3 className=""><strong className="    "><b>Email Adress</b> : {value.email}</strong></h3>
<h3 className=""><strong><b>City</b> : {value.city}</strong></h3>
<h3 className=""><strong><b>Country</b> : {value.country }</strong></h3>


</div>

<hr></hr>
<br/>




 <div class="online_food_delivery_box">


<form>
              <div className="form-group">
                  <select className="form-control" id="food_item"   onChange={this.finalCost.bind(10)}>
                      <option value="Not Defined"> Select Food Item ... </option>
                      <option value="Chicken Roll "> Chicken Roll </option>
                      <option value="FrieBurger"> Burger </option>
                      <option value="Thai Fried Chicken Wings"> Pizza</option>
                      <option value="Pizza">  Zinger </option>
                      <option value=" Fish "> Fish  </option>
                      <option value="French Fries"> French Fries  </option>
                      <option value="Biryani"> Biryani </option>
                  </select>
              </div><br/>
              <div className="form-group">
              
                  <select className="form-control" id="special_item" onChange={this.finalCost.bind()}>
                      <option value="Not Defined"> Want Any Thing Specially ?</option>
                     
                      <option value="Yes"> Yes </option>
                      <option value="No"> No </option>
                      <br/>
                     
                  </select>
                
              </div><br/>
              <div className="form-group">
                  <input type="number" className="form-control" id="food_quantity" placeholder="Quantity" onKeyPress={this.finalCost.bind()} />
              </div><br/>
              <div className="form-group">
                  <select className="form-control" id="delivery_type" onChange={this.finalCost.bind()}>
                      <option value="Not Defined"> Delivery Type  </option>
                      <option value="Fast"> Fast </option>
                      <option value="Normal"> Normal </option>
                      <option value="Extra Fast "> Extra Fast </option>
                  </select>
              </div>
              <br/>
          

              <div className="form-group">
                  <select className="form-control" id="delivery_area"  onChange={this.finalCost.bind()}>
                  <option value="Not Defined"> Delivery Area </option>
                      <option value="Clifton"> Clifton </option>
                      <option value="Gulshan"> Gulshan </option>
                      <option value="Saddar"> Saddar  </option>
                      <option value="Korangi"> Korangi </option>
                     
                  </select>
              </div>
              <br/>
              
              <div className="form-group">
                
               {/* <h2 id="result" className="h2">Price:</h2> */}
               {/* <label  id="result" className="h2">Price:</label>     */}
              
        
                  <input type="button" value= "Place Order" className="detailbutton" style={{float: 'center'}} id="ok"  onClick={()=>Orders()   }/>
                  <br/>
                  <br/>
                  <input type="button" value= "Chat-Now" className="detailbutton" style={{float: 'center'}} id="ok"  />
              </div>
          </form> 
      </div>

      <div className="result_box animated zoomIn" style={{display: 'none'}} id="okResult" onClick = {this.ok_result.bind()}>
          <h3 className="result_box_text" id="ok_text"> Your order is successfully submitted. Please keep patience, we will come to you soon.<br/><br/><span> --  Thank You  -- </span></h3><br/>
      </div>



</div>
          
        )
  
               
    }); 






  return (

   

          <div className="">
        
   



           {display} 
     

          </div>
       
  
  );
}
}   







export default Details


function Orders() {

    let getData = localStorage.getItem('user')
        let get = JSON.parse(getData)
      
       var kam=get.user.uid
       
  
   
    var foodItem = document.getElementById("food_item").value;
    var specialItemm = document.getElementById("special_item").value;
    var foodQuantity = document.getElementById("food_quantity").value;
    var deliveryType = document.getElementById("delivery_type").value;
    var deliveryArea = document.getElementById("delivery_area").value;

    


    let  orderobj = {
            foodItem,
            specialItemm,
            foodQuantity,
            deliveryType,
            deliveryArea,
            
     } 



   
    firebase.database().ref('Orders/'+ kam).set(orderobj)
     .then(() => {   


        var db = firebase.database().ref('Orders/');
        db.on('value', function(snapshot) {
        
         console.log(Orders)
          var ProductsData = Object.values(snapshot.val());
          console.log("Orders",snapshot);
          localStorage.setItem("OrderAgya", JSON.stringify(ProductsData));
    

         })

         
   
        swal({
            title: "Welcome",
            text: "You can use this email to procceed more features",
            icon: "success",
            button: "Done",
        })
        .then(() => {
             window.location.assign("./MyRequest");
        })

    })
}







































































































