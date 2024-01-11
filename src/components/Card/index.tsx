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
        <li className="group flex flex-col gap-3 border border-light rounded-lg p-4">
            <span className="flex gap-3 justify-between">
                <a href={url} target="_blank">
                    <h3>{title}</h3>
                </a>
                <strong className="font-medium">{date}</strong>
            </span>
            <div className="flex gap-4">
                <a href={url} target="_blank">
                    <img src={src} alt={alt} className="w-full rounded-lg" />
                </a>
                <p>{describe}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
                {tags.map(tag => <Tag key={uuidv4()} name={tag} />)}
            </ul>

        </li>
    )
}

export default Card