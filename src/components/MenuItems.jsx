export default function MenuItems({ option }) {
    const { item, price } = option;
    return (
        <div>
            <button>{item} S/{price}</button>
        </div>
    )
}