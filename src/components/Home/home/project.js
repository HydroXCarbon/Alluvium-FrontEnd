import React from "react";

import { Card } from "antd";

function AppProject() {
    const data = {
        "1": {
            "title": "Technological Advancements",
            "description": "AI technologies have advanced significantly, enabling more sophisticated analysis and predictions. This presents an opportunity to leverage AI algorithms and machine learning models to unlock valuable insights and identify high-potential land assets."
        },
        "2": {
            "title": "Increasing Demand",
            "description": "The real estate industry continues to grow, and investors seek data-driven insights to make informed decisions. The demand for accurate land asset predictions is rising as investors aim to maximize returns and mitigate risks."
        },
        "3": {
            "title": "Data Availability",
            "description": "The availability of vast amounts of land-related data, including historical records, market trends, and environmental factors, provides a rich source for analysis. AI algorithms can process and analyze this data to generate predictive models and recommendations."
        },
        "4": {
                "title": "Market Inefficiencies",
                "description": "The real estate market often experiences inefficiencies, such as information asymmetry and subjective valuation. AI-based land asset prediction services can help address these inefficiencies by providing objective and data-driven insights, facilitating more accurate valuation and investment decisions."
        }
        
    };
    return (
        <div id="project" className="block projectsBlock bgGray">
            <div className="container-fluid">
                <br></br>
                <div className="titleHolder">
                    <h2 className="custom font">We help you find your best land assets</h2>
                </div>
                <br></br>
                <div className="card-section">
                    <Card className="card" title={data[1]["title"]} bordered={false}>
                        <p>{data[1]["description"]}</p>
                    </Card>
                    <Card className="card" title={data[2]["title"]} bordered={false}>
                        <p>{data[2]["description"]}</p>
                    </Card>
                    <Card className="card" title={data[3]["title"]} bordered={false}>
                        <p>{data[3]["description"]}</p>
                    </Card>
                    <Card className="card" title={data[4]["title"]} bordered={false}>
                        <p>{data[4]["description"]}</p>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default AppProject;