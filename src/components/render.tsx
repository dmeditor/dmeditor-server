import { MiniText } from "dmeditor";

export default function Render(props) {
  return <MiniText mode="view" value={props.data} />;
}
