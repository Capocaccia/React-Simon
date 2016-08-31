import React from 'react';
import ReactDOM from 'react-dom';
import ColorBoxes from './components/ColorBoxes';

var colorList = [
    {backgroundColor: 'yellow'},
    {backgroundColor: 'blue'},
    {backgroundColor: 'red'}
];
var count = 0;



class Text extends React.Component {
    render(){
        return (
            <div>
                <ColorBoxes initialColor="purple" colorList={this.props.colorList} />
            </div>
        )
    }
}



ReactDOM.render(
    <Text colorList={colorList}  />,
    document.getElementById('root')
);

