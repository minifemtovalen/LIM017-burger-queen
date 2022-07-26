import MenuItems from './MenuItems.jsx';
export default function MenuList({data}) {
    return (
        <section > 
        {data.map(option => {
            return <MenuItems key={option.id} option={option} /> 
        })}
    </section>  
    )
}