

const Colomns=({icon,topic,paragraph})=>{
   
    return(
        <>
        
        <div  className="w-full bg-white p-5 h-full">
          <div className=" items-start mb-4 text-yellow-400 text-3xl">{icon}
          </div>
          <h2 className="text-lg font-bold mt-3 text-start">{topic}</h2>

          <p className="text-sm font-normal mt-3 text-start">{paragraph}</p>
          <a href="#" className="text-black underline hover:text-blue-500 mt-4 block text-start font-semibold">
            Read More 
          </a>
        </div>
        
        
        
        </>
    );
}
export default Colomns;