interface TagProps {
    name: string
}

const Tag = ({ name }: TagProps) => {
    return (
        <>
            <li className="px-3 py-1 bg-[#000] rounded-full text-center text-darkRed font-bold max-sm:text-xs border border-darkRed">{name}</li>
        </>
    )
}

export default Tag