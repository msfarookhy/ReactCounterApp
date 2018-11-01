import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 1, value: 0 },
            { id: 1, value: 0 },
            { id: 1, value: 0 },
        ]
    };

    handleDelete = () =>{
        console.log("Event Habdler Called");
    };

    render() {
        return (<div>
            {this.state.counters.map(counter => (
                <Counter key={counter.id}onDelete={this.handleDelete} value={counter.value} id={counter.id} />
            ))}
        </div>
        );
    }
}

export default Counters;