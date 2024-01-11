interface TagProps {
    name: string
}

const Tag = ({ name }: TagProps) => {
    return (
        <>
            <li className="px-2 py-1 bg-darkRed rounded-full border">{name}</li>
        </>
    )
}

export default Tag