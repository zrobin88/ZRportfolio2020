import React, { Component } from 'react';
import Img from '../IMG/zr1.jpg'
import Resume from '../IMG/ZacharyRobinResume2019.docx'
import './style.css'


//change state for contact info 
class Card extends Component {

    state = {
        count: 3,
        header: ['About Me:', 'Contact Info', 'Web Development Skills and Technologies', 'Music & Production Skills'],
        text: ['My name is Zack Robin and I am a web developer with a background in music, recording-technology and entertainment business. Music has always been my greatest passion in life and technology has been what advances it. Through out the past two decades, technology has drastically reshaped music from the way busisness is done, to how it is produced and to how consumers listen to it. This was my primary motivation to get into software development. Technology is able to do incredible things in our modern era and its incredibly exciting to work in the midst of it. Through technology, I aim to change the music industry and the musical experience as a whole. ', '- zrobin88@gmail.com - (407)416-9895', ''],
        skills:[[],[],['React.js','Javascript/ES6', 'HTML5/CSS3', 'jQuery', 'Bootstrap(and other CSS libraries)', 'Relational and Non-Relational Databases', 'Node.js', 'Express','API ','MVC','MERN stack', 'AWS'],['Extensive Knowledge of DAW software specifically Pro Tools and Logic X', 'Knowledge of Microphone Theory', 'Concise knowledge of signal flow','Experience working in professional studios', 'Experience producing full-length albums', 'Experience working with recoridng artists', ' Experience recording albums as an artist myself', 'Perfect Pitch (the ability to identify musical notes by hearing alone)', '20 years experience as a guitarist', 'Experience playing live shows and tours']],
        btnText: ['Contact', 'Go Back', 'Go Back', 'Go Back'],
        btnText2: 'Music & Production',
        btnText3: 'Skills and Technologies',
        cardText: ['Check out examples of my work below!', '', 'This Portfolio Was Made With React.js'],
        currentIndex: 0,
        translateValue: 0
    }


    contactClick = (event) => {
        event.preventDefault();
        if (this.state.currentIndex === 0) {
            return this.setState({
                currentIndex: 1,
                translateValue: 1
            })
        }
        else if (this.state.currentIndex === 1 || 2 || 3) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
    }

    // musicClick = (event) => {
    //     event.preventDefault();
    //     if (this.state.currentIndex === 0 || 1 | 2) {
    //         return this.setState({
    //             currentIndex: 3,
    //             translateValue: 3
    //         })
    //     }
    //     else if (this.state.currentIndex === 1) {
    //         return this.setState({
    //             currentIndex: 3,
    //             translateValue: 3
    //         })
    //     }
    // }
    devClick = (event) => {
        event.preventDefault();
        if (this.state.currentIndex === 0 || 1 || 3) {
            return this.setState({
                currentIndex: 2,
                translateValue: 2
            })
        }
        else if (this.state.currentIndex === 1) {
            return this.setState({
                currentIndex: 2,
                translateValue: 2
            })
        }
    }


    render() {
        const { header, text, btnText, btnText2, btnText3, cardText, currentIndex } = this.state
        
        return (
            <div className='container cardWrap'>
                <div className="card mb-3m poppins aboutMe text-light exp" style={{ 'max-width': '100%' }} id='pf'>
                    <div className="row ">
                        <div className="col-sm-6" style={{ padding: '20px' }}>
                            <img src={Img} className="card-img img" alt="..." />
                        </div>
                        <div className="col-sm-6" style={{ padding: '20px' }}>
                            <div className="card-body">
                                <h5 className="card-title">{header[currentIndex]}</h5>
                                <p className="card-text">{text[currentIndex]}</p>
                                <ul> 
                                {this.state.skills[currentIndex].map( skill =>
                                    <li>{skill}</li>
                                
                                )}

                                </ul>
                                <br></br>
                                
                                <button type="button" id='contact' onClick={this.contactClick} className="btn  btn-outline-light btn-sm">{btnText[currentIndex]}</button>
                                <button type="button" id='contact' onClick={this.devClick} className="btn  btn-outline-light btn-sm">{btnText3}</button>
                              
                                <br></br>
                                <p className='card-text'style={{'margin-top':'20px'}}>{cardText[currentIndex]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card; 