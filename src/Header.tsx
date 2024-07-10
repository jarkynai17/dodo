
import { FC, useState } from "react"
import { ITabs } from "./App"
import Pizzacontent from './Pizzacontent';

interface IHeaderProps {
    tabs: ITabs[]
}

// any , unknown, void
// <> - generis type (number , boolean , T, K)

// type TypeText = {
//     handleclick: (text: string) => string
// }

const Header: FC<IHeaderProps> = (props) => {
    const [content, setContent] = useState<string>("Pizza")
    const handleClick = (text: string) => {
        setContent(text)
    }

    return (
        <div>
            {props.tabs.map(el => {
                return <a onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    handleClick(el.name)
                }} href="#" >{el.name}</a>
            })}
            <br />
            <br />
            <div>
                {content == 'Pizza' && <Pizzacontent/>}
                {content == 'Drinks' && <h2>pasta content</h2>}
                {content == 'Deserts' && <h2>Burgers content</h2>}
            </div>
        </div>
    )
}

export default Header