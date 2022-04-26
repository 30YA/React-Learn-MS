import Note from "./Note"
const StickyNote = () => {
  const notesData = [
    {name:"Title #1", content:"Text Content #1"},
    {name:"Title #2", content:"Text Content #2"},
    {name:"Title #3", content:"Text Content #3"},
  ]
  const note = notesData.map((item,index) => {
    return <Note key={index} name={item.name} content={item.content} />
  });
  return (
    <ul>
      {note}
    </ul>
  );
};
export default StickyNote;
