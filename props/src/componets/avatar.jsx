export default function Avatar(props) {

  return (
    <div className="text-center m-3">

      <img
        src={props.imagemDaPeso}
        alt={props.nomeDoUsual}
        className="rounded-circle"
        width="150"
        height="150"
      />

      <h4>{props.nomeDoUsury}</h4>

    </div>
  );

}