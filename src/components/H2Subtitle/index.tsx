interface SubtitleProps {
    children: React.ReactNode | string;
}

const H2Subtitle = ({ children }: SubtitleProps) => {
    return (
        <h2 className="text-light text-center mb-8 text-2xl max-sm:text-lg">{children}</h2>
    )
}

export default H2Subtitle