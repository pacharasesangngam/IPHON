// src/App.tsx
import React, { useRef } from "react";
import { Row, Col, Space, Typography, Card, Button } from "antd";
import ArrowLeftIcon from "../components/ArrowLeftIcon";
import ArrowRightIcon from "../components/ArrowRightIcon";
import "antd/dist/reset.css";
import "./CarouselSection.css";
import phone from "/phone.png";
const { Title, Paragraph } = Typography;

interface Feature {
  img: string;
  title: string;
  description: string;
  color?: string;
}

const features: Feature[] = [
  {
    img: phone,
    title: "Short heading goes here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    color: "#FDF2E8",
  },
  {
    img: phone,
    title: "Short heading goes here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    color: "#EFE7F2",
  },
  {
    img: phone,
    title: "Short heading goes here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    color: "#EFF2FA",
  },
  {
    img: phone,
    title: "Short heading goes here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    color: "#E9F3ED",
  },
];

const App: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 422; // 400px card + 22px gap

  const handlePrev = () => {
    wrapperRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };
  const handleNext = () => {
    wrapperRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="app-container">
      {/* Section 1: Header */}
      <Row justify="center" className="header-row">
        <Col>
        <div className="header-wrapper">
          <Space direction="vertical" size={23}>
            <Title level={2} className="header-title">
              Medium length section heading goes here
            </Title>
            <Paragraph className="header-subtitle">
              Unlock a world of convenience and connectivity with the Present
              Mobile App. Download now to enhance your daily life with our
              innovative features!
            </Paragraph>
          </Space>
        </div>
        </Col>
      </Row>

      {/* Section 2: Carousel */}
      <div className="carousel-container">

        <div className="features-wrapper" ref={wrapperRef}>
          {features.map((feature, i) => (
            <Card
              key={i}
              className="feature-card"
              styles={{ body: { backgroundColor: feature.color } }}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="feature-img"
              />
              <Space direction="vertical" size={18} className="feature-text">
                <Title level={4} className="feature-title">
                  {feature.title}
                </Title>
                <Paragraph className="feature-desc">
                  {feature.description}
                </Paragraph>
              </Space>
            </Card>
          ))}
        </div>
{/* ปุ่มลูกศรจัดชิดกันตรงกลาง */}
        <div className="arrow-wrapper">
          <Button
          shape="circle"
            className="arrow-btn"
            onClick={handlePrev}
            size="large"
            icon={<ArrowLeftIcon />}
          />
          <Button
          shape="circle"
            className="arrow-btn"
            size="large"
            onClick={handleNext}
            icon={<ArrowRightIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
