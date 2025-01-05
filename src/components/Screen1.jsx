


export const Screen1 = () =>{

    return (
        <div className="w-screen h-screen  bg-gray-400">
                <div className="flex justify-center gap-1 sm:justify-center sm:gap-2 md:justify-center md:gap-2 lg:justify-center lg:gap-4">
                    <div>img</div>
                    <div>Name</div>
                </div>
                <div className="flex justify-center sm:justify-center md:justify-center lg:justify-center">
                    Verify Your Age
                </div>

               


                <div>
                    Please, Conifrm your birth year, This Data will be stored
                </div>

                <div>
                    <input type="text" placeholder="Your Birth Year" />


                </div>

                <div>
                    <button>continue</button>
                </div>
        </div>
    )
}