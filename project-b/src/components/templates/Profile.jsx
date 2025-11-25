import Header from "../modules/Header";
import UserName from "../modules/UserName";
import Links from "../modules/Links";
import Navigation from "../modules/Navigation";
function Profile() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-2xs rounded-md p-3 shadow flex flex-col gap-4 bg-[#fcfcfc]">
        <div className="bg-white">
          <Header />
          <h1 className="text-center">حساب کاربری</h1>
        </div>
        <UserName />
        <Links />
        <Navigation />
        <div className="flex justify-center">
          <div className="bg-black h-1 w-30 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
