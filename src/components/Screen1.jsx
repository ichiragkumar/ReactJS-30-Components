


export const Screen1 = () =>{

    return (
        <div className="w-screen h-screen  bg-gray-400 border ">
                <div className="flex justify-center gap-1 sm:justify-center sm:gap-2 md:justify-center md:gap-2 lg:justify-center lg:gap-4">
                    <div>img</div>
                    <div>Name</div>
                </div>
                <div className="flex justify-center text-2xl">Verify Your Age</div>
                <div>Please, confirm your birth year. This data will be stored.</div>

                <div>
                    <input type="text" placeholder="Your Birth Year" />


                </div>

                <div>
                    <button>continue</button>
                </div>
        </div>
    )
}