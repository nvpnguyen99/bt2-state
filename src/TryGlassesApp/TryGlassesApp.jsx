import React, { Component } from 'react'

export default class TryGlassesApp extends Component {

    glassesArray = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        glass: {
            id: "",
            price: "",
            name: "",
            url: "",
            desc: ""
        }
    }

    renderGlasses = () => {
        return this.glassesArray.map((glass) => {
            return <div className="col-2" key={glass.id}>
                <div className='glassItem' onClick={() => {
                    this.setState({
                        glass: glass
                    })
                }}>
                    <img src={glass.url} width={100} alt="" />
                </div>
            </div>
        })
    }


    testGlass = () => {
        if (this.state.glass.url !== "") {
            return <img src={this.state.glass.url} alt="" />
        }
    }

    showInfo = () => {
        if (this.state.glass.desc !== "") {
            return <div className='mx-1'>
                <h5>{this.state.glass.name}</h5>
                <div>
                    <span className="glassPrice">${this.state.glass.price}</span> <span style={{ color: 'green' }}>Stocking</span>
                </div>
                <p className="pt-1">{this.state.glass.desc}</p>
            </div>
        }
    }

    render() {
        return (
            <div className="glassesApp">
                <h2 className='header text-center'>TRY GLASSES APP ONLINE</h2>
                <div className="row topContent">
                    <div className="col-6 vglasses__right p-0">
                        <div className="vglasses__card">
                            <div className="vglasses__model" id="avatar">
                                <img src="./img/glassesImage/v1.png" alt="" />
                            </div>
                            <div id="glassesInfo" className="vglasses__info">
                                <div className='mx-1'>
                                    <h5>GUCCI G8850U</h5>
                                    <div>
                                        <span className="glassPrice">$30</span> <span style={{ color: 'green' }}>Stocking</span>
                                    </div>
                                    <p className="pt-1">Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 vglasses__right p-0">
                        <div className="vglasses__card">
                            <div className="vglasses__model" id="avatar">
                                {this.testGlass()}
                            </div>
                            <div id="glassesInfo" className="vglasses__info">
                                {this.showInfo()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bottomContent">
                    {this.renderGlasses()}
                </div>
            </div>


        )
    }
}
