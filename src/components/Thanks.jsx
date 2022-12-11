import "./Thanks.css";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};
const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Quase concluído...</h2>
      <p>
        Agradecemos o seu feedback. Logo menos você receberá um cupom
        proporcional para sua próxima compra em seu e-mail
      </p>
      <p>Para darmos por finalizada sua avaliação, clique em Enviar abaixo</p>
      <h3>Resumo da sua avaliação, {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
