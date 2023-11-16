const VideoTitle=({title,overview})=>{
    return(
        <div className="pt-[12%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
               <h1 className="text-2xl md:text-4xl mb-5 md:mb-2 font-bold">{title}</h1>
               <p className="hidden md:inline-block py-6 w-1/4 text-lg mb-4">{overview} </p>
               <div>
                <button className="text-black py-1 md:py-4 px-3 md:px-10 bg-white  hover:bg-opacity-60 rounded-lg">▶️ Play</button>
                <button className="hidden md:inline-block text-white p-4 px-10 mx-2 bg-gray-500  hover:bg-opacity-60 rounded-lg">More Info</button>
               </div>
        </div>
    );
};
export default VideoTitle;