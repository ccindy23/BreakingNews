import React from 'react';
import { relative } from 'path';
import { FontDisplay } from 'expo-font';
import { Shape } from 'react-native';

const BreakingNewsBanner: React.ElementType = () => {
    return (
        <div
            className="h3"
            id="Header"
            style={{
                padding: "15px",
                background: "c00",
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "30px",
            }}
        >

            <div
                className="newsWrapper"
                id="newsWrapper"
                style={{
                    padding: "30px",
                    display: "flex",
                    alignItems: "center",
                    background: "#8C1515",
                }}
            >
                <div
                    className="news"
                    id="breakingNews"
                    style={{
                        height: "50px",
                        overflow: "hidden",
                    }}
                >
                </div>
            </div>


            <div className="newsWrapper"></div>
            <div><h3>BREAKING NEWS</h3></div>
            <div className="breakingNews"></div>
            <div><span> Stanford Classes will be C/NC</span>
                <div><span> https://www.stanforddaily.com/2020/07/30/faculty-senate-approves-optional-credit-no-credit-grading-system-for-entirety-of-academic-year/</span>
                </div>
            </div>
        </div>
    );
};

export default BreakingNewsBanner;