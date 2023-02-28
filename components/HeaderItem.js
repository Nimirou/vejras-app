function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-13 sm:w-20">
      <Icon className="h-8 mb-1  group-hover:animate-bounce group-hover:text-main-green" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest group-hover:text-main-green">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
