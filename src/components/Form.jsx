import CustomHook from "./CustomHook";

function Form() {
  
  const {filds, handle} = CustomHook({
    email: '',
    name: ''
  })

  return (
    <div>
      <form>
        <label>
          name:
          <input value={filds.name} type="text" onChange={(e) => handle(e)} name='name'/>
        </label>
        <label>
          email:
          <input value={filds.email} type="email" onChange={(e) => handle(e)} name='email'/>
        </label>
      </form>
    </div>
  );
}

export default Form;
