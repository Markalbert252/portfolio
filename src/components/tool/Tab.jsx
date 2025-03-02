const Tab = ({ 
    menu, 
    activeItem, 
    onSelectTab 
}) => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                {
                    menu.map(({ category }) => {
                        const isActive = category == activeItem;
                        const activeClass = 'tab-active [--tab-bg:#FB8B24] [--tab-border-color:#0a192f]';
                        return (
                            <a
                                key={category}
                                role="tab"
                                className={`tab text-primary dark:text-white ${isActive && activeClass}`}
                                onClick={() => onSelectTab(category)}
                            >
                                {category}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tab;