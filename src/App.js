import React, { Component } from 'react';
import './App.css';
import Tree from "react-d3-tree";
import { getMasterData } from './masterData.jsx';

const svgSquare = {
    shape: "rect",
    shapeProps: {
        width: 140,
        height: 30,
        x: -10,
        y: -25
    }
};

const diamond = {
    shape: "polygon",
    shapeProps: {
        width: "10px",
        height: "20px",
        x: "-10px",
        y: "-10px",
        points:"25,2.5 10,44.5 44.5,19.5 2.5,19.5 40,44.5",
        fill:'lime',
        stroke:'purple',
        strokeWidth:1,
        fillRule:'nonzero',
    }
          }

const seperation = {siblings: 2, nonSiblings: 2}

const myTreeData = [
    {
        name: "Page",
        attributes: {
            "type": "informative"
        },
        index: 1,
        children:[
            {
                name: "Hey there! ?Good to see y",
                attributes: {
                    "type": "informative"
                },
                index: 2,
                children:[
                    {
                        name: "So that's me. Now that you are here",
                        index: 3,
                        children: [
                            {
                                name: "Yes, I want to build a chatbot.",
                                index: "6"
                            },
                            {
                                name: "Just here to learn about chatbots.",
                                index: "6"
                            },
                            {
                                name: "Nah. Not really.",
                                index: "6"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Hello there! ? I see you are",
                attributes: {
                    "type": "informative"
                },
                index: 28
            }
        ]
    }
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Nothing"
        }
        this.trackData = this.trackData.bind(this);
        this.populateData = this.populateData.bind(this);
    }

    componentDidMount() {
        this.populateData();
    }
    

    trackData(nodeData, evt) {
        console.log({ nodeData, evt });
        this.setState({name: nodeData.name});
    }

    populateData(){
        const botData = getMasterData();
        const messages = botData.messages;
        console.log(messages);
        const masterData = [];
        masterData.push({   name: "I'm Main", 
                            children: [], 
                            index: 0
                        });
        const jaiu = []
        for(let i=0; i < messages.length; i++){
            //Check if they have options 
            if(messages[i].options.length > 0){
                
                let childList = [];
                for(let j=0; j < messages[i].options.length; j++){
                    childList.push(messages[i].options[j].id);
                }
                const obj = {
                    index: messages[i].index,
                    children: childList,
                    type: messages[i].type
                }
                jaiu.push(obj);
            }
            else if(!!messages[i].sequence && (typeof(messages[i].sequence)!== 'number' &&  messages[i].sequence.jump_to.length > 0)){
               
                let childList = [];
                
                childList.push(messages[i].sequence.default_next_dialog);
                for(let k=0; k < messages[i].sequence.jump_to.length; k++){
                    childList.push(messages[i].sequence.jump_to[k].next_dialog);
                }
                const defaultJumper = {
                    index: messages[i].index,
                    children: childList,
                    type: messages[i].type
                }
                jaiu.push(defaultJumper);
            }
            else{
                const obj = {
                    index: messages[i].index,
                    children: [],
                    type: messages[i].type,
                    // parent: messages[i].index - 1,
                    // next_step: messages[i].index + 1
                }
                jaiu.push(obj);
            }
        }
        console.log(JSON.stringify(jaiu));
        console.log(jaiu);

       
        // console.log(masterData);
    }

    render() {
        return (
            <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
                You Clicked - {this.state.name}
                <Tree
                    separation={seperation}
                    collapsible={true}
                    onClick={(nodeData, evt) => this.trackData(nodeData, evt)}
                    nodeSvgShape={svgSquare}
                    data={myTreeData}
                    pathFunc="straight"
                    orientation="vertical"
                />
            </div>
        );
    }
}

export default App;
