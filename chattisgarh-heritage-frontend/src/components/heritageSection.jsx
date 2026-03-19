import folkDance from "../assets/folk-dance.png";
import Festivals from "../assets/festivals2.png";
import Tribes from "../assets/tribes.png";
import Architechture from "../assets/architecture.png";
import Rituals from "../assets/rituals.png";
const Heritagesection =() => {
     const heritageItems ="relative h-[200px] overflow-hidden bg-cover bg-center  bg-no-repeat shadow-md";
            const heritageButtons = " absolute bottom-0 left-0 font-bold text-[18px] w-full p-[14px] border-none text-white hover:bg-[rgba(0,0,0,0.6)] hover:text-white transition duration-300";
    return(
        <div className = "grid grid-cols-5 gap-5 p-8 ">
            <section className ={heritageItems} style ={{ backgroundImage: `url(${folkDance})`}}>
                <button className ={`${heritageButtons} bg-[#8b1d14]`}>Folk Dance</button>
            </section>
            <section className ={heritageItems} style = {{backgroundImage : `url(${Festivals})`}}>
                <button className = {`${heritageButtons} bg-[#0e531d]`}>Festivals</button>
            </section>
            <section className ={heritageItems} style = {{backgroundImage : ` url(${Tribes})`}}>
                <button className = {`${heritageButtons} bg-[#5A6B2C]`}>Tribes</button>
            </section>
            <section className ={heritageItems} style = {{backgroundImage : `url(${Architechture})`}}>
                <button className = {`${heritageButtons} bg-[#B38728]`}>Architecture</button>
            </section>
            <section className ={heritageItems} style = {{backgroundImage : `url(${Rituals})`}}>
                <button className = {`${heritageButtons} bg-[#8b1d14]`}>Rituals</button>
            </section>

        </div>
    );
};
export default Heritagesection;