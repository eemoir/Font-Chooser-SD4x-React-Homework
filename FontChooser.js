class FontChooser extends React.Component {

    constructor(props) {
	super(props);
		if (Number(this.props.size) < Number(this.props.min)) {
			this.state = {hidden:true, size:this.props.min};
		}
		else if (Number(this.props.size) > Number(this.props.max)) {
			this.state = {hidden:true, size:this.props.max};
		}
		else {this.state = {hidden:true, size:this.props.size};}
		if (this.props.bold=='true') {
			this.state.checked=true;
		}
		else if (this.props.bold=='false'){
			this.state.checked=false;
		}
    }

    handleClick() {
    	if (this.state.hidden==true) {
    		this.setState({hidden:false});
    	}
    	else {
    		this.setState({hidden:true});
    	}
    }

    handleDecrementClick() {
    	var myMin;
    	if (Number(this.props.min) <= 0) {
    		myMin = '1'
    	}
    	else {myMin = this.props.min;}
    	if (Number(this.state.size)-1 >= Number(myMin)) {
    		this.setState({size:Number(this.state.size)-1});
    	}
    }

    handleIncrementClick() {
    	var myMax;
    	if (Number(this.props.min) > Number(this.props.max)) {
    		myMax = this.props.min;	
    	}
    	else {myMax = this.props.max;}
    	if (Number(this.state.size)+1 <= Number(myMax)) {
    		this.setState({size:Number(this.state.size)+1});
    	}
    }

    handleDoubleClick() {
    	this.setState({size:this.props.size});
    }

   	handleChange() {
   		this.setState({checked:!this.state.checked});
   	}
    
    
    render() {
    		var myWeight;
 			if (this.state.checked==true) {
 				var myWeight = 'bold';
 			}
 			else if (this.state.checked==false) {
 				var myWeight = 'normal';
 			}
			var mySize;
			mySize = Number(this.state.size);
			var myHidden = this.state.hidden;
			var myColor;
			if (mySize == this.props.min || mySize == this.props.max) {
				myColor = 'red';
			}
			else {myColor = 'black'};
	return(
			
	       <div>
	       <input type="checkbox" id="boldCheckbox" onChange={this.handleChange.bind(this)} hidden={myHidden} checked={this.state.checked}/>
	       <button id="decreaseButton" onClick={this.handleDecrementClick.bind(this)} hidden={myHidden}>-</button>
	       <span id="fontSizeSpan" style={{color:myColor}} onDoubleClick={this.handleDoubleClick.bind(this)} hidden={myHidden}>{this.state.size}</span>
	       <button id="increaseButton" onClick={this.handleIncrementClick.bind(this)} hidden={myHidden}>+</button>
	       <span style={{fontSize:mySize, fontWeight:myWeight, color:myColor}} id="textSpan" onClick={this.handleClick.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}

