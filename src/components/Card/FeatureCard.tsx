import React from "react";
import { Card, Space, Typography } from "antd";
import "./FeatureCard.css";

const { Title, Paragraph } = Typography;

export interface Feature {         // พิมพ์เดียวกับที่ใช้ใน App
  img: string;
  title: string;
  description: string;
  color?: string;
}

const FeatureCard: React.FC<Feature> = ({
  img,
  title,
  description,
  color = "#FFF",
}) => (
  <Card className="feature-card" styles={{ body: { backgroundColor: color } }}>
    <img src={img} alt={title} className="feature-img" />

    <Space direction="vertical" size={18} className="feature-text">
      <Title level={4} className="feature-title">
        {title}
      </Title>
      <Paragraph className="feature-desc">{description}</Paragraph>
    </Space>
  </Card>
);

export default FeatureCard;
