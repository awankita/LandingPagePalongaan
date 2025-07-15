export default function AgendaSection() {
    return (
        <>
            <div className="text-center mt-20 font-bold text-4xl text-[#252524]">
                <h1>Agenda Desa</h1>
            </div>
            <div className="text-center mt-5 mb-10 font-medium text-xl text-[#585858]">
                <h4>Agenda Acara Kegiatan Desa Palongaan</h4>
            </div>
            
            <div className="border-red-500 border-2 flex flex-wrap justify-center gap-6 md:px-5">
                <div className="w-full flex flex-row justify-center gap-10">
                    {/* Card 1 */}
                    <div className="border-red-500 border-2 min-w-[300px] max-w-[600px] w-full h-[300px] bg-gray-100 rounded-lg shadow-md">
                        <div
                            className="bg-cover bg-center h-[300px] rounded-xl shadow-lg flex flex-col items-center justify-center text-white font-medium p-6"
                            style={{ backgroundImage: "url('agendaPic.png')" }}></div>
                    </div>

                    {/* Card 2 */}
                    <div className="border-red-500 border-2 min-w-[300px] max-w-[600px] w-full h-[300px] bg-gray-100 rounded-lg shadow-md">
                        <div
                            className="bg-cover bg-center h-[300px] rounded-xl shadow-lg flex flex-col items-center justify-center text-white font-medium p-6"
                            style={{ backgroundImage: "url('agendaPic.png')" }}></div>
                    </div>

                    {/* Card 3 */}
                    <div className="border-red-500 border-2 min-w-[300px] max-w-[600px] w-full h-[300px] bg-gray-100 rounded-lg shadow-md">
                        <div
                            className="bg-cover bg-center h-[300px] rounded-xl shadow-lg flex flex-col items-center justify-center text-white font-medium p-6"
                            style={{ backgroundImage: "url('agendaPic.png')" }}></div>
                    </div>
                </div>
            </div>
        </>
    );
}