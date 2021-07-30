import React from 'react';
import '../styles/SwitchStyles.css';

class SwitchButton extends React.Component {
    constructor ( props ) {
        super( props );
		this.state = {
			isChecked: null
		}
        this.handleChange = this.handleChange.bind(this);
    }
	componentWillMount () {
		this.setState( { isChecked: this.props.isChecked } );
	}

    handleChange () {
		this.setState( { isChecked: !this.state.isChecked } );
    }

    render () {

        return(
            <div className="switch-container">
                <label>
                    <input ref="switch" checked={ this.state.isChecked } onChange={ this.handleChange } className="switch" type="checkbox" />
                    <div>
              
                        <div></div>
                    </div>

                </label>
            </div>
        );
    }


    

}

export default SwitchButton;
 

