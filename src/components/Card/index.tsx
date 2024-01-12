import Tag from "@/components/Tag"
import { v4 as uuidv4 } from 'uuid';

interface CardProps {
    title: string
    src: string
    alt: string
    date: string
    describe: string
    tags: string[],
    url: string
}

const Card = ({ title, src, alt, date, describe, tags, url }: CardProps) => {
    return (
        <li className="group flex flex-col gap-4 border border-darkRed rounded-lg p-4 shadow-[-5px_4px_0px_6px_#00000060] " >
            <span className="flex gap-3 justify-between">
                <a href={url} target="_blank">
                    <h3 className="text-light  font-semibold">{title}</h3>
                </a>
                <strong className="font-medium font-[#aaa] uppercase font-quickSand">{date}</strong>
            </span>
            <div className="flex gap-4 items-center">
                <a href={url} target="_blank">
                    <img src={src} alt={alt} className="w-full rounded-lg shadow-[0px_0px_10px_1px_#ff00004f]" />
                </a>
                <p className="text-sm max-xl:text-xs">{describe}</p>
            </div>
            <ul className="flex flex-wrap gap-2 ">
                {tags.map(tag => <Tag key={uuidv4()} name={tag} />)}
            </ul>
        </li>
    )
}

export default Card