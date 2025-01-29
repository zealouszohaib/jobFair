const RegisteredCompanies = () => {
    const companies = [
      "7Vals", "Tajir", "Nextbridge Ltd", "Motive", "PakWheels.com", "Northbay Solutions",
      "Rolustech", "Techtimize Private Limited", "Big Entities", "HR Force International",
      "MCB Bank Limited", "NetSol Technologies", "tkxel", "Machine Learning 1 Pvt Limited",
      "Educative Axis SMC Limited", "BrainX Technologies", "Dubizzle Labs", "TBox Solutionz SMC Pvt Ltd",
      "Global Software Consulting", "STAUNCH", "NKU Technologies (Pvt) Ltd", "Coderzhunt",
      "WebNcodes (Private) Limited", "Marshub", "WhiteBox", "EWS Pvt Ltd", "Innovaxel (pvt) Ltd.",
      "Techtics AI", "Mergestack", "Focusteck", "Tech Bridge Consultancy", "D' Educationist Pvt Ltd",
      "Folium AI", "Stewart pakistan", "Devsinc", "Cinnova Technologies", "i2c Inc", "CodeFulcrum"
    ];
  
    return (
      <div className="bg-gray-900 py-8 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-white mb-6">
             Companies  that joined
          </h2>
          
          <div className="relative overflow-hidden">
            <div className="flex flex-wrap justify-center gap-4">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white 
                    transform transition-all duration-300 hover:scale-105 hover:bg-white/20
                    border border-white/20 shadow-lg hover:shadow-indigo-500/30"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default RegisteredCompanies;