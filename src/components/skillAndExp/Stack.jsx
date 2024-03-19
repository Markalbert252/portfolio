//components
import LanguageCard from "../LanguageCard";

const Stack = ({
    extraClasses,
    stackTitle,
    stackItems,
    children
}) => {
    const classNames = `${extraClasses}`
    return (
        <div className={classNames}>
            <div className="flex items-center space-x-10">
                <h2 className="p-1 border-b-2 border-[#10E956] text-2xl text-white">
                    {stackTitle}
                </h2>
                <div className="flex space-x-2">
                    {
                        stackItems.map( stackItem => <LanguageCard key={stackItem.stackItemName} imgUrl={stackItem.imgUrl} />)
                    }
                </div>
            </div>
            <p className="text-white text-base mt-5">
                {children}
            </p>
        </div>
    )
}

export default Stack;