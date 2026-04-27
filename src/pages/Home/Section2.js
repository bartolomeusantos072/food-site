import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Sabor Original",
    paragraph: "Nossas receitas seguem tradições clássicas, utilizando ingredientes frescos e selecionados para garantir aquele gosto autêntico de comida feita na hora.",
  },
  {
    image: Salad,
    title: "Qualidade Garantida",
    paragraph: "Trabalhamos apenas com fornecedores locais e produtos orgânicos de alta qualidade, garantindo uma refeição nutritiva, saudável e cheia de sabor.",
  },
  {
    image: Delivery,
    title: "Entrega Rápida",
    paragraph: "Sua fome não pode esperar. Temos uma logística inteligente para que seu pedido chegue quente e impecável na sua porta em tempo recorde.",
  },
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>O melhor hambúrguer é aquele compartilhado.</h2>
              <p>
                A gente acredita que o verdadeiro sabor vai além dos ingredientes — 
                ele nasce nos momentos vividos à mesa. Entre risadas, conversas e
                boas companhias, cada lanche se transforma em algo especial. 
                Por isso, preparamos tudo com carinho, como se fosse para a nossa 
                própria família.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Menu completo
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
