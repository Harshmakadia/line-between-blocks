import React, { Component } from 'react';
import './App.css';
import Tree from "react-d3-tree";

const svgSquare = {
    shape: "rect",
    shapeProps: {
        width: 20,
        height: 20,
        x: -10,
        y: -10
    }
};

const myTreeData = [
    {
        name: "Top Level",
        attributes: {
            "Node": "Entry"
        },
        children: [
            {
                name: "Level 2: A",
                attributes: {
                    "Node": "Child"
                },
                children: [
                    {
                        name: "Sub Child 1",
                        attributes: {
                            "Node": "Sub Child"
                        }
                    },
                    {
                        name: "Sub Child 2",
                        attributes: {
                            "Node": "Sub Child"
                        }
                    },
                    {
                        name: "Sub Child 3",
                        attributes: {
                            "Node": "Sub Child"
                        },
                        children: [
                            {
                                name: "Sub Sub Child 1",
                            },
                            {
                                name: "Sub Sub Child 2",
                            },
                            {
                                name: "Sub Sub Child 3",
                            },
                            {
                                name: "Sub Sub Child 4",
                            }
                        ]
                    },
                    {
                        name: "Sub Child 4",
                        attributes: {
                            "Node": "Sub Child"
                        }
                    }
                ]
            },
            {
                name: "Level 2: B"
            }
        ]
    }
];

class App extends React.Component {
    constructor() {
        super();
        this.trackData = this.trackData.bind(this);
    }

    trackData(nodeData, evt) {
        console.log({ nodeData, evt });
    }

    render() {
        return (
            <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
                <Tree
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
