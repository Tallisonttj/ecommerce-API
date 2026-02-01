export const Footer = () => {
  return (
    <div className=" bg-black flex flex-col gap-4 items-center text-white p-2">
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg">Contatos:</p>
        <div className="flex gap-5">
        <a href="https://github.com/Tallisonttj" target="_blank" title="https://github.com/Tallisonttj">
           <img
            src="/assets/images/icons8-github-logo-32.png"
            alt="icone-GitHub"
          /> 
        </a>
        <a href="https://www.linkedin.com/in/tallison-tadeu-de-jesus-95965215a/" target="_blank" title="https://www.linkedin.com/in/tallison-tadeu-de-jesus-95965215a/">
           <img
            src="/assets/images/icons8-linkedin-32.png"
            alt="icone-GitHub"
          /> 
        </a>
        </div>
      </div>
      <p>by Tallison Tadeu</p>
    </div>
  );
};
