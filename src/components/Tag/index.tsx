interface TagProps {
    name: string
}

const Tag = ({ name }: TagProps) => {
    return (
        <>
            <li className="px-3 py-[5px] bg-[#200000] rounded-full text-center text-red font-bold ">{name}</li>
        </>
    )
}

export default Tag