var thisManager = function(){

    var _Manager = [];
    return{
        getThis : function(key){
            return  _Manager[key];
        },
        setThis : function(obj){            
            _Manager[obj.key] = obj.value;
        }
    }
};
var _thisManager = new thisManager();

// React Component
class Header extends Component{
   constructor(){
      super();
      _thisManager.setThis({ key: "Header", value:this}
   }
   render(data){
       console.log('inside the Header render() function ', data? data : ' no data on first initial render');
      return <div />
   }
}

// Then from any other component living far somewhere you can pass the data to the render function and it works out of the box. 
i.e. 

class Footer extends Component{
  _click(e){
     let Header = _thisManager.getThis('Header');
     Header.render(" Wow some new data from footer event ");
  }
 render(){
      return(
      <div>
          <button onClick={this._click.bind(this)}> send data to header and call its render </button>
      </div>


      );
  }
}
