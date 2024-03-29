import { useParams } from "react-router-dom";

const User = () => {
    const {usedId} = useParams();
  return (
    <>
    <div className="flex justify-center py-5">User: {usedId} </div>
    </>
  );
};

export default User;