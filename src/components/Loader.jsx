const Loader = () => {
return (
    <section className="h-screen w-full dark:bg-white/60 bg-slate-500/60 absolute flex flex-col gap-4 justify-center items-center">
        <img className="animate-wiggle" src="/images/logoLoader.png" alt="" />
        {/* <img src="/images/imgLoader.png" alt="" /> */}
        <div className="flex">
        <div className=" h-[50px] w-[50px] animate-bounceD1000 flex justify-center items-center text-8xl   ">
        <img src="/images/img4.png" alt="" />
        </div>
        <div className=" h-[50px] w-[50px] animate-bounceD2000 flex justify-center items-center text-8xl   ">
            <img src="/images/img8.png" alt="" />
        </div>
        <div className=" h-[50px] w-[50px] animate-bounceD3000 flex justify-center items-center text-8xl  ">
            <img src="/images/img5.png" alt="" />
        </div>
        <div className=" h-[50px] w-[50px] animate-bounceD4000 flex justify-center items-center text-8xl   ">
            <img src="/images/img6.png" alt="" />
        </div>
        <div className=" h-[50px] w-[50px] animate-bounceD5000 flex justify-center items-center text-8xl   ">
            <img src="/images/img7.png" alt="" />
        </div>
        <div className=" h-[50px] w-[50px] animate-bounceD6000 flex justify-center items-center text-8xl   ">
            <img src="/images/img9.png" alt="" />
        </div>
        </div>
        
    </section>
)
}
export default Loader