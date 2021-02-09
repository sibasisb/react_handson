import React,{Component} from 'react';
import '../Stylesheets/mystyle.css';

export class Cart extends Component{
    render(){
        return (
            <table className="mytable">
                <th>Name</th>
                <th>price</th>
                {
                    this.props.items.map(item=>{
                        return (
                            <tr>
                                <td>{item.itemname}</td>
                                <td>{item.price}</td>
                            </tr>
                        );
                    })
                }
            </table>
        );
    }
}