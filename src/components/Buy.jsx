// import BuyClass from "./BuyClass";
import BuyFunc from "./BuyFunc";
import Count from "./Counter";
export default function Buy({ name }) {
    return (
        <div className='badge-wrapper'>
            <Count />
            <BuyFunc name={name} />
            {/* <BuyClass name={name} /> */}
        </div>
    )
}