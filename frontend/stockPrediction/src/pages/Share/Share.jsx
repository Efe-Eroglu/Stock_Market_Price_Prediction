import "./share.css";
import hisse_data from "../../data/hisse_data";
import { Row, Col } from "antd";
import { Card } from "antd";
import { Link } from "react-router-dom";

const Share = () => {
  return (
    <div className="hisse-ekrani w-screen ">
      <div className="kartlar pb-14">
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
                <div className="altyazi text-xl">{hisse.name}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Share;
