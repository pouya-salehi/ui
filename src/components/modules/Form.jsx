import { Mail, LockKeyhole } from "lucide-react";
function Form() {
  return (
    <div className="flex flex-col">
      <div className="py-4">
        <h2 className="text-center text-gray-500 font-bold text-xl">
          فرم ورود
        </h2>
        <p className="text-xs flex items-center gap-2 mt-2 text-gray-500">
          حساب کاربری ندارید؟ <span className="text-black">یکی بساز</span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-gray-100 flex items-center gap-4 rounded-md px-2">
          <Mail />
          <input type="text" className="p-2" placeholder="ایمیل..." />
        </div>
        <div className="bg-gray-100 flex items-center gap-4 rounded-md px-2">
          <LockKeyhole />
          <input type="text" className="p-2" placeholder="رمز ورود..." />
        </div>
        <p className="text-xs text-gray-500">فراموشی رمز عبور؟</p>
        
      </div>
    </div>
  );
}

export default Form;
