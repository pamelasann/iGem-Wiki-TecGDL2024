interface HeaderProps {
  title: string;
  lead: string;
}

export function Header({ title, lead }: HeaderProps) {
  return (
    <header id="header-container">
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="text-white ps-5 ms-3" id="header-title">{title}</h1>
            {/* <p className="lead mb-5 text-white-50">{lead}</p> */}
          </div>
        </div>
      </div>
    </header>
  );
}
