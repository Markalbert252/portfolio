const Stack = ({ data }) => {
    const { 
        id,
        title,
        description,
        icons
    } = data;

    return (
        <div>
            <div className="flex justify-between mb-2">
                <h2 className="text-primary dark:text-white font-semibold py-1 border-b-2 border-b-secondary">{title}</h2>
                <div className="flex items-center space-x-2">
                    {icons.map((icon, idx) => <div key={idx}><img src={icon} className="w-[25px] h-auto"/></div>)}
                </div>
            </div>
            <p className="text-primary dark:text-white">{description}</p>
        </div>
    )
}

export default Stack;