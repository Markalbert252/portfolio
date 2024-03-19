const MainTitle = ({ 
    text,
    extraClass
}) => {
    const classNames = `shake uppercase text-[#10E956] text-center text-4xl font-semibold ${extraClass}`
    return (
        <h1 className={classNames}>
            {text}
        </h1>
    )
}

export default MainTitle;