interface HeaderProps {
    name : string;
    role : string;
    profileImage : string;
}

export function Header({name, role, profileImage}: HeaderProps) {
  return (
    <header className="border-b-2 border-slate-200 pb-6 mb-8 mt-8">
        <div className="flex items-center gap-4">
        <img src={profileImage} className="w-30 h-30 rounded-full object-cover logo" />
          <div className="flex-grow">
            <h1 className="text-xl font-bold text-shadow-lg/30 mb-4 break-words">{name}</h1>
            <p className="text-xl font-bold">{role}</p>
          </div>
        </div>
    </header>
  );
}