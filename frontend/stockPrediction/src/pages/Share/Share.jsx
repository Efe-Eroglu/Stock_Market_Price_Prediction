import "./share.css";
import hisse_data from "../../data/hisse_data";
import { Row, Col } from "antd";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const Share = () => {
  
  return (
    <div className="hisse-ekrani w-screen ">
      <div className="kartlar pb-20">
        <Row gutter={16}>
          {hisse_data.map((hisse, index) => (
            <Col span={8} key={index}>
              <Card
                className="hisse-kart"
                style={{
                  width: "300px",
                  marginBlock: 20,
                  marginTop: 30,
                  marginLeft: 110,
                }}
                cover={
                  <Link to={`/share/${hisse.id}`}>
                    <img
                      className="hisse-resim"
                      alt={hisse.name}
                      width={"299px"}
                      title={hisse.name}
                      src={hisse.img}
                    />
                  </Link>
                }
              >
                <div className="flex justify-between">
                  <div className="altyazi text-xl ">{hisse.name}</div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="back-image">
        <img src="/teamImages/banner-bg.png" alt="" />
        <img src="/teamImages/banner-bg2.png" alt="" />
        <img src="/teamImages/banner-bg.png" alt="" />
        <img src="/teamImages/banner-bg2.png" alt="" />
        <img src="/teamImages/banner-bg-3.png" alt="" />
      </div>
    </div>
  );
};

export default Share;
