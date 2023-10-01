import { useEffect, useState } from "react";
import VoteForm from "./vote comps/vote_form";
import VoteDone from "./vote comps/vote_done";
import { useVoteUtil } from "../../utils/VoteUtil";
import { useNavigate } from "react-router-dom";
export default function main_vote() {
  const { userVotes, setUserVotes } = useVoteUtil();
  const [userName, setUserName] = useState(null);
 
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUserName(userData.firstname);
    setUserVotes(userData.id);
  }, [userVotes]);
  
  return (
    
    <>
      {userVotes.length === 0 ? (
        <VoteForm />
      ) : (
        <VoteDone userVotes={userVotes} userName={userName} />
      )}
    </>
  );
}
