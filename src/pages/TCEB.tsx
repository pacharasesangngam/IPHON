import { useRef } from "react";
import { Space, Typography} from "antd";
import ArrowLeftIcon from "../components/Arrow/ArrowLeftIcon";
import ArrowRightIcon from "../components/Arrow/ArrowRightIcon";
import FeatureCard from "../components/Card/FeatureCard";
import "antd/dist/reset.css";
import "./CarouselSection.css";
import phone from "/phone.png";

const { Title, Paragraph } = Typography;

/* ------- ข้อมูล ------- */
const features = [
  {
    img: phone,
    title: "Short heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    color: "#FDF2E8",
  },
  {
    img: phone,
    title: "Short heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    color: "#EFE7F2",
  },
  {
    img: phone,
    title: "Short heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    color: "#EFF2FA",
  },
  {
    img: phone,
    title: "Short heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    color: "#E9F3ED",
  },
];

const scrollAmount = 422;

export default function App() {
  const wrapRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") =>
    wrapRef.current?.scrollBy({
      left: dir === "prev" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

  return (
    <div className="app-container">
      {/* Header */}
      <div className="header-wrapper">
        <Space direction="vertical" size={1}>
          <Title level={2} className="header-title" style={{ fontSize: 40 }}>
            Discover the Features That Make Us Stand Out
          </Title>
          <Paragraph className="header-subtitle">
            Unlock a world of convenience and connectivity with the Present Mobile App. Download now to enhance your daily life with our innovative features!
          </Paragraph>
        </Space>
      </div>

      {/* Carousel */}
      <div className="carousel-container"  >
        {/* แถวการ์ด */}
        <div className="features-wrapper" ref={wrapRef} >
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>

        {/* ปุ่มลูกศร */}
        <div className="arrow-wrapper">
          <button className="custom-arrow-btn" onClick={() => scroll("prev")}>
            <ArrowLeftIcon />
          </button>
          <button className="custom-arrow-btn" onClick={() => scroll("next")}>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
