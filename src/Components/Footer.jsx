const Footer = () => {
  return (
  <footer
    className="py-20 z-[2] sm:py-32 dark:bg-stone-950 bg-gray-400 border-t border-solid border-rose-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"
  >
    <p className="px-4 py-2 bg-white text-slate-950 font-medium">Connect with me &darr;</p>
    <div className="flex flex-col gap-4 items-center justify-center">
      <p><b className="pr-2">Email:</b> jay.gardos@outlook.com</p>
      <p>
        <b className="pr-2">Github:</b>
        <a className="dark:text-rose-400 text-rose-900" href="https://github.com/Creiwry" rel='noreferrer' target="_blank"
          >Creiwry <sup
            ><span className="text-xs scale-75 pl-0.5"
              ><i className="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]" /></span
            ></sup
          ></a
        >
      </p>
      <p>
        <b className="pr-2">LinkedIn:</b>
        <a className="dark:text-rose-400 text-rose-900" href="https://www.linkedin.com/in/jaygardos/" rel='noreferrer' target="_blank"
          >Jay Gardos <sup
            ><span className="text-xs scale-75 pl-0.5"
              ><i className="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]" /></span
            ></sup
          ></a
        >
      </p>
    </div>
  </footer>
  )
}

export { Footer }
