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
                <a href={url} target="_blank" className="flex items-center gap-3 group/title w-fit">
                    <h3 className="text-light font-semibold group-hover/title:text-red">{title}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" className="group-hover/title:scale-125 ease-in-out duration-300	"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" className="fill-light group-hover/title:fill-red" /></svg>
                </a>
                <strong className="font-medium font-[#aaa] uppercase font-quickSand">{date}</strong>
            </span>
            <div className="flex gap-4 items-center">
                <a href={url} target="_blank">
                    <img src={src} alt={alt} className="w-full rounded-lg shadow-[0px_0px_10px_1px_#ff00004f] hover:scale-105 ease-in-out duration-300 " />
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