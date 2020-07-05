import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
                name:'',
                age:''
         }
     }
     

     handleChange = (e)=>{
        this.setState({[e.target.id]:e.target.value})
     }



submitHandler = (e)=>{
    e.preventDefault();
//to check input shoud be valaid use  (e.target.name.value === ''|| e.target.age.value ==='')
    if(e.target.name.value === ''|| e.target.age.value ===''){
        return false
    
    }else {
        /*acion from app    */
        this.props.addItem(this.state)
   
        /* to reset input*/
        this.setState({
            name:'',
            age:''
        })
    }

 
}


    render() {
        console.log(this.state.name)
        console.log(this.state.age)

        return (
            <div>
               <form onSubmit={this.submitHandler}> 
                   <input type='text'
                   id='name' 
                   value={this.state.name} 
                   placeholder='name' 
                   onChange={this.handleChange} 
                   />


                   <input type= 'number'
                   id='age'
                    value={this.state.age}
                    placeholder='age' 
                    onChange={this.handleChange}
                    />
                   <input type='submit' value='add'/>
               </form>
            </div>
        )
    }
}

export default Form
