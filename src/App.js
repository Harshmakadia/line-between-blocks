import React, { Component } from 'react';
import './App.css';
import Tree from "react-d3-tree";
import { getMasterData } from './masterData.jsx';
import { findIndexNested }  from './helper.jsx';
import { findByPath } from './helper.jsx';

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
        const wotnotData = [];
        let previousPathData = [];
        // wotnotMessages.length
        for(let h=0; h < 6; h++){

            // Before processing it check if index is already present
            // In the nested structure of parent child
            if(!!wotnotData[0] && !!wotnotData[0].children){
                const checker = findIndexNested(wotnotData[0], wotnotMessages[h].index)
                
                // index is found and if it's not found it will be undefined
                 if(checker!== undefined && checker.constructor === Array && (checker.length > 0 )){
                    console.log("Thank god it's found", checker, wotnotMessages[h].index);

                    //access the properties there
                    const pathData = findByPath(checker, wotnotData[0]);
                    previousPathData = pathData;
                    console.log(pathData);

                    // Check if it has already children
                    if(pathData.hasOwnProperty('children')){
                        // append data here
                        console.log('append data here');
                    }
                    else{
                        // previousCheckerIndex = pathData;
                        // previousCheckerIndex.push(wotnotMessages[h].index);

                        // check if found index has children already
                        if(wotnotMessages[h].children.length > 0){
                            console.log("------>",wotnotMessages[h]);
                        
                            // push new one
                            pathData.children = []

                            for(let insideY = 0; insideY < wotnotMessages[h].children.length; insideY++){
                                
                            }
                            pathData.children.push(wotnotMessages[h]);
                        }
                        else if(wotnotMessages[h].type === 'informative'){
                            
                        }
                    }
                }
                else{
                    // Find the path is not found at all in wotnotdata
                    console.log("Sorry I'm not found", wotnotMessages[h]);

                    // check previous message type since if that is informative or something
                    // we can directly append it there
                    if(wotnotMessages[h-1].type === 'informative'){
                        //access the properties there

                        const subChecker = findIndexNested(wotnotData[0], wotnotMessages[h-1].index)
                        if(subChecker!== undefined){
                            const pathData = findByPath(subChecker, wotnotData[0]);
                            console.log("Not found one", pathData);

                            // Check if it has already children
                            if(pathData.hasOwnProperty('children')){
                                // append data here
                                pathData.children.push(wotnotMessages[h]);
                            }
                            else{
                                console.log("EMPTY")
                                // create children since there is no child
                                pathData.children = []
                                let allChildren = [];
                                for(let insideX = 0; insideX < wotnotMessages[h].children.length; insideX++){
                                    let stepName, stepType;
                                    const nameIndex = messages.findIndex(step => step.index === parseInt(wotnotMessages[h].children[insideX]));
                                    if(nameIndex > -1){
                                        stepName = messages[nameIndex].resolvedQuery;
                                        stepType = messages[nameIndex].type;
                                    }
                                    allChildren.push({
                                        index: parseInt(wotnotMessages[h].children[insideX]),
                                        attributes: {
                                            type: stepType
                                        },
                                        name: stepName
                                    })
                                }
                                pathData.children.push({
                                    index: wotnotMessages[h].index,
                                    children: allChildren,
                                    attributes: { type: wotnotMessages[h].type}
                                })
                            }
                        }
                        
                    }
                }
            }
            else{
                // First time there will be no Data
                console.log("First time there will be no Data");

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

                wotnotData.push(mainChild);
            }
            
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
