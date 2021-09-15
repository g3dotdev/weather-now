import { CardItem, CardGroup } from "../../components/Card";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <CardGroup>
          <CardItem city="Nuuk, GL" />
          <CardItem city="Urubici, BR" isFeatured={true} />
          <CardItem city="Nairobi, KE" />
        </CardGroup>
      </Content>
    </>
  );
}

export default Home;
