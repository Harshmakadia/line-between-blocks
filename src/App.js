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
                children: [
                    {
                        name: "Sub Child 1",
                    },
                    {
                        name: "Sub Child 2",
                    },
                    {
                        name: "Sub Child 3",
                        children: [
                            {
                                name: "Super Child 1",
                            },
                            {
                                name: "Super Child 2",
                                children: [
                                    {
                                        name: "New Child 1",
                                    },
                                    {
                                        name: "New Child 2",
                                    },
                                    {
                                        name: "New Child 3",
                                    },
                                    {
                                        name: "New Child 4",
                                    }
                                ]
                            },
                            {
                                name: "Super Child 3",
                            },
                            {
                                name: "Super Child 4",
                            }
                        ]
                    },
                    {
                        name: "Sub Child 4",
                    }
                ]
            },
            {
                name: "Level 2: B",
                children: [
                    {
                        name: "Me Child 1",
                    },
                    {
                        name: "Me Child 2",
                    },
                    {
                        name: "Me Child 3",
                    },
                    {
                        name: "Me Child 4",
                    }
                ]
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
    }

    trackData(nodeData, evt) {
        console.log({ nodeData, evt });
        this.setState({name: nodeData.name});
    }

    render() {
        return (
            <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
                You Clicked - {this.state.name}
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
