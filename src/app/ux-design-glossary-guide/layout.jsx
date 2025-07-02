export default function GlossaryLayout(props) {
  return (
    <>
      {props.children}
      {props.modal}
      <div id='modal-root' />
    </>
  );
}
