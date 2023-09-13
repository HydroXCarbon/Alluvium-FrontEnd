import React from "react";

import { Card,List,Button } from "antd";

const data = [
  {
    title: 'Pay as you go',
    description: 'Ideal for small-scale usage',
    content: [
      {
        value_1: '10฿ per request',
        value_2: 'Land asset prediction',
        value_3: 'Basic model',
        value_4: 'Real estate predictions',
        value_5: 'Easy to use',
        value_6: 'Suitable for beginners'
      }
    ]
  },
  {
    title: 'Subscription',
    description: 'Great for regular usage',
    content: [
      {
        value_1: '2,499฿ per month',
        value_2: '3000 requests per month',
        value_3: 'After that 5 baht per request',
        value_4: 'Advanced predictions',
        value_5: 'Flexible monthly plan',
        value_6: 'Tailored for your needs'
      }
    ]
  },
  {
    title: 'Enterprise',
    description: 'For large-scale and professional use',
    content: [
      {
        value_1: '120,000฿ per month',
        value_2: 'Unlimited requests',
        value_3: 'Access to every model',
        value_4: 'Comprehensive analysis',
        value_5: 'Tailored for enterprise needs',
        value_6: ''
      }
    ]
  }
];


function AppPricing(){
    return(
        <div id="price" className="block pricingBlock bgLightGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Choose a plan to fit your needs</h2>
                </div>
                <List
                grid={{
                    gutter: 16,
                    xs: 3,
                    sm: 3,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                    <Card title={item.title}>
                        <p className="large">{item.content[0].value_1}</p>
                        <p>{item.content[0].value_2}</p>
                        <p>{item.content[0].value_3}</p>
                        <p>{item.content[0].value_4}</p>
                        <p>{item.content[0].value_5}</p>
                        <p>{item.content[0].value_6}</p>
                        <Button type="primary" size="large">
                            Get Started
                        </Button>
                    </Card>
                    </List.Item>
                )}
                />
            </div>
        </div>
      );
}

export default AppPricing;