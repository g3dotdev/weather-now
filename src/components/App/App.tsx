import { CardItem, CardGroup } from "../Card";
import Content from "../Content/Content";
import Header from "../Header/Header";

const App: React.FC = () => {
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

export default App;
