const Loading = () => {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-[#121111]">
            <div>
                <h1 className="text-3xl md:text-6xl text-[#10E956] text-center mb-4">Starting ...</h1>
                <div className=" max-w-full w-[300px] h-[20px] border-2 border-white">
                    <div className="loading h-full bg-[#10E956]"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading;