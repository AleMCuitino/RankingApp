import Apps from "../../data/app.json";
import { App, Container, Icon } from "./CardStyle";

function Card() {
  return (
    <Container>
      

      {Apps &&
        Apps.map((app) => {
          return (
            <App key={app.id}>
              <Icon src={app.app_icon} alt="descr" />
              <div className="container">
                <span>{app.app_name}</span>
                
              </div>
            </App>
          );
        })}
    </Container>
  );
}

export default Card;
