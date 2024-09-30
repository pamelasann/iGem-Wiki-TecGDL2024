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
      <div className="container-fluid">
          <h1 className="" id="header-title">{title}</h1>
      </div>
    </header>
  );
}