const LanguageCard = ({
    imgUrl
}) => {
    return (
        <div className="w-[30px] h-[30px] rounded-md flex justify-center items-center relative overflow-hidden ">
            <img
                className="absolute w-full h-full"
                src={imgUrl}
                alt="programming language"
            />
        </div>
    )
}

export default LanguageCard;