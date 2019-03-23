import React, { Component } from 'react';
import './App.css';
import Tree from "react-d3-tree";
import { getMasterData } from './masterData.jsx';
import { findIndexNested }  from './helper.jsx';
import { getCurrentIndexProp } from './helper.jsx';

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
	"name": "branch 1",
	"index": 1,
	"children": [{
			"name": "sub child 1",
			"index": 2,
			"children": [{
				"name": "subx2 child 1",
				"index": 3,
				"children": [{
						"name": "subx3 child 1",
						"index": 4,
						"children": [{
								"name": "subx4 child 1",
								"index": 21
							},
							{
								"name": "subx4 child 2",
								"index": 18
							}
						]
					},
					{
						"name": "subx3 child 2",
						"index": 6,
						"children": [{
								"name": "subx4 child 1",
								"index": 7
							},
							{
								"name": "subx4 child 2",
								"index": 21
							}
						]

					},
					{
						"name": "subx3 child 3",
						"index": 22
					}
				]
			}]
		},
		{
			"name": "sub child 2",
			"index": 28
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
                    type: messages[i].type,
                    resolvedQuery : messages[i].resolvedQuery
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
                    type: messages[i].type,
                    resolvedQuery : messages[i].resolvedQuery
                }
                jaiu.push(defaultJumper);
            }
            else{
                const obj = {
                    index: messages[i].index,
                    children: [],
                    type: messages[i].type,
                    resolvedQuery : messages[i].resolvedQuery
                    // parent: messages[i].index - 1,
                    // next_step: messages[i].index + 1
                }
                jaiu.push(obj);
            }
        }
       // console.log(JSON.stringify(jaiu));
        console.log(jaiu);

        // Main action begins here
        const wotnotMessages = jaiu;
        const wotnotData = []
        // wotnotMessages.length
        for(let h=0; h < 2; h++){

            // Before processing it check if index is already present
            // In the nested structure of parent child
            if(!!wotnotData[0] && !!wotnotData[0].children){
                const checker = findIndexNested(wotnotData[0], wotnotMessages[h].index)
                // index is found 
                if(checker.length > 0){
                    console.log("Thank god it's found", checker);

                    //access the properties there
                    console.log(getCurrentIndexProp(checker, wotnotData[0]));
                }
            }
            
            // Add childrens to array
            let child = []
            for(let p=0; p < wotnotMessages[h].children.length; p++){

                // find index of the child for fetching details 
                let stepName, stepType;
                const nameIndex = messages.findIndex(step => step.index === wotnotMessages[h].children[p]);
                if(nameIndex > -1){
                    stepName = messages[nameIndex].resolvedQuery;
                    stepType = messages[nameIndex].type;
                }
                child.push({
                    index: wotnotMessages[h].children[p],
                    attributes: {
                        type: stepType
                    },
                    name: stepName
                })
            }

            const mainChild = {
                name: messages[h].resolvedQuery,
                children: child,
                index: messages[h].index
            }

            wotnotData.push(mainChild)
        }
        console.log(wotnotData);
        // console.log(JSON.stringify(wotnotData));
        
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
