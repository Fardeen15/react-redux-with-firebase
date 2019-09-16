import React from 'react'
class ImgModal extends React.Component {
    render() {
        return (
            <div id="modalDiv">
                <div id="inputDiv">
                    <div>

                        <i className="fas fa-times-circle" onClick={this.props.close}></i>
                    </div>
                    <img src={this.props.src} id="modalimg" />
                </div>
            </div>
        )
    }
}
export default ImgModal