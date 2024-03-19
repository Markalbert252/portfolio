import LanguageCard from "../LanguageCard";
const Card = ({
    cardTitle,
    cardImgUrl
}) => {
    return (
        <div className="bg-[#021709] p-3 rounded-md flex justify-center space-x-2 min-w-[140px]">
            <LanguageCard imgUrl={cardImgUrl} />
            <span className="text-white text-lg">{cardTitle}</span>
        </div>
    )
}

export default Card;