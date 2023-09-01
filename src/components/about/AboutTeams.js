import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchTeams } from "../../store/teams/teamsActions";

function AboutTeams() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const teamsRedux = useSelector((state) => state.teams.teamsData);
  console.log(teamsRedux);
  const teamLeader =
    teamsRedux && teamsRedux.team_leader && teamsRedux.team_leader
      ? teamsRedux.team_leader[0]
      : null;
  const teamsAll =
    teamsRedux && teamsRedux.teams && teamsRedux.teams
      ? teamsRedux.teams
      : null;
  console.log(teamsAll);
  useEffect(() => {
    const language = i18n.language;
    dispatch(fetchTeams({ language }));
  }, [dispatch, i18n.language]);
  return (
    <div className="max-w-[80%] mx-auto mt-36 max-lg:max-w-[95%]">
      <>
        <div className="grid grid-cols-2 pb-12 max-lg:grid-cols-1 max-lg:pb-0">
          <div className="col-span-1 flex justify-center flex-col items-center max-2xl:justify-start">
            <div className="rounded-[50%] flex justify-center border-[2px] border-black w-[300px] h-[300px] overflow-hidden">
              <img
                className="w-full"
                src={teamLeader && teamLeader.image}
                alt=""
              />
            </div>
            <div className="text-center text-white max-lg:mb-2">
              <p className="font-bold text-[28px]">
                {teamLeader && teamLeader.title}
              </p>
              <p className="text-[18px]">{teamLeader && teamLeader.major}</p>
            </div>
          </div>
          <div className="col-span-1">
            <p
              className="border-[2px] font-medium bg-[#7b7b7b66] text-white border-[#0066ff66] text-center rounded-[36px] p-5 text-[17px] leading-7"
              dangerouslySetInnerHTML={{
                __html: teamLeader && teamLeader.description,
              }}
            ></p>
          </div>
        </div>
      </>

      <div className="grid grid-cols-3 gap-8 my-12 max-2xl:grid-cols-2 max-md:grid-cols-1">
        {teamsAll && Object.keys(teamsAll).map((key) => (
          <div className="col-span-1 flex flex-col  items-center">
            <div className="w-[200px] h-[200px] rounded-[50%] border-[2px] border-black overflow-hidden">
              <img
                className="w-full h-full"
                src={teamsAll[key] && teamsAll[key].image}
                alt=""
              />
            </div>
            <div className="text-center text-white mb-2">
              <p className="font-bold text-[28px]">
                {teamsAll[key] && teamsAll[key].title}
              </p>
              <p className="text-[18px]">
                {teamsAll[key] && teamsAll[key].major}
              </p>
            </div>
            <div className="border-[2px] w-full font-medium bg-[#7b7b7b66] text-white border-[#0066ff66] text-center rounded-[36px] p-3 text-[17px] leading-7"   dangerouslySetInnerHTML={{
                  __html: teamsAll[key].description,
                }}>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutTeams;
