const VideoTitle=({title,overview})=>{
    return(
        <div className="pt-[18%] px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
               <h1 className="text-4xl mb-2 font-bold">{title}</h1>
               <p className="py-6 w-1/4 text-lg mb-4">{overview} </p>
               <div>
                <button className="text-black p-4 px-10 bg-white  hover:bg-opacity-60 rounded-lg">▶️ Play</button>
                <button className="text-white p-4 px-10 mx-2 bg-gray-500  hover:bg-opacity-60 rounded-lg">More Info</button>
               </div>
        </div>
    );
};
export default VideoTitle;