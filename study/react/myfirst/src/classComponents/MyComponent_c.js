import React, {Component} from 'react';

class MyComponent_c extends Component {
    static defaultProps = { name: '리액트', ch: '1장' }

    render() {
        const {name, teacher, ch} = props;
        return (
            <div>
                <div>
                    {props.name} - My Component_c (클래스형) - ch{this.props.ch}
                    by {props.techaer}
                </div>
                <div>
                    {name} - My Component_c (클래스형) - ch{ch}
                    by {teacher}
                </div>
            </div>
        );
    }
}

export default MyComponent_c;