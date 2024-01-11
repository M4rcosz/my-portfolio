interface IconProps {
    alt: string
    src: string
    width: string
}

const Icon = ({ alt, src, width }: IconProps) => {
    return (
        <li className="flex justify-center">
            <img src={src} alt={alt} width={width} />
        </li>
    )
}

export default Icon