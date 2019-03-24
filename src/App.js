import React, { Component } from 'react';
import './App.css';
import Tree from "react-d3-tree";
import { getMasterData } from './masterData.jsx';
import { findIndexNested }  from './helper.jsx';
import { findByPath, trimName } from './helper.jsx';

const svgSquare = {
    shape: "rect",
    shapeProps: {
        width: 140,
        height: 30,
        x: -5,
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
            name: "Nothing",
            wotnotData: [{nama : "df"}]
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
                    name: trimName(messages[i].resolvedQuery),
                    attributes : {type: messages[i].type, index: messages[i].index},
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
                    name: trimName(messages[i].resolvedQuery),
                    attributes : {type: messages[i].type, index: messages[i].index},
                    resolvedQuery : messages[i].resolvedQuery
                }
                jaiu.push(defaultJumper);
            }
            else{
                const obj = {
                    index: messages[i].index,
                    children: [],
                    type: messages[i].type,
                    name: trimName(messages[i].resolvedQuery),
                    attributes : {type: messages[i].type, index: messages[i].index},
                    resolvedQuery : messages[i].resolvedQuery
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
    for(let h=0; h < 55; h++){

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

                        // check if found index has children already
                        if(wotnotMessages[h].index === 50){
                            console.log("yesy");
                        }
                        if(wotnotMessages[h].children.length > 0){
                            console.log("------>",wotnotMessages[h]);
                        
                            // push new one
                            pathData.children = []
                            let allChildrenY = [];
                            for(let insideY = 0; insideY < wotnotMessages[h].children.length; insideY++){
                                let stepName, stepType;
                                    const nameIndex = messages.findIndex(step => step.index === parseInt(wotnotMessages[h].children[insideY]));
                                    if(nameIndex > -1){
                                        stepName = messages[nameIndex].resolvedQuery;
                                        stepType = messages[nameIndex].type;
                                        
                                        allChildrenY.push({
                                            index: parseInt(wotnotMessages[h].children[insideY]),
                                            attributes: {
                                                type: stepType,
                                                index: parseInt(wotnotMessages[h].children[insideY])
                                            },
                                            name: trimName(stepName)
                                        })
                                    }
                            }

                            pathData.children = allChildrenY;
                        }
                        else if(wotnotMessages[h].type === 'informative'){
                            // pathData.children = [{"name": "Harsh"}]
                        }
                    }
                }
                else{
                    // Find the path is not found at all in wotnotdata
                    console.log("Sorry I'm not found", wotnotMessages[h]);

                    // check previous message type since if that is informative or something
                    // we can directly append it there
                    if(wotnotMessages[h-1].type === 'informative' || wotnotMessages[h-1].type === 'input' || wotnotMessages[h-1].type === 'input (name)' || wotnotMessages[h-1].type === 'input (email)' || wotnotMessages[h-1].type === 'custom_phone_input' || wotnotMessages[h-1].type === 'codeblock' || wotnotMessages[h-1].type === 'cardview'){
                        //access the properties there

                        const subChecker = findIndexNested(wotnotData[0], wotnotMessages[h-1].index);
                        console.log("------------>", subChecker); 
                        if(subChecker!== undefined){
                            const pathData = findByPath(subChecker, wotnotData[0]);
                            console.log("Not found one", pathData);

                            // Check if it has already children
                            if(pathData.hasOwnProperty('children')){
                                // append data here
                                if(wotnotMessages[h].children.length > 0){
                                    pathData.children = []
                                    let allChildrenZ = [];
                                    for(let insideZ = 0; insideZ < wotnotMessages[h].children.length; insideZ++){
                                        let stepName, stepType;
                                            const nameIndex = messages.findIndex(step => step.index === parseInt(wotnotMessages[h].children[insideZ]));
                                            if(nameIndex > -1){
                                                stepName = messages[nameIndex].resolvedQuery;
                                                stepType = messages[nameIndex].type;
                                                
                                                allChildrenZ.push({
                                                    index: parseInt(wotnotMessages[h].children[insideZ]),
                                                    attributes: {
                                                        type: stepType,
                                                        index: parseInt(wotnotMessages[h].children[insideZ])
                                                    },
                                                    name: trimName(stepName)
                                                })
                                            }
                                    }
                                    pathData.children = allChildrenZ;   
                                }
                                else{
                                    console.log("\x1b[43mdfddfdfdfdfd", wotnotMessages[h]);
                                    console.log("\x1b[43mdHighlight", pathData);
                                    pathData.children.push(wotnotMessages[h]);
                                }
                                
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

                                        allChildren.push({
                                            index: parseInt(wotnotMessages[h].children[insideX]),
                                            attributes: {
                                                type: stepType,
                                                index: parseInt(wotnotMessages[h].children[insideX])
                                            },
                                            name: trimName(stepName)
                                        })
                                    }
                                }
                                pathData.children.push({
                                    index: wotnotMessages[h].index,
                                    children: allChildren,
                                    name: trimName(wotnotMessages[h].resolvedQuery),
                                    attributes: { type: wotnotMessages[h].type, index: wotnotMessages[h].index}
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
                            type: stepType,
                            index: wotnotMessages[h].children[p]
                        },
                        name: trimName(stepName)
                    })
                }

                const mainChild = {
                    name: trimName(messages[h].resolvedQuery),
                    children: child,
                    index: messages[h].index
                }

                wotnotData.push(mainChild);
            }
            
        }
        console.log(wotnotData);
        this.setState({wotnotData});
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
                    data={this.state.wotnotData}
                    pathFunc="straight"
                    orientation="vertical"
                />
            </div>
        );
    }
}

export default App;
