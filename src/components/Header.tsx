interface HeaderProps {
  title: string;
  backgroundImage?: string;
}

export function Header({ title, backgroundImage}: HeaderProps) {
  return (
    <header 
      id="header-container"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="text-white ps-5 ms-3" id="header-title">{title}</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
