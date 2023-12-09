import { useRouter } from "next/router";
import Loading from "../components/loading";
import { useEffect, useState } from "react";
import { AlertTriangle, Mail, User, XOctagon } from "react-feather";
export default function LaboratoireInfo() {
  const router = useRouter();
  const [etablissmentInfo, setEtablissmentInfo] = useState([
    {
      name: "",
      responsables: [],
      doctorants: [],
    },
  ]);
  const etablissment = router.query.etablissment;
   // Define an asynchronous function to fetch data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/json/laboratoireInfo/laboratoire.json`);
      const data = await response.json();
      const find = await data.find((ele) => ele.name === etablissment);
      if (find) {
        const { doctorants, responsables, name } = find;
        setEtablissmentInfo([
          {
            name: name,
            responsables: responsables,
            doctorants: doctorants,
          },
        ]);
      }
    };
    fetchData();
  }, [etablissment]);
  const condition =
    etablissmentInfo[0].name;
  const condition2 =
    etablissmentInfo[0].responsables[0]?.email &&
    etablissmentInfo[0].responsables[0]?.directeur;
  return (
    <>
      <div className="container flex flex-col gap-8 mt-10 py-4 relative z-10 ">
        <Loading />
        {condition ? (
          <>
            <div className="flex flex-col ">
              <span className="lg:text-2xl text-lg  font-bold bg-[#ff9825] text-white text-center  p-3 rounded-md capitalize">
                les responsables de laboratoire {etablissmentInfo[0].name}
              </span>
            </div>
            {condition2 ? (
              <>
                <div className="flex lg:flex-row flex-col  gap-4 items-center justify-center">
                  <span className="text-2xl font-semibold flex lg:flex-row flex-col items-center gap-4">
                    <span className="text-[#ff9825]  font-bold capitalize flex items-center gap-2">
                      <User /> le directeur :{" "}
                    </span>
                    {etablissmentInfo[0]?.responsables[0]?.directeur}
                  </span>

                  <span className="text-2xl font-semibold flex lg:flex-row flex-col items-center gap-4">
                    <span className="text-[#ff9825] font-bold  capitalize flex items-center gap-2">
                      <Mail size={30} /> email :{" "}
                    </span>
                    <a
                      className="hover:text-[#4FAAFF] duration-500"
                      href={`mailto:${etablissmentInfo[0]?.responsables[0]?.email}`}
                    >
                      {etablissmentInfo[0]?.responsables[0]?.email}
                    </a>
                  </span>
                </div>
              </>
            ) : (
              <>
              <div className=" flex flex-col lg:flex-row items-center justify-center text-center  gap-2  uppercase text-2xl font-bold">
                <XOctagon size={50} className="text-red-500 animate-pulse"/> Aucune donnée de ce laboratoire
              </div>
              </>
            )}
          </>
        ) : (
          <div className=" flex flex-col lg:flex-row items-center justify-center text-center  gap-2   capitalize text-2xl font-bold">
            <AlertTriangle className="text-red-500 animate-pulse" size={50} /> Nous ne disposons actuellement pas du LABORATOIRE <span className="text-red-500 uppercase">&apos; {etablissment}&apos; </span>chez <span className=" capitalize">Innov<span className="text-[#ff9825]">TECH</span></span>
          </div>
        )}
      </div>
    </>
  );
}
