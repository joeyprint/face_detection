import React, { Component } from 'react'
import clm from 'clmtrackr'
import P5Wrapper from 'react-p5-wrapper'
import pModel from '../model/pmodel'
import '../../node_modules/p5/lib/addons/p5.dom'

class Face extends Component {

    sketch = p5 => {
        let tracker

        p5.setup = () => {
            let video = p5.createCapture(p5.VIDEO)
            video.size(400, 300)
            
            p5.createCanvas(400, 300)
            tracker = new clm.tracker()
            tracker.init(pModel)
            tracker.start(video.elt)
        }
        
        p5.draw = () => {
            p5.clear();
            p5.noStroke();
            console.log(tracker)
            console.log(tracker.getCurrentPosition())
        };

    };

    render() {
        return (
            <div>
                <P5Wrapper sketch={this.sketch} />
                <p>Test P5 Wrapper</p>
            </div>
        )
    }
}

export default Face;