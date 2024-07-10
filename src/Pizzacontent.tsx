
interface IDataPizza {
    name: string,
    desc: string,
    img: string,
    price: number
}

const dataPizza: IDataPizza [] = [
    {
        name: 'Баварская',
        desc: 'Охотничьи колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла, томатный соус',
        img: 'https://media.dodostatic.net/image/r:292x292/11EF346408A39615BD3478135F9F6673.avif',
        price: 495,
    },
    {
        name: 'Маргарита',
        desc: 'Двойная порция цыпленка , моцарелла, соус альфредо',
        img: 'https://media.dodostatic.net/image/r:292x292/11EE7D5FFA55D940A5174B17EE35C316.avif',
        price: 549,
    },
]


const Pizzacontent = () => {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            {dataPizza.map(p => {
                return (
                    <div style={{ width: "250px" }} key={p.name}>
                        <img src={p.img} alt="" />
                        <h5>{p.name}</h5>
                        <p>{p.desc}</p>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-betwen'
                        }}>
                            <p>ot {p.price} com</p>
                            <button>tandoo</button>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default Pizzacontent